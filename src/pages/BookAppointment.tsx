import { motion } from 'motion/react';
import { Calendar, User, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function BookAppointment() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send this to a backend
  };

  if (submitted) {
    return (
      <div className="pt-32 bg-luxury-black min-h-screen flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full glass p-12 text-center"
        >
          <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <Calendar className="text-gold" size={32} />
            </motion.div>
          </div>
          <h2 className="text-3xl font-serif mb-4 text-gold">Booking Request Sent</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Thank you, {formState.name}! Our concierge will contact you shortly on {formState.phone} to confirm your appointment.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full py-4 bg-gold text-luxury-black font-bold uppercase tracking-widest text-xs"
          >
            Schedule Another
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 bg-luxury-black min-h-screen pb-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Concierge</h5>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Book Your <br /><span className="italic">Luxury Ceremony</span></h1>
          <p className="text-white/40 mb-12 text-lg font-light leading-relaxed max-w-lg">
            Reserve your time for transformation. Our experts are ready to curate a bespoke beauty experience tailored just for you.
          </p>
          
          <div className="space-y-6">
             <div className="flex items-center space-x-4">
                <div className="w-10 h-10 glass border border-gold/30 flex items-center justify-center text-gold">
                  <Phone size={18} />
                </div>
                <div>
                   <p className="text-white/30 text-[10px] tracking-widest uppercase mb-1">Instant Booking</p>
                   <p className="text-lg">+1 (555) 123-4567</p>
                </div>
             </div>
             <div className="flex items-center space-x-4">
                <div className="w-10 h-10 glass border border-gold/30 flex items-center justify-center text-gold">
                  <MessageSquare size={18} />
                </div>
                <div>
                   <p className="text-white/30 text-[10px] tracking-widest uppercase mb-1">WhatsApp Support</p>
                   <p className="text-lg">Chat with our Experts</p>
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Subtle Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/5 blur-3xl rounded-full"></div>
          
          <form onSubmit={handleSubmit} className="glass p-8 md:p-12 space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] uppercase text-gold/60 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/30" size={16} />
                  <input 
                    required
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 px-12 py-4 focus:border-gold outline-none transition-all text-sm"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] uppercase text-gold/60 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/30" size={16} />
                  <input 
                    required
                    type="tel" 
                    placeholder="Phone number"
                    className="w-full bg-white/5 border border-white/10 px-12 py-4 focus:border-gold outline-none transition-all text-sm"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-gold/60 ml-1">Select Service</label>
              <div className="relative">
                <select 
                  required
                  className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:border-gold outline-none transition-all text-sm appearance-none"
                  value={formState.service}
                  onChange={(e) => setFormState({...formState, service: e.target.value})}
                >
                  <option value="" disabled className="bg-luxury-black">Choose a service</option>
                  <option value="hair" className="bg-luxury-black">Hair Styling & Treatment</option>
                  <option value="skin" className="bg-luxury-black">Skin & Facial Therapies</option>
                  <option value="nails" className="bg-luxury-black">Nails & Lash Extensions</option>
                  <option value="wellness" className="bg-luxury-black">Spa & Body Wellness</option>
                  <option value="bridal" className="bg-luxury-black">Bridal Packages</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gold/50 pointer-events-none" size={18} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] uppercase text-gold/60 ml-1">Preferred Date</label>
                <input 
                  required
                  type="date" 
                  className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:border-gold outline-none transition-all text-sm"
                  value={formState.date}
                  onChange={(e) => setFormState({...formState, date: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] uppercase text-gold/60 ml-1">Preferred Time</label>
                <input 
                  required
                  type="time" 
                  className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:border-gold outline-none transition-all text-sm"
                  value={formState.time}
                  onChange={(e) => setFormState({...formState, time: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-gold text-luxury-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-colors duration-300 shadow-lg shadow-gold/10"
            >
              Confirm Appointment
            </button>
            <p className="text-[9px] text-white/30 text-center uppercase tracking-widest leading-loose">
              By confirming, you agree to our booking policy. We require 24 hours notice for cancellations to ensure professional schedule integrity.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
