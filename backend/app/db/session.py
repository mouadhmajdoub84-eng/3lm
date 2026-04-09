# Database session and engine configuration (synchronous SQLAlchemy)
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from app.core.config import get_database_url

# Create engine with connection pooling
engine = create_engine(
    get_database_url(),
    pool_pre_ping=True,  # Test connections before using them
    pool_recycle=3600    # Recycle connections every hour
)

# Create session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for all models
Base = declarative_base()
