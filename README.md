## CortexCam (v0.1) — Backend & Docs

This repo contains the product engineering plan and a minimal FastAPI backend scaffold for CortexCam (v0.1).

Important note: CortexCam provides wellness/reflective insights, not medical diagnosis. No claims about neurological disorders or clinical brain "activation."

### Project Layout
- `docs/` — Product engineering write-up and references
- `backend/` — FastAPI app (MVP scaffold)
  - Serves a minimal static UI at `/` (HTML/JS) to exercise endpoints

### Quickstart
1) Create a virtual environment (Python 3.10+ recommended):

```bash
python3 -m venv .venv && source .venv/bin/activate
```

2) Install dependencies:

```bash
pip install -r requirements.txt
```

3) Run the API:

```bash
uvicorn backend.app.main:app --reload
```

The API will start on `http://127.0.0.1:8000`. Visit `/docs` for interactive Swagger UI.
Open `http://127.0.0.1:8000/` for the demo UI.

### Environment Variables
Copy `env.example` to `.env` and adjust as needed (optional):

```bash
cp env.example .env
Vision (BLIP-only)
- BLIP captioning is enabled by default (`CORTEXCAM_HF_ENABLE=1`).
- Install deps: `pip install transformers torch` (or follow PyTorch install per your platform/GPU).
- Configure model via `CORTEXCAM_HF_CAPTION_MODEL` (defaults to `Salesforce/blip-image-captioning-base`).
- If unavailable or disabled, a short stub caption is used.
```

### API Surfaces (MVP)
- `POST /ingest/photo` — Register a capture (supports base64 body for now)
- `POST /analyze/scene` — Run orchestrator (redact → BLIP caption → scene JSON)
- `POST /map/domains` — Map scene JSON to cognitive domains (rules baseline; OpenAI stub)
- `GET /summary/daily?date=YYYY-MM-DD` — Simple daily aggregation
- `POST /feedback` — Record thumbs/notes/adjustments

### Notes
- Vision uses BLIP captioning (default-enabled); object detection and OCR are not used in this build. Mapping uses rules baseline; OpenAI path is optional.
- SQLite is used for quick persistence; tables auto-create on startup.

### License & Safety
This prototype is for internal exploration. Ensure privacy-preserving defaults and avoid clinical framing.


