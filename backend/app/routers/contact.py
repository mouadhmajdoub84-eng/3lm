# Contact routes: submit contact form and retrieve submissions
from fastapi import APIRouter, HTTPException, Depends, status
from sqlalchemy.orm import Session
from app.schemas.contact import ContactCreate, ContactOut
from app.db.session import SessionLocal
from app.models.contact import ContactSubmission
from app.models.user import User
from app.deps import get_current_user, get_db

router = APIRouter(prefix="/api/contact", tags=["contact"])


@router.post("", status_code=status.HTTP_201_CREATED)
def submit_contact(request: ContactCreate, db: Session = Depends(get_db)):
    """
    Submit a contact form submission (public endpoint).
    No authentication required.
    """
    submission = ContactSubmission(
        name=request.name,
        email=request.email,
        message=request.message
    )
    db.add(submission)
    db.commit()
    db.refresh(submission)
    
    return {"message": "Submission received."}


@router.get("/submissions", response_model=list[ContactOut])
def get_submissions(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Get all contact submissions sorted by created_at (most recent first).
    Requires valid JWT token (admin only).
    """
    submissions = db.query(ContactSubmission).order_by(
        ContactSubmission.created_at.desc()
    ).all()
    
    return submissions
