import { Link, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { logout } from '../store/slices/authSlice';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 bg-blue-200 shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Keep Notes
          </Link>

          <div className="flex space-x-6">
            <Link
              to="/about"
              className={`text-gray-600 hover:text-gray-900 transition-colors ${
                location.pathname === '/about' ? 'font-semibold text-gray-900' : ''
              }`}
            >
              About
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/notes"
                  className={`text-gray-600 hover:text-gray-900 transition-colors ${
                    location.pathname === '/notes' ? 'font-semibold text-gray-900' : ''
                  }`}
                >
                  Notes
                </Link>
                <Link
                  to="/account"
                  className={`text-gray-600 hover:text-gray-900 transition-colors ${
                    location.pathname === '/account' ? 'font-semibold text-gray-900' : ''
                  }`}
                >
                  Account
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className={`text-gray-600 hover:text-gray-900 transition-colors ${
                  location.pathname === '/login' ? 'font-semibold text-gray-900' : ''
                }`}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
