from typing import List
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    MONGO_URL: str
    JWT_SECRET: str
    JWT_ALGORITHM: str = "HS256"
    JWT_EXPIRY_MINUTES: int = 60
    CORS_ORIGINS: str

    class Config:
        env_file = ".env"

settings = Settings() # type: ignore
