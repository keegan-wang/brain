from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from .db import init_db
from .services.warmup import prefetch_all, required_ready
from .routers import ingest, analyze, summary, feedback, map_domains, ws_stream, map_brain, map_all, map_aggregate


app = FastAPI(title="CortexCam API", version="0.1")


READINESS: dict | None = None


@app.on_event("startup")
def on_startup() -> None:
    global READINESS
    init_db()
    READINESS = prefetch_all()


app.include_router(ingest.router, prefix="/ingest", tags=["ingest"])
app.include_router(analyze.router, prefix="/analyze", tags=["analyze"])
app.include_router(map_domains.router, prefix="/map/domains", tags=["mapping"])
app.include_router(map_brain.router, prefix="/map/brain", tags=["mapping"])
app.include_router(map_all.router, prefix="/map/all", tags=["mapping"])
app.include_router(map_aggregate.router, prefix="/map/aggregate", tags=["mapping"])
app.include_router(summary.router, prefix="/summary", tags=["summary"])
app.include_router(feedback.router, prefix="/feedback", tags=["feedback"])
app.include_router(ws_stream.router, tags=["ws"])

# Static frontend
app.mount("/static", StaticFiles(directory="backend/app/static"), name="static")


@app.get("/")
def root() -> FileResponse:
    # Gate UI until required models are ready
    global READINESS
    if READINESS is None:
        READINESS = {}
    if not required_ready(READINESS):
        return FileResponse("backend/app/static/booting.html")
    return FileResponse("backend/app/static/index.html")


# Catch-all route for React Router (SPA)
@app.get("/{full_path:path}")
def serve_spa(full_path: str) -> FileResponse:
    # Only serve SPA for non-API routes
    if full_path.startswith(("api/", "docs", "redoc", "openapi.json", "static/", "ws/",
                           "analyze/", "map/", "summary/", "feedback/", "ingest/", "ready")):
        raise HTTPException(status_code=404, detail="Not found")

    # Gate UI until required models are ready
    global READINESS
    if READINESS is None:
        READINESS = {}
    if not required_ready(READINESS):
        return FileResponse("backend/app/static/booting.html")
    return FileResponse("backend/app/static/index.html")


@app.get("/ready")
def ready() -> dict:
    global READINESS
    # Re-check readiness each call to allow late model initialization
    latest = prefetch_all()
    READINESS = latest
    return {"ready": required_ready(latest), "status": latest}


