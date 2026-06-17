import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageCircle, Activity, Droplets, Zap, ShieldCheck, Gem, Info, CheckCircle2, ClipboardList, X, Maximize2, ChevronDown } from 'lucide-react';

type ServiceItem = {
  name: string;
  desc: string;
  price: string;
};

type ServiceCategory = {
  category: string;
  description: string;
  items: ServiceItem[];
  image?: string;
};

const illumisCategories: ServiceCategory[] = [
  {
    category: 'Advanced Aesthetic Treatments',
    description: 'At Illumis, we combine artistry with advanced medical science to deliver flawless, natural-looking results. Our non-surgical aesthetic treatments are designed to enhance your features and restore youthful vitality.',
    image: '/assets/images/services/aesthetic_facials.png',
    items: [
      { name: 'Botox & Wrinkle Reduction', desc: 'Precision injections to relax targeted facial muscles, instantly smoothing fine lines, crow\'s feet, and deep wrinkles.', price: 'Upon Consultation' },
      { name: 'Dermal Fillers', desc: 'Premium injectables that restore lost volume, plump lips, and beautifully sculpt your cheeks and jawline.', price: 'Upon Consultation' },
      { name: 'PDRN (Salmon DNA) Therapy', desc: 'A breakthrough cellular-repair treatment that deeply hydrates, heals damaged tissue, and triggers rapid skin regeneration.', price: 'Upon Consultation' },
      { name: 'Exosome Skin Rejuvenation', desc: 'The future of skincare, utilizing powerful cellular messengers to dramatically speed up healing and reverse the signs of aging.', price: 'Upon Consultation' },
      { name: 'Skin Tightening Lasers', desc: 'Advanced laser technology that gently heats deep skin layers to stimulate collagen, firming up sagging and loose skin.', price: 'Upon Consultation' },
      { name: 'Non-Surgical Face Contouring', desc: 'Minimally invasive techniques to dissolve stubborn fat and define a balanced, sculpted facial profile.', price: 'Upon Consultation' },
      { name: 'Facial Rejuvenation & Collagen Stimulation Treatments', desc: 'Customized therapies designed to awaken your skin’s natural healing process for long-lasting elasticity and glow.', price: 'Upon Consultation' }
    ]
  },
  {
    category: 'Hair Restoration & Hair Care',
    description: 'Reclaim your confidence with the Illumis hair restoration programs. We utilize the latest regenerative therapies to halt hair loss, stimulate new growth, and improve overall scalp health.',
    image: '/assets/images/services/hair_treatments.png',
    items: [
      { name: 'Exosome Therapy for Hair Growth', desc: 'Cutting-edge biotechnology that delivers vital growth signals directly to hair follicles to stimulate thicker, denser hair.', price: 'Upon Consultation' },
      { name: 'PRP (Platelet-Rich Plasma) Hair Restoration', desc: 'A natural treatment using your body’s own plasma to nourish the scalp and trigger active hair growth.', price: 'Upon Consultation' },
      { name: 'PRF (Platelet-Rich Fibrin) Therapy for Hair & Skin', desc: 'A next-generation, longer-lasting alternative to PRP that releases growth factors slowly for sustained rejuvenation.', price: 'Upon Consultation' },
      { name: 'GFC (Growth Factor Concentrate) Therapy for Hair & Skin', desc: 'A highly purified, concentrated growth factor treatment that prevents hair fall and strengthens roots.', price: 'Upon Consultation' },
      { name: 'Hair Loss & Hair Thinning Treatments', desc: 'Personalized protocols tailored to address the root causes of thinning and pattern baldness.', price: 'Upon Consultation' },
      { name: 'Advance Hair Laser for Hair Restoration and Growth', desc: 'Painless, low-level laser therapy that stimulates blood flow to the scalp and encourages cellular repair in dormant follicles.', price: 'Upon Consultation' }
    ]
  },
  {
    category: 'Body Contouring & Slimming',
    description: 'Achieve your ideal silhouette with our targeted, non-invasive body treatments. At Illumis, we help you sculpt, tone, and refine your body without the downtime of traditional surgery.',
    image: '/assets/images/services/body_treatments.png',
    items: [
      { name: 'Non-Surgical Body Tightening', desc: 'Firm and lift loose or sagging skin across your body using advanced radiofrequency and collagen-boosting technologies.', price: 'Upon Consultation' },
      { name: 'Slimming & Fat Reduction Treatments', desc: 'Target and eliminate stubborn localized fat pockets that resist diet and exercise.', price: 'Upon Consultation' },
      { name: 'Body Contouring Programs', desc: 'Comprehensive, personalized treatment plans designed to reshape your curves and refine your overall proportions.', price: 'Upon Consultation' },
      { name: 'Weight Management Support Therapies', desc: 'Holistic, medically backed approaches to help you achieve and maintain a healthy weight.', price: 'Upon Consultation' }
    ]
  },
  {
    category: 'Wellness & IV Drip Therapies',
    description: 'True beauty starts from within. The Illumis IV Drip Therapies deliver essential vitamins, minerals, and hydration directly into your bloodstream for maximum absorption and instant results.',
    image: '/assets/images/services/relaxation_therapies.png',
    items: [
      { name: 'Glow IV Drips', desc: 'Infused with powerful antioxidants and vitamins to brighten your complexion and give your skin a luminous, healthy glow from the inside out.', price: 'Upon Consultation' },
      { name: 'Anti-Aging IV Therapies', desc: 'A potent blend of cellular-repair nutrients designed to combat oxidative stress and slow the natural aging process.', price: 'Upon Consultation' },
      { name: 'Slimming & Metabolism Support Drips', desc: 'Formulated with fat-burning amino acids and vitamins to boost your energy levels and accelerate your metabolism.', price: 'Upon Consultation' },
      { name: 'Vitamin & Wellness Infusions', desc: 'Essential nutrient boosts customized to improve immunity, relieve fatigue, and restore your body’s natural balance.', price: 'Upon Consultation' }
    ]
  },
  {
    category: 'Face & Skin Rejuvenation & Concern Treatments',
    description: 'Your skin is unique, and so is our approach. From advanced facials to targeted clinical corrections, Illumis offers comprehensive solutions for every skin concern.',
    image: '/assets/images/services/luxury_facials.png',
    items: [
      { name: 'Anti-Aging Treatments', desc: 'Targeted therapies to minimize age spots, fine lines, and structural sagging.', price: 'Upon Consultation' },
      { name: 'Skin Tightening & Lifting (Non-Surgical)', desc: 'Innovative procedures to lift the face and neck for a firmer, more youthful appearance.', price: 'Upon Consultation' },
      { name: 'Skin Boosters & Hydration Therapy', desc: 'Deep-injectable moisture treatments that give the skin an intensely hydrated, plumped look.', price: 'Upon Consultation' },
      { name: 'Medicated Facials', desc: 'Clinical-grade facials customized with active ingredients to treat specific dermatological needs.', price: 'Upon Consultation' },
      { name: 'Glass Skin & Skin Rejuvenation Programs', desc: 'Multi-step treatments designed to deliver a poreless, translucent, and radiant complexion.', price: 'Upon Consultation' },
      { name: 'Hydra Facial', desc: 'A multi-step treatment that gently cleanses, extracts impurities, and deeply hydrates the skin.', price: 'Upon Consultation' },
      { name: 'Oxygen Neo Facial', desc: 'An exfoliating and oxygenating facial that infuses the skin with active nutrients for immediate radiance.', price: 'Upon Consultation' },
      { name: 'Carboxy Facial', desc: 'A carbon dioxide-based therapy that boosts blood circulation and oxygen levels to instantly brighten the skin.', price: 'Upon Consultation' },
      { name: 'Pore Refining Treatments', desc: 'Specialized procedures to clean out debris and visibly shrink the appearance of your pores.', price: 'Upon Consultation' },
      { name: 'Acne & Acne Scar Treatments', desc: 'Clinical solutions to halt active breakouts and heal the skin underneath.', price: 'Upon Consultation' },
      { name: 'Melasma & Pigmentation Treatments', desc: 'Targeted care to break down excess melanin and clear stubborn dark patches.', price: 'Upon Consultation' },
      { name: 'Skin Brightening & Glow Therapies', desc: 'Illuminating treatments designed to revive dull, tired skin.', price: 'Upon Consultation' },
      { name: 'Freckles Removal', desc: 'Safe and effective laser or chemical treatments to fade unwanted sun spots and freckles.', price: 'Upon Consultation' },
      { name: 'Wart Removal', desc: 'Quick, hygienic, and painless clinical removal of skin warts.', price: 'Upon Consultation' },
      { name: 'Acne Management Programs', desc: 'Long-term, guided care plans to keep acne-prone skin clear and healthy.', price: 'Upon Consultation' },
      { name: 'Acne Scar Reduction', desc: 'Resurfacing treatments that smooth out pitted or hyperpigmented scars left by past breakouts.', price: 'Upon Consultation' },
      { name: 'Pigmentation & Melasma Correction', desc: 'Intensive protocols to restore an even skin tone by addressing deep-rooted pigmentation.', price: 'Upon Consultation' },
      { name: 'Mole & Skin Tag Removal', desc: 'Safe, precise, and scar-free removal of unwanted skin growths by our experts.', price: 'Upon Consultation' },
      { name: 'Uneven Skin Tone Correction', desc: 'Harmonizing treatments that blend away redness, dark spots, and discoloration.', price: 'Upon Consultation' },
      { name: 'Enlarged Pores Treatment', desc: 'Deep-cleansing and tightening therapies to give your skin a smoother, refined finish.', price: 'Upon Consultation' },
      { name: 'Skin Texture & Scar Improvement Treatments', desc: 'Advanced resurfacing to smooth bumpy skin, rough patches, and minor scarring.', price: 'Upon Consultation' },
      { name: 'Skin Lightening Treatment', desc: 'Gentle, medically approved therapies to safely lighten hyperpigmentation and achieve a brighter overall tone.', price: 'Upon Consultation' }
    ]
  }
];

