from __future__ import annotations

from datetime import datetime
import uuid
from typing import Any
import base64
from io import BytesIO
from PIL import Image
try:
    from pillow_heif import register_heif_opener  # type: ignore
    register_heif_opener()
except Exception:
    register_heif_opener = None  # type: ignore

from ..schemas import (
    AnalyzeSceneRequest,
    SceneJSON,
    DeviceMeta,
    PrivacyInfo,
    EgocentricHints,
    EnvironmentInfo,
)
from .hf import caption_image


def ensure_jpeg_base64(image_b64: str | None, image_mime: str | None) -> str | None:
    if not image_b64:
        return None
    if (image_mime or "").lower() in {"image/jpeg", "image/jpg"}:
        return image_b64
    try:
        raw = base64.b64decode(image_b64)
        img = Image.open(BytesIO(raw))
        buf = BytesIO()
        img.convert("RGB").save(buf, format="JPEG", quality=90)
        return base64.b64encode(buf.getvalue()).decode("ascii")
    except Exception:
        return image_b64


def redact_image_stub(image_b64: str | None, policy: dict[str, Any] | None) -> str | None:
    return image_b64


def blip_caption_stub() -> str:
    return "A person working on a laptop with notes on paper nearby."


def extract_noun_phrases_stub(caption: str) -> list[str]:
    tokens = [token for token in caption.lower().replace(".", "").split() if token.isalpha()]
    # naive filter to likely-nouns by excluding very common stopwords
    stop = {"a","the","on","with","and","near","in","of","to","from","for","at","by"}
    return [t for t in tokens if t not in stop]


def _empty_objects() -> list:
    return []


def _empty_text() -> list:
    return []


def ego_priors_stub() -> EgocentricHints:
    return EgocentricHints(is_first_person=True, likely_focus="laptop_screen", screen_usage=True)


def build_scene_json(photo_id: str, device_meta: DeviceMeta | None, pil_image: Image.Image | None = None) -> SceneJSON:
    caption = caption_image(pil_image) if pil_image is not None else None
    if not caption:
        caption = blip_caption_stub()
    ego = ego_priors_stub()
    scene = SceneJSON(
        photo_id=photo_id,
        ts=datetime.utcnow(),
        device=device_meta or DeviceMeta(platform="ios"),
        privacy=PrivacyInfo(faces_count=0, faces_blurred=True, pii_redacted=True),
        caption=caption,
        objects=_empty_objects(),
        text=_empty_text(),
        egocentric=ego,
        environment=EnvironmentInfo(location_hint=None, lighting=None, noise_level_hint=None),
    )
    return scene


def analyze_scene(req: AnalyzeSceneRequest) -> SceneJSON:
    photo_id = req.photo_id or str(uuid.uuid4())
    jpeg_b64 = ensure_jpeg_base64(req.image_base64, req.image_mime)
    _ = redact_image_stub(jpeg_b64, policy=None)
    pil = None
    if jpeg_b64:
        try:
            raw = base64.b64decode(jpeg_b64)
            pil = Image.open(BytesIO(raw))
        except Exception:
            pil = None
    return build_scene_json(photo_id, req.device_meta, pil)


