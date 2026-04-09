# Configuration module that loads environment variables from .env file
from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    """Load configuration from environment variables."""
    
    MYSQL_USER: str
    MYSQL_PASSWORD: str
    MYSQL_ROOT_PASSWORD: str
    MYSQL_HOST: str
    MYSQL_PORT: int
    MYSQL_DB: str
    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    ADMIN_EMAIL: str
    ADMIN_PASSWORD: str
    
    class Config:
        env_file = ".env"


@lru_cache()
def get_settings() -> Settings:
    """Cache settings globally."""
    return Settings()


def get_database_url() -> str:
    """Construct MySQL connection URL."""
    settings = get_settings()
    return f"mysql+pymysql://{settings.MYSQL_USER}:{settings.MYSQL_PASSWORD}@{settings.MYSQL_HOST}:{settings.MYSQL_PORT}/{settings.MYSQL_DB}"