const illumisFaqs = [
  {
    q: 'Are your advanced aesthetic treatments (like Botox and Dermal Fillers) safe?',
    a: 'Absolutely. At Illumis, patient safety is our highest priority. All injectables and clinical procedures are performed by highly qualified medical experts and aesthetic doctors using only premium, FDA-approved products. We follow strict international medical protocols to ensure every treatment is both safe and exceptionally effective.'
  },
  {
    q: 'How do I know which skin rejuvenation treatment is right for me?',
    a: 'You don’t have to guess! Every client journey at Illumis begins with a comprehensive, in-depth skin consultation. Our experts will analyze your unique skin type, concerns, and goals before designing a highly personalized treatment protocol—whether that means a HydraFacial, Exosome Therapy, or a tailored Medicated Facial.'
  },
  {
    q: 'Is there any downtime for your anti-aging or skin tightening procedures?',
    a: 'The majority of our advanced treatments, including laser skin tightening and premium dermal fillers, are non-surgical and minimally invasive. This means they require little to no downtime. You may experience slight redness or swelling for a few hours, but most clients can return to their daily routines immediately after leaving the clinic.'
  },
  {
    q: 'How long does it take to see results from Hair Restoration therapies like PRP or Exosomes?',
    a: 'Hair restoration is a biological process that aligns with your natural hair growth cycle. While some clients notice reduced hair fall after the first session, visible new growth, improved density, and thicker strands typically become apparent after 3 to 4 sessions, with peak results showing around the 3 to 6-month mark.'
  },
  {
    q: 'What can I expect during an IV Drip Therapy session?',
    a: 'Our IV Wellness therapies are designed to be a luxurious, deeply relaxing experience. After a quick medical evaluation, you will relax in a comfortable lounge chair while a customized blend of vitamins and nutrients is infused directly into your bloodstream. The process takes about 30 to 45 minutes, and most clients feel an immediate boost in energy, hydration, and skin radiance.'
  },
  {
    q: 'Are the results of your Non-Surgical Body Contouring permanent?',
    a: 'Yes, our advanced fat-reduction treatments permanently destroy targeted fat cells. However, to maintain your beautifully sculpted results, it is important to sustain a healthy lifestyle. While the treated fat cells are gone for good, remaining fat cells can still expand if significant weight is gained.'
  },
  {
    q: 'Do clinical skin treatments like Chemical Peels or injectables hurt?',
    a: 'We prioritize your absolute comfort. For injectables and deeper clinical treatments, we use highly effective medical-grade numbing creams and fine micro-needles to ensure the experience is virtually painless. For chemical peels and advanced facials, you may feel a mild, temporary tingling sensation, but never sharp pain.'
  },
  {
    q: 'How many sessions will I need to clear my acne or pigmentation?',
    a: 'Because every skin condition is unique, the number of sessions varies. Mild concerns can often be brightened or cleared in 1 to 3 sessions. For deeper pigmentation (like Melasma) or severe acne scarring, we typically recommend a guided program of 4 to 6 consistent sessions to achieve flawless, long-lasting results.'
  }
];

