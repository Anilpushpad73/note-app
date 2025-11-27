from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

# USER schemas
class UserCreate(BaseModel):
    user_name: str = Field(..., min_length=1)
    user_email: EmailStr
    password: str = Field(..., min_length=6)

class LoginModel(BaseModel):
    user_email: str
    password: str
class UserResponse(BaseModel):
    user_id: str
    user_name: str
    user_email: EmailStr
    last_update: Optional[str]
    created_on: Optional[str]

class AuthResponse(BaseModel):
    user: UserResponse
    token: str

# NOTES schemas
class NoteCreate(BaseModel):
    note_title: str
    note_content: str

class NoteResponse(BaseModel):
    note_id: str
    note_title: str
    note_content: str
    last_update: Optional[str]
    created_on: Optional[str]
