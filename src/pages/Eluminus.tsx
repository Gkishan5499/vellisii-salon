import { motion } from 'motion/react';
import { Sparkles, MessageCircle, Scissors, Heart, Eye, Brush, User, Gem, Info, Zap } from 'lucide-react';

const allServices = [
  {
    category: 'Hair Services',
    icon: <Scissors className="text-gold" />,
    sections: [
      {
        name: 'Haircuts & Styling',
        items: [
          { name: 'Creative Haircut (Men/Women)', price: 'Starting from ₹5,000' },
          { name: 'Advanced Designer Cut (Senior Stylist)', price: 'Starting from ₹7,500' },
          { name: 'Shampoo & Luxury Blow Dry', price: 'Starting from ₹3,500' },
          { name: 'Ironing / Curling / Tong Styling', price: 'Starting from ₹4,000' },
          { name: 'Bridal & Occasion Hair Styling', price: 'Upon Consultation' },
        ]
      },
      {
        name: 'Hair Treatments',
        items: [
          { name: 'Signature Hair Spa Rituals', price: 'Starting from ₹6,500' },
          { name: 'Keratin / Smoothening / Rebonding', price: 'Starting from ₹20,000' },
          { name: 'Hair Botox Therapy', price: 'Starting from ₹25,000' },
          { name: 'Scalp Detox & Anti-Dandruff Therapy', price: 'Starting from ₹5,500' },
          { name: 'Intensive Hair Fall Control Program (with Advanced Laser Therapy)', price: 'Upon Consultation' },
        ]
      },
      {
        name: 'Hair Colouring',
        items: [
          { name: 'Global Colour / Root Touch-Up', price: 'Starting from ₹6,000' },
          { name: 'Highlights / Balayage / Ombre', price: 'Starting from ₹15,000' },
          { name: 'Fashion & Premium Shades', price: 'Starting from ₹12,000' },
          { name: 'Ammonia-Free Colour Services', price: 'Starting from ₹8,000' },
        ]
      }
    ]
  },
  {
    category: 'Advanced Skin & Facial Therapies',
    icon: <Sparkles className="text-gold" />,
    sections: [
      {
        name: 'Luxury Facials',
        items: [
          { name: 'Classic Clean-Up & Glow Facial', price: '₹4,000' },
          { name: 'Gold / Diamond / Anti-Aging Facial', price: '₹10,000' },
          { name: 'Brightening & Pigmentation Control Facial', price: '₹12,000' },
        ]
      },
      {
        name: 'Advanced Aesthetic Facials',
        items: [
          { name: 'HydraFacial (Customised as per Skin Type)', price: 'Starting from ₹15,000' },
          { name: 'Carboxy Facial Therapy (CO₂ Skin Rejuvenation)', price: '₹14,000' },
          { name: 'BB Glow Treatment (Semi-Permanent Skin Glow)', price: '₹18,000' },
        ]
      },
      {
        name: 'Professional Marine & Targeted Facials',
        items: [
          { name: 'Cold Cream Facial (For Hyper-Dry & Sensitive Skin)', price: '₹6,500' },
          { name: 'Pureté Marine Facial (For Oily & Acne-Prone Skin)', price: '₹7,500' },
          { name: 'Source Marine Facial (For Dehydrated Skin)', price: '₹7,000' },
          { name: 'Lumière Marine Facial (For Pigmentation & Dark Spots)', price: '₹9,000' },
          { name: 'Hyalu Pro Collagen Facial (For Advanced Anti-Ageing)', price: '₹12,000' },
          { name: 'Spiruline Boost Facial (For First Signs of Ageing)', price: '₹10,000' },
        ]
      },
      {
        name: 'Clinical Skin Treatments',
        items: [
          { name: 'Bollywood Peel (Instant Glow & Skin Renewal)', price: '₹15,000' },
          { name: 'Chemical Peels (Acne / Pigmentation / Anti-Ageing)', price: 'Starting from ₹8,000' },
          { name: 'Microdermabrasion / Skin Polishing', price: '₹7,500' },
          { name: 'Skin Whitening & Brightening Treatment', price: '₹12,000' },
          { name: 'Under Eye Rejuvenation', price: '₹6,000' },
        ]
      }
    ]
  },
  {
    category: 'Spa & Body Wellness',
    icon: <Heart className="text-gold" />,
    sections: [
      {
        name: 'Relaxation Therapies',
        items: [
          { name: 'Swedish Massage', price: '₹8,000 (60 min)' },
          { name: 'Deep Tissue Therapy', price: '₹10,000 (60 min)' },
          { name: 'Aroma Therapy', price: '₹9,000 (60 min)' },
          { name: 'Hot Stone Therapy', price: '₹12,000 (90 min)' },
        ]
      },
      {
        name: 'Body Treatments',
        items: [
          { name: 'Body Polishing & Scrub', price: '₹10,000' },
          { name: 'Detox & Skin Brightening Body Therapy', price: '₹14,000' },
        ]
      }
    ]
  },
  {
    category: 'Manicure & Pedicure Rituals',
    icon: <Zap className="text-gold" />,
    sections: [
      {
        name: 'Grooming Rituals',
        items: [
          { name: 'Classic Manicure & Pedicure', price: '₹3,500', desc: 'Essential grooming with cleansing, shaping & polish' },
          { name: 'Premium Manicure & Pedicure', price: '₹5,500', desc: 'Includes exfoliation, mask & relaxing massage' },
          { name: 'Luxury Spa Manicure & Pedicure', price: '₹8,000', desc: 'Indulgent treatment with extended massage, hydration & therapy care' },
        ]
      }
    ]
  },
  {
    category: 'Nail Extensions & Artistry',
    icon: <Brush className="text-gold" />,
    sections: [
      {
        name: 'Nail Extensions',
        items: [
          { name: 'Acrylic Nail Extensions', price: '₹4,500' },
          { name: 'Gel Nail Extensions', price: '₹5,000' },
          { name: 'Soft Gel Extensions (Lightweight & Natural Finish)', price: '₹5,500' },
        ]
      },
      {
        name: 'Nail Enhancements',
        items: [
          { name: 'Gel Polish Application', price: '₹1,500' },
          { name: 'Nail Refilling & Maintenance', price: '₹2,500' },
          { name: 'Nail Repair', price: '₹500 / nail' },
        ]
      },
      {
        name: 'Luxury Nail Art Studio',
        items: [
          { name: 'Premium Nail Art (Minimal | French | Chrome | Ombre)', price: 'Starting from ₹1,000' },
          { name: 'Advanced Designer Nails (3D | Swarovski | Bridal Nails)', price: 'Starting from ₹2,500' },
          { name: 'Trend-Based Graphic Nails', price: 'Upon Consultation' },
        ]
      }
    ]
  },
  {
    category: 'Eyelash Extensions & Lift',
    icon: <Eye className="text-gold" />,
    sections: [
      {
        name: 'Eyelash Extensions',
        items: [
          { name: 'Classic Lash Extensions (Natural Look)', price: '₹4,000' },
          { name: 'Volume Lash Extensions (Fuller & Dramatic)', price: '₹6,000' },
          { name: 'Hybrid Lash Extensions (Blend of Natural & Volume)', price: '₹5,500' },
        ]
      },
      {
        name: 'Lash Enhancements',
        items: [
          { name: 'Eyelash Lift (Natural Curl Enhancement)', price: '₹3,500' },
          { name: 'Lash Tint (Darker, Defined Lashes)', price: '₹1,500' },
        ]
      }
    ]
  },
  {
    category: 'PMU (Semi-Permanent Makeup)',
    icon: <User className="text-gold" />,
    sections: [
      {
        name: 'Brows',
        items: [
          { name: 'Microblading (Natural Hair Stroke Brows)', price: '₹25,000' },
          { name: 'Ombre / Powder Brows (Soft Shaded Finish)', price: '₹22,000' },
          { name: 'Combination Brows (Microblading + Shading)', price: '₹30,000' },
        ]
      },
      {
        name: 'Lips',
        items: [
          { name: 'Lip Blush (Natural Tint & Definition)', price: '₹20,000' },
          { name: 'Lip Neutralisation (Corrects Dark Lips)', price: '₹25,000' },
        ]
      },
      {
        name: 'Eyes',
        items: [
          { name: 'Eyeliner PMU (Subtle to Bold Definition)', price: '₹15,000' },
        ]
      }
    ]
  }
];

