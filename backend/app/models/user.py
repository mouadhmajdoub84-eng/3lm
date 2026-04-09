# User model for database table
from sqlalchemy import Column, Integer, String, DateTime, func
from app.db.session import Base


class User(Base):
    """User table for storing admin credentials."""
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    created_at = Column(DateTime, server_default=func.now())
    
    def __repr__(self):
        return f"<User(id={self.id}, email={self.email})>"
