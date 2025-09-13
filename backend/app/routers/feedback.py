from __future__ import annotations

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..schemas import FeedbackRequest
from ..db import get_db
from ..models import Feedback


router = APIRouter()


@router.post("", status_code=204)
def post_feedback(req: FeedbackRequest, db: Session = Depends(get_db)):
    fb = Feedback(
        scope=req.scope,
        target_id=req.target_id,
        adjustments=req.adjustments,
        note=req.note,
        thumbs=req.thumbs,
    )
    db.add(fb)
    db.commit()
    return None


