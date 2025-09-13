from __future__ import annotations

from typing import Optional, List

try:
    import easyocr  # type: ignore
    _EASY_AVAILABLE = True
except Exception:
    easyocr = None  # type: ignore
    _EASY_AVAILABLE = False

_reader = None


def _init_reader():
    global _reader
    if not _EASY_AVAILABLE:
        return None
    if _reader is not None:
        return _reader
    try:
        _reader = easyocr.Reader(["en"], gpu=False)
    except Exception:
        _reader = None
    return _reader


def ocr_extract(pil_image) -> Optional[List[dict]]:
    reader = _init_reader()
    if not reader:
        return None
    try:
        # result: [ [bbox, text, conf], ... ]
        res = reader.readtext(pil_image)
        items = []
        for r in res:
            bbox, text, conf = r
            # bbox as list of 4 points: [[x1,y1],[x2,y2],[x3,y3],[x4,y4]]
            xs = [p[0] for p in bbox]
            ys = [p[1] for p in bbox]
            x, y, w, h = min(xs), min(ys), max(xs) - min(xs), max(ys) - min(ys)
            items.append({"content": text, "bbox": [float(x), float(y), float(w), float(h)], "conf": float(conf)})
        return items
    except Exception:
        return None


