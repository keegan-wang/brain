from __future__ import annotations

import json
from fastapi import APIRouter, WebSocket
import asyncio
from starlette.concurrency import run_in_threadpool
from sqlalchemy.orm import Session

from ..db import SessionLocal
from ..schemas import DeviceMeta
from ..models import User, Photo, Scene, DomainScores as DomainScoresModel
from ..services.orchestrator import ensure_jpeg_base64, redact_image_stub
from ..services.orchestrator import build_scene_json
from ..services.mapping_openai import map_with_openai, map_brain_regions_with_openai
from ..services.mapping_rules import rules_domain
import base64
from io import BytesIO
from PIL import Image


router = APIRouter()


async def _send(ws: WebSocket, event: dict) -> None:
    await ws.send_text(json.dumps(event))


@router.websocket("/ws/analyze")
async def analyze_stream(ws: WebSocket):
    await ws.accept()
    db: Session | None = None
    try:
        # heartbeat to keep connection alive during long downloads
        async def _hb():
            try:
                while True:
                    await asyncio.sleep(5)
                    await _send(ws, {"type": "status", "stage": "heartbeat", "detail": "alive"})
            except Exception:
                return

        hb_task = asyncio.create_task(_hb())
        await _send(ws, {"type": "status", "stage": "ready", "detail": "Connected"})

        init_msg = await ws.receive_text()
        payload = json.loads(init_msg)
        user_id = payload.get("user_id") or "demo"
        device_meta = payload.get("device_meta") or {"platform": "ios"}
        image_b64 = payload.get("image_base64")
        image_mime = payload.get("image_mime")

        await _send(ws, {"type": "status", "stage": "init", "detail": "Starting analysis"})

        db = SessionLocal()
        if not db.get(User, user_id):
            db.add(User(id=user_id))
            db.commit()

        await _send(ws, {"type": "status", "stage": "redact", "detail": "Converting/Redacting image"})
        jpeg_b64 = ensure_jpeg_base64(image_b64, image_mime)
        _ = redact_image_stub(jpeg_b64, policy=None)
        pil = None
        if jpeg_b64:
            try:
                raw = base64.b64decode(jpeg_b64)
                pil = Image.open(BytesIO(raw))
            except Exception:
                pil = None

        # Build scene JSON with real/optional models
        await _send(ws, {"type": "status", "stage": "caption", "detail": "Captioning"})
        # Offload heavy model work to threadpool to avoid blocking WS
        scene = await run_in_threadpool(lambda: build_scene_json(photo_id=payload.get("photo_id") or user_id, device_meta=DeviceMeta(**device_meta), pil_image=pil))
        # Report engines used (BLIP-only)
        stub_caption = "A person working on a laptop with notes on paper nearby."
        caption_engine = "blip" if scene.caption and scene.caption != stub_caption else "stub"
        await _send(ws, {"type": "status", "stage": "engines", "detail": {"caption": caption_engine}})
        # Ensure photo and scene persistence
        photo = db.get(Photo, scene.photo_id)
        if not photo:
            db.add(Photo(id=scene.photo_id, user_id=user_id, ts=scene.ts, redacted=True))
            db.commit()
        await _send(ws, {"type": "status", "stage": "persist_scene", "detail": "Saving scene"})
        existing = db.get(Scene, scene.photo_id)
        if existing:
            existing.scene_json = scene.model_dump(mode="json")
            existing.version = "v0.1"
        else:
            db.add(Scene(photo_id=scene.photo_id, scene_json=scene.model_dump(mode="json"), version="v0.1", vision_conf=None))
        db.commit()

        # Mapping
        await _send(ws, {"type": "status", "stage": "mapping", "detail": "Mapping to domains (OpenAI → rules)"})
        mapped = await run_in_threadpool(lambda: map_with_openai(scene) or rules_domain(scene))

        # Brain-region scoring (1..100) using image + context
        await _send(ws, {"type": "status", "stage": "brain", "detail": "Scoring brain regions (OpenAI)"})
        brain_scores = None
        if jpeg_b64:
            brain_scores = await run_in_threadpool(lambda: map_brain_regions_with_openai(scene, jpeg_b64))

        # Upsert domain scores
        await _send(ws, {"type": "status", "stage": "persist_scores", "detail": "Saving scores"})
        ds_existing = db.query(DomainScoresModel).filter(DomainScoresModel.photo_id == scene.photo_id).one_or_none()
        if ds_existing:
            ds_existing.VIS = mapped.domain_scores.VIS
            ds_existing.LAN = mapped.domain_scores.LAN
            ds_existing.SOC = mapped.domain_scores.SOC
            ds_existing.MOT = mapped.domain_scores.MOT
            ds_existing.EXEC = mapped.domain_scores.EXEC
            ds_existing.REW = mapped.domain_scores.REW
            ds_existing.confidence = mapped.confidence
        else:
            db.add(DomainScoresModel(
                photo_id=scene.photo_id,
                VIS=mapped.domain_scores.VIS,
                LAN=mapped.domain_scores.LAN,
                SOC=mapped.domain_scores.SOC,
                MOT=mapped.domain_scores.MOT,
                EXEC=mapped.domain_scores.EXEC,
                REW=mapped.domain_scores.REW,
                confidence=mapped.confidence,
            ))
        db.commit()

        await _send(ws, {"type": "result", "scene_json": scene.model_dump(mode="json"), "mapping": mapped.model_dump(), "brain_scores_100": brain_scores})
        hb_task.cancel()
        await ws.close()
    except Exception as e:
        try:
            await _send(ws, {"type": "error", "message": str(e)})
            await ws.close()
        except Exception:
            pass
    finally:
        if db is not None:
            db.close()


