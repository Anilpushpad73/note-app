import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setNotes, setLoading } from '../store/slices/notesSlice';
import NoteCard from '../components/NoteCard';
import AddNoteModal from '../components/AddNoteModal';
import EditNoteModal from '../components/EditNoteModal';
import { Note } from '../store/slices/notesSlice';
import axiosInstance from '../api/axiosInstance';

const API_BASE = import.meta.env.VITE_API_URL
const Notes = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const dispatch = useAppDispatch();
  const { notes, loading } = useAppSelector((state) => state.notes);
  const { user, token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    fetchNotes();
  }, []);
  
  const fetchNotes = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axiosInstance.get(`${API_BASE}/api/notes`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(setNotes(response.data.notes));
    } catch (error) {
  
      console.error('Failed to fetch notes:', error);
      dispatch(setNotes([]));
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setIsEditModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-pink-200 pt-20 px-4 pb-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {getGreeting()} {user?.user_name}!
          </h1>
          <p className="text-gray-600">Your Notes</p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAddModalOpen(true)}
          className="fixed bottom-8 right-8 bg-pink-800 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
        >
          <Plus size={28} />
        </motion.button>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : notes.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">No notes yet. Create your first note!</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence>
              {notes.map((note) => (
                <NoteCard
                  key={note.note_id}
                  note={note}
                  onClick={() => handleNoteClick(note)}
                />
              ))}
            </AnimatePresence>
          </div>
        )}

        <AddNoteModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />

        {selectedNote && (
          <EditNoteModal
            isOpen={isEditModalOpen}
            onClose={() => {
              setIsEditModalOpen(false);
              setSelectedNote(null);
            }}
            note={selectedNote}
          />
        )}
      </div>
    </div>
  );
};

export default Notes;
