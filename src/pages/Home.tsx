import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

const slides = [
  {
    tagline: 'The Apex of Beauty',
    title: 'Step Into',
    subtitle: 'Luxury.',
    extra: 'Transformation',
    desc: 'At Vellisii, we blend international expertise with bespoke luxury to craft your perfect aesthetic journey.',
    image: '/assets/images/hero-heritage.png'
  },
  {
    tagline: 'Artistry Defined',
    title: 'Masterful',
    subtitle: 'Scalp Rituals.',
    extra: 'Artistry',
    desc: 'Experience the precision of world-class stylists in an environment designed for total indulgence and creative expression.',
    image: '/assets/images/hero-artistry.png'
  },
  {
    tagline: 'Scientific Radiance',
    title: 'Advanced',
    subtitle: 'Aesthetics.',
    extra: 'Radiance',
    desc: 'Discover the future of skincare with our medical-grade therapies and holistic wellness rituals tailored for your unique skin.',
    image: '/assets/images/hero-science.png'
  }
];

const services = [
  {
    title: 'Eluminus Range',
    image: '/assets/images/eluminus-hero.png',
    desc: 'Advanced hair molecular technology for extraordinary shine.',
    path: '/eluminus'
  },
  {
    title: 'Mansoon Special',
    image: '/assets/images/mansoon-hero.png',
    desc: 'Seasonal hair and skin rescue rituals for humid weather.',
    path: '/mansoon'
  },
  {
    title: 'Bridal Artistry',
    image: '/assets/images/bridal-hero.png',
    desc: 'Bespoke bridal transformations for your special day.',
    path: '/bridal'
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-luxury-black overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: y1 }}
            className="absolute inset-0 z-0 scale-110"
          >
            <img 
              src={slides[currentSlide].image} 
              alt="Vellisii Salon Hero"
              className="w-full h-full object-cover brightness-[0.35]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-48 md:pt-64">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              style={{ opacity }}
              className="lg:col-span-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center space-x-4 mb-10 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: 40 }}
                      className="h-[1px] bg-gold"
                    />
                    <span className="text-gold tracking-[0.5em] uppercase text-[10px] md:text-xs font-medium">
                      {slides[currentSlide].tagline}
                    </span>
                  </div>

                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-[0.95] tracking-tight">
                    {slides[currentSlide].title} <span className="italic text-gold block md:inline">{slides[currentSlide].subtitle}</span><br />
                    <span className="font-light">{slides[currentSlide].extra}</span>
                    <span className="text-gold">.</span>
                  </h1>
                  
                  <p className="text-white/60 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-light">
                    {slides[currentSlide].desc}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
                    <Link to="/book" className="group relative px-12 py-6 bg-gold overflow-hidden">
                      <motion.div 
                        initial={false}
                        whileHover={{ x: '100%' }}
                        className="absolute inset-0 bg-white/20 -translate-x-full"
                      />
                      <span className="relative z-10 text-luxury-black font-bold tracking-[0.3em] text-xs uppercase flex items-center">
                        Reserve Experience <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </span>
                    </Link>
                    
                    <Link to="/eluminus" className="group flex items-center space-x-4 text-white text-xs tracking-[0.3em] uppercase font-medium hover:text-gold transition-colors">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors">
                        <Play size={14} className="fill-current ml-1" />
                      </div>
                      <span>Explore Eluminus</span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-center space-y-20">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-32 h-32 rounded-full border border-gold/30 flex flex-col items-center justify-center glass relative"
              >
                <div className="absolute inset-0 border border-gold/10 rounded-full animate-ping opacity-20" />
                <span className="text-gold font-serif text-2xl">V</span>
                <span className="text-[8px] text-white/40 tracking-[0.3em] uppercase mt-1">Est 2018</span>
              </motion.div>

              <div className="flex flex-col items-end space-y-6">
                <div className="flex flex-col space-y-4">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className="group flex items-center space-x-3"
                    >
                      <span className={`text-[10px] tracking-widest uppercase transition-all duration-500 ${currentSlide === idx ? 'text-gold opacity-100' : 'text-white/20 group-hover:text-white/40'}`}>
                        {idx === 0 ? 'Heritage' : idx === 1 ? 'Artistry' : 'Science'}
                      </span>
                      <div className={`w-12 h-[1px] transition-all duration-700 ${currentSlide === idx ? 'bg-gold w-16' : 'bg-white/10 w-8'}`} />
                    </button>
                  ))}
                </div>
                <div className="flex flex-col items-end space-y-4 pt-10">
                  <span className="text-white/20 text-[10px] tracking-widest uppercase [writing-mode:vertical-rl]">Scroll to Discover</span>
                  <div className="w-[1px] h-32 bg-gradient-to-b from-gold/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 hidden md:block">
           <div className="flex items-center space-x-4 text-white/20 text-[10px] tracking-[0.5em] uppercase font-light">
              <span className="text-gold font-medium">0{currentSlide + 1}</span>
              <div className="w-10 h-[1px] bg-white/10" />
              <span>0{slides.length}</span>
           </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Why <span className="text-gold italic">Vellisii</span> is the Preferred Luxury Choice
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Premium International Products", desc: "We use only the world's finest organic and scientific beauty care." },
                  { title: "Certified & Experienced Stylists", desc: "Our team consists of industry veterans trained globally." },
                  { title: "Hygienic Luxury Environment", desc: "Medical-grade sanitation meeting a 5-star spa experience." },
                  { title: "Advanced Skin Technologies", desc: "State-of-the-art HydraFacial and Laser therapies." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="mt-1 w-6 h-6 rounded-full border border-gold flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">{item.title}</h4>
                      <p className="text-white/40 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <div className="aspect-[4/5] bg-luxury-black border border-gold/20 p-4">
                <img 
                  src="/assets/images/stylist-working.png" 
                  alt="Stylist working"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-8 hidden md:block max-w-xs">
                <p className="text-gold italic font-serif text-xl mb-2">"True beauty is a reflection of your well-being."</p>
                <p className="text-white/40 text-[10px] tracking-widest uppercase">Vellisii Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-32 bg-white/5 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h5 className="text-gold tracking-[0.4em] uppercase text-sm mb-4">Our Craft</h5>
              <h2 className="text-4xl md:text-6xl font-serif">Signature <span className="italic">Experiences</span></h2>
            </div>
            <Link to="/eluminus" className="group flex items-center space-x-3 text-gold tracking-[0.2em] uppercase text-xs">
              <span>Explore Collections</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative h-[500px] overflow-hidden cursor-pointer"
                onClick={() => window.location.href = service.path}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 brightness-75 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-serif mb-4">{service.title}</h3>
                  <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="w-12 h-[2px] bg-gold group-hover:w-full transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: THE HAIR ATELIER */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Elegance in Motion</h5>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">The <span className="italic">Hair</span> Atelier</h2>
                <p className="text-white/50 text-lg leading-relaxed mb-10 font-light">
                  From precision creative cuts to advanced hair botox and global color rituals, we redefine the standard of hair artistry.
                </p>
                <ul className="space-y-6 mb-12">
                  {['Designer Haircuts', 'Balayage & Ombre', 'Keratin Smoothing', 'Scalp Detox Therapy'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-white/80 tracking-widest text-xs uppercase border-b border-white/5 pb-4">
                      <span className="text-gold">0{i+1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/eluminus" className="text-gold border-b border-gold/30 hover:border-gold pb-1 text-xs tracking-widest uppercase transition-all inline-block">
                  Discover Eluminus
                </Link>
              </motion.div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-6 h-[600px]">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-full pt-12"
              >
                <img 
                  src="/assets/images/service-hair.png" 
                  alt="Hair Color" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-none"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-full pb-12"
              >
                <img 
                  src="/assets/images/hero-artistry.png" 
                  alt="Hair Styling" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-none border border-gold/20 p-2"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: SKIN & WELLNESS BENTO */}
      <section className="py-32 bg-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Scientific Beauty</h5>
            <h2 className="text-4xl md:text-6xl font-serif">Advanced <span className="italic">Aesthetic</span> Care</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[auto] md:h-[700px]">
             <motion.div 
               whileHover={{ scale: 0.98 }}
               className="md:col-span-2 md:row-span-2 relative overflow-hidden group cursor-pointer"
             >
                <img src="/assets/images/hero-science.png" className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-[2s]" alt="Skin" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-luxury-black via-transparent to-transparent">
                  <h3 className="text-3xl font-serif mb-2">HydraFacial Elite</h3>
                  <p className="text-gold tracking-widest text-[10px] uppercase">Scientific Excellence</p>
                </div>
             </motion.div>

             <motion.div 
               whileHover={{ scale: 0.98 }}
               className="md:col-span-2 md:row-span-1 relative overflow-hidden group cursor-pointer"
             >
                <img src="/assets/images/massage-wellness.png" className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-[2s]" alt="Massage" />
                <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end bg-gradient-to-t from-luxury-black to-transparent">
                   <h3 className="text-2xl font-serif">Body Wellness</h3>
                   <ArrowRight className="text-gold group-hover:translate-x-2 transition-transform" />
                </div>
             </motion.div>

             <motion.div 
               whileHover={{ scale: 0.98 }}
               className="md:col-span-1 md:row-span-1 relative overflow-hidden group cursor-pointer"
             >
                <img src="/assets/images/service-nails.png" className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-[2s]" alt="Nails" />
                <div className="absolute inset-0 p-6 flex flex-col justify-center text-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                   <h3 className="text-xl font-serif">Nail Artistry</h3>
                   <p className="text-gold text-[8px] tracking-widest uppercase mt-2">Bespoke Designs</p>
                </div>
             </motion.div>

             <motion.div 
               whileHover={{ scale: 0.98 }}
               className="md:col-span-1 md:row-span-1 relative overflow-hidden group cursor-pointer bg-gold p-8 flex flex-col justify-center text-luxury-black"
             >
                <h3 className="text-xl font-serif mb-4 italic">The <br />Difference</h3>
                <p className="text-xs leading-relaxed uppercase tracking-tighter opacity-70">Medical Grade <br />Consultation <br />Before Every <br />Session.</p>
                <Link to="/book" className="mt-6 text-[10px] tracking-widest font-bold uppercase border-b border-luxury-black inline-block">Book Skin Analysis</Link>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-gold fill-gold" />)}
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-4xl font-serif italic mb-12 leading-relaxed"
          >
            "Vellisii isn't just a salon, it's a sanctuary. The attention to detail in their hair rituals and the sheer luxury of the space transformed how I feel about my self-care."
          </motion.p>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold mb-4">
              <img src="/assets/images/client-testimonial.png" alt="Client" />
            </div>
            <h5 className="text-white tracking-widest text-sm uppercase">Eleanor Sterling</h5>
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase mt-1">Loyal Guest</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold z-0 transform -skew-y-3 translate-y-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-luxury-black">
          <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-tight">
            Ready for Your <br />
            <span className="italic">Luxury Experience?</span>
          </h2>
          <Link 
            to="/book" 
            className="inline-block px-12 py-6 bg-luxury-black text-gold text-sm tracking-[0.4em] uppercase font-bold hover:bg-white transition-colors"
          >
            Confirm Your Booking
          </Link>
        </div>
      </section>
    </div>
  );
}
