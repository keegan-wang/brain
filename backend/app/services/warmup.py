from __future__ import annotations

import os
from typing import Dict

from .hf import _init_caption_pipeline  # type: ignore


def prefetch_all() -> Dict[str, bool]:
    """Initialize optional pipelines to trigger one-time model downloads.

    Returns a dict indicating which components initialized successfully.
    """
    results: Dict[str, bool] = {
        "caption": False,
    }
    # Caption (BLIP)
    try:
        results["caption"] = _init_caption_pipeline() is not None
    except Exception:
        results["caption"] = False
    return results


def required_ready(results: Dict[str, bool]) -> bool:
    """Return True if BLIP captioning is initialized when enabled."""
    need_caption = os.getenv("CORTEXCAM_HF_ENABLE", "1") in {"1", "true", "True"}
    if need_caption and not results.get("caption"):
        return False
    return True


