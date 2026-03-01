import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Research', path: '/research' },
  { name: 'Team', path: '/team' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/Minor Project Logo-Photoroom.png"
                alt="PlantCare AI"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl text-gray-900 hidden sm:block">
                PlantCare AI
              </span>
            </Link>
          </motion.div>

          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link
                  to={item.path}
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors block"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
