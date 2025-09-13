from __future__ import annotations

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..schemas import MapDomainsRequest, MapDomainsResponse
from ..services.mapping_rules import rules_domain
from ..services.mapping_openai import map_with_openai
from ..db import get_db
from ..models import DomainScores as DomainScoresModel


router = APIRouter()


@router.post("", response_model=MapDomainsResponse)
def map_domains(req: MapDomainsRequest, db: Session = Depends(get_db)) -> MapDomainsResponse:
    # Try OpenAI first if enabled, else rules
    mapped = map_with_openai(req.scene_json) or rules_domain(req.scene_json)
    resp = MapDomainsResponse(**mapped.model_dump())
    # Upsert domain scores per photo
    existing = db.query(DomainScoresModel).filter(DomainScoresModel.photo_id == req.scene_json.photo_id).one_or_none()
    if existing:
        existing.VIS = resp.domain_scores.VIS
        existing.LAN = resp.domain_scores.LAN
        existing.SOC = resp.domain_scores.SOC
        existing.MOT = resp.domain_scores.MOT
        existing.EXEC = resp.domain_scores.EXEC
        existing.REW = resp.domain_scores.REW
        existing.confidence = resp.confidence
    else:
        ds = DomainScoresModel(
            photo_id=req.scene_json.photo_id,
            VIS=resp.domain_scores.VIS,
            LAN=resp.domain_scores.LAN,
            SOC=resp.domain_scores.SOC,
            MOT=resp.domain_scores.MOT,
            EXEC=resp.domain_scores.EXEC,
            REW=resp.domain_scores.REW,
            confidence=resp.confidence,
        )
        db.add(ds)
    db.commit()
    return resp


