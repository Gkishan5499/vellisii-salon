import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-gold/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col space-y-6">
          <Link to="/" className="flex items-center">
            <img src="/logo.jpeg" alt="Vellisii" className="h-12 rounded-xl object-contain border border-gold/20" />
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            A premium destination where beauty, science, and luxury come together. We specialize in enhancing your natural beauty with precision and care.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/vellisii_2026?igsh=cWVxZjN1M29lZWZy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="text-gold hover:text-white transition-colors" size={20} />
            </a>
            <a href="https://www.facebook.com/share/p/1EpNy9tiZs/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="text-gold hover:text-white transition-colors" size={20} />
            </a>
            <a href="https://x.com/Vellisiioffical" target="_blank" rel="noopener noreferrer" aria-label="X">
              <Twitter className="text-gold hover:text-white transition-colors" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vellisii-saloon-241326406?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="text-gold hover:text-white transition-colors" size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gold font-serif text-lg mb-6 tracking-wide underline underline-offset-8 decoration-gold/30">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/bridal" className="hover:text-gold transition-colors">Bridal Packages</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/book" className="hover:text-gold transition-colors">Book Now</Link></li>
            <li><Link to="/terms" className="hover:text-gold transition-colors">Terms & Privacy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-serif text-lg mb-6 tracking-wide underline underline-offset-8 decoration-gold/30">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-gold" />
              <span>+91 98622 24291</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-gold" />
              <span>vellisii2026@gmail.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-gold mt-1 shrink-0" />
              <div className="text-xs space-y-3 text-white/50">
                <div>
                  <span className="text-gold font-bold block mb-0.5">ILLUMIS Location:</span>
                  <span>Near Monsoon Pro Salon, opposite to Blackberry Showroom,<br />A - Sector, Naharlagun, AP 791110</span>
                </div>
                <div>
                  <span className="text-gold font-bold block mb-0.5">Monsoon Location:</span>
                  <span>Near Illumis Clinic, opposite to Blackberry Showroom,<br />A - Sector, Naharlagun, AP 791110</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-serif text-lg mb-6 tracking-wide underline underline-offset-8 decoration-gold/30">Newsletter</h4>
          <p className="text-white/50 text-sm mb-4">Subscribe for exclusive offers and beauty tips.</p>
          <div className="flex bg-white/5 border border-white/10 rounded-none overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-none px-4 py-3 text-sm focus:outline-none w-full"
            />
            <button className="bg-gold text-luxury-black px-4 font-bold text-xs uppercase tracking-widest">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-white/30 text-[10px] tracking-[0.2em] uppercase">
        © 2026 Vellisii Salon. All rights reserved. | Designed and Developed by <Link to="https://samnictech.in/" target='_blank'>Samnic Tech</Link> .
      </div>
    </footer>
  )
}
