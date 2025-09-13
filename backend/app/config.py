import logging
import os
from pydantic_settings import BaseSettings, SettingsConfigDict

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class Settings(BaseSettings):
    # Load settings from a .env file
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    # OpenAI settings
    OPENAI_API_KEY: str = ""
    CORTEXCAM_OPENAI_MODEL: str = "gpt-4o"
    CORTEXCAM_OPENAI_FORCE: bool = False

    # Database settings
    DATABASE_URL: str = "sqlite:///./cortexcam.db"


# --- Diagnostic Logging ---
# This code runs once when the application starts.
cwd = os.getcwd()
env_file_path = os.path.join(cwd, ".env")

logger.info("--- Configuration Loading ---")
logger.info(f"Current Working Directory: {cwd}")
logger.info(f"Expecting .env file at: {env_file_path}")

if os.path.exists(env_file_path):
    logger.info("✅ .env file found.")
else:
    logger.warning("⚠️ .env file NOT FOUND. Relying on environment variables.")

# Create a single settings instance to be used across the application
settings = Settings()

# Log the loaded key (partially masked)
loaded_key = settings.OPENAI_API_KEY
if loaded_key:
    masked_key = f"{loaded_key[:5]}...{loaded_key[-4:]}"
    logger.info(f"✅ OpenAI API Key loaded successfully. Value: {masked_key}")
else:
    logger.error("❌ CRITICAL: OpenAI API Key IS NOT LOADED.")
    logger.error("   Please ensure an .env file exists in the root directory (brain/)")
    logger.error("   OR that OPENAI_API_KEY is exported as an environment variable.")
logger.info("---------------------------")
