from __future__ import annotations

from fastapi import APIRouter, HTTPException

from ..schemas import AggregateBrainRequest, AggregateBrainResponse
from ..services.mapping_openai import map_brain_regions_with_openai, aggregate_brain_with_openai
from ..services.orchestrator import ensure_jpeg_base64


router = APIRouter()


@router.post("", response_model=AggregateBrainResponse)
def aggregate(req: AggregateBrainRequest) -> AggregateBrainResponse:
    per_scores: list[dict[str,int]] = []
    hours: list[float] = []
    for item in req.items:
        jpeg_b64 = ensure_jpeg_base64(item.image_base64, item.image_mime)
        # scene may be None; we only need it to seed nouns, but BLIP-only path allows None
        scene = item.scene_json
        # If scene is None, we can synthesize a minimal SceneJSON-like context; better to accept None in scorer
        scores = map_brain_regions_with_openai(scene, jpeg_b64, float(item.hours) if item.hours is not None else 1.0) or {}
        per_scores.append(scores)
        hours.append(float(item.hours) if item.hours is not None else 1.0)
    agg = aggregate_brain_with_openai(per_scores, hours)
    if agg is None:
        # Explicitly error instead of fallback to avoid hiding issues
        raise HTTPException(status_code=502, detail="OpenAI aggregation failed")
    aggregate, under, summary = agg
    return AggregateBrainResponse(per_image_brain_scores_100=per_scores, aggregate_scores_100=aggregate, underutilized_regions=under, summary=summary)


