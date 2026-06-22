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
                <p className="text-xl font-serif">+91 98632 46754 <br />+91 8729-826683</p>
          
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="glass p-10 border border-gold/10"
              >
                <Mail className="text-gold mb-6" size={28} />
                <h4 className="text-gold tracking-[0.2em] uppercase text-[10px] mb-2 font-medium">Email Us</h4>
                <p className="text-xl font-serif">vellisii2026@gmail.com</p>
                <p className="text-white/30 text-xs mt-2">Concierge Support</p>
              </motion.div>
            </div>

            <div className="glass p-10 border border-gold/10 space-y-8">
              <div>
                <MapPin className="text-gold mb-4" size={28} />
                <h4 className="text-gold tracking-[0.2em] uppercase text-[25px] mb-2 font-medium">ILLUMIS AESTHETIC CLINIC</h4>
                <p className="text-[15px] font-serif leading-relaxed text-white">
                  Near Monsoon Pro Salon, opposite to Blackberry Showroom,<br />
                  A - Sector, Naharlagun, Arunachal Pradesh 791110
                </p>
                <p className="text-lg font-serif leading-relaxed text-white">
                 <span>Phone :</span> +91 98632 46754
                </p>
                <br/>
                 <button className="w-full py-5 border border-gold text-gold hover:bg-gold hover:text-luxury-black transition-all font-bold tracking-[0.3em] text-sm cursor-pointer uppercase flex items-center justify-center space-x-3"
              onClick={() => { window.open(" https://maps.app.goo.gl/FcCV9ktkpXGJGw327") }}>
              <span>View Illumis Aesthetic Clinic on Map </span>
             
            </button>
           </div>

              <div className="pt-6 border-t border-white/5">
                <h5 className="text-white/60 uppercase text-[10px] tracking-[0.3em] mb-4">Opening Hours</h5>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">Monday — Sunday</span>
                    <span>10:30 AM — 08:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-8">
                <MapPin className="text-gold mb-4" size={28} />
                <h4 className="text-gold tracking-[0.2em] uppercase text-[25px] mb-2 font-medium">MONSOON SALOON PRO</h4>
                <p className="text-[15px] font-serif leading-relaxed text-white">
                  Near Illumis Aesthetic Clinic, opposite to Blackberry Showroom,<br />
                  A - Sector, Naharlagun, Arunachal Pradesh 791110
                </p>
                <p className="text-lg font-serif leading-relaxed text-white">
                 <span>Phone :</span>  +91 8729 826683
                </p>
                <br/>
                <button className="w-full py-5 border border-gold text-gold hover:bg-gold hover:text-luxury-black transition-all font-bold tracking-[0.3em] text-sm cursor-pointer uppercase flex items-center justify-center space-x-3"
                  onClick={() => { window.open("https://maps.app.goo.gl/6QNbn2c5FpKNjs5x6") }}>
                  <span>View Monsoon Pro Salon on Map</span>
                 
                </button>
              </div>

              <div className="pt-6 border-t border-white/5">
                <h5 className="text-white/60 uppercase text-[10px] tracking-[0.3em] mb-4">Opening Hours</h5>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">Monday — Sunday</span>
                    <span>10:30 AM — 08:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
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
                <div className="relative group">
                  <input type="text" placeholder="Your Name" className="w-full bg-transparent border-none py-4 outline-none text-sm text-white placeholder-white/25 peer" />
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10 transition-colors peer-hover:bg-white/20" />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-burnt-orange transition-transform duration-300 origin-left scale-x-0 peer-focus:scale-x-100" />
                </div>
                <div className="relative group">
                  <input type="email" placeholder="Email Address" className="w-full bg-transparent border-none py-4 outline-none text-sm text-white placeholder-white/25 peer" />
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10 transition-colors peer-hover:bg-white/20" />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-burnt-orange transition-transform duration-300 origin-left scale-x-0 peer-focus:scale-x-100" />
                </div>
                <div className="relative group">
                  <textarea rows={4} placeholder="Your Message" className="w-full bg-transparent border-none py-4 outline-none text-sm text-white placeholder-white/25 resize-none peer"></textarea>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10 transition-colors peer-hover:bg-white/20" />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-burnt-orange transition-transform duration-300 origin-left scale-x-0 peer-focus:scale-x-100" />
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
