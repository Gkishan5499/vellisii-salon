import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Scissors, Eye, Crown, Clock, GraduationCap, Award, 
  ChevronDown, ChevronUp, ArrowLeft, CheckCircle2, MessageCircle, 
  Gift, Briefcase, Zap, ShieldCheck, Star, Target, Check, Layers, Users
} from 'lucide-react';

interface Module {
  title: string;
  items: string[];
  description?: string;
}

interface CourseData {
  id: string;
  title: string;
  emoji: string;
  image: string;
  subtitle?: string;
  duration: string;
  eligibility: string;
  overview: string;
  syllabus: Module[];
  includes: string[];
  certification: string;
  issuedBy: string;
  whyChoose?: string[];
  career?: string[];
  bonus?: {
    title: string;
    description: string;
    items: string[];
  };
  practical?: string[];
  feeInfo?: string;
}

const academyCourses: CourseData[] = [
  {
    id: 'basic-beautician',
    title: 'BASIC BEAUTICIAN CERTIFICATE COURSE',
    emoji: '🌸',
    image: '/assets/images/basic_beautician_academy.png',
    duration: '2 Months (180–200 Hours)',
    eligibility: 'No prior experience required.',
    overview: 'This course is designed for beginners who wish to start their career in the beauty industry. Students will learn the fundamental skills required to work confidently in a salon environment.',
    certification: 'Basic Beautician Certificate',
    issuedBy: 'Vellisii Beauty Academy',
    includes: [
      'Interactive Study Material',
      'Practical Hands-On Workbook',
      'Live Model Training Sessions',
      'Step-by-Step Trainer Demos',
      'Personalized Assessment & Feedback',
      'Lifetime Technical Chat Support'
    ],
    whyChoose: [
      'Beginner Friendly Foundation',
      'Comprehensive Core Grooming Modules',
      'Deep Dive into Hand & Foot Spa Care',
      'Practical Threading & Waxing Training',
      'Direct Professional Mentorship',
      'Immediate Ready-to-Work Certification'
    ],
    career: [
      'Junior Beauty Therapist',
      'Salon Grooming Assistant',
      'Freelance Grooming Professional',
      'Nail & Threading Specialist'
    ],
    syllabus: [
      {
        title: 'Module 1: Introduction to Beauty Industry',
        items: [
          'Introduction to Beauty Therapy',
          'Professional Ethics',
          'Personal Grooming',
          'Salon Etiquette',
          'Professional Appearance',
          'Client Communication Skills'
        ]
      },
      {
        title: 'Module 2: Hygiene & Safety',
        items: [
          'Salon Hygiene Standards',
          'Personal Hygiene',
          'Tool Sterilization',
          'Sanitization Procedures',
          'Infection Control',
          'Workplace Safety'
        ]
      },
      {
        title: 'Module 3: Skin Science Fundamentals',
        items: [
          'Introduction to Skin',
          'Skin Anatomy',
          'Skin Types',
          'Skin Conditions',
          'Skin Analysis',
          'Client Consultation'
        ]
      },
      {
        title: 'Module 4: Cleansing & Facial Basics',
        items: [
          'Cleansing Techniques',
          'Exfoliation Methods',
          'Toning',
          'Moisturizing',
          'Basic Facial Procedure',
          'Facial Massage Techniques'
        ]
      },
      {
        title: 'Module 5: Hair Removal (Threading & Waxing)',
        items: [
          'Eyebrow Threading',
          'Upper Lip Threading',
          'Forehead Threading',
          'Chin Threading',
          'Normal Waxing',
          'Underarm Waxing',
          'Arm Waxing',
          'Leg Waxing',
          'Post Wax Care'
        ]
      },
      {
        title: 'Module 6: Bleach & De-Tan',
        items: [
          'Facial Bleach Application',
          'Safety Precautions',
          'De-Tan Treatments',
          'Product Knowledge'
        ]
      },
      {
        title: 'Module 7: Hand & Foot Care',
        items: [
          'Nail Preparation',
          'Cuticle Care',
          'Basic Manicure',
          'Foot Care Basics',
          'Basic Pedicure',
          'Foot Massage Techniques'
        ]
      },
      {
        title: 'Module 8: Eyebrow & Beauty Grooming',
        items: [
          'Eyebrow Shaping & Designing',
          'Facial Grooming Basics',
          'Basic Client Consultation'
        ]
      },
      {
        title: 'Module 9: Practical Training & Assessments',
        items: [
          'Live Model Practice',
          'Client Handling & Greeting',
          'Service Demonstration',
          'Practical Assessments & Exams'
        ]
      }
    ]
  },
  {
    id: 'eyelash-extension',
    title: 'EYELASH EXTENSION CERTIFICATION COURSE',
    subtitle: 'Beginner to Professional Lash Artist Training',
    emoji: '👁️',
    image: '/assets/images/eyelash_extension_academy.png',
    duration: '5 Days Intensive Professional Training',
    eligibility: 'No Prior Experience Required',
    overview: 'Transform your passion into a rewarding career with our comprehensive Eyelash Extension Certification Course. Designed for beginners and aspiring lash artists, this hands-on program provides the knowledge, techniques, and confidence required to create beautiful, safe, and long-lasting lash extensions. Start earning immediately after certification!',
    certification: 'Eyelash Extension Certification Course',
    issuedBy: 'Villisii Beauty Academy',
    includes: [
      'Professional Starter Kit Included',
      'Live Model Training under Supervision',
      'Official Training Manual',
      'Practical Workbook & Mapping Guides',
      'Lifetime Technical Support Support',
      'Business Guidance & Client Sourcing'
    ],
    whyChoose: [
      'Beginner Friendly - No Experience Needed',
      'Industry-Focused & Practical Training',
      'Free Starter Kit to Jumpstart Your Business',
      'FREE Complimentary Lash Lift & Tint Training',
      'Small Batch Training for Personal Attention',
      'Lifetime Technical Query Support'
    ],
    career: [
      'Professional Lash Salon Artist',
      'Freelance Lash Stylist',
      'Lash Studio Business Owner',
      'Mobile Lash Service Provider'
    ],
    practical: [
      'Lash Mapping Practice',
      'Live Model Practice',
      'Trainer Supervision',
      'Practical Assessment',
      'Hands-On Training'
    ],
    bonus: {
      title: 'Complimentary Lash Lift & Tint Training',
      description: 'Included FREE with this course. Students will learn the secrets of curling and coloring natural lashes.',
      items: [
        'Lash Lift Procedure & Chemistry',
        'Lash Tint Application Techniques',
        'Product & Chemical Safety Knowledge',
        'Safety Protocols & Eye Protection',
        'Aftercare Guidelines for Clients',
        'Live Model Practice Session'
      ]
    },
    syllabus: [
      {
        title: 'Lash Anatomy & Science',
        description: 'Build a strong foundation by understanding natural lashes and their growth patterns.',
        items: [
          'Natural Lash Anatomy',
          'Lash Growth Cycle',
          'Lash Health & Safety Standards',
          'Eye Shape Analysis',
          'Client Suitability Assessment',
          'Contraindications'
        ]
      },
      {
        title: 'Product Knowledge & Safety',
        description: 'Develop a thorough understanding of professional lash products and safe working practices.',
        items: [
          'Lash Product Knowledge (Lengths, curls, weights)',
          'Adhesive Fundamentals & Humidity Control',
          'Product Selection Criteria',
          'Product Storage & Safety Management',
          'Hygiene & Sanitization Protocols'
        ]
      },
      {
        title: 'Lash Mapping & Styling',
        description: 'Learn how to create customized lash designs to suit different eye shapes and client preferences.',
        items: [
          'Natural Eye Mapping',
          'Doll Eye Mapping',
          'Cat Eye Mapping',
          'Open Eye Mapping',
          'Eye Shape Corrections',
          'Lash Styling Techniques'
        ]
      },
      {
        title: 'Classic Lash Extensions',
        description: 'Master the foundation of eyelash extension application.',
        items: [
          'Lash Isolation Techniques',
          'Proper Placement & Distance',
          'Adhesive Control & Dipping',
          'Lash Direction & Alignment',
          'Full Set Application Step-by-Step',
          'Lash Refill Procedure'
        ]
      },
      {
        title: 'Hybrid Lash Extensions',
        description: 'Create soft, textured, and modern lash designs.',
        items: [
          'Hybrid Lash Mapping',
          'Combining Classic & Volume Techniques',
          'Wispy Lash Effects',
          'Hybrid Styling Techniques'
        ]
      },
      {
        title: 'Volume Lash Extensions',
        description: 'Learn professional techniques for fuller lash sets.',
        items: [
          'Volume Theory & Weight Calculations',
          'Fan Creation Techniques (Pinch & Tape)',
          'Weight & Diameter Selection',
          'Volume Placement & Attachment',
          'Volume Styling & Direction'
        ]
      },
      {
        title: 'Mega Volume Lash Extensions',
        description: 'Take your lash artistry to an advanced level.',
        items: [
          'Advanced Fan Making (0.03 diameter)',
          'Mega Density & Styling Rules',
          'Mega Volume Mapping',
          'Maximum Retention Techniques'
        ]
      },
      {
        title: 'Lash Removal & Aftercare',
        description: 'Provide complete lash services with confidence.',
        items: [
          'Professional Lash Removal (Cream & Gel)',
          'Safe Removal Techniques (No natural lash pull)',
          'Lash Maintenance Guidance',
          'Client Aftercare Instructions & Styling Brushes'
        ]
      },
      {
        title: 'Client Consultation & Business Basics',
        description: 'Learn how to turn your skills into a profitable career.',
        items: [
          'Client Consultation Protocols',
          'Patch Testing & Allergy Mitigation',
          'Pricing Strategies & ROI Calculator',
          'Client Retention Systems',
          'Before & After Photography Tips',
          'Social Media Marketing Basics'
        ]
      }
    ]
  },
  {
    id: 'advanced-beautician',
    title: 'ADVANCED BEAUTICIAN DIPLOMA COURSE',
    emoji: '💅',
    image: '/assets/images/advanced_beautician_academy.png',
    duration: '2 Months',
    eligibility: 'Basic Beautician Certificate Course or Equivalent Knowledge',
    overview: 'Elevate your aesthetic capabilities and transition into a top-tier aesthetic specialist. This comprehensive diploma focuses on advanced facial therapies, chemical peels, spa reflexology, Rica waxing, brow lamination, lash lifts, and modern technologies like HydraFacial and BB Glow.',
    certification: 'Advanced Beautician Diploma',
    issuedBy: 'Villisii International Beauty Academy',
    feeInfo: 'Easy Installment Facility Available',
    includes: [
      'Advanced Study Material & Guides',
      'Advanced Practical Workbook',
      'High-End Live Model Practice',
      'Intense Salon Internship Training',
      'Official Diploma Certification',
      'Placement Assistance in Leading Salons',
      'Lifetime Masterclass Technical Support'
    ],
    whyChoose: [
      'Advanced Technology Training (HydraFacial, BB Glow)',
      'Salon Internship for Real-world Exposure',
      'Placement Assistance Post Certification',
      'Flexible Fees (Easy Installment Options)',
      'Intensive Practical Live Model Work',
      'International Beauty SOP Standards'
    ],
    career: [
      'Senior Beauty & Skin Therapist',
      'Aesthetic Clinic Specialist',
      'Salon Manager / Supervisor',
      'Lash & Brow Laminating Artist',
      'Bridal Beauty Stylist'
    ],
    syllabus: [
      {
        title: 'Module 1: Advanced Beauty Therapy',
        items: [
          'Advanced Skin Analysis',
          'Client Consultation Techniques',
          'Treatment Planning',
          'Contraindications & Precautions',
          'Professional Record Keeping',
          'Client Care & Follow-Up'
        ]
      },
      {
        title: 'Module 2: Advanced Facial Therapies',
        items: [
          'Fruit Facial',
          'Pearl Facial',
          'Gold Facial',
          'Diamond Facial',
          'Anti-Ageing Facial',
          'Acne Control Facial',
          'Brightening Facial',
          'Sensitive Skin Facial',
          'Hydrating Facial',
          'Professional Facial Massage Techniques'
        ]
      },
      {
        title: 'Module 3: Professional Skin Treatments',
        items: [
          'De-Tan Therapy',
          'Skin Polishing',
          'Body Polishing',
          'Neck & Back Treatments',
          'Professional Face, Neck & Shoulder Massage',
          'Client-Specific Treatment Selection'
        ]
      },
      {
        title: 'Module 4: Advanced Hair Removal Techniques',
        items: [
          'Rica Waxing Application',
          'Chocolate Waxing',
          'Sensitive Skin Waxing Protocols',
          'Full Body Waxing Practical',
          'Brazilian Waxing (Theory)',
          'Pre & Post Wax Skin Care',
          'Waxing Contraindications'
        ]
      },
      {
        title: 'Module 5: Professional Hand & Foot Care',
        description: 'Advanced Manicure & Pedicure',
        items: [
          'Spa Manicure Techniques',
          'Paraffin Manicure Therapy',
          'Deep Cuticle Care & Rehydration',
          'Hand Massage & Reflex Points',
          'Spa Pedicure Protocols',
          'Crack Heel Intensive Treatment',
          'Foot Care Treatments',
          'Reflexology Basics'
        ]
      },
      {
        title: 'Module 6: Beauty Enhancement Services',
        items: [
          'Brow Shaping & Designing',
          'Brow Tinting',
          'Brow Lamination',
          'Lash Lift',
          'Lash Tint',
          'Professional Client Consultation for Lash & Brow Services'
        ]
      },
      {
        title: 'Module 7: Advanced Skin Technologies',
        items: [
          'HydraFacial Fundamentals & Machinery',
          'LED Light Therapy Colors & Benefits',
          'BB Glow Fundamentals & Micro-needling',
          'Introduction to Non-Invasive Skin Treatments',
          'Skin Consultation & Treatment Planning'
        ]
      },
      {
        title: 'Module 8: Hair Fundamentals for Beauticians',
        items: [
          'Hair Anatomy & Structure',
          'Hair Growth Cycle',
          'Hair & Scalp Analysis',
          'Hair Spa Treatments & Massages',
          'Blow Dry Techniques & Volumizing',
          'Basic Hair Styling (Curls, Bun, Straight)',
          'Client Hair Consultation'
        ]
      },
      {
        title: 'Module 9: Salon Operations & Professional Development',
        items: [
          'Appointment Management Systems',
          'Retail Sales & Product Recommendation',
          'Customer Service Excellence',
          'Client Retention Strategies',
          'Professional Communication Skills',
          'Salon Hygiene & Standard Operating Procedures (SOPs)'
        ]
      },
      {
        title: 'Module 10: Practical Training & Internship',
        items: [
          'Live Model Practice Sessions',
          'Client Case Studies',
          'Treatment Demonstrations',
          'Salon Internship Integration',
          'Service Quality Assessment',
          'Final Practical Examination'
        ]
      }
    ]
  },
  {
    id: 'pro-lash-master',
    title: 'VELLISII PRO LASH MASTER ACADEMY',
    subtitle: 'Advanced Eyelash Extension & Trending Lash Styling Certification',
    emoji: '👑',
    image: '/assets/images/pro_lash_master_academy.png',
    duration: '5 Days Intensive Master Training',
    eligibility: 'Basic Eyelash Extension Certification Required or Existing Lash Artist with Basic Lash Knowledge',
    overview: 'Ready to move beyond basic lash extensions? The VELLISII Pro Lash Master Course is designed for lash artists who already know the fundamentals and want to master the most requested, trending, and high-paying lash styles in the beauty industry. Learn advanced Russian Volume, Mega Volume, Anime Spikes, Kim K Texture, Wet Look Styling, and retention secrets to command premium service prices!',
    certification: 'VELLISII Pro Lash Master Certification',
    issuedBy: 'VELLISII Lash Academy',
    includes: [
      'Professional Master Starter Kit',
      'Multiple Live Model Practice Sessions',
      'Master Certification',
      'Advanced Practical Workbook',
      'Portfolio Development Guide',
      'Lifetime Technical Support Support',
      'Business Mentorship & Marketing Kit'
    ],
    whyChoose: [
      'Learn Advanced International Lash Trends',
      'Master Anime, Kim K, Wispy & Wet Look Styles',
      'Russian Volume & Mega Volume Expertise',
      'Small Batch Personalized Master Training',
      'Intense Live Model Practice under Supervision',
      'Premium Portfolio Building & Content Tips',
      'Lifetime Support & Marketing Guidance',
      'Ability to Start Charging Premium Prices'
    ],
    career: [
      'Premium Lash Specialist',
      'Celebrity Lash Stylist',
      'Lash Artistry Educator',
      'Lash Studio Business Owner',
      'High-End Salon Master Artist'
    ],
    syllabus: [
      {
        title: 'Master the World\'s Most Trending Lash Styles',
        description: 'Anime Lash, Cat Eye, Doll Eye, Kim K, Wet Look, and Wispy designs.',
        items: [
          'Anime Lash Extensions: Anime Lash Mapping, Signature Spike Creation, Manga Eye Styling, Custom Anime Designs, Perfect Placement Techniques',
          'Cat Eye Lash Extensions: Cat Eye Mapping, Eye Elongation Techniques, Styling for Different Eye Shapes, Luxury Cat Eye Designs',
          'Doll Eye Lash Extensions: Doll Eye Mapping, Open Eye Styling, Round Eye Enhancement, Lash Placement Techniques',
          'Kim K Lash Extensions: Kim K Mapping, Wispy Spikes, Texture Building, Signature Celebrity Lash Looks',
          'Wet Look Lash Extensions: Wet Look Styling, Closed Fan Techniques, Wet Effect Placement, Social Media Trending Designs',
          'Wispy Lash Extensions: Wispy Mapping, Texture Layering, Custom Wispy Effects, Trending Lash Designs'
        ]
      },
      {
        title: 'Russian Volume Mastery',
        description: 'Become an expert in professional volume artistry.',
        items: [
          'Russian Volume Theory',
          'Fan Creation Techniques (2D to 6D)',
          'Lash Weight & Diameter Selection (0.05, 0.07)',
          'Density Control & Symmetry Rules',
          'Perfect Base Attachment & Wrap',
          'Advanced Placement Techniques'
        ]
      },
      {
        title: 'Mega Volume Artistry',
        description: 'Learn luxury lash techniques for premium clients.',
        items: [
          'Mega Volume Mapping',
          'Advanced Fan Creation (8D to 15D using 0.03)',
          'High Density Lash Styling',
          'Luxury Lash Designs',
          'Retention Optimization'
        ]
      },
      {
        title: 'Retention & Troubleshooting Secrets',
        description: 'Learn the techniques used by successful lash artists.',
        items: [
          'Retention Mastery (Thermodynamics of glue)',
          'Adhesive Control & Temperature/Humidity Pairing',
          'Common Application Mistakes & Fixes',
          'Lash Correction Techniques',
          'Client Aftercare Protocols',
          'Long-Lasting Lash Results (5-7 Weeks)'
        ]
      },
      {
        title: 'Content Creation & Social Media',
        description: 'Learn how to attract premium clients online.',
        items: [
          'Lash Photography (Lighting & Ring Light tips)',
          'Before & After Content Strategy',
          'Instagram Reels, Tiktok & Marketing',
          'Personal Branding for Lash Artists',
          'Client Attraction & Lead Nurturing Strategies'
        ]
      },
      {
        title: 'Build Your Lash Business',
        description: 'Turn your passion into profit.',
        items: [
          'Premium Pricing Strategies (How to double your prices)',
          'High-End Client Consultation Protocols',
          'Repeat Client & Membership Systems',
          'Elevated Customer Experience Standard',
          'Lash Business Growth Roadmap',
          'Home Studio & Salon Setup Guidance'
        ]
      },
      {
        title: 'Hands-On Practical Training',
        items: [
          'Advanced Lash Mapping Practice',
          'Multiple Live Model Sessions',
          'Portfolio Building Shoot',
          'Trainer Supervision & Micro-Corrections',
          'Practical Assessments & Certificate Ceremony',
          'Real Client Handling Experience'
        ]
      }
    ]
  }
];

