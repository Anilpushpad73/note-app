import { motion } from 'framer-motion';
import { Note } from '../store/slices/notesSlice';

interface NoteCardProps {
  note: Note;
  onClick: () => void;
}

const NoteCard = ({ note, onClick }: NoteCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

   return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-pink-300 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer p-5 border border-red-400"
    >
      <div className="bg-pink-200 p-3 rounded-lg mb-3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {note.note_title}
        </h3>
      </div>
      <div className="bg-blue-100 p-2 rounded-lg">
        <div className="text-gray-600 text-sm line-clamp-3">
          {stripHtml(note.note_content)}
        </div>
      </div>
        <div className="text-gray-500 text-sm mt-4 ml-auto text-right">
          Last updated: {formatDate(note.last_update)}
        </div>
    </motion.div>
  );
};

export default NoteCard;