const illumisGallery = [
  { id: 1, image: '/assets/images/illumis_clinic.jpeg', title: 'Consultation & Diagnostics Office' },
  { id: 2, image: '/assets/images/illumis_clinic_1.jpeg', title: 'Advanced Treatment Room' },
  { id: 3, image: '/assets/images/illumis_clinic_2.jpeg', title: 'Laser & Rejuvenation Suite' },
  { id: 4, image: '/assets/images/illumis_clinic_3.jpeg', title: 'Recovery & Infusion Lounge' },
  { id: 5, image: '/assets/images/illumis_clinic_4.jpeg', title: 'Aesthetic Examination Wing' }
];

const illumisSpecialists = [
  {
    name: 'Dr. Ngayir Rida',
    role: 'Lead Aesthetic Dermatologist',
    image: '/assets/images/Dr_Ngayir_Rida.jpeg',
    specialty: 'Botox, Dermal Fillers, PDRN (Salmon DNA) Cellular Repair, Exosome Rejuvenation, Laser Skin Mapping',
    bio: 'Dr. Ngayir Rida is a certified clinical dermatologist with over 9 years of medical experience in advanced non-surgical aesthetics. She believes in combining medical-grade precision with an artistic touch to achieve natural, age-reversing results safely.',
    credentials: ['M.D. in Dermatology', 'Fellowship in Aesthetic Medicine', 'Certified Exosome Specialist']
  }
];

