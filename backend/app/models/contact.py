# ContactSubmission model for storing contact form submissions
from sqlalchemy import Column, Integer, String, Text, DateTime, func
from app.db.session import Base


class ContactSubmission(Base):
    """ContactSubmission table for storing contact form submissions."""
    __tablename__ = "contact_submissions"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime, server_default=func.now(), index=True)
    
    def __repr__(self):
        return f"<ContactSubmission(id={self.id}, name={self.name}, email={self.email})>"
