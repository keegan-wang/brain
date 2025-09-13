from __future__ import annotations

import uuid
from datetime import datetime
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..db import get_db
from ..models import Photo, User
from ..schemas import IngestPhotoRequest, IngestPhotoResponse


router = APIRouter()


@router.post("/photo", response_model=IngestPhotoResponse)
def ingest_photo(req: IngestPhotoRequest, db: Session = Depends(get_db)):
    if not db.get(User, req.user_id):
        db.add(User(id=req.user_id))
        db.commit()
    photo_id = str(uuid.uuid4())
    photo = Photo(id=photo_id, user_id=req.user_id, ts=datetime.utcnow(), redacted=True)
    db.add(photo)
    db.commit()
    return IngestPhotoResponse(photo_id=photo_id)


