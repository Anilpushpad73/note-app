import { motion } from 'framer-motion';
import { BookOpen, Target, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-pink-200 pt-20 px-4 pb-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About Keep Notes</h1>
          <p className="text-xl text-gray-600">
            Your simple, powerful note-taking companion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className=" bg-pink-300 rounded-xl shadow-lg p-6 text-center"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rich Text Editor</h3>
            <p className="text-gray-60">
              Create beautifully formatted notes with our powerful rich text editor
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-pink-300 rounded-xl shadow-lg p-6 text-center"
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick & Easy</h3>
            <p className="text-gray-600">
              Add, edit, and organize your notes in seconds with our intuitive interface
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-pink-300 rounded-xl shadow-lg p-6 text-center"
          >
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure</h3>
            <p className="text-gray-600">
              Your notes are protected with industry-standard security measures
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-pink-300 rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Keep Notes was built with the vision of providing a simple, fast, and elegant note-taking
            experience. We believe that taking notes should be effortless, allowing you to focus on
            what matters most - your ideas and thoughts.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're jotting down quick reminders, writing detailed project plans, or capturing
            creative inspiration, Keep Notes is designed to adapt to your workflow and help you stay
            organized and productive.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
