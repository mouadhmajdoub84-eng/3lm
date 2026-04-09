# Authentication schemas for request/response validation
from pydantic import BaseModel, EmailStr


class LoginRequest(BaseModel):
    """Request body for login endpoint."""
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    """Response body for login endpoint."""
    access_token: str
    token_type: str


class UserResponse(BaseModel):
    """Response body for /me endpoint."""
    id: int
    email: str
    
    class Config:
        from_attributes = True
