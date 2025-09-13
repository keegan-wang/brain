from __future__ import annotations

from datetime import date as date_type, datetime
from fastapi import APIRouter, Query, Depends
from sqlalchemy import select, func
from sqlalchemy.orm import Session

from ..schemas import DailySummaryResponse, DomainScores
from ..db import get_db
from ..models import Photo, DomainScores as DomainScoresModel


router = APIRouter()


@router.get("/daily", response_model=DailySummaryResponse)
def get_daily_summary(
    date: date_type = Query(..., description="YYYY-MM-DD"),
    user_id: str = Query("demo"),
    db: Session = Depends(get_db),
):
    start = datetime.combine(date, datetime.min.time())
    end = datetime.combine(date, datetime.max.time())
    q = (
        select(
            func.avg(DomainScoresModel.VIS),
            func.avg(DomainScoresModel.LAN),
            func.avg(DomainScoresModel.SOC),
            func.avg(DomainScoresModel.MOT),
            func.avg(DomainScoresModel.EXEC),
            func.avg(DomainScoresModel.REW),
            func.max(DomainScoresModel.REW),
            func.count(DomainScoresModel.id),
        )
        .join(Photo, Photo.id == DomainScoresModel.photo_id)
        .where(Photo.user_id == user_id)
        .where(Photo.ts >= start)
        .where(Photo.ts <= end)
    )
    row = db.execute(q).one()
    means = DomainScores(
        VIS=row[0] or 0.0,
        LAN=row[1] or 0.0,
        SOC=row[2] or 0.0,
        MOT=row[3] or 0.0,
        EXEC=row[4] or 0.0,
        REW=row[5] or 0.0,
    )
    rew_peak = row[6] or 0.0
    photos_count = row[7] or 0
    return DailySummaryResponse(
        date=date,
        user_id=user_id,
        means=means,
        rew_peak=rew_peak,
        photos_count=photos_count,
    )


