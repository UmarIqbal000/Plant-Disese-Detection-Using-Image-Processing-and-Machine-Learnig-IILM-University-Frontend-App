import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Research', path: '/research' },
  { name: 'Team', path: '/team' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Floating Pill Navigation - Centered */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <motion.div
          className={`
            flex items-center gap-1 px-3 py-2 rounded-full
            ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-white/80 backdrop-blur-md shadow-lg'}
          `}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mr-2">
            <img
              src="/Minor Project Logo-Photoroom.png"
              alt="PlantCare AI"
              className="w-8 h-8 object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    relative px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                    ${isActive
                      ? 'text-green-600'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-green-50 rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-5 bg-gray-200 mx-1" />

          {/* Try Now Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/#upload-section'}
            className="px-4 py-1.5 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-colors shadow-md"
          >
            Try Now
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden p-1.5"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="w-5 h-4 flex flex-col justify-between"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-700 origin-left rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-gray-700 rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-700 origin-left rounded-full"
              />
            </motion.div>
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 sm:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 sm:hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6 pt-20">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b">
                  <img
                    src="/Minor Project Logo-Photoroom.png"
                    alt="PlantCare AI"
                    className="w-10 h-10 object-contain"
                  />
                  <span className="font-bold text-lg text-gray-900">PlantCare AI</span>
                </div>

                {/* Mobile Nav Links */}
                <div className="space-y-2">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                          isActive
                            ? 'bg-green-50 text-green-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = '/#upload-section'}
                    className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg"
                  >
                    Try Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
