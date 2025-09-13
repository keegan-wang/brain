from __future__ import annotations

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..schemas import AnalyzeSceneRequest, AnalyzeSceneResponse
from ..services.orchestrator import analyze_scene
from ..db import get_db
from ..models import Scene, Photo, User


router = APIRouter()


@router.post("/scene", response_model=AnalyzeSceneResponse)
def analyze_scene_endpoint(req: AnalyzeSceneRequest, db: Session = Depends(get_db)) -> AnalyzeSceneResponse:
    # Ensure user exists (default to 'demo' if not provided)
    user_id = req.user_id or "demo"
    if not db.get(User, user_id):
        db.add(User(id=user_id))
        db.commit()

    scene = analyze_scene(req)

    # Ensure photo exists and is associated to user
    photo = db.get(Photo, scene.photo_id)
    if not photo:
        db.add(Photo(id=scene.photo_id, user_id=user_id, ts=scene.ts, redacted=True))
        db.commit()
    existing = db.get(Scene, scene.photo_id)
    payload = scene.model_dump(mode="json")
    if existing:
        existing.scene_json = payload
        existing.version = "v0.1"
    else:
        db.add(Scene(photo_id=scene.photo_id, scene_json=payload, version="v0.1", vision_conf=None))
    db.commit()
    return AnalyzeSceneResponse(scene_json=scene)


