"""
Cache management endpoints for image analysis caching.
"""
import logging
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import Optional

from ..services.cache_service import clear_image_cache, get_cache_stats
from ..db import get_db
from pydantic import BaseModel

logger = logging.getLogger(__name__)

router = APIRouter()


class ClearCacheRequest(BaseModel):
    image_hash: Optional[str] = None  # If provided, clear only this image
    

class ClearCacheResponse(BaseModel):
    cleared_entries: int
    message: str


class CacheStatsResponse(BaseModel):
    total_cached_images: int
    cache_enabled: bool
    error: Optional[str] = None


@router.delete("/clear", response_model=ClearCacheResponse)
def clear_cache(req: ClearCacheRequest = ClearCacheRequest(), db: Session = Depends(get_db)):
    """Clear image analysis cache."""
    try:
        cleared_entries = clear_image_cache(db, req.image_hash)
        
        if req.image_hash:
            message = f"Cleared cache for specific image hash: {req.image_hash[:12]}..."
        else:
            message = f"Cleared entire image analysis cache"
            
        logger.info(f"Cache cleared: {message}")
        
        return ClearCacheResponse(
            cleared_entries=cleared_entries,
            message=message
        )
    except Exception as e:
        logger.error(f"Error clearing cache: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to clear cache: {str(e)}")


@router.get("/stats", response_model=CacheStatsResponse)
def get_cache_statistics(db: Session = Depends(get_db)):
    """Get cache statistics."""
    try:
        stats = get_cache_stats(db)
        return CacheStatsResponse(**stats)
    except Exception as e:
        logger.error(f"Error getting cache stats: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to get cache stats: {str(e)}")