export default function VillisiiAcademy() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCourseId = searchParams.get('course');
  const whatsappNumber = '919862224291';

  // Toggle syllabus module expansion
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  const toggleModule = (moduleKey: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleKey]: !prev[moduleKey]
    }));
  };

  const handleWhatsAppEnquiry = (courseTitle: string) => {
    const message = `Hi Vellisii Academy, I am interested in enrolling in the "${courseTitle}". Could you please provide information regarding fees, schedules, and batch slots?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const selectCourse = (id: string | null) => {
    if (id) {
      setSearchParams({ course: id });
    } else {
      setSearchParams({});
    }
  };

  // Find currently active course
  const activeCourse = academyCourses.find(c => c.id === activeCourseId);

  useEffect(() => {
    // Reset module expansion when active course changes
    setExpandedModules({});
    // Scroll to top of details or page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCourseId]);

  return (
    <div className="pt-24 bg-luxury-black min-h-screen text-white">
      <AnimatePresence mode="wait">
        {!activeCourse ? (
          // landing page view
          <motion.div
            key="academy-landing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pb-24"
          >
            {/* Academy Hero Section */}
            <div className="relative h-[60vh] overflow-hidden mb-20 flex items-center justify-center">
              <img
                src="/assets/images/hero-artistry.png"
                alt="Vellisii Beauty Academy"
                className="w-full h-full object-cover opacity-30 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
              <div className="relative z-10 text-center px-6 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="flex justify-center space-x-3 mb-6">
                    <GraduationCap className="text-gold" size={28} />
                    <Star className="text-gold/60" size={28} />
                  </div>
                  <h5 className="text-gold tracking-[0.45em] uppercase text-xs font-bold mb-4">Vellisii Education Atelier</h5>
                  <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                    VELLISII <span className="italic font-light">ACADEMY</span>
                  </h1>
                  <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base font-light tracking-wide leading-relaxed">
                    Create Beauty. Build Confidence. Start Your Career Today. Learn international-standard skin, hair, and lash masteries from industry-leading instructors.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Core Academy Pillars */}
            <div className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: <Users className="text-gold" size={24} />, title: "Small Batches", desc: "Personalized attention with small trainee counts per class." },
                { icon: <Target className="text-gold" size={24} />, title: "100% Practical", desc: "Intense hand-on sessions on real live models under trainer supervision." },
                { icon: <Award className="text-gold" size={24} />, title: "Certified Excellence", desc: "Gain recognized credentials that validate your skill sets." },
                { icon: <Zap className="text-gold" size={24} />, title: "Lifetime Support", desc: "Access technical assistance and business guidance long after graduation." }
              ].map((pillar, idx) => (
                <div key={idx} className="glass p-6 border-white/5 rounded-2xl flex items-start space-x-4">
                  <div className="p-3 bg-gold/5 border border-gold/15 rounded-xl shrink-0">{pillar.icon}</div>
                  <div>
                    <h4 className="font-serif text-white font-medium text-lg mb-1">{pillar.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Course Offerings section */}
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <p className="text-gold/70 text-[10px] tracking-[0.45em] uppercase mb-3">Our Offerings</p>
                <h2 className="text-4xl md:text-5xl font-serif font-light">
                  Professional <span className="italic">Career Programs</span>
                </h2>
                <div className="h-px w-20 bg-gold/45 mx-auto mt-6" />
              </div>

              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {academyCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="glass border border-white/5 rounded-[2rem] overflow-hidden flex flex-col justify-between group hover:border-gold/25 transition-all duration-300"
                  >
                    <div>
                      {/* Card Image Banner */}
                      <div className="h-52 overflow-hidden relative">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent" />
                        <div className="absolute top-4 left-4 text-3xl p-2 bg-luxury-black/80 backdrop-blur-md border border-white/10 rounded-xl">
                          {course.emoji}
                        </div>
                      </div>

                      <div className="p-8 md:p-10 relative">
                        <div className="absolute top-0 right-0 h-24 w-24 bg-gold/5 blur-3xl rounded-full" />
                        
                        {/* Card Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex flex-col gap-1 text-[10px] tracking-[0.15em] uppercase text-white/40">
                            <span className="flex items-center gap-1">
                              <Clock size={12} className="text-gold" /> {course.duration}
                            </span>
                          </div>
                        </div>

                        {/* Course Titles */}
                        <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors duration-300 mb-2 leading-snug">
                          {course.title}
                        </h3>
                        {course.subtitle && (
                          <p className="text-gold/80 text-xs tracking-wider uppercase mb-4">{course.subtitle}</p>
                        )}
                        
                        {/* Overview */}
                        <p className="text-white/50 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                          {course.overview}
                        </p>

                        {/* Meta Information list */}
                        <div className="space-y-2 border-t border-white/5 pt-6 text-xs text-white/60">
                          <div className="flex justify-between">
                            <span className="text-white/30">Eligibility</span>
                            <span className="font-medium text-white/80">{course.eligibility}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/30">Certificate</span>
                            <span className="font-medium text-white/80">{course.certification}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="px-8 pb-8 pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => selectCourse(course.id)}
                        className="flex-1 text-center py-4 bg-white/[0.03] border border-white/10 text-white font-bold text-xs tracking-[0.2em] uppercase rounded-xl hover:bg-gold hover:text-luxury-black hover:border-gold transition-all duration-300 cursor-pointer"
                      >
                        Explore Syllabus
                      </button>
                      <button
                        onClick={() => handleWhatsAppEnquiry(course.title)}
                        className="py-4 px-6 border border-gold/20 hover:border-gold/60 text-gold text-xs tracking-widest uppercase rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gold/5 transition-all duration-300 cursor-pointer"
                      >
                        <MessageCircle size={14} className="text-[#25D366]" />
                        <span>Enquire</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          // detailed Course "Page" view
          <motion.div
            key="course-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-6 py-12 pb-32"
          >
            {/* Back Button */}
            <button
              onClick={() => selectCourse(null)}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-gold/5 hover:text-gold transition-all text-xs tracking-[0.2em] uppercase font-bold cursor-pointer mb-12"
            >
              <ArrowLeft size={16} />
              <span>Back to Academy</span>
            </button>

            {/* Course Image Banner */}
            <div className="w-full h-[35vh] md:h-[45vh] rounded-[2.5rem] overflow-hidden border border-white/10 mb-16 relative">
              <img
                src={activeCourse.image}
                alt={activeCourse.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent" />
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Course Metadata & Details */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl md:text-5xl">{activeCourse.emoji}</div>
                  <span className="px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-[10px] tracking-[0.2em] uppercase font-bold">
                    {activeCourse.duration}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">
                  {activeCourse.title}
                </h1>
                {activeCourse.subtitle && (
                  <p className="text-gold tracking-widest uppercase text-sm md:text-base mb-8">{activeCourse.subtitle}</p>
                )}

                <div className="prose prose-invert max-w-none mb-12">
                  <h3 className="text-gold tracking-widest uppercase text-xs font-bold mb-4">Course Overview</h3>
                  <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
                    {activeCourse.overview}
                  </p>
                </div>

                {/* Practical Training (For lash courses) */}
                {activeCourse.practical && (
                  <div className="mb-12 glass border-white/5 p-8 rounded-[1.5rem]">
                    <h3 className="font-serif text-xl text-white mb-6 flex items-center gap-2">
                      <Target className="text-gold" size={20} />
                      <span>Practical Training Breakdown</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeCourse.practical.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 text-white/70 text-sm font-light">
                          <CheckCircle2 size={16} className="text-gold shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Course Syllabus Accordion */}
                <div className="mb-12">
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <p className="text-gold/70 text-[9px] tracking-[0.4em] uppercase mb-1">Learning Curriculum</p>
                      <h3 className="font-serif text-3xl font-light">Course <span className="italic">Syllabus</span></h3>
                    </div>
                    <span className="text-white/35 text-[10px] tracking-[0.2em] uppercase">
                      {activeCourse.syllabus.length} Modules
                    </span>
                  </div>

                  <div className="space-y-4">
                    {activeCourse.syllabus.map((mod, modIdx) => {
                      const moduleKey = `${activeCourse.id}-mod-${modIdx}`;
                      const isExpanded = !!expandedModules[moduleKey];

                      return (
                        <div
                          key={modIdx}
                          className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                            isExpanded 
                              ? 'border-gold/30 bg-gold/[0.02]' 
                              : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                          }`}
                        >
                          <button
                            onClick={() => toggleModule(moduleKey)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                          >
                            <div>
                              <h4 className="font-serif text-lg text-white group-hover:text-gold transition-colors">
                                {mod.title}
                              </h4>
                              {mod.description && (
                                <p className="text-white/40 text-xs mt-1 font-light">{mod.description}</p>
                              )}
                            </div>
                            <div className="h-8 w-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold shrink-0">
                              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="px-8 pb-6 pt-2 border-t border-white/5">
                                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                    {mod.items.map((item, itemIdx) => (
                                      <li key={itemIdx} className="flex items-start space-x-3 text-xs md:text-sm text-white/60 font-light leading-relaxed">
                                        <span className="text-gold mt-1 text-base leading-none">•</span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Complimentary Bonus Module */}
                {activeCourse.bonus && (
                  <div className="mb-12 relative overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-gold/5 via-gold/[0.02] to-transparent p-8 md:p-10">
                    <div className="absolute top-0 right-0 p-6 opacity-10 text-gold">
                      <Gift size={120} />
                    </div>
                    
                    <span className="px-4 py-1 rounded-full border border-gold/30 text-gold text-[9px] tracking-widest uppercase font-bold inline-block mb-4">
                      Complimentary Bonus
                    </span>
                    <h3 className="font-serif text-2xl text-white mb-2">{activeCourse.bonus.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                      {activeCourse.bonus.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gold/15 pt-6">
                      {activeCourse.bonus.items.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs md:text-sm text-white/70">
                          <Check size={16} className="text-gold mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Key Details Sidebar & CTA */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 space-y-6">
                  {/* Summary Card */}
                  <div className="glass border border-white/10 rounded-[2rem] p-8 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                    
                    <h3 className="font-serif text-xl text-white mb-6">Course Quick Specs</h3>
                    
                    <div className="space-y-6">
                      {[
                        { icon: <Clock className="text-gold" size={18} />, label: "Duration", val: activeCourse.duration },
                        { icon: <GraduationCap className="text-gold" size={18} />, label: "Eligibility", val: activeCourse.eligibility },
                        { icon: <Award className="text-gold" size={18} />, label: "Certification", val: activeCourse.certification },
                        { icon: <Layers className="text-gold" size={18} />, label: "Awarding Body", val: activeCourse.issuedBy }
                      ].map((spec, i) => (
                        <div key={i} className="flex items-start space-x-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                          <div className="p-2.5 bg-white/[0.03] border border-white/5 rounded-xl shrink-0">{spec.icon}</div>
                          <div>
                            <span className="text-[10px] text-white/30 uppercase tracking-widest block mb-1">{spec.label}</span>
                            <span className="text-sm font-medium text-white/80 leading-snug block">{spec.val}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {activeCourse.feeInfo && (
                      <div className="mt-8 p-4 bg-gold/5 border border-gold/20 rounded-xl text-center">
                        <span className="text-xs text-gold/80 font-bold uppercase tracking-widest">{activeCourse.feeInfo}</span>
                      </div>
                    )}

                    {/* Booking Buttons */}
                    <div className="mt-8 space-y-3">
                      <button
                        onClick={() => handleWhatsAppEnquiry(activeCourse.title)}
                        className="w-full py-4 bg-gold text-luxury-black font-bold text-xs tracking-[0.25em] uppercase rounded-xl hover:bg-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={16} className="text-[#25D366]" />
                        <span>Enquire on WhatsApp</span>
                      </button>
                      <button
                        onClick={() => selectCourse(null)}
                        className="w-full py-4 bg-white/[0.03] border border-white/10 hover:border-white/30 text-white font-bold text-xs tracking-[0.2em] uppercase rounded-xl transition-all duration-300 cursor-pointer"
                      >
                        Back to All Courses
                      </button>
                    </div>
                  </div>

                  {/* Syllabus Includes checklist */}
                  <div className="glass border border-white/10 rounded-[2rem] p-8">
                    <h3 className="font-serif text-xl text-white mb-6">What is Included?</h3>
                    <div className="space-y-4">
                      {activeCourse.includes.map((item, i) => (
                        <div key={i} className="flex items-start space-x-3 text-sm text-white/60 font-light">
                          <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Career Opportunities */}
                  {activeCourse.career && (
                    <div className="glass border border-white/10 rounded-[2rem] p-8">
                      <h3 className="font-serif text-xl text-white mb-6 flex items-center gap-2">
                        <Briefcase className="text-gold" size={18} />
                        <span>Career Path</span>
                      </h3>
                      <div className="space-y-3">
                        {activeCourse.career.map((opp, i) => (
                          <div key={i} className="flex items-center space-x-3 text-xs md:text-sm text-white/70">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                            <span>{opp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Why Choose active course */}
                  {activeCourse.whyChoose && (
                    <div className="glass border border-white/10 rounded-[2rem] p-8">
                      <h3 className="font-serif text-xl text-white mb-6 flex items-center gap-2">
                        <ShieldCheck className="text-gold" size={18} />
                        <span>Why Choose Us?</span>
                      </h3>
                      <div className="space-y-4">
                        {activeCourse.whyChoose.map((why, i) => (
                          <div key={i} className="flex items-start space-x-3 text-sm text-white/60 font-light">
                            <span className="text-gold text-base leading-none shrink-0 font-bold">✓</span>
                            <span>{why}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
