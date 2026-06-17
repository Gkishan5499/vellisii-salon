import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Star, Award, Users, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const monsoonTeamPhotos = [
  { image: '/assets/images/mansoon_team.jpeg', caption: 'The Monsoon Master Atelier Team' },
  { image: '/assets/images/mansoon_team2.jpeg', caption: 'Creative Dialogue & Styling Session' },
  { image: '/assets/images/mansoon_team3.jpeg', caption: 'Precision Execution & Finishing' }
];

const teamCategories = {
  monsoon: {
    title: 'Monsoon Salon Atelier',
    description: 'Our master stylists, color specialists, and nail artists at the Monsoon Atelier.',
    members: [
      {
        name: 'Asif Malik',
        role: 'Creative Director & Master Stylist',
        image: '/assets/images/asif_malik.jpeg',
        specialty: 'Precision Cuts, Structural Transformations, Runway Styling',
        experience: '12+ Years Experience'
      },
      {
        name: 'Kabita Tamang',
        role: 'Senior Beauty Therapist & Skin Expert',
        image: '/assets/images/kabita_tamang.jpeg',
        specialty: 'Signature Spa Rituals, Marine Facials, Deep Hydration',
        experience: '8+ Years Experience'
      },
      {
        name: 'Migdam Welly',
        role: 'Senior Nail Architect & Art Specialist',
        image: '/assets/images/migdam_welly.jpeg',
        specialty: 'Acrylic Extensions, 3D Nail Art, Swarovski Detailing',
        experience: '6+ Years Experience'
      },
      {
        name: 'Nia Pao',
        role: 'Professional Lash & PMU Artist',
        image: '/assets/images/nia_pao.jpeg',
        specialty: 'Microblading, Lip Blush, Volume Lash Extensions',
        experience: '7+ Years Experience'
      },
      {
        name: 'Wikom Socia',
        role: 'Advanced Body Wellness Specialist',
        image: '/assets/images/wikom_socia.jpeg',
        specialty: 'Deep Tissue Therapy, Hot Stone Recovery, Lymphatic Detox',
        experience: '9+ Years Experience'
      }
    ]
  },
  illumis: {
    title: 'Illumis Aesthetic Clinic',
    description: 'Our certified clinical dermatologists and medical aesthetic specialists.',
    members: [
      {
        name: 'Dr. Ngayir Rida',
        role: 'Lead Aesthetic Dermatologist',
        image: '/assets/images/Dr_Ngayir_Rida.jpeg',
        specialty: 'Botox, Fillers, PDRN DNA Therapy, Exosomes, Advanced Laser Mapping',
        experience: '9+ Years Experience'
      }
    ]
  }
};

