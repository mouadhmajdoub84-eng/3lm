# Contact submission schemas for request/response validation
from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional


class ContactCreate(BaseModel):
    """Request body for creating a contact submission."""
    name: str
    email: EmailStr
    message: str


class ContactOut(BaseModel):
    """Response body for contact submissions."""
    id: int
    name: str
    email: str
    message: str
    created_at: datetime
    
    class Config:
        from_attributes = True
