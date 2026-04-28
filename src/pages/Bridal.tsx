import { motion } from 'motion/react';
import { Heart, Stars, Gift, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const bridalPackages = [
  {
    name: 'The Royal Bride',
    price: '$1,200',
    desc: 'The ultimate luxury experience spanning across two days to ensure perfection.',
    features: [
      'Traditional or Airbrush HD Makeup',
      'Advanced Bridal Hair Styling with Accessories',
      'HydraFacial Gold Prep',
      'Premium Nail Extensions & Art',
      'Full Body Ceremony & Polishing',
      'Travel to Venue (within 50 miles)'
    ]
  },
  {
    name: 'The Classic Muse',
    price: '$750',
    desc: 'Bespoke elegance for the modern bride who values minimalist luxury.',
    features: [
      'Bespoke Bridal Makeup',
      'Creative Hair Transformation',
      'Lash Extensions (Classic Full Set)',
      'Bridal Glow Ritual (Express Facial)',
      'On-Site Touch-up Kit'
    ]
  },
  {
    name: 'Groom Luxury Suite',
    price: '$350',
    desc: 'Precision grooming for the modern gentleman.',
    features: [
      'Professional Wedding Haircut',
      'Skin Detox Ritual (Charcoal Therapy)',
      'Manicure & Pedicure Detail',
      'Beard Sculpting / Clean Shave',
      'Refreshments & Private Suite'
    ]
  }
];

export default function Bridal() {
  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden mb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595152244501-995bc9a07d0f?auto=format&fit=crop&q=80&w=2000" 
            alt="Bridal Luxury"
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-luxury-black"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Wedding Atelier</h5>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 italic leading-tight">
              Bridal <span className="font-light not-italic">Excellence.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Designing your most precious moment with precision, care, and the timeless elegance of Vellisii.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {bridalPackages.map((pkg, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="glass p-10 flex flex-col border border-gold/10 hover:border-gold/40 transition-colors group"
             >
                <div className="flex justify-between items-start mb-8">
                   <div className="w-12 h-12 glass border border-gold/30 flex items-center justify-center text-gold">
                      {idx === 0 ? <Stars size={24} /> : idx === 1 ? <Heart size={24} /> : <Gift size={24} />}
                   </div>
                   <span className="text-2xl font-serif text-gold">{pkg.price}</span>
                </div>
                <h3 className="text-3xl font-serif mb-4 group-hover:text-gold transition-colors">{pkg.name}</h3>
                <p className="text-white/50 text-sm mb-10 leading-relaxed italic">{pkg.desc}</p>
                
                <div className="flex-grow space-y-4 mb-12">
                   {pkg.features.map((feature, fIdx) => (
                     <div key={fIdx} className="flex items-start space-x-3 text-sm text-white/70">
                        <CheckCircle size={14} className="text-gold mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                     </div>
                   ))}
                </div>

                <Link 
                  to="/book" 
                  className="w-full text-center py-4 bg-transparent border border-gold text-gold font-bold tracking-widest text-xs uppercase hover:bg-gold hover:text-luxury-black transition-all"
                >
                  Reserve Package
                </Link>
             </motion.div>
           ))}
        </div>

        <div className="mt-32 glass p-16 text-center border-gold/10 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 transform translate-x-4 -translate-y-4">
             <Stars className="text-gold/20" size={100} />
           </div>
           <h3 className="text-4xl font-serif mb-8 italic">Custom Bridal <span className="text-gold">Journeys</span></h3>
           <p className="text-white/60 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
             Every bride is unique. Our wedding concierge is available to curate a completely bespoke package including bridesmaids rituals, mother-of-the-bride glow sessions, and destination services.
           </p>
           <Link to="/contact" className="text-gold border-b-2 border-gold/30 hover:border-gold pb-2 tracking-[0.4em] uppercase text-xs font-bold transition-all">
             Consult our Wedding Concierge
           </Link>
        </div>
      </section>
    </div>
  );
}
