
from fastapi import APIRouter, HTTPException, status
from models.schemas import UserCreate, AuthResponse, LoginModel
from db import get_users_coll
from utils.auth import hash_password, verify_password, create_access_token
from datetime import datetime, timezone
import uuid
router = APIRouter()

@router.post("/signup", response_model=AuthResponse)
async def signup(payload: UserCreate):
    users_coll = get_users_coll()
    existing = await users_coll.find_one({"user_email": payload.user_email})
    if existing:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")

    user_id = uuid.uuid4().hex
    now = datetime.now(timezone.utc).isoformat()

    user_doc = {
        "user_id": user_id,
        "user_name": payload.user_name,
        "user_email": payload.user_email,
        "password": hash_password(payload.password),
        "last_update": now,
        "created_on": now,
    }

    await users_coll.insert_one(user_doc)

    user_resp = {
        "user_id": user_id,
        "user_name": payload.user_name,
        "user_email": payload.user_email,
        "last_update": now,
        "created_on": now,
    }
 
    token = create_access_token(subject=user_id)
    return {"user": user_resp, "token": token}


@router.post("/login", response_model=AuthResponse)
async def login(payload: LoginModel):
    users_coll = get_users_coll()
    user = await users_coll.find_one({"user_email": payload.user_email})
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    if not verify_password(payload.password, user["password"]):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    user_resp = {
        "user_id": user["user_id"],
        "user_name": user["user_name"],
        "user_email": user["user_email"],
        "last_update": user.get("last_update"),
        "created_on": user.get("created_on"),
    }

    token = create_access_token(subject=user["user_id"])
    return {"user": user_resp, "token": token}