export default function About() {
  const [activeTab, setActiveTab] = useState<'monsoon' | 'illumis'>('monsoon');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);

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

      {/* Team Portal */}
      <section className="py-32 bg-luxury-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Our Artisans</h5>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">The Minds Behind <span className="italic">the Mastery</span></h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Vellisii brings together the best of both worlds: master styling at the Monsoon Atelier and advanced medical cosmetics at Illumis Clinic.
            </p>

            {/* Brand Toggles */}
            <div className="flex border border-white/10 p-1 bg-white/[0.02] max-w-md mx-auto mt-12 rounded-xl">
              <button
                type="button"
                onClick={() => setActiveTab('monsoon')}
                className={`flex-1 py-3 text-[10px] tracking-[0.2em] font-bold uppercase transition-all rounded-lg cursor-pointer ${
                  activeTab === 'monsoon' ? 'bg-gold text-luxury-black font-extrabold' : 'text-white/40 hover:text-white'
                }`}
              >
                Monsoon Atelier
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('illumis')}
                className={`flex-1 py-3 text-[10px] tracking-[0.2em] font-bold uppercase transition-all rounded-lg cursor-pointer ${
                  activeTab === 'illumis' ? 'bg-gold text-luxury-black font-extrabold' : 'text-white/40 hover:text-white'
                }`}
              >
                Illumis Clinic
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'monsoon' ? (
              <motion.div
                key="monsoon-team"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-16"
              >
                {/* Monsoon group photo slider */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    <div className="relative aspect-[16/10] overflow-hidden border border-gold/10 bg-neutral-900 group">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentTeamSlide}
                          src={monsoonTeamPhotos[currentTeamSlide].image}
                          alt={monsoonTeamPhotos[currentTeamSlide].caption}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.6 }}
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      {/* Controls */}
                      <button
                        type="button"
                        onClick={() => setCurrentTeamSlide(prev => (prev - 1 + monsoonTeamPhotos.length) % monsoonTeamPhotos.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-gold text-white hover:text-black border border-white/10 hover:border-gold flex items-center justify-center transition-all cursor-pointer z-10"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentTeamSlide(prev => (prev + 1) % monsoonTeamPhotos.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-gold text-white hover:text-black border border-white/10 hover:border-gold flex items-center justify-center transition-all cursor-pointer z-10"
                      >
                        <ChevronRight size={20} />
                      </button>

                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                        <p className="text-xs tracking-wider text-white font-montserrat uppercase font-semibold">
                          {monsoonTeamPhotos[currentTeamSlide].caption}
                        </p>
                        <div className="flex gap-2">
                          {monsoonTeamPhotos.map((_, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setCurrentTeamSlide(idx)}
                              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                                currentTeamSlide === idx ? 'bg-gold w-6' : 'bg-white/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <span className="text-gold tracking-[0.45em] uppercase text-[10px] mb-3 font-semibold block">The Atelier Collective</span>
                    <h3 className="text-3xl font-serif mb-6 leading-tight">Master Artisans & Stylists</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                      The team at our Monsoon Salon Atelier represents the absolute pinnacle of artistic hairdressing, precision nail design, and customized cosmetic enhancement. Trained globally, our artists specialize in hair textures, styles, and custom PMU mapping.
                    </p>
                    <div className="flex gap-8 border-t border-white/5 pt-6 mt-2">
                      <div>
                        <h4 className="text-2xl font-serif text-gold">15+</h4>
                        <p className="text-[9px] tracking-widest uppercase text-white/40 font-bold mt-1">Creative Staff</p>
                      </div>
                      <div>
                        <h4 className="text-2xl font-serif text-gold">8+ Years</h4>
                        <p className="text-[9px] tracking-widest uppercase text-white/40 font-bold mt-1">Avg Experience</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Individual Members Grid */}
                {/* 
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {teamCategories.monsoon.members.map((stylist) => (
                    <motion.div
                      key={stylist.name}
                      whileHover={{ y: -8 }}
                      className="glass border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full group hover:border-gold/25 transition-all duration-300"
                    >
                      <div className="aspect-[4/5] overflow-hidden relative">
                        <img
                          src={stylist.image}
                          alt={stylist.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-[1s] group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-luxury-black/80 backdrop-blur-md px-3 py-1.5 border border-white/5 text-[8px] tracking-widest text-gold uppercase font-bold">
                          {stylist.experience}
                        </div>
                      </div>
                      <div className="p-5 flex-grow flex flex-col justify-between">
                        <div>
                          <h4 className="text-lg font-serif text-white group-hover:text-gold transition-colors font-medium mb-1">
                            {stylist.name}
                          </h4>
                          <p className="text-gold text-[9px] tracking-widest uppercase font-semibold mb-3">
                            {stylist.role}
                          </p>
                          <p className="text-white/50 text-[11px] font-light leading-relaxed font-sans">
                            {stylist.specialty}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                */}
              </motion.div>
            ) : (
              <motion.div
                key="illumis-team"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                {teamCategories.illumis.members.map((spec) => (
                  <div
                    key={spec.name}
                    className="glass border border-gold/15 p-8 md:p-12 rounded-[2rem] relative overflow-hidden flex flex-col md:flex-row gap-8 md:gap-12 items-center"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                    
                    <div className="w-48 h-60 shrink-0 border border-gold/25 p-2 bg-neutral-950 relative overflow-hidden">
                      <img
                        src={spec.image}
                        alt={spec.name}
                        className="w-full h-full object-cover grayscale"
                      />
                      <div className="absolute bottom-4 left-4 bg-luxury-black/95 px-3 py-1 border border-gold/20 text-[9px] tracking-widest text-gold uppercase font-bold">
                        Aesthetics
                      </div>
                    </div>

                    <div className="flex-grow">
                      <span className="text-gold tracking-[0.3em] uppercase text-[10px] mb-2 font-bold block">
                        {spec.role}
                      </span>
                      <h3 className="text-3xl font-serif text-white mb-4">
                        {spec.name}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                        Dr. Ngayir Rida represents the clinical-medical foundation of Vellisii Clinic. With comprehensive dermatological training and deep experience in anti-aging injection methods, PDRN DNA cell reconstruction and exosome therapies, she ensures all clinical treatments are safe, highly scientific, and yield premium aesthetic outcomes.
                      </p>
                      
                      <div className="mb-6">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-bold mb-2">Primary Competencies</p>
                        <p className="text-gold text-xs leading-relaxed font-montserrat">
                          {spec.specialty}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {['M.D. Dermatologist', 'Aesthetic Fellow', '9+ Years Experience'].map((cred, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 border border-white/10 text-[9px] tracking-wider text-white/50 uppercase rounded-full"
                          >
                            {cred}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Preview */}
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
              type="button"
              className="absolute top-10 right-10 text-gold hover:text-white transition-colors cursor-pointer"
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
