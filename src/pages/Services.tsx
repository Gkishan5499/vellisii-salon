import { motion } from 'motion/react';
import { Scissors, Sparkles, Heart, Zap, Info } from 'lucide-react';

const serviceCategories = [
  {
    id: 'hair',
    title: 'Hair Services',
    icon: <Scissors className="text-gold" />,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
    sections: [
      {
        name: 'Haircuts & Styling',
        items: [
          { name: 'Creative Haircut (Men/Women)', price: 'Starting from $60' },
          { name: 'Advanced Designer Cut (Senior Stylist)', price: 'Starting from $90' },
          { name: 'Shampoo & Luxury Blow Dry', price: 'Starting from $45' },
          { name: 'Ironing / Curling / Tong Styling', price: 'Starting from $50' },
          { name: 'Bridal & Occasion Hair Styling', price: 'Upon Consultation' },
        ]
      },
      {
        name: 'Hair Treatments',
        items: [
          { name: 'Signature Hair Spa Rituals', price: 'Starting from $80' },
          { name: 'Keratin / Smoothening', price: 'Starting from $250' },
          { name: 'Hair Botox Therapy', price: 'Starting from $300' },
          { name: 'Scalp Detox & Anti-Dandruff', price: 'Starting from $70' },
        ]
      }
    ]
  },
  {
    id: 'skin',
    title: 'Skin & Facial Therapies',
    icon: <Sparkles className="text-gold" />,
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=1200',
    sections: [
      {
        name: 'Luxury Facials',
        items: [
          { name: 'Classic Clean-Up', price: '$50' },
          { name: 'Gold / Diamond Facial', price: '$120' },
          { name: 'Pigmentation Control', price: '$150' },
        ]
      },
      {
        name: 'Advanced Aesthetics',
        items: [
          { name: 'HydraFacial (Customised)', price: '$200' },
          { name: 'Carboxy Facial', price: '$180' },
          { name: 'BB Glow Treatment', price: '$220' },
        ]
      }
    ]
  },
  {
    id: 'wellness',
    title: 'Spa & Wellness',
    icon: <Heart className="text-gold" />,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200',
    sections: [
      {
        name: 'Body Therapy',
        items: [
          { name: 'Swedish Massage', price: '$100 (60 min)' },
          { name: 'Deep Tissue Therapy', price: '$130 (60 min)' },
          { name: 'Aroma Therapy', price: '$110 (60 min)' },
          { name: 'Hot Stone Therapy', price: '$150 (90 min)' },
          { name: 'Body Polishing', price: '$120' },
        ]
      }
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">The Collection</h5>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Our <span className="italic">Exquisite</span> Services</h1>
          <p className="text-white/40 max-w-2xl mx-auto text-sm leading-relaxed tracking-wide">
            Indulge in a curated selection of premium beauty treatments designed to revitalize your body and soul.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32 space-y-32">
        {serviceCategories.map((category, catIdx) => (
          <div key={category.id} className={`flex flex-col lg:flex-row gap-16 ${catIdx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[4/5] overflow-hidden group">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                   <div className="flex items-center space-x-3 mb-2">
                     <div className="p-3 bg-gold/10 backdrop-blur-md border border-gold/20 flex items-center justify-center">
                       {category.icon}
                     </div>
                     <span className="text-gold tracking-[0.3em] uppercase text-[10px]">Premium Care</span>
                   </div>
                   <h2 className="text-4xl font-serif">{category.title}</h2>
                </div>
              </div>
            </motion.div>

            {/* Menu Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              {category.sections.map((section, secIdx) => (
                <div key={secIdx} className="mb-12">
                  <h4 className="text-gold tracking-widest uppercase text-xs mb-8 border-b border-gold/10 pb-4 flex items-center">
                    <Zap size={14} className="mr-2" />
                    {section.name}
                  </h4>
                  <div className="space-y-6">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-end border-b border-white/5 pb-2 group cursor-default">
                        <div>
                          <p className="text-lg font-light text-white group-hover:text-gold transition-colors">{item.name}</p>
                          <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Professional Procedure</p>
                        </div>
                        <span className="text-gold/80 italic font-serif text-sm">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-4 p-6 glass flex items-start space-x-4">
                 <Info size={18} className="text-gold mt-1 flex-shrink-0" />
                 <p className="text-white/40 text-xs leading-relaxed italic">
                   Note: Prices are subject to change based on consultation, hair length, and skin complexity. We recommend a personalized consultation before booking premium treatments.
                 </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
