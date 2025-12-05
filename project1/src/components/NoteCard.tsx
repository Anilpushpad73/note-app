import { motion } from 'framer-motion';
import { Note } from '../store/slices/notesSlice';

interface NoteCardProps {
  note: Note;
  onClick: () => void;
}

const NoteCard = ({ note, onClick }: NoteCardProps) => {
  const formatDate = (dateString: string) => {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime(); // difference in milliseconds

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return 'just now';
  if (minutes < 60) return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  if (hours < 24) return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  if (days < 30) return days === 1 ? '1 day ago' : `${days} days ago`;
  if (months < 12) return months === 1 ? '1 month ago' : `${months} months ago`;
  return years === 1 ? '1 year ago' : `${years} years ago`;
};

  console.log('Rendering NoteCard for note:', note.note_id);

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
