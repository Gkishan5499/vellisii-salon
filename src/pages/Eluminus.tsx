import { motion } from 'motion/react';
import { Sparkles, MessageCircle, Scissors, Heart, Eye, Brush, User, Gem, Info, Zap } from 'lucide-react';

type ServiceItem = {
  name: string;
  price: string;
  desc?: string;
};

type ServiceSection = {
  name: string;
  items: ServiceItem[];
};

type ServiceCategory = {
  category: string;
  icon: React.ReactNode;
  sections: ServiceSection[];
};

const allServices: ServiceCategory[] = [
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Complete Atelier Menu</h5>
            <h1 className="text-6xl md:text-8xl font-serif mb-6 italic">
              Master <span className="text-white not-italic">Services</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-light tracking-wide">
              Explore our exhaustive range of international beauty rituals, aesthetic treatments, and luxury wellness therapies.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-gold/70 text-[10px] tracking-[0.45em] uppercase mb-4">Eluminus Menu</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif max-w-3xl leading-tight">
              A curated service catalogue for every beauty ritual.
            </h2>
          </div>
          <div className="max-w-md text-white/45 text-sm leading-relaxed">
            Explore the collection by category. Each service is presented with clear pricing, premium techniques, and a quick WhatsApp enquiry option.
          </div>
        </div>

        <div className="space-y-12">
          {allServices.map((category, catIdx) => (
            <motion.article
              key={catIdx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIdx * 0.04 }}
              className={`relative overflow-hidden border rounded-[2rem] bg-white/[0.02] backdrop-blur-sm ${catIdx % 2 === 0 ? 'border-gold/10' : 'border-white/10'}`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex items-start gap-5">
                    <div className="h-14 w-14 rounded-2xl border border-gold/20 bg-gold/5 flex items-center justify-center shrink-0">
                      {category.icon}
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.45em] uppercase text-white/40 mb-2">Service Category</p>
                      <h3 className="text-3xl md:text-4xl font-serif">{category.category}</h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-[10px] tracking-[0.3em] uppercase text-white/50">
                    <span className="px-4 py-2 rounded-full border border-white/10">{category.sections.length} sections</span>
                    <span className="px-4 py-2 rounded-full border border-white/10">Premium pricing</span>
                    <span className="px-4 py-2 rounded-full border border-white/10">WhatsApp enquiry</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {category.sections.map((section, secIdx) => (
                    <div key={secIdx} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6 md:p-7">
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div>
                          <p className="text-gold text-[10px] tracking-[0.4em] uppercase mb-2">
                            {String(secIdx + 1).padStart(2, '0')}
                          </p>
                          <h4 className="text-xl md:text-2xl font-serif">{section.name}</h4>
                        </div>
                        <span className="text-white/35 text-[10px] tracking-[0.35em] uppercase text-right leading-4">
                          {section.items.length} services
                        </span>
                      </div>

                      <div className="space-y-4">
                        {section.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="group rounded-2xl border border-white/5 bg-white/[0.02] p-4 md:p-5 hover:border-gold/25 hover:bg-gold/[0.03] transition-all"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                              <h5 className="text-base md:text-lg font-serif group-hover:text-gold transition-colors">
                                {item.name}
                              </h5>
                              <span className="text-gold/85 italic font-serif text-sm shrink-0">{item.price}</span>
                            </div>

                            {item.desc && (
                              <p className="text-white/40 text-xs md:text-[13px] italic leading-relaxed mb-4">
                                {item.desc}
                              </p>
                            )}

                            <button
                              onClick={() => handleWhatsAppEnquiry(item.name)}
                              className="inline-flex items-center gap-2 text-white/45 text-[10px] tracking-[0.35em] uppercase font-bold hover:text-gold transition-colors"
                            >
                              <MessageCircle size={12} />
                              <span>Enquire on WhatsApp</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

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
                onClick={() => handleWhatsAppEnquiry('Full PMU Consultation')}
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
