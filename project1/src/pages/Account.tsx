import { motion } from 'framer-motion';
import { User, Mail, Calendar } from 'lucide-react';
import { useAppSelector } from '../store/hooks';

const Account = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-pink-200 pt-20 px-4 pb-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Account Settings</h1>
          <p className="text-gray-600">Manage your account information</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-pink-300 rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center">
              <User className="text-blue-600" size={48} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-b pb-6">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-gray-400" size={20} />
                <label className="text-sm font-medium text-gray-500">Username</label>
              </div>
              <p className="text-lg text-gray-800 font-medium pl-8">
                {user?.user_name || 'N/A'}
              </p>
            </div>

            <div className="border-b pb-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="text-gray-400" size={20} />
                <label className="text-sm font-medium text-gray-500">Email Address</label>
              </div>
              <p className="text-lg text-gray-800 font-medium pl-8">
                {user?.user_email || 'N/A'}
              </p>
            </div>

            <div className="pb-6">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="text-gray-400" size={20} />
                <label className="text-sm font-medium text-gray-500">User ID</label>
              </div>
              <p className="text-sm text-gray-600 font-mono pl-8 break-all">
                {user?.user_id || 'N/A'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Account;
