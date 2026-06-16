import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageCircle, Scissors, Heart, Eye, Brush, User, Zap, Info, CheckCircle2, ClipboardList, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

type ServiceItem = {
  name: string;
  price: string;
  desc?: string;
};

type ServiceSection = {
  name: string;
  items: ServiceItem[];
  image?: string;
};

type ServiceCategory = {
  category: string;
  icon: React.ReactNode;
  sections: ServiceSection[];
};

const allMonsoonServices: ServiceCategory[] = [
  {
    category: 'Hair Services',
    icon: <Scissors className="text-gold" />,
    sections: [
      {
        name: 'Haircuts & Styling',
        image: '/assets/images/services/haircuts_styling.png',
        items: [
          { name: 'Creative Haircut (Men/Women)', price: 'Starting from ₹5,000', desc: 'A bespoke haircut designed by our experts to enhance your facial features, hair type, and personal aesthetic.' },
          { name: 'Advanced Designer Cut (Senior Stylist)', price: 'Starting from ₹7,500', desc: 'Premium, trend-focused structural transformations and precision styling executed by our master stylists.' },
          { name: 'Shampoo & Luxury Blow Dry', price: 'Starting from ₹3,500', desc: 'A refreshing scalp cleanse followed by a professional boutique blowout for maximum bounce, shine, and volume.' },
          { name: 'Ironing / Curling / Tong Styling', price: 'Starting from ₹4,000', desc: 'Expert hot-tool texture adjustments, from sleek pin-straight strands to glamorous runway curls.' },
          { name: 'Bridal & Occasion Hair Styling', price: 'Upon Consultation', desc: 'Exquisite, secure, and camera-ready updos or open hair designs tailored for your most memorable milestones.' }
        ]
      },
      {
        name: 'Hair Treatments',
        image: '/assets/images/services/hair_treatments.png',
        items: [
          { name: 'Signature Hair Spa Rituals', price: 'Starting from ₹6,500', desc: 'Deep-conditioning therapies that intensely nourish the hair roots and strands, reversing environmental damage.' },
          { name: 'Keratin / Smoothening / Rebonding', price: 'Starting from ₹20,000', desc: 'High-performance systems that eliminate stubborn frizz, tame unruly texture, and lock in mirror-like smoothness.' },
          { name: 'Hair Botox Therapy', price: 'Starting from ₹25,000', desc: 'An advanced anti-aging, deep-reconstruction treatment that pumps vital nutrients, proteins, and intense hydration back into depleted hair fibers.' },
          { name: 'Scalp Detox & Anti-Dandruff Therapy', price: 'Starting from ₹5,500', desc: 'Clears stubborn product buildup, regulates excess oil production, and soothes itchy, flaky scalps.' },
          { name: 'Intensive Hair Fall Control Program (with Advanced Laser Therapy)', price: 'Upon Consultation', desc: 'A multi-step clinical regimen combining active serums with low-level laser stimulation to reactivate dormant hair follicles and arrest shedding.' }
        ]
      },
      {
        name: 'Hair Colouring',
        image: '/assets/images/services/hair_colouring.png',
        items: [
          { name: 'Global Colour / Root Touch-Up', price: 'Starting from ₹6,000', desc: 'Seamless, rich color from root to tip, or a precise refresh to camouflage gray hair and new regrowth.' },
          { name: 'Highlights / Balayage / Ombre', price: 'Starting from ₹15,000', desc: 'Hand-painted dimension that adds depth, sun-kissed warmth, or bold, high-contrast color shifts to your hair.' },
          { name: 'Fashion & Premium Shades', price: 'Starting from ₹12,000', desc: 'Custom-blended vivid statement tones created specifically to reflect your bold personality.' },
          { name: 'Ammonia-Free Colour Services', price: 'Starting from ₹8,000', desc: 'Gentle, damage-minimizing premium formulations that protect your hair’s natural moisture and integrity.' }
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
        image: '/assets/images/services/luxury_facials.png',
        items: [
          { name: 'Classic Clean-Up & Glow Facial', price: '₹4,000', desc: 'A thorough deep-pore extraction and mild exfoliation to clear away impurities and restore instant skin clarity.' },
          { name: 'Gold / Diamond / Anti-Aging Facial', price: '₹10,000', desc: 'Indulgent, mineral-infused therapies designed to accelerate cell renewal, firm sagging tissue, and impart a rich luminosity.' },
          { name: 'Brightening & Pigmentation Control Facial', price: '₹12,000', desc: 'Packed with high-potency skin brighteners to fade dark spots, smooth out uneven tone, and revive dull skin.' }
        ]
      },
      {
        name: 'Advanced Aesthetic Facials',
        image: '/assets/images/services/aesthetic_facials.png',
        items: [
          { name: 'HydraFacial (Customised as per Skin Type)', price: 'Starting from ₹15,000', desc: 'A revolutionary multi-step vortex system that cleanses, extracts, and infuses custom skin serums to combat Acne, Pigmentation, Aging, or Dehydration.' },
          { name: 'Carboxy Facial Therapy (CO₂ Skin Rejuvenation)', price: '₹14,000', desc: 'A non-invasive treatment using carbon dioxide to trigger a sudden rush of oxygen and nutrients, instantly plumping and brightening your complexion.' },
          { name: 'BB Glow Treatment (Semi-Permanent Skin Glow & Tone Correction)', price: '₹18,000', desc: 'A gentle micro-infusion of nutrient-dense pigmented serum just beneath the skin\'s surface, giving you an everyday, flawless, airbrushed look without makeup.' }
        ]
      },
      {
        name: 'Professional Marine & Targeted Facials',
        image: '/assets/images/services/marine_facials.png',
        items: [
          { name: 'Cold Cream Facial (For Hyper-Dry & Sensitive Skin)', price: '₹6,500', desc: 'An intensely comforting, barrier-repairing facial that deeply nourishes and calms hyper-dry, easily irritated skin types.' },
          { name: 'Pureté Marine Facial (For Oily & Acne-Prone Skin)', price: '₹7,500', desc: 'A specialized marine treatment designed to mattify skin, purify clogged pores, and elegantly control excess oil.' },
          { name: 'Source Marine Facial (For Dehydrated Skin)', price: '₹7,000', desc: 'High-potency moisture flood utilizing active marine elements to intensely re-hydrate parched surface cells.' },
          { name: 'Lumière Marine Facial (For Pigmentation & Dark Spots)', price: '₹9,000', desc: 'A high-performance, clinical-grade treatment engineered to visually fade sun spots, age spots, and blemish marks.' },
          { name: 'Hyalu Pro Collagen Facial (For Advanced Anti-Ageing)', price: '₹12,000', desc: 'A targeted wrinkle-filling facial that smooths fine lines using triple-strength hyaluronic acid and active marine collagen.' },
          { name: 'Spiruline Boost Facial (For First Signs of Ageing)', price: '₹10,000', desc: 'Detoxifies fatigued city skin, shielding it from oxidative stress to prevent early fine lines and wrinkles.' }
        ]
      },
      {
        name: 'Clinical Skin Treatments',
        image: '/assets/images/services/clinical_skin.png',
        items: [
          { name: 'Bollywood Peel (Instant Glow & Skin Renewal)', price: '₹15,000', desc: 'A celebrity-favorite exfoliating peel that gently sweeps away dead skin cells for an immediate, camera-ready glow.' },
          { name: 'Chemical Peels (Acne / Pigmentation / Anti-Ageing)', price: 'Starting from ₹8,000', desc: 'Dermatological-grade peeling agents that target deeper skin layers to erase acne breakouts, rough texture, and dark patches.' },
          { name: 'Microdermabrasion / Skin Polishing', price: '₹7,500', desc: 'A precise, diamond-tip physical exfoliation method that polishes away rough patches, scars, and dull surface cells.' },
          { name: 'Skin Whitening & Brightening Treatment', price: '₹12,000', desc: 'Clinical formulations designed to regulate melanin synthesis, giving you a significantly brighter and beautifully balanced skin tone.' },
          { name: 'Under Eye Rejuvenation', price: '₹6,000', desc: 'Focused care using advanced serums to target dark circles, hollow under-eyes, and persistent puffiness.' }
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
        image: '/assets/images/services/relaxation_therapies.png',
        items: [
          { name: 'Swedish Massage', price: '₹8,000 (60 min)', desc: 'Long, fluid, rhythmic strokes designed to improve blood circulation, ease surface muscle tension, and induce deep mental relaxation.' },
          { name: 'Deep Tissue Therapy', price: '₹10,000 (60 min)', desc: 'Firm, slow, targeted pressure that penetrates deep into structural muscle layers to dissolve chronic knots, tightness, and physical fatigue.' },
          { name: 'Aroma Therapy', price: '₹9,000 (60 min)', desc: 'A restorative sensory experience combining the power of therapeutic organic essential oils with light, relaxing bodywork.' },
          { name: 'Hot Stone Therapy', price: '₹12,000 (90 min)', desc: 'Heated volcanic stones placed on key pressure zones to radiate soothing heat deep into stiff muscles, melting away deep-seated stress.' }
        ]
      },
      {
        name: 'Body Treatments',
        image: '/assets/images/services/body_treatments.png',
        items: [
          { name: 'Body Polishing & Scrub', price: '₹10,000', desc: 'A luxury full-body exfoliation that sloughs off dry skin cells, polishing your entire body to a silky, touchably soft texture.' },
          { name: 'Detox & Skin Brightening Body Therapy', price: '₹14,000', desc: 'A purifying wrap and massage system designed to draw out impurities, improve lymphatic drainage, and brighten skin tone.' }
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
        image: '/assets/images/services/grooming_rituals.png',
        items: [
          { name: 'Classic Manicure & Pedicure', price: '₹3,500', desc: 'Essential everyday grooming featuring a relaxing soak, nail shaping, clean cuticle care, and professional polish application.' },
          { name: 'Premium Manicure & Pedicure', price: '₹5,500', desc: 'An elevated experience introducing skin-smoothing exfoliating scrubs, a deeply nourishing mask, and a relaxing massage.' },
          { name: 'Luxury Spa Manicure & Pedicure', price: '₹8,000', desc: 'The ultimate sensory indulgence, featuring multi-step therapeutic massage, intensive paraffin/hydration care, and deep skin-repairing treatments.' }
        ]
      }
    ]
  },
  {
    category: 'Nail Extensions, Enhancements & Luxury Art',
    icon: <Brush className="text-gold" />,
    sections: [
      {
        name: 'Nail Extensions',
        image: '/assets/images/services/nail_extensions.png',
        items: [
          { name: 'Acrylic Nail Extensions', price: '₹4,500', desc: 'Ultra-durable, heavy-duty extensions sculpted by hand to give you beautiful length, custom architecture, and lasting strength.' },
          { name: 'Gel Nail Extensions', price: '₹5,000', desc: 'Exceptionally flexible, high-gloss extensions cured under LED light for a resilient, beautifully natural look and feel.' },
          { name: 'Soft Gel Extensions (Lightweight & Natural Finish)', price: '₹5,500', desc: 'Premium, pre-shaped full-coverage gel tips that offer an incredibly lightweight feel and a speedy, elegant application.' }
        ]
      },
      {
        name: 'Nail Enhancements',
        image: '/assets/images/services/nail_enhancements.png',
        items: [
          { name: 'Gel Polish Application', price: '₹1,500', desc: 'Super-shiny, chip-free nail color cured under professional lamps to give you up to 3 weeks of unblemished, perfect wear.' },
          { name: 'Nail Refilling & Maintenance', price: '₹2,500', desc: 'Structural re-balancing and filling of the root gap caused by your natural nail growth, keeping your extensions beautiful and structurally safe.' },
          { name: 'Nail Repair', price: '₹500 / nail', desc: 'Quick, seamless structural fixes to instantly mend a single cracked, split, or lifted extension.' }
        ]
      },
      {
        name: 'Luxury Nail Art Studio',
        image: '/assets/images/services/nail_art.png',
        items: [
          { name: 'Premium Nail Art (Minimal | French | Chrome | Ombre)', price: 'Starting from ₹1,000', desc: 'Modern, high-end accents ranging from clean geometric lines and classic French tips to liquid metallic chrome and smooth color transitions.' },
          { name: 'Advanced Designer Nails (3D | Swarovski | Bridal Nails)', price: 'Starting from ₹2,500', desc: 'Hand-crafted 3D art, genuine luxury Swarovski crystals, and custom bridal themes designed for your big day.' },
          { name: 'Trend-Based Graphic Nails', price: 'Upon Consultation', desc: 'Bold patterns, abstract street-style graphics, and custom art created directly from your personal design references.' }
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
        image: '/assets/images/services/eyelash_extensions.png',
        items: [
          { name: 'Classic Lash Extensions (Natural Look)', price: '₹4,000', desc: 'One individual synthetic lash applied precisely to each of your natural lashes, enhancing length and definition with subtle elegance.' },
          { name: 'Volume Lash Extensions (Fuller & Dramatic)', price: '₹6,000', desc: 'Lightweight fans of multiple ultra-fine lashes custom-crafted and applied to each natural lash for a dense, dark, and glamorous gaze.' },
          { name: 'Hybrid Lash Extensions (Blend of Natural & Volume)', price: '₹5,500', desc: 'A customized, highly textured blend of both Classic and Volume lashes to give you a wispy, effortlessly full look.' }
        ]
      },
      {
        name: 'Lash Enhancements',
        image: '/assets/images/services/lash_enhancements.png',
        items: [
          { name: 'Eyelash Lift (Natural Curl Enhancement)', price: '₹3,500', desc: 'A gentle, professional lifting process that curls your natural lashes from the base, making them appear longer and more awake for up to 6–8 weeks.' },
          { name: 'Lash Tint (Darker, Defined Lashes)', price: '₹1,500', desc: 'A deep, semi-permanent dye applied safely to your lashes, creating a smudge-proof mascara look without the clumping.' }
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
        image: '/assets/images/services/brows_pmu.png',
        items: [
          { name: 'Microblading (Natural Hair Stroke Brows)', price: '₹25,000', desc: 'Ultra-fine, manual hair-like strokes etched with precision into sparse gaps to replicate natural brow hairs and balance asymmetry.' },
          { name: 'Ombre / Powder Brows (Soft Shaded Finish)', price: '₹22,000', desc: 'A pixelated machine-shading technique that creates a soft, misty, beautifully filled-in makeup or powder brow appearance.' },
          { name: 'Combination Brows (Microblading + Shading)', price: '₹30,000', desc: 'The ultimate brow standard—crisp hair-like strokes at the front of the brow blended into soft, dense machine shading through the arch and tail.' }
        ]
      },
      {
        name: 'Lips',
        image: '/assets/images/services/lips_pmu.png',
        items: [
          { name: 'Lip Blush (Natural Tint & Definition)', price: '₹20,000', desc: 'Deposits a sheer, beautiful wash of color across the lips to sharpen blurry borders, fix asymmetry, and restore youthful color vibrancy.' },
          { name: 'Lip Neutralisation (Corrects Dark Lips)', price: '₹25,000', desc: 'A highly specialized color-correction process designed to gently transition cool, dark, or hyperpigmented lips into a warm, natural pink or peach base tone.' }
        ]
      },
      {
        name: 'Eyes',
        image: '/assets/images/services/eyes_pmu.png',
        items: [
          { name: 'Eyeliner PMU (Subtle to Bold Definition)', price: '₹15,000', desc: 'A smudge-proof, waterproof lash liner tattooed delicately along the lash line to make your eyes look instantly larger and more defined.' }
        ]
      }
    ]
  }
];

const monsoonFaqs = [
  {
    q: 'Do I need to book an appointment, or do you accept walk-ins?',
    a: 'While we always do our best to accommodate walk-in guests, we highly recommend booking an appointment in advance. Reserving your time ensures you are matched with the ideal Senior Stylist or Therapist for your specific needs, completely eliminating wait times.'
  },
  {
    q: 'What is the difference between Hair Botox and Keratin treatments?',
    a: 'Both treatments leave your hair gorgeous and manageable, but they serve different purposes. A Keratin or smoothening treatment is designed to straighten the hair, eliminate frizz, and tame unruly volume. Hair Botox, on the other hand, is a deep-conditioning, anti-aging treatment that repairs damaged fibers, plumps the hair with moisture and proteins, and restores supreme health without drastically altering your natural curl pattern.'
  },
  {
    q: 'How long does Semi-Permanent Makeup (PMU) like Microblading or Lip Blush last?',
    a: 'Our premium PMU procedures are designed to offer long-lasting, effortless beauty. Depending on your skin type, lifestyle, and how well you follow aftercare instructions, Microblading, Ombre Brows, and Lip Blush typically last between 1 to 3 years. We recommend an annual touch-up to keep the color crisp and vibrant.'
  },
  {
    q: 'Is Semi-Permanent Makeup (PMU) safe, and does it hurt?',
    a: 'Your safety and comfort are our guarantees. We use strictly single-use, sterile equipment and premium international medical-grade pigments. Before and during the procedure, we apply a high-quality topical numbing cream to ensure you feel minimal to no discomfort—most clients describe it as a light scratching or vibrating sensation.'
  },
  {
    q: 'How do I maintain my luxury hair color or balayage at home?',
    a: 'To keep your custom color vibrant and healthy, we recommend using sulfate-free, color-safe shampoos and rich hydrating masks. Try to wash your hair with lukewarm (not hot) water, and always use a premium heat protectant before styling. Your stylist will prescribe a personalized home-care regimen before you leave the salon.'
  },
  {
    q: 'How long do your Eyelash Extensions last?',
    a: 'With proper care, our luxury eyelash extensions will last beautifully for 3 to 4 weeks. Because they are applied to your natural lashes, they will safely shed as your natural lash cycle progresses. We recommend booking a lash refill every 2 to 3 weeks to keep your set looking full, dark, and perfectly fluffy.'
  },
  {
    q: 'Will nail extensions damage my natural nails?',
    a: 'Not when applied and removed by our experts! At Monsoon, our master nail technicians use precise techniques and premium acrylic or gel products that protect the integrity of your nail bed. Damage only occurs if extensions are picked or peeled off at home. We always recommend returning to the salon for a safe, professional soak-off or refill.'
  },
  {
    q: 'What kind of products do you use for your Spa and Facial therapies?',
    a: 'We believe that premium results require premium ingredients. We exclusively partner with elite, international skincare and spa brands known for their efficacy and purity. All products used during your massage, scrub, or facial will be customized to your specific skin type and sensitivities following a thorough consultation with our therapists.'
  }
];

const monsoonGallery = [
  { id: 1, image: '/assets/images/mansoon_pro_saloon.jpeg', title: 'Grand Entry & Reception' },
  { id: 2, image: '/assets/images/mansoon_pro_sallon_2.jpeg', title: 'Styling Atelier' },
  { id: 3, image: '/assets/images/mansoon_pro_saloon_3.jpeg', title: 'Lash & PMU Suite' },
  { id: 4, image: '/assets/images/mansoon_pro_saloon_4.jpeg', title: 'Nail Lounge' },
  { id: 5, image: '/assets/images/mansoon_pro_saloon_5.jpeg', title: 'Wellness Sanctuary' }
];

const monsoonTeamPhotos = [
  { image: '/assets/images/mansoon_team.jpeg', caption: 'The Monsoon Master Atelier Team' },
  { image: '/assets/images/mansoon_team2.jpeg', caption: 'Creative Dialogue & Styling Session' },
  { image: '/assets/images/mansoon_team3.jpeg', caption: 'Precision Execution & Finishing' }
];

const monsoonStylists = [
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
];

export default function Mansoon() {
  const whatsappNumber = "919862224291";
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeProtocolTab, setActiveProtocolTab] = useState<'hair' | 'pmu'>('hair');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  
  const handleWhatsAppEnquiry = (itemName: string) => {
    const message = `Hi Monsoon, I'm interested in booking the "${itemName}" service from your master menu. Could you please provide more details?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden mb-20">
        <img
          src="/assets/images/mansoon-hero.png"
          alt="Monsoon Master Menu"
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
              Monsoon <span className="text-white not-italic">Services</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base font-light tracking-wide leading-relaxed">
              Welcome to the comprehensive, luxury-oriented website copy layout for your brand, Monsoon. This content is crafted to be premium, deeply engaging, and instantly understandable for your online visitors.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-gold/70 text-[10px] tracking-[0.45em] uppercase mb-4">Monsoon Menu</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif max-w-3xl leading-tight">
              A curated service catalogue for every beauty ritual.
            </h2>
          </div>
          <div className="max-w-md text-white/45 text-sm leading-relaxed">
            Explore the collection by category. Each service is presented with clear pricing, premium techniques, and a quick WhatsApp enquiry option.
          </div>
        </div>

        {/* Tab Selection */}
        <div className="sticky top-[72px] lg:top-[88px] z-30 bg-luxury-black/95 backdrop-blur-md py-4 -mx-6 px-6 flex overflow-x-auto no-scrollbar gap-3 mb-16 scroll-smooth border-b border-white/5">
          {allMonsoonServices.map((category, catIdx) => {
            const isActive = activeTab === catIdx;
            const getIcon = () => {
              const iconClass = isActive ? 'text-luxury-black' : 'text-gold';
              switch (catIdx) {
                case 0: return <Scissors className={iconClass} size={18} />;
                case 1: return <Sparkles className={iconClass} size={18} />;
                case 2: return <Heart className={iconClass} size={18} />;
                case 3: return <Zap className={iconClass} size={18} />;
                case 4: return <Brush className={iconClass} size={18} />;
                case 5: return <Eye className={iconClass} size={18} />;
                case 6: return <User className={iconClass} size={18} />;
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

        {/* Category Details */}
        <div className="min-h-[400px]">
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
                          case 0: return <Scissors className={iconClass} />;
                          case 1: return <Sparkles className={iconClass} />;
                          case 2: return <Heart className={iconClass} />;
                          case 3: return <Zap className={iconClass} />;
                          case 4: return <Brush className={iconClass} />;
                          case 5: return <Eye className={iconClass} />;
                          case 6: return <User className={iconClass} />;
                          default: return <Sparkles className={iconClass} />;
                        }
                      })()}
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.45em] uppercase text-white/40 mb-2">Service Category</p>
                      <h3 className="text-3xl md:text-4xl font-serif">
                        {allMonsoonServices[activeTab].category}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-[10px] tracking-[0.3em] uppercase text-white/50">
                    <span className="px-4 py-2 rounded-full border border-white/10">
                      {allMonsoonServices[activeTab].sections.length} sections
                    </span>
                    <span className="px-4 py-2 rounded-full border border-white/10">Premium pricing</span>
                    <span className="px-4 py-2 rounded-full border border-white/10">WhatsApp enquiry</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {allMonsoonServices[activeTab].sections.map((section, secIdx) => (
                    <div key={secIdx} className="rounded-[1.5rem] border border-white/10 bg-black/20 overflow-hidden flex flex-col group/section">
                      {section.image && (
                        <div className="h-56 overflow-hidden relative">
                          <img
                            src={section.image}
                            alt={section.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/section:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                        </div>
                      )}
                      <div className="p-6 md:p-7 flex-grow flex flex-col justify-between">
                        <div>
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
                                  <p className="text-white/40 text-xs md:text-[13px] leading-relaxed mb-4 font-light">
                                    {item.desc}
                                  </p>
                                )}

                                <button
                                  onClick={() => handleWhatsAppEnquiry(item.name)}
                                  className="inline-flex items-center gap-2 text-white/45 text-[10px] tracking-[0.35em] uppercase font-bold hover:text-gold transition-colors cursor-pointer"
                                >
                                  <MessageCircle size={12} className="text-[#25D366]" />
                                  <span>Enquire on WhatsApp</span>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* The Monsoon Transformation Experience */}
        <section className="mt-32 border-t border-white/5 pt-24">
          <div className="text-center mb-16">
            <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Our Standard</h5>
            <h2 className="text-4xl md:text-5xl font-serif">The Monsoon <span className="italic">Transformation Journey</span></h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
              At Monsoon, a luxury service is never an off-the-shelf menu item. We curate an experience that respects your individuality from the second you arrive:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'The Curated Aesthetic Dialogue',
                desc: 'Whether you are visiting us for a structural balayage, a creative haircut, or advanced designer nails, our master artists sit down with you first. We review your inspiration photos, daily maintenance routines, and personal style goals.'
              },
              {
                step: '02',
                title: 'Texture & Feature Harmony',
                desc: 'We evaluate your natural hair elasticity, growth patterns, facial symmetry, and skin undertones. This ensures that every cut, color, or cosmetic enhancement beautifully frames your natural architecture.'
              },
              {
                step: '03',
                title: 'Sterile Master Execution',
                desc: 'Once our shared vision is locked in, you can unwind with our signature beverage menu while our experts utilize international techniques and elite-tier products to bring your look to life.'
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
            <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Guest Education</h5>
            <h2 className="text-4xl md:text-5xl font-serif">Pre & Post-Care <span className="italic">Protocols</span></h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
              Proper pre and post-care helps protect your hair, skin, and makeup investment. Follow our professional guidelines for the best results:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Tabs Selector */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button
                type="button"
                onClick={() => setActiveProtocolTab('hair')}
                className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl border text-xs tracking-widest uppercase font-bold transition-all duration-300 cursor-pointer ${
                  activeProtocolTab === 'hair'
                    ? 'bg-gold text-luxury-black border-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'bg-white/[0.02] text-white/50 border-white/5 hover:border-gold/25'
                }`}
              >
                <ClipboardList size={16} />
                <span>Hair Coloring & Treatments</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveProtocolTab('pmu')}
                className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl border text-xs tracking-widest uppercase font-bold transition-all duration-300 cursor-pointer ${
                  activeProtocolTab === 'pmu'
                    ? 'bg-gold text-luxury-black border-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'bg-white/[0.02] text-white/50 border-white/5 hover:border-gold/25'
                }`}
              >
                <ClipboardList size={16} />
                <span>Semi-Permanent PMU</span>
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
                
                {activeProtocolTab === 'hair' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-gold tracking-[0.2em] uppercase text-[10px] mb-6 font-bold flex items-center">
                        <CheckCircle2 size={14} className="mr-2 text-gold" /> Pre-Care (Hair Color, Botox, Keratin)
                      </h4>
                      <ul className="space-y-4">
                        {[
                          "For maximum scalp comfort and uniform color uptake, arrive with hair washed 24 hours prior.",
                          "Please avoid applying temporary root cover-up sprays or heavy oils on the day of your service."
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
                        <CheckCircle2 size={14} className="mr-2 text-gold" /> Post-Care (Hair Color, Botox, Keratin)
                      </h4>
                      <ul className="space-y-4">
                        {[
                          "Wait a full 48 hours before washing your hair at home to allow chemical bonds or color pigments to completely lock into the cuticle.",
                          "Always switch to professional, sulfate-free, color-safe shampoos to preserve your investment."
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
                        <CheckCircle2 size={14} className="mr-2 text-gold" /> Pre-Care (Brows, Lips, Eyeliner PMU)
                      </h4>
                      <ul className="space-y-4">
                        {[
                          "Do not consume caffeine, alcohol, or energy drinks for 24 hours before your procedure, as these can thin the blood and affect pigment retention.",
                          "For Lip Blush, keep your lips intensely moisturized for 3 days leading up to your visit."
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
                        <CheckCircle2 size={14} className="mr-2 text-gold" /> Post-Care (Brows, Lips, Eyeliner PMU)
                      </h4>
                      <ul className="space-y-4">
                        {[
                          "Keep the treated area completely dry and free from tap water, makeup, and heavy sweat for the first 7–10 days.",
                          "The color will look deep and intense for the first 4–5 days before softly shedding to reveal its true, natural, airbrushed tone by week 4."
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
                The Monsoon Salon Promise
              </h4>
              <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                All of our services are customized following a professional consultation. We use premium international products, advanced technologies, and maintain a hyper-hygienic, luxurious environment for your comfort.
              </p>
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
                Monsoon PMU Safety Standards
              </h4>
              <ul className="space-y-4 text-white/60 text-sm leading-relaxed font-light">
                <li className="flex items-start space-x-2">
                  <span className="text-gold">•</span>
                  <span>Personalized consultations & precise structural face-mapping before every procedure.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold">•</span>
                  <span>International medical-grade premium pigments and strict single-use sterile hygiene protocols.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold">•</span>
                  <span>Dedicated touch-up sessions included to secure long-lasting color perfection.</span>
                </li>
              </ul>
            </div>
            <Link
              to="/book?brand=monsoon"
              className="w-fit px-8 py-4 bg-gold text-luxury-black text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <ClipboardList size={14} />
              <span>Book PMU Consultation</span>
            </Link>
          </div>
        </div>

        {/* Visual Atelier Gallery */}
        <section className="mt-32 border-t border-white/5 pt-24">
          <div className="text-center mb-16">
            <h5 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Space & Artistry</h5>
            <h2 className="text-4xl md:text-5xl font-serif">Visual <span className="italic">Atelier Gallery</span></h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
              Step inside our modern, high-end sanctuary. Every detail of the Monsoon Pro Salon is custom-curated to inspire transformation and deep relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {monsoonGallery.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedImage(item.image)}
                className="group relative aspect-[3/4] overflow-hidden cursor-zoom-in border border-white/5 bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 border border-gold/30">
                  <span className="text-gold text-[9px] tracking-[0.35em] uppercase mb-1">Monsoon Room</span>
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

        {/* Monsoon Team Showcase */}
        <section className="mt-32 border-t border-white/5 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Group Photo Slider */}
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
                
                {/* Navigation Arrows */}
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

                {/* Caption bar */}
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

            {/* Team Text Description */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-gold tracking-[0.45em] uppercase text-[10px] mb-3 font-semibold block">Team Spirit</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">The Monsoon <br/><span className="italic">Collective</span></h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                Behind the Vellisii Monsoon name is a synchronized collective of award-winning stylists, certified colorists, and nail architects. Trained in international standards, they translate trends into custom-fitted styles.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                <div>
                  <h4 className="text-2xl font-serif text-gold mb-1">15+</h4>
                  <p className="text-[9px] tracking-widest uppercase text-white/40 font-bold">Master Stylists</p>
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-gold mb-1">100%</h4>
                  <p className="text-[9px] tracking-widest uppercase text-white/40 font-bold">Certified Artists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Stylists Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {monsoonStylists.map((stylist) => (
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
        </section>

        {/* FAQ Section */}
        <div className="mt-32 border-t border-white/10 pt-20">
          <h3 className="text-3xl md:text-4xl font-serif mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {monsoonFaqs.map((faq, idx) => {
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
