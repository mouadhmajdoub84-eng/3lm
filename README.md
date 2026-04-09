# 3LM Solutions - Full Stack Application

Complete React frontend with FastAPI backend and MySQL database running in Docker.

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Windows PowerShell or any terminal

### Start All Services

```bash
cd C:\Users\Mouadh\Desktop\3lm-frontend
docker-compose up -d
```

Wait 10-15 seconds for all services to start.

### Seed the Admin Account (First Time Only)

```bash
docker exec 3lm_backend python seed.py
```

Expected output:
```
Admin created.
```

## 📱 Access the Applications

| Service | URL |
|---------|-----|
| **Frontend (React)** | http://localhost or http://localhost:3000 |
| **Backend API** | http://localhost:8000 |
| **API Documentation (Swagger)** | http://localhost:8000/docs |

## ✅ Verify Everything is Running

### Check All Containers

```bash
docker ps
```

You should see 3 containers running:
- `3lm_frontend` (port 80/3000)
- `3lm_backend` (port 8000)
- `3lm_db` (port 3306)

### Test Backend Health

```bash
curl http://localhost:8000/health
```

Expected response:
```json
{"status":"healthy"}
```

## 🔐 Test Login Endpoint

### Get JWT Token

```bash
curl -X POST http://localhost:8000/api/auth/login `
  -H "Content-Type: application/json" `
  -d '{"email":"admin@gmail.com","password":"12345678"}'
```

Expected response:
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "token_type": "bearer"
}
```

### Get Current User (Replace TOKEN with the token from above)

```bash
curl -H "Authorization: Bearer TOKEN" http://localhost:8000/api/auth/me
```

Expected response:
```json
{
  "id": 1,
  "email": "admin@gmail.com"
}
```

## 📧 Test Contact Form

### Submit Contact Form (No auth required)

```bash
curl -X POST http://localhost:8000/api/contact `
  -H "Content-Type: application/json" `
  -d '{"name":"John Doe","email":"john@example.com","message":"Test message"}'
```

Expected response:
```json
{"message":"Submission received."}
```

### Get All Submissions (Admin only, requires JWT token)

```bash
curl -H "Authorization: Bearer TOKEN" http://localhost:8000/api/contact/submissions
```

