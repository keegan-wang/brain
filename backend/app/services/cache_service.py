"""
Service for managing image analysis caching to avoid re-processing identical images.
"""
import hashlib
import logging
from typing import Optional, Dict, Any
from sqlalchemy.orm import Session
from ..models import ImageAnalysisCache
from ..schemas import SceneJSON

logger = logging.getLogger("cortexcam.cache")


def calculate_image_hash(image_data: bytes) -> str:
    """Calculate SHA256 hash of image data for caching."""
    return hashlib.sha256(image_data).hexdigest()


def get_cached_analysis(db: Session, image_hash: str) -> Optional[Dict[str, Any]]:
    """
    Retrieve cached analysis for an image hash.
    
    Returns:
        Dict with scene_json, brain_scores_100, and mapping_output if found, None otherwise
    """
    try:
        cache_entry = db.query(ImageAnalysisCache).filter(
            ImageAnalysisCache.image_hash == image_hash
        ).first()
        
        if cache_entry:
            logger.info(f"Cache HIT for image hash {image_hash[:12]}...")
            return {
                "scene_json": cache_entry.scene_json,
                "brain_scores_100": cache_entry.brain_scores_100,
                "mapping_output": cache_entry.mapping_output,
                "cached": True,
                "cache_created_at": cache_entry.created_at.isoformat()
            }
        else:
            logger.info(f"Cache MISS for image hash {image_hash[:12]}...")
            return None
            
    except Exception as e:
        logger.error(f"Error retrieving cache for hash {image_hash[:12]}...: {e}")
        return None


def save_analysis_to_cache(
    db: Session,
    image_hash: str,
    scene_json: Dict[str, Any],
    brain_scores_100: Dict[str, Any],
    mapping_output: Optional[Dict[str, Any]] = None
) -> bool:
    """
    Save analysis results to cache.
    
    Returns:
        True if saved successfully, False otherwise
    """
    try:
        # Check if entry already exists
        existing = db.query(ImageAnalysisCache).filter(
            ImageAnalysisCache.image_hash == image_hash
        ).first()
        
        if existing:
            # Update existing entry
            existing.scene_json = scene_json
            existing.brain_scores_100 = brain_scores_100
            existing.mapping_output = mapping_output
            logger.info(f"Updated cache for image hash {image_hash[:12]}...")
        else:
            # Create new entry
            cache_entry = ImageAnalysisCache(
                image_hash=image_hash,
                scene_json=scene_json,
                brain_scores_100=brain_scores_100,
                mapping_output=mapping_output
            )
            db.add(cache_entry)
            logger.info(f"Saved new cache entry for image hash {image_hash[:12]}...")
        
        db.commit()
        return True
        
    except Exception as e:
        logger.error(f"Error saving cache for hash {image_hash[:12]}...: {e}")
        db.rollback()
        return False


def clear_image_cache(db: Session, image_hash: Optional[str] = None) -> int:
    """
    Clear image cache entries.
    
    Args:
        image_hash: If provided, only clear this specific entry. If None, clear all.
        
    Returns:
        Number of entries deleted
    """
    try:
        if image_hash:
            deleted = db.query(ImageAnalysisCache).filter(
                ImageAnalysisCache.image_hash == image_hash
            ).delete()
            logger.info(f"Cleared cache for image hash {image_hash[:12]}...")
        else:
            deleted = db.query(ImageAnalysisCache).delete()
            logger.info("Cleared entire image analysis cache")
        
        db.commit()
        return deleted
        
    except Exception as e:
        logger.error(f"Error clearing cache: {e}")
        db.rollback()
        return 0


def get_cache_stats(db: Session) -> Dict[str, Any]:
    """Get cache statistics."""
    try:
        total_entries = db.query(ImageAnalysisCache).count()
        return {
            "total_cached_images": total_entries,
            "cache_enabled": True
        }
    except Exception as e:
        logger.error(f"Error getting cache stats: {e}")
        return {
            "total_cached_images": 0,
            "cache_enabled": False,
            "error": str(e)
        }
