from __future__ import annotations

import os
from typing import Optional, List
import torch

try:
    from transformers import pipeline  # type: ignore
    _TRANSFORMERS_AVAILABLE = True
except Exception:
    pipeline = None  # type: ignore
    _TRANSFORMERS_AVAILABLE = False


_HF_ENABLED = os.getenv("CORTEXCAM_HF_ENABLE", "1") in {"1", "true", "True"}
_HF_CAPTION_MODEL = os.getenv("CORTEXCAM_HF_CAPTION_MODEL", "Salesforce/blip-image-captioning-base")
_HF_OWL_ENABLE = False
_HF_OWL_MODEL = ""
_HF_OWL_FORCE = False

_caption_pipe = None
_owl_pipe = None


def _init_caption_pipeline():
    global _caption_pipe
    if not _HF_ENABLED or not _TRANSFORMERS_AVAILABLE:
        return None
    if _caption_pipe is not None:
        return _caption_pipe
    try:
        device_str = os.getenv("CORTEXCAM_TORCH_DEVICE", "cpu").lower()
        kwargs = {}
        if device_str == "cpu":
            kwargs["device"] = -1
        elif device_str == "cuda" and torch.cuda.is_available():
            kwargs["device"] = 0
        elif device_str == "mps" and torch.backends.mps.is_available():
            kwargs["device"] = torch.device("mps")
        _caption_pipe = pipeline("image-to-text", model=_HF_CAPTION_MODEL, **kwargs)
    except Exception:
        _caption_pipe = None
    return _caption_pipe


def caption_image(pil_image) -> Optional[str]:
    pipe = _init_caption_pipeline()
    if not pipe:
        return None
    try:
        result = pipe(pil_image)
        if isinstance(result, list) and result:
            # BLIP-style returns [{"generated_text": "..."}]
            item = result[0]
            text = item.get("generated_text") or item.get("caption")
            return text or None
        return None
    except Exception:
        return None


def _init_owl_pipeline():
    global _owl_pipe
    if not _HF_OWL_ENABLE or not _TRANSFORMERS_AVAILABLE:
        return None
    if _owl_pipe is not None:
        return _owl_pipe
    try:
        # device selection via env (cpu by default)
        device_str = os.getenv("CORTEXCAM_TORCH_DEVICE", "cpu").lower()
        kwargs = {}
        if device_str == "cpu":
            kwargs["device"] = -1
        elif device_str == "cuda" and torch.cuda.is_available():
            kwargs["device"] = 0
        elif device_str == "mps" and torch.backends.mps.is_available():
            kwargs["device"] = torch.device("mps")
        _owl_pipe = pipeline("zero-shot-object-detection", model=_HF_OWL_MODEL, **kwargs)
    except Exception:
        _owl_pipe = None
    return _owl_pipe


def detect_objects_owl(pil_image, labels: List[str]) -> Optional[list]:
    pipe = _init_owl_pipeline()
    if not pipe:
        if _HF_OWL_FORCE:
            raise RuntimeError("OWL-ViT requested but transformers pipeline unavailable")
        return None
    try:
        candidates = list(dict.fromkeys(labels)) if labels else []
        if not candidates:
            candidates = [
                "person","laptop","phone","computer","screen","keyboard","mouse","book","document",
                "paper","pen","notebook","whiteboard","bottle","coffee","cup","steering wheel","car",
                "bicycle","fork","spoon","knife","plate","chair","table","monitor","tv","backpack",
            ]
        results = pipe(pil_image, candidate_labels=candidates)
        # Normalize
        detections = []
        for r in results:
            box = r.get("box", {})
            detections.append({
                "label": r.get("label"),
                "open_vocab": r.get("label"),
                "bbox": [float(box.get("xmin",0)), float(box.get("ymin",0)), float(box.get("xmax",0))-float(box.get("xmin",0)), float(box.get("ymax",0))-float(box.get("ymin",0))],
                "conf": float(r.get("score", 0)),
                "attrs": [],
            })
        return detections
    except Exception:
        return None


