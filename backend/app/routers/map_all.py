from __future__ import annotations

import logging
from fastapi import APIRouter, HTTPException

logger = logging.getLogger(__name__)

from ..schemas import MapAllRequest, MapAllResponse
from ..services.mapping_openai import map_with_openai, map_brain_regions_with_openai, BRAIN_REGIONS_LIST
from ..services.orchestrator import ensure_jpeg_base64
from ..config import settings


router = APIRouter()


@router.post("", response_model=MapAllResponse)
def map_all(req: MapAllRequest) -> MapAllResponse:
    # Fast preflight checks for clearer errors
    if not settings.OPENAI_API_KEY:
        raise HTTPException(status_code=500, detail="Missing OPENAI_API_KEY. Check your .env file in the project root.")
    model = settings.CORTEXCAM_OPENAI_MODEL

    jpeg_b64 = ensure_jpeg_base64(req.image_base64, req.image_mime)
    # Step 1: domain mapping via OpenAI (use image too if available)
    mapping = map_with_openai(req.scene_json, jpeg_b64)
    if mapping is None:
        logger.error(f"OpenAI domain mapping failed for scene '{req.scene_json.caption}' (model={model}, image={'yes' if bool(jpeg_b64) else 'no'}).")
        raise HTTPException(status_code=502, detail=f"OpenAI domain mapping failed (model={model})")

    # Step 2: brain regions via OpenAI (image + scene context)
    brain = map_brain_regions_with_openai(req.scene_json, jpeg_b64, req.hours)
    if brain is None:
        logger.error(f"OpenAI brain mapping failed for scene '{req.scene_json.caption}' (model={model}).")
        raise HTTPException(status_code=502, detail=f"OpenAI brain mapping failed (model={model})")

    return MapAllResponse(mapping=mapping, domain_scores_100={
        "VIS": int(mapping.domain_scores.VIS*100),
        "LAN": int(mapping.domain_scores.LAN*100),
        "SOC": int(mapping.domain_scores.SOC*100),
        "MOT": int(mapping.domain_scores.MOT*100),
        "EXEC": int(mapping.domain_scores.EXEC*100),
        "REW": int(mapping.domain_scores.REW*100),
    }, brain_scores_100=brain)


