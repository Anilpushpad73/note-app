from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import uvicorn

from config import settings
from db import init_db
from routes import auth_routes, notes_routes


@asynccontextmanager
async def lifespan(app: FastAPI):
    # ----- Startup -----
    await init_db()
    print("MongoDB connection initialized")
    yield  
    print("Application shutdown complete")


app = FastAPI(
    title="KeepNotes Backend (FastAPI + MongoDB Atlas)",
    lifespan=lifespan
)


# ---------------- CORS SETTINGS ----------------
cors_value = settings.CORS_ORIGINS

if isinstance(cors_value, str):
    origins = [o.strip() for o in cors_value.split(",")]
else:
    origins = cors_value

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins or ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)


# ---------------- ROUTES ----------------
app.include_router(auth_routes.router, prefix="/api/auth", tags=["auth"])
app.include_router(notes_routes.router, prefix="/api/notes", tags=["notes"])


# ---------------- ROOT ----------------
@app.get("/")
async def root():
    return {"status": "ok", "service": "KeepNotes Backend"}


# ---------------- RUN SERVER ----------------
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
