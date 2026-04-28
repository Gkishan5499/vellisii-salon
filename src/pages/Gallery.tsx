import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

const categories = ['All', 'Hair', 'Skin', 'Nails', 'Interiors'];

const galleryItems = [
  { id: 1, type: 'Hair', image: '/assets/images/service-hair.png', title: 'Signature Style' },
  { id: 2, type: 'Skin', image: '/assets/images/service-skin.png', title: 'Radiance Glow' },
  { id: 3, type: 'Nails', image: '/assets/images/service-nails.png', title: 'Luxury Manicure' },
  { id: 4, type: 'Interiors', image: '/assets/images/hero-heritage.png', title: 'The Main Suite' },
  { id: 5, type: 'Hair', image: '/assets/images/gallery-hair-2.png', title: 'Precision Cut' },
  { id: 6, type: 'Skin', image: '/assets/images/gallery-skin-2.png', title: 'Dermal Therapy' },
  { id: 7, type: 'Nails', image: '/assets/images/service-nails.png', title: 'Bespoke Art' },
  { id: 8, type: 'Interiors', image: '/assets/images/salon-interior-2.png', title: 'Private Cabin' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter);

  return (
    <div className="pt-32 bg-luxury-black min-h-screen pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Portfolio</h5>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight italic">Our <span className="not-italic">Masterpieces</span></h1>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 text-[10px] tracking-[0.3em] uppercase font-bold transition-all border ${
                  filter === cat ? 'bg-gold text-luxury-black border-gold' : 'border-white/10 text-white/40 hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-square overflow-hidden cursor-zoom-in"
                onClick={() => setSelectedImage(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 border-2 border-gold/40 border-inset">
                   <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-1">{item.type}</p>
                      <h4 className="text-xl font-serif">{item.title}</h4>
                      <Maximize2 size={16} className="text-white/40 mt-4" />
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-luxury-black/95 flex items-center justify-center p-6 lg:p-20"
            onClick={() => setSelectedImage(null)}
          >
             <button 
               className="absolute top-10 right-10 text-gold hover:text-white transition-colors"
               onClick={() => setSelectedImage(null)}
             >
                <X size={40} />
             </button>
             <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={selectedImage} 
                alt="Fullscreen Preview" 
                className="max-w-full max-h-full object-contain shadow-2xl shadow-gold/20"
             />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
