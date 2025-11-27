from fastapi import APIRouter, Depends, HTTPException, status
from models.schemas import NoteCreate, NoteResponse
from utils.dependencies import get_current_user
from db import get_notes_coll
from datetime import datetime
import uuid

router = APIRouter()

@router.get("/", response_model=dict)
async def list_notes(current_user = Depends(get_current_user)):
    notes_coll = get_notes_coll()  # <- use getter
    user_id = current_user["user_id"]

    docs = notes_coll.find({"user_id": user_id}, sort=[("created_on", -1)])
    results = []
    async for d in docs:
        results.append({
            "note_id": d["note_id"],
            "note_title": d["note_title"],
            "note_content": d["note_content"],
            "last_update": d.get("last_update"),
            "created_on": d.get("created_on"),
        })
    return {"notes": results}


@router.post("/", response_model=NoteResponse, status_code=status.HTTP_201_CREATED)
async def create_note(payload: NoteCreate, current_user = Depends(get_current_user)):
    notes_coll = get_notes_coll()  # <- use getter
    user_id = current_user["user_id"]

    note_id = uuid.uuid4().hex
    now = datetime.utcnow().isoformat()
    doc = {
        "note_id": note_id,
        "user_id": user_id,
        "note_title": payload.note_title,
        "note_content": payload.note_content,
        "last_update": now,
        "created_on": now,
    }
    await notes_coll.insert_one(doc)
    return {"note": doc}


@router.put("/{note_id}", response_model=NoteResponse)
async def update_note(note_id: str, payload: NoteCreate, current_user = Depends(get_current_user)):
    notes_coll = get_notes_coll()  
    user_id = current_user["user_id"]

    now = datetime.utcnow().isoformat()
    result = await notes_coll.find_one_and_update(
        {"note_id": note_id, "user_id": user_id},
        {"$set": {
            "note_title": payload.note_title,
            "note_content": payload.note_content,
            "last_update": now
        }},
        return_document=True
    )
    if not result:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Note not found")
    return {"note": result}


@router.delete("/{note_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_note(note_id: str, current_user = Depends(get_current_user)):
    notes_coll = get_notes_coll()  # <- use getter
    user_id = current_user["user_id"]

    delete_result = await notes_coll.delete_one({"note_id": note_id, "user_id": user_id})
    if delete_result.deleted_count == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Note not found")
    return None