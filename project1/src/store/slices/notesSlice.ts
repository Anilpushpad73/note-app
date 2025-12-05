import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Note {
  note_id: string;
  note_title: string;
  note_content: string;
  last_update: string;
  created_on: string;
}

interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  notes: [],
  loading: false,
  error: null,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
      state.loading = false;
      state.error = null;
    },
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.unshift(action.payload);
    },
     updateNote: (state, action: PayloadAction<Note>) => {
      const updatedNote = action.payload;
      // Add a check to ensure updatedNote and its note_id exist

      if (updatedNote && updatedNote.note_id) {
        const index = state.notes.findIndex(note => note.note_id === updatedNote.note_id);
        if (index !== -1) {
          state.notes[index] = updatedNote;
        } else {
          // Optionally, handle the case where the note to be updated is not found
          console.warn(`Note with ID ${updatedNote.note_id} not found for update.`);
        }
      } else {
        console.error('Attempted to update a note without a valid note object or note_id.', updatedNote);
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.note_id !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setNotes, addNote, updateNote, deleteNote, setLoading, setError } = notesSlice.actions;
export default notesSlice.reducer;
