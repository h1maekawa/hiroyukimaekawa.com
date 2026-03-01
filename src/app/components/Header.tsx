import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { LogoMark } from './Logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 hover:opacity-60 transition-opacity group">
          <LogoMark className="w-10 h-10" />
          <span className="text-xl font-light tracking-tight hidden sm:block">Hiroyuki Maekawa</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm tracking-wide hover:opacity-60 transition-opacity ${
              location.pathname === '/' ? 'opacity-100' : 'opacity-60'
            }`}
          >
            WORK
          </Link>
          <Link
            to="/about"
            className={`text-sm tracking-wide hover:opacity-60 transition-opacity ${
              location.pathname === '/about' ? 'opacity-100' : 'opacity-60'
            }`}
          >
            ABOUT
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-100"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="px-6 py-6 flex flex-col gap-4">
            <Link
              to="/"
              className="text-sm tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WORK
            </Link>
            <Link
              to="/about"
              className="text-sm tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}