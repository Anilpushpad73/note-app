import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { updateNote, deleteNote } from '../store/slices/notesSlice';
import { Note } from '../store/slices/notesSlice';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const API_BASE = import.meta.env.VITE_API_URL
interface EditNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  note: Note;
  onSuccess: () => void;
}

const EditNoteModal = ({ isOpen, onClose, note, onSuccess }: EditNoteModalProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(note.note_title);
  const [content, setContent] = useState(note.note_content);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    setTitle(note.note_title);
    setContent(note.note_content);
  }, [note]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setLoading(true);
    onClose();
    try {
      const response = await axios.put(
        `${API_BASE}/api/notes/${note.note_id}/`,
        {
          note_title: title,
          note_content: content,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(updateNote(response.data.note));
      
      onSuccess();
      onClose();
      navigate("/");
    } catch (error) {
      console.error('Failed to update note:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this note?')) return;

    setLoading(true);
    try {
      await axios.delete(`${API_BASE}/api/notes/${note.note_id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(deleteNote(note.note_id));
      onClose();
      onSuccess();
    } catch (error) {
      console.error('Failed to delete note:', error);
    } finally {
      setLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ],
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-pink-300 bg-opacity-50 z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 bg-pink-300 flex items-center justify-center p-4"
          >
            <div className="bg-pink-300 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Edit Note</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Last modified: {formatDate(note.last_update)}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleUpdate} className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
                <div className="mb-5 bg-pink-300">
                  <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="edit-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="Enter note title"
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <ReactQuill
                      theme="snow"
                      value={content}
                      onChange={setContent}
                      modules={modules}
                      placeholder="Write your note content here..."
                      className="bg-white"
                    />
                  </div>
                </div>

                <div className="flex gap-3 justify-between">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleDelete}
                    disabled={loading}
                    className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Delete
                  </motion.button>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={onClose}
                      className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading || !title.trim() || !content.trim()}
                      onClick={() => navigate("/")} 
                      className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Saving...' : 'Save'}
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EditNoteModal;
