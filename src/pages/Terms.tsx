import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, FileText, Info } from 'lucide-react';

export default function Terms() {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden mb-20">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="/assets/images/hero-heritage.png"
          alt="Terms and Privacy Policy"
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent z-15" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h5 className="text-gold tracking-[0.5em] uppercase text-xs mb-4">Legal Protocols</h5>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Terms & <span className="italic font-light text-white">Privacy</span></h1>
            <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base font-light tracking-wide leading-relaxed">
              Please read our website policies carefully to understand your rights, responsibilities, and data protections when using our platform.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-32">
        {/* Policy Tab Toggles */}
        <div className="flex justify-center gap-4 mb-16 border-b border-white/5 pb-6">
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl border text-xs tracking-[0.2em] uppercase font-bold transition-all duration-500 cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-gold text-luxury-black border-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                : 'bg-white/[0.02] text-white/50 border-white/5 hover:border-gold/30 hover:text-white'
            }`}
          >
            <FileText size={18} className={activeTab === 'terms' ? 'text-luxury-black' : 'text-gold'} />
            <span>Terms & Conditions</span>
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl border text-xs tracking-[0.2em] uppercase font-bold transition-all duration-500 cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-gold text-luxury-black border-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                : 'bg-white/[0.02] text-white/50 border-white/5 hover:border-gold/30 hover:text-white'
            }`}
          >
            <ShieldCheck size={18} className={activeTab === 'privacy' ? 'text-luxury-black' : 'text-gold'} />
            <span>Privacy Policy</span>
          </button>
        </div>

        {/* Content Display */}
        <div className="min-h-[500px] glass border border-white/5 rounded-[2rem] p-8 md:p-12">
          <AnimatePresence mode="wait">
            {activeTab === 'terms' ? (
              <motion.div
                key="terms"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-10 text-white/70 text-sm md:text-base leading-relaxed font-light"
              >
                <div>
                  <h2 className="text-3xl font-serif text-white mb-6">Website Terms & Conditions</h2>
                  <p className="mb-4">
                    Welcome to our digital platform. This website and its associated booking, communication, and educational channels (collectively, the "Platform") are owned and operated by the Company (referred to as "the Company," "we," "us," or "our").
                  </p>
                  <p>
                    By accessing, browsing, or utilizing this Platform, or by booking any services, treatments, or courses through it, you (referred to as "the Client," "the Student," "the User," or "you") explicitly agree to be bound by the following Terms & Conditions. If you do not agree to these terms, you must immediately cease using this Platform.
                  </p>
                </div>

                <hr className="border-white/5" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                    <span className="text-gold">1.</span> Scope of Services & General Disclaimers
                  </h3>
                  <p>
                    The Company operates multiple specialized business verticals, including but not limited to professional salon grooming services, advanced aesthetic skin and hair therapies, and an educational beauty academy.
                  </p>

                  <div className="space-y-4 pl-4 border-l border-gold/20">
                    <h4 className="text-white font-serif text-lg">A. Advanced Aesthetic & Clinical Operations Disclaimer</h4>
                    <ul className="space-y-3 list-disc pl-5">
                      <li><strong className="text-white">No Medical Advice:</strong> All content, imagery, text, and descriptions hosted on this Platform are intended solely for general informational and educational purposes. They do not constitute formal medical advice, diagnosis, or treatment plans.</li>
                      <li><strong className="text-white">Mandatory Consultation:</strong> No clinical treatment or advanced therapy will be performed without a thorough, in-person consultation and evaluation by our designated specialists.</li>
                      <li><strong className="text-white">Variation in Results:</strong> You explicitly acknowledge that human biology varies significantly. The Company provides no guarantees, explicit or implied, regarding the exact outcome, timeline, or permanent nature of any skin, hair, body contouring, or aesthetic treatments. Individual results will vary.</li>
                    </ul>
                  </div>

                  <div className="space-y-4 pl-4 border-l border-gold/20">
                    <h4 className="text-white font-serif text-lg">B. Luxury Salon & Spa Operations Disclaimer</h4>
                    <ul className="space-y-3 list-disc pl-5">
                      <li><strong className="text-white">Duty to Disclose:</strong> It is the absolute responsibility of the Client to fully disclose all known skin sensitivities, allergies, hair history (including previous chemical treatments), or relevant physical conditions prior to receiving any salon or spa service.</li>
                      <li><strong className="text-white">Patch Testing:</strong> The Company reserves the right to mandate patch testing for specific chemical hair coloring, technical treatments, or advanced skin applications. If a Client refuses a recommended patch test, the Company reserves the right to deny service without liability.</li>
                    </ul>
                  </div>

                  <div className="space-y-4 pl-4 border-l border-gold/20">
                    <h4 className="text-white font-serif text-lg">C. Educational & Beauty Academy Operations Disclaimer</h4>
                    <ul className="space-y-3 list-disc pl-5">
                      <li><strong className="text-white">Admission & Enrolment:</strong> Admission to any training course, workshop, or educational program is at the sole discretion of the Academy management.</li>
                      <li><strong className="text-white">No Guarantee of Employment:</strong> Enrolment in, or completion of, any educational course provided by the Academy does not guarantee employment, placements, financial income levels, or specific career outcomes.</li>
                      <li><strong className="text-white">Curriculum Modification:</strong> The Academy reserves the absolute right to alter, update, or modify course curricula, schedules, training modules, or assigned instructors at any time without prior notice or liability.</li>
                    </ul>
                  </div>
                </div>

                <hr className="border-white/5" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                    <span className="text-gold">2.</span> Bookings, Registrations, and Financial Policies
                  </h3>

                  <div className="space-y-4 pl-4 border-l border-gold/20">
                    <h4 className="text-white font-serif text-lg">A. Appointments & Course Enrolments</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>All appointment bookings and academic course registrations made via the Platform are subject to availability and formal confirmation by our administrative team.</li>
                      <li>The Company reserves the absolute right to refuse service, cancel bookings, or revoke academy admissions to any individual at our sole discretion, without assigning any reason.</li>
                    </ul>
                  </div>

                  <div className="space-y-4 pl-4 border-l border-gold/20">
                    <h4 className="text-white font-serif text-lg">B. Payment, Cancellation, and Refund Policy</h4>
                    <ul className="space-y-3 list-disc pl-5">
                      <li><strong className="text-white">No Rigid Guarantees:</strong> All fees, deposits, advance tokens, or full payments paid for salon services, clinical treatments, or academy tuition courses are strictly non-refundable and non-transferable, unless explicitly stated otherwise in writing by our authorized management.</li>
                      <li><strong className="text-white">Cancellations:</strong> Cancellations or rescheduling requests for salon and clinic appointments must be made within the timeframes established at the time of booking. Failure to cancel within the specified window, or failure to show up for an appointment, will result in the forfeiture of any advance deposit or the levy of a cancellation fee.</li>
                      <li><strong className="text-white">Academy Fees:</strong> If a student withdraws, drops out, or is dismissed from a course due to disciplinary infractions, all paid fees are completely forfeited, and any outstanding balance remains fully due.</li>
                    </ul>
                  </div>
                </div>

                <hr className="border-white/5" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                    <span className="text-gold">3.</span> Intellectual Property Rights
                  </h3>
                  <p>
                    All content featured on this Platform—including text, graphics, logos, brand assets, dynamic videos, custom course materials, training manuals, curriculum structures, and software—is the exclusive intellectual property of the Company.
                  </p>
                  <p>
                    Users, Clients, and Students are strictly prohibited from copying, distributing, republishing, recording, or commercially exploiting any website content or academy educational materials without our express, prior written consent.
                  </p>
                </div>

                <hr className="border-white/5" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                    <span className="text-gold">4.</span> Absolute Limitation of Liability & Indemnification
                  </h3>
                  
                  <div className="p-6 bg-red-950/20 border border-red-500/20 rounded-2xl flex items-start gap-4 mb-6">
                    <Info className="text-red-400 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="text-red-400 font-bold uppercase tracking-wider text-xs mb-2">Crucial Legal Waiver</h4>
                      <p className="text-white/60 text-sm">
                        To the maximum extent permitted by applicable law, the Company, its directors, officers, employees, clinical specialists, stylists, and academy instructors shall not be held liable for any direct, indirect, incidental, consequential, special, or exemplary damages, injuries, or losses arising from:
                      </p>
                      <ul className="list-decimal pl-5 mt-3 space-y-2 text-white/50 text-xs">
                        <li>The use of, or inability to use, this Platform or its booking tools.</li>
                        <li>Any unexpected biological reactions, allergies, or variations in treatment outcomes, provided the service was executed in accordance with general industry practices.</li>
                        <li>A Client’s or Student's failure to accurately disclose pre-existing medical conditions, allergies, or hair histories.</li>
                        <li>Any academic variations, career disruptions, or personal choices made by students enrolled in the Academy.</li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    <strong className="text-white">Indemnification:</strong> You agree to fully indemnify, defend, and hold harmless the Company and its representatives from any claims, liabilities, losses, costs, or legal fees arising from your violation of these Terms, misrepresentation of your health/medical status, or infringement on any third-party rights.
                  </p>
                </div>

                <hr className="border-white/5" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                    <span className="text-gold">5.</span> Governing Law and Jurisdiction
                  </h3>
                  <p>
                    These Terms & Conditions shall be governed by, interpreted, and enforced strictly in accordance with the laws of India. Any legal disputes, claims, or actions arising directly or indirectly from the use of this website or the booking of services across all three business verticals shall be subject to the exclusive jurisdiction of the competent courts located in <strong className="text-white">Itanagar, Arunachal Pradesh, India</strong>.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="privacy"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-10 text-white/70 text-sm md:text-base leading-relaxed font-light"
              >
                <div>
                  <h2 className="text-3xl font-serif text-white mb-6">Platform Privacy Policy</h2>
                  <p>
                    We appreciate the trust you place in us. This Privacy Policy outlines how the Company collects, utilizes, stores, and protects personal information acquired from Users, Clients, and Students across our salon, clinic, and academy operations.
                  </p>
                </div>

                <hr className="border-white/5" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                    <span className="text-gold">1.</span> Information We Collect
                  </h3>
                  <p>
                    To deliver premium, safe, and tailored experiences, we may collect the following categories of information:
                  </p>
                  <ul className="space-y-3 list-disc pl-5">
                    <li><strong className="text-white">Identity & Contact Data:</strong> Name, age, date of birth, email address, phone number, and physical address.</li>
                    <li><strong className="text-white">Clinical & Medical Data (Highly Sensitive):</strong> For clients accessing clinical skin, hair, or wellness treatments, we collect health histories, skin conditions, lifestyle habits, allergic triggers, and pre/post-treatment photographs for progress tracking.</li>
                    <li><strong className="text-white">Academic & Professional Data:</strong> Educational qualifications, career goals, enrollment histories, attendance logs, and performance evaluations for students joining our Academy.</li>
                    <li><strong className="text-white">Financial Data:</strong> Billing addresses, transaction histories, and payment confirmations processed securely through integrated third-party gateways.</li>
                  </ul>
                </div>

                <hr className="border-white/5" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                    <span className="text-gold">2.</span> How We Use Your Information
                  </h3>
                  <p>
                    The gathered data is deployed strictly for corporate, service-oriented, and educational purposes, including:
                  </p>
                  <ul className="space-y-3 list-disc pl-5">
                    <li>Accurately booking, managing, and confirming your salon and clinic appointments.</li>
                    <li>Ensuring clinical safety by cross-referencing treatments with your medical and allergic history.</li>
                    <li>Managing student databases, distributing academy course materials, and issuing certifications.</li>
                    <li>Processing payments and preventing financial fraud.</li>
                    <li>Sending informational updates, policy updates, and optional promotional materials (which you may opt out of at any time).</li>
                  </ul>
                </div>

                <hr className="border-white/5" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                    <span className="text-gold">3.</span> Data Sharing & Third-Party Disclosure
                  </h3>
                  <ul className="space-y-3 list-disc pl-5">
                    <li><strong className="text-white">No Sale of Data:</strong> The Company does not sell, rent, trade, or commercially lease your personal or medical data to any external third parties.</li>
                    <li><strong className="text-white">Authorized Service Providers:</strong> We may share essential data with vetted third-party service providers who operate on our behalf, such as online appointment booking engines, automated communication channels, operational management tools, and secure payment processors. These partners are bound by strict confidentiality clauses.</li>
                    <li><strong className="text-white">Legal Compliance:</strong> We reserve the right to disclose your information if mandated by law, judicial order, or regulatory authorities governing the state of Arunachal Pradesh or the Republic of India.</li>
                  </ul>
                </div>

                <hr className="border-white/5" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                    <span className="text-gold">4.</span> Data Security Standards
                  </h3>
                  <p>
                    The Company enforces appropriate technical, administrative, and physical security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <p>
                    While we utilize premium security protocols for data transmissions, you acknowledge that no method of transmission over the internet or digital storage can be guaranteed as 100% secure. The Company cannot assume absolute liability for unauthorized data breaches beyond our reasonable control.
                  </p>
                </div>

                <hr className="border-white/5" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                    <span className="text-gold">5.</span> Cookies and Tracking Technologies
                  </h3>
                  <p>
                    Our Platform utilizes cookies and tracking pixels to optimize user navigation, assess website traffic patterns, and remember your interface preferences. You have the choice to modify your web browser settings to reject cookies; however, doing so may disable or limit certain booking functionalities on our Platform.
                  </p>
                </div>

                <hr className="border-white/5" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                    <span className="text-gold">6.</span> Access and Rectification Rights
                  </h3>
                  <p>
                    You retain the complete right to review, update, or correct any inaccuracies in the personal contact information we hold. To request an update, you may contact our administrative desk. Please note that historical clinical safety charts or academic transcripts required for regulatory compliance cannot be modified or deleted.
                  </p>
                </div>

                <hr className="border-white/5" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                    <span className="text-gold">7.</span> Policy Modifications
                  </h3>
                  <p>
                    The Company reserves the right to amend, update, or rewrite this Privacy Policy and the accompanying Terms & Conditions at any time without serving explicit prior notice. The updated versions will be published directly on this page and will take effect immediately upon posting.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
