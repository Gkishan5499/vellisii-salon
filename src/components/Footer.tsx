import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-gold/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="text-3xl font-serif tracking-widest text-gold text-left">VELLISSII</span>
            <span className="text-[10px] tracking-[0.3em] text-white/60 -mt-1 uppercase font-light">Salon & Spa</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            A premium destination where beauty, science, and luxury come together. We specialize in enhancing your natural beauty with precision and care.
          </p>
          <div className="flex space-x-4">
            <Instagram className="text-gold hover:text-white transition-colors cursor-pointer" size={20} />
            <Facebook className="text-gold hover:text-white transition-colors cursor-pointer" size={20} />
          </div>
        </div>

        <div>
          <h4 className="text-gold font-serif text-lg mb-6 tracking-wide underline underline-offset-8 decoration-gold/30">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/bridal" className="hover:text-gold transition-colors">Bridal Packages</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/book" className="hover:text-gold transition-colors">Book Now</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-serif text-lg mb-6 tracking-wide underline underline-offset-8 decoration-gold/30">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-gold" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-gold" />
              <span>info@vellissii.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-gold mt-1" />
              <span>Main Road, Itanagar,<br />Arunachal Pradesh 791111</span>
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
        © 2024 Vellisii Salon. All rights reserved. | Designed for Luxury.
      </div>
    </footer>
  );
}
