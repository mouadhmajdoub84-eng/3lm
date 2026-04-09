# Main FastAPI application entry point
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import time

app = FastAPI(
    title="3LM Backend API",
    description="Backend API for 3LM Solutions",
    version="1.0.0"
)

# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost",
        "http://localhost:3000",
        "http://localhost:80",
        "http://127.0.0.1",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:80",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup_event():
    """Initialize database tables on startup."""
    from app.db.session import Base, engine
    
    # Retry connecting to database
    max_retries = 10
    for attempt in range(max_retries):
        try:
            Base.metadata.create_all(bind=engine)
            print("✓ Database tables created successfully")
            break
        except Exception as e:
            if attempt < max_retries - 1:
                print(f"Database not ready yet, retrying... ({attempt + 1}/{max_retries})")
                time.sleep(2)
            else:
                print(f"✗ Failed to connect to database after {max_retries} attempts")
                raise


# Include routers
from app.routers import auth, contact

app.include_router(auth.router)
app.include_router(contact.router)


@app.get("/")
def read_root():
    """Health check endpoint."""
    return {"message": "3LM Backend API is running"}


@app.get("/health")
def health_check():
    """Health check for Docker."""
    return {"status": "healthy"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
