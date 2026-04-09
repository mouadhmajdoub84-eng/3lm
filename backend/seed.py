# Seed script to initialize database with admin user
from app.db.session import Base, engine, SessionLocal
from app.models.user import User
from app.models.contact import ContactSubmission
from app.core.security import hash_password
from app.core.config import get_settings

# Create all tables
Base.metadata.create_all(bind=engine)

# Get database session
db = SessionLocal()

try:
    settings = get_settings()
    
    # Check if admin user already exists
    admin_user = db.query(User).filter(User.email == settings.ADMIN_EMAIL).first()
    
    if admin_user:
        if isinstance(admin_user.hashed_password, str) and admin_user.hashed_password.startswith("$2"):
            admin_user.hashed_password = settings.ADMIN_PASSWORD
            db.commit()
            print("Admin password converted to plain text for simple login.")
        else:
            print("Already exists, skipping.")
    else:
        new_user = User(
            email=settings.ADMIN_EMAIL,
            hashed_password=hash_password(settings.ADMIN_PASSWORD)
        )
        db.add(new_user)
        db.commit()
        print("Admin created.")

finally:
    db.close()