export default function Eluminus() {
  const whatsappNumber = "919876543210";
  
  const handleWhatsAppEnquiry = (itemName: string) => {
    const message = `Hi Vellisii, I'm interested in the "${itemName}" service from your menu. Could you please provide more details?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden mb-20">
        <img 
          src="/assets/images/eluminus-hero.png" 
          alt="Eluminus Master Menu" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Complete Atelier Menu</h5>
            <h1 className="text-6xl md:text-8xl font-serif mb-6 italic">Master <span className="text-white not-italic">Services</span></h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-light tracking-wide">
              Explore our exhaustive range of international beauty rituals, aesthetic treatments, and luxury wellness therapies.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        {allServices.map((category, catIdx) => (
          <div key={catIdx} className="mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 mb-16"
            >
              <div className="p-5 bg-gold/5 border border-gold/20 flex items-center justify-center">
                {category.icon}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif">{category.category}</h2>
            </motion.div>

            <div className="space-y-20">
              {category.sections.map((section, secIdx) => (secIdx % 2 === 0 ? (
                <div key={secIdx} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                   <div className="lg:col-span-4">
                      <h3 className="text-gold tracking-[0.3em] uppercase text-xs mb-4 font-bold border-l-2 border-gold pl-4">{section.name}</h3>
                      <p className="text-white/30 text-xs leading-relaxed uppercase tracking-tighter">Premium International <br />Techniques & Products</p>
                   </div>
                   <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="group border-b border-white/5 pb-6 hover:border-gold/30 transition-colors">
                           <div className="flex justify-between items-start mb-2">
                             <h4 className="text-lg font-serif group-hover:text-gold transition-colors">{item.name}</h4>
                             <span className="text-gold/80 italic font-serif text-sm">{item.price}</span>
                           </div>
                           {item.desc && <p className="text-white/40 text-[10px] mb-4 italic">{item.desc}</p>}
                           <button 
                             onClick={() => handleWhatsAppEnquiry(item.name)}
                             className="flex items-center space-x-2 text-white/40 text-[9px] tracking-widest uppercase font-bold hover:text-gold transition-colors"
                           >
                             <MessageCircle size={12} />
                             <span>Enquire</span>
                           </button>
                        </div>
                      ))}
                   </div>
                </div>
              ) : (
                <div key={secIdx} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                   <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 order-2 lg:order-1">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="group border-b border-white/5 pb-6 hover:border-gold/30 transition-colors">
                           <div className="flex justify-between items-start mb-2">
                             <h4 className="text-lg font-serif group-hover:text-gold transition-colors">{item.name}</h4>
                             <span className="text-gold/80 italic font-serif text-sm">{item.price}</span>
                           </div>
                           {item.desc && <p className="text-white/40 text-[10px] mb-4 italic">{item.desc}</p>}
                           <button 
                             onClick={() => handleWhatsAppEnquiry(item.name)}
                             className="flex items-center space-x-2 text-white/40 text-[9px] tracking-widest uppercase font-bold hover:text-gold transition-colors"
                           >
                             <MessageCircle size={12} />
                             <span>Enquire</span>
                           </button>
                        </div>
                      ))}
                   </div>
                   <div className="lg:col-span-4 text-right order-1 lg:order-2">
                      <h3 className="text-gold tracking-[0.3em] uppercase text-xs mb-4 font-bold border-r-2 border-gold pr-4">{section.name}</h3>
                      <p className="text-white/30 text-xs leading-relaxed uppercase tracking-tighter">Sterile Procedures <br />Master Artistry</p>
                   </div>
                </div>
              )))}
            </div>
          </div>
        ))}

        {/* PMU Note Section */}
        <div className="mt-20 p-12 glass border border-gold/10">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-gold text-xs tracking-widest uppercase mb-6 font-bold flex items-center">
                  <Info size={16} className="mr-2" />
                  PMU Excellence Protocol
                </h4>
                <ul className="space-y-4">
                  {['Consultation & Face Mapping', 'Premium Pigments & Hygiene Protocol', 'Touch-Up Sessions included'].map((note, i) => (
                    <li key={i} className="flex items-center space-x-3 text-white/60 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                 <p className="text-white/40 text-sm italic mb-6 leading-relaxed">
                   ✨ Customised consultations for every client <br />
                   ✨ International techniques | Premium products | Sterile procedures
                 </p>
                 <button 
                  onClick={() => handleWhatsAppEnquiry("Full PMU Consultation")}
                  className="px-8 py-4 bg-gold text-luxury-black text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-white transition-all"
                 >
                   Book Consultation
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
