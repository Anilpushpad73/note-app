from motor.motor_asyncio import AsyncIOMotorClient
from config import settings

client: AsyncIOMotorClient | None = None
db = None

# GLOBAL COLLECTIONS
users_coll = None
notes_coll = None

async def init_db():
    global client, db, users_coll, notes_coll

    client = AsyncIOMotorClient(settings.MONGO_URL)
    db = client["keepnotes"]

    # assign collections globally
    users_coll = db["users"]
    notes_coll = db["notes"]

    # ensure indexes
    await users_coll.create_index("user_email", unique=True)
    await notes_coll.create_index("note_id", unique=True)

    print("MongoDB connection initialized")


def get_users_coll():
    if users_coll is None:
        raise Exception("Database not initialized. Call init_db() first.")
    return users_coll

def get_notes_coll():
    if notes_coll is None:
        raise Exception("Database not initialized. Call init_db() first.")
    return notes_coll
