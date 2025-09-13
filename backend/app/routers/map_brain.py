from __future__ import annotations

from fastapi import APIRouter

from ..schemas import MapBrainRequest, MapBrainResponse
from ..services.orchestrator import ensure_jpeg_base64
from ..services.mapping_openai import map_brain_regions_with_openai


router = APIRouter()


@router.post("", response_model=MapBrainResponse)
def map_brain(req: MapBrainRequest) -> MapBrainResponse:
    jpeg_b64 = ensure_jpeg_base64(req.image_base64, req.image_mime)
    scores = map_brain_regions_with_openai(req.scene_json, jpeg_b64) or {}
    return MapBrainResponse(brain_scores_100=scores)


