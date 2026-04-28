import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Map as MapIcon, ChevronRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center"
        >
          <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Location</h5>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Plan Your <span className="italic">Visit</span></h1>
          <p className="text-white/40 max-w-2xl mx-auto text-sm leading-relaxed tracking-wide">
            Our atelier is located in the heart of the fashion district, designed to provide an escape into luxury.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass p-10 border border-gold/10"
              >
                 <Phone className="text-gold mb-6" size={28} />
                 <h4 className="text-gold tracking-[0.2em] uppercase text-[10px] mb-2 font-medium">Call Us</h4>
                 <p className="text-xl font-serif">+91 98765 43210</p>
                 <p className="text-white/30 text-xs mt-2">Mon - Sat: 9am - 8pm</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass p-10 border border-gold/10"
              >
                 <Mail className="text-gold mb-6" size={28} />
                 <h4 className="text-gold tracking-[0.2em] uppercase text-[10px] mb-2 font-medium">Email Us</h4>
                 <p className="text-xl font-serif">info@vellissii.com</p>
                 <p className="text-white/30 text-xs mt-2">Concierge Support</p>
              </motion.div>
            </div>

            <div className="glass p-10 border border-gold/10">
               <MapPin className="text-gold mb-6" size={28} />
               <h4 className="text-gold tracking-[0.2em] uppercase text-[10px] mb-2 font-medium">Visit Our Atelier</h4>
               <p className="text-2xl font-serif mb-4 leading-relaxed">
                 Main Road, Itanagar,<br />Arunachal Pradesh 791111
               </p>
               <div className="pt-6 border-t border-white/5">
                 <h5 className="text-white/60 uppercase text-[10px] tracking-[0.3em] mb-4">Opening Hours</h5>
                 <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Weekday</span>
                      <span>09:00 AM — 08:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Saturday</span>
                      <span>10:00 AM — 09:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Sunday</span>
                      <span className="text-gold italic font-serif">By Exclusive Appointment</span>
                    </div>
                 </div>
               </div>
            </div>

            <button className="w-full py-5 border border-gold text-gold hover:bg-gold hover:text-luxury-black transition-all font-bold tracking-[0.3em] text-xs uppercase flex items-center justify-center space-x-3">
              <span>View on Google Maps</span>
              <MapIcon size={16} />
            </button>
          </div>

          {/* Contact Form / Map Placeholder */}
          <div className="relative h-full min-h-[600px] bg-luxury-black border border-gold/20 overflow-hidden">
             {/* Abstract Map Background Placeholder */}
             <div className="absolute inset-0 grayscale opacity-40 mix-blend-overlay pointer-events-none">
                <img 
                  src="/assets/images/salon-exterior.png" 
                  alt="City Map" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute inset-0 bg-gradient-to-br from-luxury-black/90 to-luxury-black/40"></div>
             
             <div className="relative h-full flex flex-col justify-center p-12">
               <h3 className="text-4xl font-serif mb-8 italic">Have a <span className="text-gold">Query?</span></h3>
               <form className="space-y-8">
                  <div className="space-y-1">
                    <input type="text" placeholder="Your Name" className="w-full bg-white/5 border-b border-white/20 py-4 outline-none focus:border-gold transition-colors text-sm" />
                  </div>
                  <div className="space-y-1">
                    <input type="email" placeholder="Email Address" className="w-full bg-white/5 border-b border-white/20 py-4 outline-none focus:border-gold transition-colors text-sm" />
                  </div>
                  <div className="space-y-1">
                    <textarea rows={4} placeholder="Your Message" className="w-full bg-white/5 border-b border-white/20 py-4 outline-none focus:border-gold transition-colors text-sm resize-none"></textarea>
                  </div>
                  <button className="group flex items-center space-x-4 text-gold tracking-[0.4em] uppercase text-xs font-bold pt-4">
                    <span>Send Message</span>
                    <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
               </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
