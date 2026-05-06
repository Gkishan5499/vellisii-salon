import { motion } from 'motion/react';
import { ShoppingBag, MessageCircle, Droplets, Sparkles, Wind } from 'lucide-react';

const monsoonProducts = [
  {
    id: 'm1',
    name: 'Monsoon Hair Rescue Kit',
    description: 'A complete set to combat humidity-induced frizz and scalp irritation.',
    price: '₹4,500',
    image: '/assets/images/service-hair.png',
    type: 'Product'
  },
  {
    id: 'm2',
    name: 'Hydrating Scalp Treatment',
    description: 'Deeply nourishes the scalp to prevent seasonal dryness and dandruff.',
    price: '₹3,200',
    image: '/assets/images/service-skin.png',
    type: 'Service'
  },
  {
    id: 'm3',
    name: 'Anti-Frizz Gloss Serum',
    description: 'Luxury serum for a smooth, glass-like finish despite the rain.',
    price: '₹2,800',
    image: '/assets/images/gallery-hair-2.png',
    type: 'Product'
  },
  {
    id: 'm4',
    name: 'Moisture Lock Facial',
    description: '60-minute intensive hydration treatment for monsoon skin.',
    price: '₹5,500',
    image: '/assets/images/service-skin.png',
    type: 'Service'
  },
  {
    id: 'm5',
    name: 'Rain-Ready Hair Mask',
    description: 'Intensive conditioning mask that repels moisture and locks in shine.',
    price: '₹1,950',
    image: '/assets/images/hero-artistry.png',
    type: 'Product'
  },
  {
    id: 'm6',
    name: 'Scalp Detox Therapy',
    description: 'Purifying treatment to remove buildup and soothe oily scalps.',
    price: '₹3,500',
    image: '/assets/images/hero-science.png',
    type: 'Service'
  },
  {
    id: 'm7',
    name: 'Humidity Control Spray',
    description: 'Weightless spray that creates an invisible shield against frizz.',
    price: '₹2,100',
    image: '/assets/images/service-hair.png',
    type: 'Product'
  },
  {
    id: 'm8',
    name: 'Post-Rain Glow Facial',
    description: 'Revitalizing facial to restore radiance after exposure to environmental stress.',
    price: '₹4,200',
    image: '/assets/images/service-skin.png',
    type: 'Service'
  },
  {
    id: 'm9',
    name: 'Nourishing Cuticle Oil',
    description: 'Stronger, healthier nails despite the damp monsoon weather.',
    price: '₹850',
    image: '/assets/images/service-nails.png',
    type: 'Product'
  },
  {
    id: 'm10',
    name: 'Volumizing Shampoo Ritual',
    description: 'Lifts limp monsoon hair from the roots for lasting body.',
    price: '₹2,400',
    image: '/assets/images/gallery-hair-2.png',
    type: 'Product'
  }
];

export default function Mansoon() {
  const whatsappNumber = "919876543210";
  
  const handleWhatsAppEnquiry = (itemName: string) => {
    const message = `Hi Vellisii, I'm interested in the "${itemName}" from your Monsoon Collection. Could you provide more details?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden mb-20">
        <img 
          src="/assets/images/mansoon-hero.png" 
          alt="Monsoon Collection" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center space-x-4 mb-6">
              <Droplets className="text-gold animate-bounce" size={24} />
              <Wind className="text-gold/60" size={24} />
            </div>
            <h5 className="text-gold tracking-[0.5em] uppercase text-xs mb-4">Seasonal Special</h5>
            <h1 className="text-6xl md:text-8xl font-serif mb-6">Mansoon <span className="italic">Collection</span></h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-light tracking-wide">
              Embrace the rain with our specially curated range of products and services designed to keep you radiant all season long.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Product/Service Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {monsoonProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass group flex flex-col sm:flex-row overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-full sm:w-2/5 aspect-square sm:aspect-auto overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-gold/60 tracking-[0.2em] uppercase text-[10px] font-medium border border-gold/20 px-2 py-1 flex items-center">
                      <Sparkles size={10} className="mr-1" />
                      {product.type}
                    </span>
                    <span className="text-gold font-serif italic text-lg">{product.price}</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>
                
                <button 
                  onClick={() => handleWhatsAppEnquiry(product.name)}
                  className="w-full py-4 bg-transparent border border-gold/30 text-gold text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-gold hover:text-luxury-black transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <MessageCircle size={14} />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 p-12 glass border border-gold/10 text-center">
          <ShoppingBag className="text-gold mx-auto mb-6" size={32} />
          <h2 className="text-3xl font-serif mb-6">Don't See What You're Looking For?</h2>
          <p className="text-white/40 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
            Our full catalog of luxury products is available for enquiry. Reach out to our concierge for personalized recommendations.
          </p>
          <button 
            onClick={() => handleWhatsAppEnquiry("Custom Monsoon Inquiry")}
            className="px-10 py-4 bg-gold text-luxury-black text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-white transition-all duration-300"
          >
            Chat with Concierge
          </button>
        </div>
      </div>
    </div>
  );
}
