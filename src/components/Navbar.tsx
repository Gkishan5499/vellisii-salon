declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Phone, Twitter, Linkedin } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Bridal', path: '/bridal' },
  { name: 'ILLUMIS', path: '/illumis' },
  { name: 'Monsoon', path: '/monsoon' },
  { name: 'Academy', path: '/academy' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 py-4 transition-all duration-700 ${scrolled ? 'bg-luxury-black/95 backdrop-blur-xl border-b border-gold/10' : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img src="/logo.jpeg" alt="Vellisii" className={`h-10 lg:h-14 rounded-xl object-contain border border-gold/20 ${scrolled ? 'filter brightness-90' : ''}`} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-widest uppercase transition-colors hover:text-gold ${location.pathname === link.path ? 'text-gold font-medium' : 'text-white/80'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-luxury-black transition-all duration-300 text-xs tracking-[0.2em] uppercase"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-luxury-black border-b border-gold/20 lg:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg tracking-widest uppercase text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 bg-gold text-luxury-black text-sm tracking-[0.2em] uppercase font-bold"
              >
                Book Appointment
              </Link>
              <div className="flex justify-center space-x-6 pt-4">
                <a href="https://www.instagram.com/vellisii_2026?igsh=cWVxZjN1M29lZWZy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="text-white/60 hover:text-gold" size={20} />
                </a>
                <a href="https://www.facebook.com/share/p/1EpNy9tiZs/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="text-white/60 hover:text-gold" size={20} />
                </a>
                <a href="https://x.com/Vellisiioffical" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <Twitter className="text-white/60 hover:text-gold" size={20} />
                </a>
                <a href="https://www.linkedin.com/in/vellisii-saloon-241326406?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="text-white/60 hover:text-gold" size={20} />
                </a>
                <a href="tel:+919862224291" aria-label="Phone">
                  <Phone className="text-white/60 hover:text-gold" size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
