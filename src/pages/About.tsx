import { motion } from 'motion/react';
import { Instagram, Star, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4 font-medium">Our Story</h5>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">Where Science Meets <span className="italic">Elegance</span></h1>
          <p className="text-white/60 text-lg leading-relaxed mb-8 font-light">
            Founded in 2018, Vellisii Salon was born from a vision to redefine the luxury beauty experience. We believe that professional self-care should be more than a service—it should be a ritual of transformation.
          </p>
          <p className="text-white/40 text-sm leading-relaxed mb-12">
            Our atelier brings together international expertise, medical-grade hygiene, and the finest organic products to ensure every client leaves not just looking their best, but feeling renewed.
          </p>
          
          <div className="grid grid-cols-3 gap-8">
             <div>
                <p className="text-gold font-serif text-3xl mb-1">10k+</p>
                <p className="text-white/30 uppercase text-[9px] tracking-widest font-bold">Happy Clients</p>
             </div>
             <div>
                <p className="text-gold font-serif text-3xl mb-1">15+</p>
                <p className="text-white/30 uppercase text-[9px] tracking-widest font-bold">Master Stylists</p>
             </div>
             <div>
                <p className="text-gold font-serif text-3xl mb-1">08</p>
                <p className="text-white/30 uppercase text-[9px] tracking-widest font-bold">Industry Awards</p>
             </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="aspect-[3/4] border border-gold/20 p-4">
             <img 
               src="/assets/images/hero-heritage.png" 
               alt="Modern Salon Interior" 
               className="w-full h-full object-cover grayscale brightness-75"
             />
          </div>
          <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 hidden xl:block">
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-32 h-32 glass rounded-full flex items-center justify-center p-4 border-gold/30"
            >
               <span className="text-center text-gold text-[8px] tracking-widest uppercase font-bold leading-tight">
                 Est. 2018 • Luxury Excellence •
               </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-20 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 italic text-gold">The Pillars of Vellisii</h2>
              <p className="text-white/40 text-sm tracking-wide">Our commitment to excellence is guided by these core principles.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  icon: <Award className="text-gold" />, 
                  title: "Precision Craft", 
                  desc: "Every cut, color, and treatment is executed with millimeter-perfect precision by certified master artists." 
                },
                { 
                  icon: <Users className="text-gold" />, 
                  title: "Personalized Care", 
                  desc: "We don't believe in templates. Every ritual begins with a deep aesthetic consultation tailored to your unique features." 
                },
                { 
                  icon: <Star className="text-gold" />, 
                  title: "Exclusive Products", 
                  desc: "We partner with brands like Oribe, Kérastase, and Biologique Recherche to provide the world's most elite care." 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="glass p-10 text-center space-y-6"
                >
                   <div className="w-16 h-16 rounded-full glass border border-gold/20 flex items-center justify-center mx-auto mb-8">
                     {item.icon}
                   </div>
                   <h4 className="text-xl font-serif">{item.title}</h4>
                   <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Social Join */}
      <section className="py-32 text-center max-w-7xl mx-auto px-6">
         <h3 className="text-3xl font-serif mb-6 italic">Stay Connected with Our <span className="text-gold">World</span></h3>
         <p className="text-white/40 mb-12 max-w-xl mx-auto text-sm">Join our Instagram community for daily transformations, expert tips, and behind-the-scenes magic from Vellisii.</p>
         <button className="flex items-center space-x-3 bg-white text-luxury-black px-10 py-5 mx-auto font-bold tracking-widest text-xs uppercase hover:bg-gold transition-colors">
           <Instagram size={18} />
           <span>Follow @Vellisii_Salon</span>
         </button>
      </section>
    </div>
  );
}
