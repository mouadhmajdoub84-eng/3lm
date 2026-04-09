# 3LM Backend API

FastAPI backend for the 3LM Solutions frontend.

## Setup & Running

### Prerequisites
- Docker and Docker Compose installed
- Environment variables in `.env` file (already configured)

### Start Backend with Docker Compose

```bash
# From project root (3lm-frontend/)
docker-compose up -d
```

This will start:
- MySQL database on `localhost:3306`
- FastAPI backend on `localhost:8000`

### Initialize Admin Account

After containers are running, seed the database with the admin user:

```bash
docker exec 3lm_backend python seed.py
```

Expected output:
```
Admin created.
```

Or if admin already exists:
```
Already exists, skipping.
```

### Check Backend Health

```bash
curl http://localhost:8000/health
# Response: {"status": "healthy"}
```

## API Endpoints

### Authentication

**POST /api/auth/login**
```bash
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@gmail.com","password":"12345678"}'
```
Response: `{"access_token":"...", "token_type":"bearer"}`

**GET /api/auth/me**
```bash
curl -H "Authorization: Bearer <token>" http://localhost:8000/api/auth/me
```
Response: `{"id":1,"email":"admin@gmail.com"}`

### Contact Submissions

**POST /api/contact** (no auth required)
```bash
curl -X POST http://localhost:8000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","message":"Hello"}'
```
Response: `{"message":"Submission received."}`

**GET /api/contact/submissions** (admin only)
```bash
curl -H "Authorization: Bearer <token>" http://localhost:8000/api/contact/submissions
```
Response: `[{"id":1,"name":"John","email":"john@example.com","message":"Hello","created_at":"2024-01-01T12:00:00"}]`

## Debugging

### View Backend Logs
```bash
docker logs -f 3lm_backend
```

### View Database Logs
```bash
docker logs -f 3lm_db
```

### Stop All Containers
```bash
docker-compose down
```

### Stop and Remove Volumes (reset database)
```bash
docker-compose down -v
```

## Environment Variables

See `.env` file. Key variables:
- `ADMIN_EMAIL` - Admin login email
- `ADMIN_PASSWORD` - Admin login password
- `SECRET_KEY` - JWT signing key
- `MYSQL_*` - Database credentials

## Architecture

```
backend/
├── main.py              # FastAPI app entry point
├── seed.py              # Database seeding script
├── requirements.txt     # Python dependencies
├── Dockerfile          # Container image
├── .env                # Environment variables
└── app/
    ├── core/
    │   ├── config.py       # Load .env variables
    │   └── security.py     # Password security & JWT
    ├── db/
    │   └── session.py      # SQLAlchemy setup
    ├── models/
    │   ├── user.py         # User table
    │   └── contact.py      # ContactSubmission table
    ├── schemas/
    │   ├── auth.py         # Request/response models
    │   └── contact.py      # Contact models
    ├── routers/
    │   ├── auth.py         # /api/auth/* endpoints
    │   └── contact.py      # /api/contact/* endpoints
    └── deps.py             # Dependency injection
```

## Features

✅ JWT authentication
✅ Secure password storage
✅ SQLAlchemy ORM with MySQL
✅ CORS configured for localhost:3000
✅ Admin-only dashboard access
✅ Public contact submissions
✅ Docker containerization
✅ Health checks
✅ Error handling with proper HTTP status codes