Expected response:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Test message",
    "created_at": "2026-04-09T03:30:00"
  }
]
```

## 🗄️ Access Database

### Option 1: MySQL Command Line

```bash
docker exec -it 3lm_db mysql -u appuser -papppassword appdb
```

⚠️ **Important**: No space between `-p` and password

Then run SQL commands:
```sql
SHOW TABLES;
SELECT * FROM users;
SELECT * FROM contact_submissions;
EXIT
```

### Option 2: Quick View (No interactive mode)

```bash
docker exec 3lm_db mysql -u appuser -papppassword appdb -e "SELECT * FROM users;"
```

```bash
docker exec 3lm_db mysql -u appuser -papppassword appdb -e "SELECT * FROM contact_submissions;"
```

### Option 3: GUI Tools

Install one of these free tools:
- **DBeaver** (https://dbeaver.io) - Recommended
- **MySQL Workbench** (https://www.mysql.com/products/workbench/)

**Connection Details:**
- Host: `localhost`
- Port: `3306`
- Username: `appuser`
- Password: `apppassword`
- Database: `appdb`

## 📊 Database Tables

### users
- `id` (INT, Primary Key)
- `email` (VARCHAR) - Unique, indexed
- `hashed_password` (VARCHAR)
- `created_at` (DATETIME)

### contact_submissions
- `id` (INT, Primary Key)
- `name` (VARCHAR)
- `email` (VARCHAR)
- `message` (TEXT)
- `created_at` (DATETIME, indexed)

## 🔍 View Application Logs

### Backend Logs
```bash
docker logs 3lm_backend
```

### Follow Backend Logs (Real-time)
```bash
docker logs -f 3lm_backend
```

### Database Logs
```bash
docker logs 3lm_db
```

### Frontend Logs
```bash
docker logs 3lm_frontend
```

## 🛑 Stop All Services

```bash
docker-compose down
```

## 🔄 Reset Everything (Delete Database)

```bash
docker-compose down -v
docker-compose up -d
docker exec 3lm_backend python seed.py
```

This removes all containers and volumes, starting fresh.

## 🏗️ Project Structure

```
3lm-frontend/
├── docker-compose.yml          # Docker orchestration
├── .env                         # Environment variables
├── Dockerfile                   # Frontend container
├── nginx.conf                   # Nginx configuration
├── package.json                 # Frontend dependencies
├── README.md                    # This file
├── public/                      # Static files
├── src/
│   ├── App.jsx                 # Main app with routing
│   ├── index.js                # Entry point
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Footer.jsx
│   │   └── ServicePage.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Contact.jsx         # Contact form
│   │   ├── SeConnecter.jsx     # Login page ✨
│   │   └── services/           # Service pages
│   └── styles/
│       └── global.css
└── backend/                     # FastAPI backend
    ├── Dockerfile
    ├── requirements.txt
    ├── main.py                 # FastAPI entry point
    ├── seed.py                 # Database seeder
    ├── .env                    # Backend environment vars
    ├── README.md               # Backend documentation
    └── app/
        ├── core/
        │   ├── config.py       # Configuration
        │   └── security.py     # Password & JWT
        ├── db/
        │   └── session.py      # Database setup
        ├── models/
        │   ├── user.py         # User model
        │   └── contact.py      # Contact model
        ├── schemas/
        │   ├── auth.py         # Auth schemas
        │   └── contact.py      # Contact schemas
        ├── routers/
        │   ├── auth.py         # Auth endpoints
        │   └── contact.py      # Contact endpoints
        └── deps.py             # Dependencies
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/login` - Login with email/password
- `GET /api/auth/me` - Get current user info (requires auth)

### Contact Submissions
- `POST /api/contact` - Submit contact form (public)
- `GET /api/contact/submissions` - Get all submissions (admin only, requires auth)

## 🔑 Default Admin Credentials

- **Email**: `admin@gmail.com`
- **Password**: `12345678`

## 🎨 Frontend Pages

- **Home** (`/`) - Landing page
- **Se Connecter** (`/se-connecter`) - Login page ✨
- **Contactez-nous** (`/contactus`) - Contact form
- **Services** (various routes) - Service pages (IA, Web Dev, Mobile Dev, etc.)

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router
- CSS3

### Backend
- FastAPI
- SQLAlchemy ORM
- Python 3.11

### Database
- MySQL 8

### Authentication
- JWT (JSON Web Tokens)
- Bcrypt password hashing

### DevOps
- Docker
- Docker Compose
- Nginx (frontend reverse proxy)

## 🚨 Troubleshooting

### Backend won't start
```bash
docker logs 3lm_backend
docker-compose down -v
docker-compose up -d --build
```

### Database connection issues
```bash
docker logs 3lm_db
```

### Port already in use
```bash
# Change ports in docker-compose.yml or kill using processes
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

### Clear everything and restart
```bash
docker-compose down -v
docker system prune -a
docker-compose up -d
docker exec 3lm_backend python seed.py
```

## 📝 Environment Variables

See `.env` file in project root:

```
MYSQL_USER=appuser
MYSQL_PASSWORD=apppassword
MYSQL_ROOT_PASSWORD=rootpassword
MYSQL_HOST=db
MYSQL_PORT=3306
MYSQL_DB=appdb
SECRET_KEY=supersecretkey_changeme
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=120
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=12345678
```

## 📚 Additional Documentation

- Backend docs: [backend/README.md](backend/README.md)
- API Swagger: http://localhost:8000/docs

## ✨ Features

✅ React frontend with multiple pages
✅ FastAPI backend with JWT authentication
✅ MySQL database with SQLAlchemy ORM
✅ Docker containerization
✅ Login page with email/password validation
✅ Contact form with submissions tracking
✅ Admin-only dashboard access
✅ Public contact submissions
✅ Secure password storage
✅ CORS enabled for frontend
✅ Health checks and monitoring

---

**Last Updated**: April 9, 2026
>>>>>>> 3b220e7 (Initial commit)