export default function Illumis() {
  const whatsappNumber = "919862224291";
  const [activeTab, setActiveTab] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeProtocolTab, setActiveProtocolTab] = useState<'injectables' | 'peels'>('injectables');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const handleWhatsAppEnquiry = (itemName: string) => {
    const message = `Hi Illumis, I'm interested in booking the "${itemName}" treatment from your advanced menu. Could you please provide more details?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden mb-20">
        <img
          src="/assets/images/hero-science.png"
          alt="ILLUMIS Aesthetic Clinic"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center space-x-4 mb-6">
              <ShieldCheck className="text-gold" size={24} />
              <Zap className="text-gold/60" size={24} />
            </div>
            <h5 className="text-gold tracking-[0.5em] uppercase text-xs mb-4">Medical Aesthetics & Wellness</h5>
            <h1 className="text-6xl md:text-8xl font-serif mb-6">ILLUMIS <span className="italic font-light">Clinic</span></h1>
            <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base font-light tracking-wide leading-relaxed">
              Here is the clear, engaging, and premium website content for Illumis. The descriptions are crafted to be easily understood by your clients while maintaining a high-end, professional tone that reflects your brand.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-gold/70 text-[10px] tracking-[0.45em] uppercase mb-4">ILLUMIS SERVICES</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif max-w-3xl leading-tight">
              Science meets luxury for absolute rejuvenation.
            </h2>
          </div>
          <div className="max-w-md text-white/45 text-sm leading-relaxed">
            All clinical procedures are performed by certified dermatologists and trained aesthetic specialists using FDA-approved technologies.
          </div>
        </div>

        {/* Desktop Tab Selection */}
        <div className="hidden md:flex sticky top-[72px] lg:top-[88px] z-30 bg-luxury-black/95 backdrop-blur-md py-4 -mx-6 px-6 overflow-x-auto no-scrollbar gap-3 mb-16 scroll-smooth border-b border-white/5">
          {illumisCategories.map((category, catIdx) => {
            const isActive = activeTab === catIdx;
            const getIcon = () => {
              const iconClass = isActive ? 'text-luxury-black' : 'text-gold';
              switch (catIdx) {
                case 0: return <Gem className={iconClass} size={18} />;
                case 1: return <Activity className={iconClass} size={18} />;
                case 2: return <Zap className={iconClass} size={18} />;
                case 3: return <Droplets className={iconClass} size={18} />;
                case 4: return <Sparkles className={iconClass} size={18} />;
                default: return <Sparkles className={iconClass} size={18} />;
              }
            };

            return (
              <button
                key={catIdx}
                onClick={() => setActiveTab(catIdx)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border text-xs tracking-[0.2em] uppercase font-bold shrink-0 transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'bg-gold text-luxury-black border-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                    : 'bg-white/[0.02] text-white/50 border-white/5 hover:border-gold/30 hover:text-white'
                }`}
              >
                {getIcon()}
                <span>{category.category}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Dropdown Category Selector */}
        <div className="md:hidden sticky top-[72px] z-30 bg-luxury-black/95 backdrop-blur-md py-4 px-6 -mx-6 mb-12 border-b border-white/5 relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-5 py-4 rounded-2xl border border-gold/30 bg-white/[0.02] text-white font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              {(() => {
                const iconClass = 'text-gold';
                switch (activeTab) {
                  case 0: return <Gem className={iconClass} size={18} />;
                  case 1: return <Activity className={iconClass} size={18} />;
                  case 2: return <Zap className={iconClass} size={18} />;
                  case 3: return <Droplets className={iconClass} size={18} />;
                  case 4: return <Sparkles className={iconClass} size={18} />;
                  default: return <Sparkles className={iconClass} size={18} />;
                }
              })()}
              <span className="truncate max-w-[200px]">{illumisCategories[activeTab].category}</span>
            </div>
            <ChevronDown className={`text-gold transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} size={18} />
          </button>

          {isDropdownOpen && (
            <>
              <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsDropdownOpen(false)} />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-6 right-6 mt-2 bg-luxury-black/98 border border-gold/20 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-50 divide-y divide-white/5"
              >
                {illumisCategories.map((category, catIdx) => {
                  const isActive = activeTab === catIdx;
                  const getIcon = () => {
                    const iconClass = isActive ? 'text-gold' : 'text-white/40';
                    switch (catIdx) {
                      case 0: return <Gem className={iconClass} size={16} />;
                      case 1: return <Activity className={iconClass} size={16} />;
                      case 2: return <Zap className={iconClass} size={16} />;
                      case 3: return <Droplets className={iconClass} size={16} />;
                      case 4: return <Sparkles className={iconClass} size={16} />;
                      default: return <Sparkles className={iconClass} size={16} />;
                    }
                  };

                  return (
                    <button
                      key={catIdx}
                      onClick={() => {
                        setActiveTab(catIdx);
                        setIsDropdownOpen(false);
                        // Scroll to details section on mobile
                        const element = document.getElementById('category-details');
                        if (element) {
                          const yOffset = -150;
                          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                      className={`w-full flex items-center gap-3 px-5 py-4 text-left text-xs tracking-[0.15em] uppercase font-bold transition-all ${
                        isActive
                          ? 'bg-gold/10 text-gold font-bold'
                          : 'text-white/60 hover:bg-white/[0.02] hover:text-white'
                      }`}
                    >
                      {getIcon()}
                      <span>{category.category}</span>
                    </button>
                  );
                })}
              </motion.div>
            </>
          )}
        </div>

        {/* Category Details */}
        <div id="category-details" className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className={`relative overflow-hidden border rounded-[2rem] bg-white/[0.02] backdrop-blur-sm ${
                activeTab % 2 === 0 ? 'border-gold/10' : 'border-white/10'
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex items-start gap-5">
                    <div className="h-14 w-14 rounded-2xl border border-gold/20 bg-gold/5 flex items-center justify-center shrink-0">
                      {(() => {
                        const iconClass = 'text-gold';
                        switch (activeTab) {
                          case 0: return <Gem className={iconClass} />;
                          case 1: return <Activity className={iconClass} />;
                          case 2: return <Zap className={iconClass} />;
                          case 3: return <Droplets className={iconClass} />;
                          case 4: return <Sparkles className={iconClass} />;
                          default: return <Sparkles className={iconClass} />;
                        }
                      })()}
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.45em] uppercase text-white/40 mb-2">Service Category</p>
                      <h3 className="text-3xl md:text-4xl font-serif mb-2">
                        {illumisCategories[activeTab].category}
                      </h3>
                      <p className="text-white/50 text-sm max-w-xl font-light leading-relaxed">
                        {illumisCategories[activeTab].description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-[10px] tracking-[0.3em] uppercase text-white/50">
                    <span className="px-4 py-2 rounded-full border border-white/10">
                      {illumisCategories[activeTab].items.length} treatments
                    </span>
                    <span className="px-4 py-2 rounded-full border border-white/10">Clinical Protocol</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Category Image Banner */}
                  {illumisCategories[activeTab].image && (
                    <div className="lg:col-span-4 rounded-[2rem] overflow-hidden border border-white/10 bg-black/20 h-[300px] lg:h-auto min-h-[400px] relative group/banner">
                      <img
                        src={illumisCategories[activeTab].image}
                        alt={illumisCategories[activeTab].category}
                        className="w-full h-full object-cover transition-transform duration-750 group-hover/banner:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8">
                        <span className="text-gold text-[10px] tracking-[0.4em] uppercase mb-2 block">Featured Gallery</span>
                        <h4 className="text-2xl font-serif text-white">{illumisCategories[activeTab].category}</h4>
                      </div>
                    </div>
                  )}

                  {/* Services Grid */}
                  <div className={`${illumisCategories[activeTab].image ? 'lg:col-span-8' : 'lg:col-span-12'} grid grid-cols-1 md:grid-cols-2 gap-6`}>
                    {illumisCategories[activeTab].items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="group rounded-[1.5rem] border border-white/5 bg-black/20 p-6 hover:border-gold/25 hover:bg-gold/[0.03] transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                            <h5 className="text-base md:text-lg font-serif group-hover:text-gold transition-colors">
                              {item.name}
                            </h5>
                            <span className="text-gold/85 italic font-serif text-sm shrink-0">{item.price}</span>
                          </div>

                          <p className="text-white/40 text-xs md:text-[13px] leading-relaxed mb-4 font-light">
                            {item.desc}
                          </p>
                        </div>

                        <button
                          onClick={() => handleWhatsAppEnquiry(item.name)}
                          className="w-fit inline-flex items-center gap-2 text-white/45 text-[10px] tracking-[0.35em] uppercase font-bold hover:text-gold transition-colors cursor-pointer mt-2"
                        >
                          <MessageCircle size={12} className="text-[#25D366]" />
                          <span>Enquire on WhatsApp</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* 3-Step Consultation Process */}
        <section className="mt-32 border-t border-white/5 pt-24">
          <div className="text-center mb-16">
            <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Diagnostics First</h5>
            <h2 className="text-4xl md:text-5xl font-serif">Our 3-Step <span className="italic">Clinical Consultation</span></h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
              We believe extraordinary, natural-looking results are born from precise medical diagnostics, not guesswork. Here is exactly what happens behind the scenes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Advanced Digital Skin Mapping',
                desc: 'Before we recommend a single treatment, we look beneath the surface. Using state-of-the-art diagnostic imaging, we analyze your skin’s deep hydration levels, hidden UV damage, pore congestion, and structural elasticity.'
              },
              {
                step: '02',
                title: 'The Expert Medical Dialogue',
                desc: 'You will sit down one-on-one with our certified clinical specialists. We listen to your medical history, current skincare habits, lifestyle factors, and long-term aesthetic goals to understand the root cause of your concerns.'
              },
              {
                step: '03',
                title: 'The Bespoke Treatment Roadmap',
                desc: 'We design a phased treatment plan customized entirely to your skin\'s biology and timeline. We walk you through the science, explain expected outcomes transparently, and address any questions before your treatment begins.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-8 border border-white/5 relative overflow-hidden group hover:border-gold/20 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 h-px w-20 bg-gradient-to-l from-gold/40 to-transparent" />
                <span className="text-gold/20 font-serif text-6xl block mb-6 font-bold group-hover:text-gold/40 transition-colors duration-500">{item.step}</span>
                <h4 className="text-xl font-serif text-white mb-4">{item.title}</h4>
                <p className="text-white/40 text-xs md:text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pre & Post-Care Protocol */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Patient Education</h5>
            <h2 className="text-4xl md:text-5xl font-serif">Pre & Post-Care <span className="italic">Protocols</span></h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
              Educating yourself before your treatment ensures safety, minimizes recovery time, and maximizes your aesthetic results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Tabs Selector */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button
                type="button"
                onClick={() => setActiveProtocolTab('injectables')}
                className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl border text-xs tracking-widest uppercase font-bold transition-all duration-300 cursor-pointer ${
                  activeProtocolTab === 'injectables'
                    ? 'bg-gold text-luxury-black border-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'bg-white/[0.02] text-white/50 border-white/5 hover:border-gold/25'
                }`}
              >
                <ClipboardList size={16} />
                <span>Injectables & Skin Boosters</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveProtocolTab('peels')}
                className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl border text-xs tracking-widest uppercase font-bold transition-all duration-300 cursor-pointer ${
                  activeProtocolTab === 'peels'
                    ? 'bg-gold text-luxury-black border-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'bg-white/[0.02] text-white/50 border-white/5 hover:border-gold/25'
                }`}
              >
                <ClipboardList size={16} />
                <span>Peels & Laser Therapies</span>
              </button>
            </div>

            {/* Protocol Split Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProtocolTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass border border-gold/15 p-8 md:p-12 rounded-[2rem] relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                
                {activeProtocolTab === 'injectables' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-gold tracking-[0.2em] uppercase text-[10px] mb-6 font-bold flex items-center">
                        <CheckCircle2 size={14} className="mr-2 text-gold" /> Pre-Care (Botox, Fillers, PDRN)
                      </h4>
                      <ul className="space-y-4">
                        {[
                          "Avoid blood-thinning supplements, green tea, or fish oils for 3–5 days prior to your session to minimize the risk of minor bruising.",
                          "Refrain from alcohol consumption for at least 24 hours before your appointment."
                        ].map((text, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-white/60 text-sm font-light leading-relaxed">
                            <span className="text-gold mt-1">•</span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-12">
                      <h4 className="text-gold tracking-[0.2em] uppercase text-[10px] mb-6 font-bold flex items-center">
                        <CheckCircle2 size={14} className="mr-2 text-gold" /> Post-Care (Botox, Fillers, PDRN)
                      </h4>
                      <ul className="space-y-4">
                        {[
                          "Remain upright for at least 4 hours after your treatment—do not lie down or lean forward heavily.",
                          "Avoid strenuous workouts, saunas, and intense facial pressure for 48 hours to allow the product to settle flawlessly."
                        ].map((text, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-white/60 text-sm font-light leading-relaxed">
                            <span className="text-gold mt-1">•</span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-gold tracking-[0.2em] uppercase text-[10px] mb-6 font-bold flex items-center">
                        <CheckCircle2 size={14} className="mr-2 text-gold" /> Pre-Care (Peels & Laser Therapies)
                      </h4>
                      <ul className="space-y-4">
                        {[
                          "Discontinue the use of active topicals (like Retinols, Glycolic Acid, or Vitamin C) 3 days before your treatment.",
                          "Avoid direct, unprotected sun exposure for at least one week prior to the session."
                        ].map((text, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-white/60 text-sm font-light leading-relaxed">
                            <span className="text-gold mt-1">•</span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-12">
                      <h4 className="text-gold tracking-[0.2em] uppercase text-[10px] mb-6 font-bold flex items-center">
                        <CheckCircle2 size={14} className="mr-2 text-gold" /> Post-Care (Peels & Laser Therapies)
                      </h4>
                      <ul className="space-y-4">
                        {[
                          "Your freshly renewed skin will be highly sensitive. Apply a broad-spectrum SPF 50+ sunscreen every single morning without fail.",
                          "Keep the skin deeply hydrated with our prescribed recovery creams, and never pick or peel flaking skin."
                        ].map((text, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-white/60 text-sm font-light leading-relaxed">
                            <span className="text-gold mt-1">•</span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Promise and Safety Standards block */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-10 glass border border-gold/10 rounded-[2rem] flex flex-col justify-between">
            <div>
              <h4 className="text-gold text-xs tracking-[0.3em] uppercase mb-6 font-bold flex items-center">
                <Info size={16} className="mr-2" />
                ILLUMIS Clinical Excellence Protocol
              </h4>
              <ul className="space-y-4 text-white/60 text-sm leading-relaxed font-light">
                <li className="flex items-start space-x-2">
                  <span className="text-gold">•</span>
                  <span>1-on-1 Consultation & Detailed Skin Mapping with our dermatologists.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold">•</span>
                  <span>State-of-the-Art Sterile Medical Procedures following global standards.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold">•</span>
                  <span>FDA-Approved Products & Devices Only to ensure maximum safety.</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleWhatsAppEnquiry('Custom Consultation')}
              className="w-fit px-8 py-4 bg-transparent border border-gold/30 text-gold text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-gold hover:text-luxury-black transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              <span>Learn More</span>
            </button>
          </div>

          <div className="p-10 glass border border-gold/10 rounded-[2rem] flex flex-col justify-between">
            <div>
              <h4 className="text-gold text-xs tracking-[0.3em] uppercase mb-6 font-bold flex items-center">
                <Sparkles size={16} className="mr-2" />
                Specialized Aesthetic Care
              </h4>
              <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                All treatment paths are customized dynamically to target your specific physiology. Injections, cellular regenerators, and advanced laser systems are delivered with professional medical oversight.
              </p>
            </div>
            <Link
              to="/book?brand=illumis"
              className="w-fit px-8 py-4 bg-gold text-luxury-black text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <ClipboardList size={14} />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>

        {/* Clinical Gallery */}
        <section className="mt-32 border-t border-white/5 pt-24">
          <div className="text-center mb-16">
            <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">State-of-the-Art</h5>
            <h2 className="text-4xl md:text-5xl font-serif">Clinical <span className="italic">Facilities</span></h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
              Explore the sterile, high-end treatment suites and diagnostic lounges at Illumis Clinic, designed for optimal safety and restorative comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {illumisGallery.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedImage(item.image)}
                className="group relative aspect-[3/4] overflow-hidden cursor-zoom-in border border-white/5 bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 border border-gold/30">
                  <span className="text-gold text-[9px] tracking-[0.35em] uppercase mb-1">Clinical Suite</span>
                  <h4 className="text-base font-serif text-white font-medium">{item.title}</h4>
                  <div className="flex items-center gap-2 text-white/40 mt-3 text-[10px] tracking-widest uppercase">
                    <Maximize2 size={12} className="text-gold" />
                    <span>Expand view</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Clinical Team Section */}
        <section className="mt-32 border-t border-white/5 pt-24">
          <div className="text-center mb-16">
            <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Medical Experts</h5>
            <h2 className="text-4xl md:text-5xl font-serif">Clinical <span className="italic">Directors & Specialists</span></h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {illumisSpecialists.map((spec) => (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass border border-gold/15 p-8 md:p-12 rounded-[2rem] relative overflow-hidden flex flex-col md:flex-row gap-8 md:gap-12 items-center"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                
                {/* Profile Image */}
                <div className="w-48 h-60 shrink-0 border border-gold/25 p-2 bg-neutral-950 relative overflow-hidden">
                  <img
                    src={spec.image}
                    alt={spec.name}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute bottom-4 left-4 bg-luxury-black/95 px-3 py-1 border border-gold/20 text-[9px] tracking-widest text-gold uppercase font-bold">
                    Expertise
                  </div>
                </div>

                {/* Profile Bio */}
                <div className="flex-grow">
                  <span className="text-gold tracking-[0.3em] uppercase text-[10px] mb-2 font-bold block">
                    {spec.role}
                  </span>
                  <h3 className="text-3xl font-serif text-white mb-4">
                    {spec.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                    {spec.bio}
                  </p>
                  
                  {/* Specialties List */}
                  <div className="mb-6">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-bold mb-2">Core Clinical Specialties</p>
                    <p className="text-gold text-xs leading-relaxed font-montserrat">
                      {spec.specialty}
                    </p>
                  </div>

                  {/* Credentials / Badges */}
                  <div className="flex flex-wrap gap-2">
                    {spec.credentials.map((cred, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 border border-white/10 text-[9px] tracking-wider text-white/50 uppercase rounded-full"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <div className="mt-32 border-t border-white/10 pt-20">
          <h3 className="text-3xl md:text-4xl font-serif mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {illumisFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-white/5 rounded-2xl bg-white/[0.01] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-serif text-lg text-white/95">{faq.q}</span>
                    <span className={`text-gold text-xl font-bold transition-transform duration-300 transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 font-light">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>

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
    </div>
  );
}
