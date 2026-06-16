import { useState, useEffect, useRef, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Upload, 
  ShieldCheck, 
  Lock, 
  Check, 
  Sparkles, 
  FileText, 
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import CustomDatePicker from '../components/CustomDatePicker';

const formatDisplayDate = (dateStr: string) => {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const [year, month, day] = parts;
  return `${day}/${month}/${year}`; // DD/MM/YYYY format
};

// Individual input component with the signature 1px/2px bottom line transition
interface ConciergeInputProps {
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (val: string) => void;
}

function ConciergeInput({
  label,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange
}: ConciergeInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group w-full">
      <label className="text-[10px] tracking-[0.25em] uppercase text-white/50 block font-montserrat font-semibold mb-1">
        {label} {required && <span className="text-burnt-orange">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-none py-3.5 outline-none text-sm font-light text-white placeholder-white/20 font-montserrat"
      />
      {/* 1px Charcoal Base Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-zinc-800 transition-colors group-hover:bg-zinc-700" />
      {/* 2px Burnt Orange Active Focus Line */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-burnt-orange transition-transform duration-300 origin-left ${
          isFocused ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </div>
  );
}

// Custom dropdown wrapper component
interface ConciergeDropdownProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
}

function ConciergeDropdown({
  label,
  required = false,
  value,
  onChange,
  options,
  placeholder
}: ConciergeDropdownProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group w-full">
      <label className="text-[10px] tracking-[0.25em] uppercase text-white/50 block font-montserrat font-semibold mb-1">
        {label} {required && <span className="text-burnt-orange">*</span>}
      </label>
      <div className="relative flex items-center">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className="w-full bg-transparent border-none py-3.5 pr-8 outline-none text-sm font-light text-white font-montserrat appearance-none cursor-pointer"
        >
          <option value="" disabled className="bg-luxury-black text-white/40">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-luxury-black text-white">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown size={14} className="absolute right-2 text-white/40 pointer-events-none group-hover:text-white transition-colors" />
      </div>
      {/* 1px Charcoal Base Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-zinc-800 transition-colors group-hover:bg-zinc-700" />
      {/* 2px Burnt Orange Active Focus Line */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-burnt-orange transition-transform duration-300 origin-left ${
          isFocused ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </div>
  );
}

export default function BookAppointment() {
  const [searchParams] = useSearchParams();
  const brandParam = searchParams.get('brand');

  const [activeTab, setActiveTab] = useState<'illumis' | 'monsoon'>('illumis');
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmissionBrand, setLastSubmissionBrand] = useState<'illumis' | 'monsoon'>('illumis');

  // Form State: Illumis
  const [illumisForm, setIllumisForm] = useState({
    title: '',
    fullName: '',
    phone: '',
    email: '',
    dob: '',
    objective: '',
    date: '',
    timeSlot: '',
    description: '',
    agreed: false
  });

  // Form State: Monsoon
  const [monsoonForm, setMonsoonForm] = useState<{
    guestName: string;
    mobile: string;
    email: string;
    category: string;
    date: string;
    schedule: string;
    file: File | null;
    requests: string;
  }>({
    guestName: '',
    mobile: '',
    email: '',
    category: '',
    date: '',
    schedule: '',
    file: null,
    requests: ''
  });

  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Set active tab based on query parameters when loaded
  useEffect(() => {
    if (brandParam === 'monsoon' || brandParam === 'mansoon') {
      setActiveTab('monsoon');
    } else {
      setActiveTab('illumis');
    }
  }, [brandParam]);

  // Handle file select for Monsoon
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      
      // Check file size (5MB max)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setFileError('File exceeds the 5MB limit.');
        setMonsoonForm(prev => ({ ...prev, file: null }));
        return;
      }

      // Check file type
      if (!validTypes.includes(selectedFile.type)) {
        setFileError('Invalid file type. Only JPG, PNG, and PDF are allowed.');
        setMonsoonForm(prev => ({ ...prev, file: null }));
        return;
      }

      setFileError(null);
      setMonsoonForm(prev => ({ ...prev, file: selectedFile }));
    }
  };

  const triggerFileBrowser = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleIllumisSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!illumisForm.agreed) {
      alert('Please acknowledge the privacy policy to proceed.');
      return;
    }

    const formattedDob = formatDisplayDate(illumisForm.dob);
    const formattedDate = formatDisplayDate(illumisForm.date);

    const message = `⚕️ *ILLUMIS: CLINICAL CONSULTATION INTAKE* ⚕️
-----------------------------------
• *Title:* ${illumisForm.title}
• *Full Legal Name:* ${illumisForm.fullName}
• *Contact:* ${illumisForm.phone}
• *Email:* ${illumisForm.email}
• *Date of Birth:* ${formattedDob}
• *Clinical Objective:* ${illumisForm.objective}
• *Preferred Date:* ${formattedDate}
• *Preferred Time Slot:* ${illumisForm.timeSlot}
• *Concern & Allergies:* ${illumisForm.description || 'None'}`;

    const whatsappUrl = `https://wa.me/919862224291?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setLastSubmissionBrand('illumis');
    setSubmitted(true);
  };

  const handleMonsoonSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formattedDate = formatDisplayDate(monsoonForm.date);
    const mediaInfo = monsoonForm.file 
      ? `${monsoonForm.file.name} (${(monsoonForm.file.size / 1024 / 1024).toFixed(2)}MB)` 
      : 'None';

    const message = `✨ *MONSOON: LUXURY CONCIERGE RESERVATION* ✨
-----------------------------------
• *Guest Name:* ${monsoonForm.guestName}
• *Mobile Contact:* ${monsoonForm.mobile}
• *Email Address:* ${monsoonForm.email}
• *Service Category:* ${monsoonForm.category}
• *Preferred Date:* ${formattedDate}
• *Preferred Schedule:* ${monsoonForm.schedule}
• *Aesthetic Media:* ${mediaInfo}
• *Concierge Requests:* ${monsoonForm.requests || 'None'}`;

    const whatsappUrl = `https://wa.me/919862224291?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setLastSubmissionBrand('monsoon');
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setIllumisForm({
      title: '',
      fullName: '',
      phone: '',
      email: '',
      dob: '',
      objective: '',
      date: '',
      timeSlot: '',
      description: '',
      agreed: false
    });
    setMonsoonForm({
      guestName: '',
      mobile: '',
      email: '',
      category: '',
      date: '',
      schedule: '',
      file: null,
      requests: ''
    });
    setFileError(null);
  };

  // Focus transition state for textarea
  const [illumisTextareaFocused, setIllumisTextareaFocused] = useState(false);
  const [monsoonTextareaFocused, setMonsoonTextareaFocused] = useState(false);

  // Success view
  if (submitted) {
    return (
      <div className="pt-40 bg-black min-h-screen flex items-center justify-center px-6 pb-20 font-montserrat">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full border border-zinc-850 bg-neutral-950 p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-burnt-orange" />
          
          <div className="flex flex-col items-center text-center">
            {lastSubmissionBrand === 'illumis' ? (
              <>
                <div className="w-16 h-16 rounded-none border border-burnt-orange flex items-center justify-center mb-8 bg-burnt-orange/5">
                  <ShieldCheck className="text-burnt-orange" size={28} />
                </div>
                <h2 className="text-sm tracking-[0.4em] uppercase text-burnt-orange font-bold mb-4">Clinical Request Secured</h2>
                <h3 className="text-3xl font-serif text-white mb-6 leading-snug">Intake Registration Confirmed</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-md mb-10">
                  Thank you, <span className="text-white font-medium">{illumisForm.fullName}</span>. Your clinical dossier has been securely encrypted and forwarded to our medical assessors. 
                  Our clinical coordinator will reach out to you on <span className="text-white font-medium">{illumisForm.phone}</span> shortly to confirm your assessment date.
                </p>
                <div className="w-full border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/30 uppercase tracking-widest gap-4">
                  <span className="flex items-center gap-2">
                    <Lock size={12} className="text-burnt-orange" /> Confidential System ID: ILL-{(Math.random() * 100000).toFixed(0)}
                  </span>
                  <button
                    onClick={resetForm}
                    className="flex items-center gap-2 text-burnt-orange hover:text-white transition-colors cursor-pointer"
                  >
                    <RefreshCw size={12} /> Make Another Request
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="w-16 h-16 rounded-none border border-burnt-orange flex items-center justify-center mb-8 bg-burnt-orange/5">
                  <Sparkles className="text-burnt-orange" size={28} />
                </div>
                <h2 className="text-sm tracking-[0.4em] uppercase text-burnt-orange font-bold mb-4">Concierge Reservation Sent</h2>
                <h3 className="text-3xl font-serif text-white mb-6 leading-snug">Luxury Schedule Registered</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-md mb-10">
                  Welcome to the circle, <span className="text-white font-medium">{monsoonForm.guestName}</span>. Your reservation for <span className="text-white font-medium">{monsoonForm.category}</span> is registered. 
                  Our executive concierge will contact you at <span className="text-white font-medium">{monsoonForm.mobile}</span> shortly to confirm your master artist selection.
                </p>
                <div className="w-full border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/30 uppercase tracking-widest gap-4">
                  <span>
                    Priority Lounge Guest Code: MON-{(Math.random() * 10000).toFixed(0)}
                  </span>
                  <button
                    onClick={resetForm}
                    className="flex items-center gap-2 text-burnt-orange hover:text-white transition-colors cursor-pointer"
                  >
                    <RefreshCw size={12} /> Reserve Another
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-40 bg-black min-h-screen pb-32 font-montserrat">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-burnt-orange tracking-[0.5em] uppercase text-[10px] font-bold mb-3">ATELIER CONCIERGE DESK</p>
          <h1 className="text-4xl md:text-6xl font-serif tracking-normal text-white">
            Secure Your <span className="italic">Grooming & Wellness</span> Appointment
          </h1>
          <p className="text-white/40 max-w-lg mx-auto text-xs mt-4 leading-relaxed uppercase tracking-wider">
            Establish a direct connection with our luxury grooming reservation desk or clinical assessment department.
          </p>
        </div>

        {/* Brand Selector Toggles */}
        <div className="flex border border-zinc-900 p-1.5 bg-neutral-950/50 max-w-md mx-auto mb-16">
          <button
            onClick={() => setActiveTab('illumis')}
            className={`flex-1 py-4 text-xs tracking-[0.25em] font-bold uppercase transition-all duration-300 cursor-pointer ${
              activeTab === 'illumis'
                ? 'bg-burnt-orange text-black font-semibold'
                : 'text-white/40 hover:text-white'
            }`}
          >
            ILLUMIS CLINICAL
          </button>
          <button
            onClick={() => setActiveTab('monsoon')}
            className={`flex-1 py-4 text-xs tracking-[0.25em] font-bold uppercase transition-all duration-300 cursor-pointer ${
              activeTab === 'monsoon'
                ? 'bg-burnt-orange text-black font-semibold'
                : 'text-white/40 hover:text-white'
            }`}
          >
            MONSOON LUXURY
          </button>
        </div>

        {/* Forms Canvas */}
        <div className="border border-zinc-900 bg-neutral-950 p-8 md:p-16 shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-zinc-800" />
          
          <AnimatePresence mode="wait">
            {activeTab === 'illumis' ? (
              <motion.div
                key="illumis"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Brand Logo / Intro */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 text-burnt-orange mb-3">
                    <ShieldCheck size={18} />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase">ILLUMIS MEDICAL Vertical</span>
                  </div>
                  <h2 className="text-2xl font-serif text-white uppercase tracking-wider mb-2">Clinical Consultation Intake</h2>
                  <p className="text-white/40 text-xs tracking-wide uppercase">
                    Strictly confidential. Please provide your details for medical aesthetic assessment.
                  </p>
                  <div className="w-full h-px bg-zinc-900 mt-6" />
                </div>

                <form onSubmit={handleIllumisSubmit} className="space-y-8">
                  {/* Row 1: Title & Full Name */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConciergeDropdown
                      label="Title"
                      placeholder="Select title"
                      required
                      value={illumisForm.title}
                      onChange={(val) => setIllumisForm(prev => ({ ...prev, title: val }))}
                      options={['Mr.', 'Ms.', 'Mrs.', 'Dr.']}
                    />
                    <div className="md:col-span-2">
                      <ConciergeInput
                        label="Full Legal Name"
                        placeholder="Provide your exact legal name"
                        required
                        value={illumisForm.fullName}
                        onChange={(val) => setIllumisForm(prev => ({ ...prev, fullName: val }))}
                      />
                    </div>
                  </div>

                  {/* Row 2: Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ConciergeInput
                      label="Primary Contact Number"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      value={illumisForm.phone}
                      onChange={(val) => setIllumisForm(prev => ({ ...prev, phone: val }))}
                    />
                    <ConciergeInput
                      label="Email Address"
                      type="email"
                      placeholder="For appointment confirmation & pre-care instructions"
                      required
                      value={illumisForm.email}
                      onChange={(val) => setIllumisForm(prev => ({ ...prev, email: val }))}
                    />
                  </div>

                  {/* Row 3: DOB & Objective */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CustomDatePicker
                      label="Date of Birth"
                      placeholder="DD/MM/YYYY - Required for clinical age-assessment"
                      required
                      allowPastDates
                      selectedDate={illumisForm.dob}
                      onChange={(date) => setIllumisForm(prev => ({ ...prev, dob: date }))}
                    />
                    <ConciergeDropdown
                      label="Primary Clinical Objective"
                      placeholder="Select objective"
                      required
                      value={illumisForm.objective}
                      onChange={(val) => setIllumisForm(prev => ({ ...prev, objective: val }))}
                      options={[
                        'Advanced Anti-Aging',
                        'Dermatological Correction',
                        'Hair Restoration',
                        'IV Wellness & Cellular Therapy'
                      ]}
                    />
                  </div>

                  {/* Row 4: Schedule */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CustomDatePicker
                      label="Preferred Consultation Date"
                      placeholder="Select booking date"
                      required
                      selectedDate={illumisForm.date}
                      onChange={(date) => setIllumisForm(prev => ({ ...prev, date: date }))}
                    />
                    <ConciergeDropdown
                      label="Preferred Time Slot"
                      placeholder="Select schedule window"
                      required
                      value={illumisForm.timeSlot}
                      onChange={(val) => setIllumisForm(prev => ({ ...prev, timeSlot: val }))}
                      options={[
                        'Morning (10:00 - 13:00)',
                        'Afternoon (13:00 - 16:00)',
                        'Evening (16:00 - 19:00)'
                      ]}
                    />
                  </div>

                  {/* Description of concern (represented as two lines layout) */}
                  <div className="relative group w-full">
                    <label className="text-[10px] tracking-[0.25em] uppercase text-white/50 block font-montserrat font-semibold mb-1">
                      Brief Description of Concern & Known Allergies (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={illumisForm.description}
                      onChange={(e) => setIllumisForm(prev => ({ ...prev, description: e.target.value }))}
                      onFocus={() => setIllumisTextareaFocused(true)}
                      onBlur={() => setIllumisTextareaFocused(false)}
                      placeholder="Provide specific concerns or details if any..."
                      className="w-full bg-transparent border-none py-3.5 outline-none text-sm font-light text-white placeholder-white/20 font-montserrat resize-none"
                    />
                    {/* 1px Charcoal Base Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-zinc-800 transition-colors group-hover:bg-zinc-700" />
                    {/* 2px Burnt Orange Active Focus Line */}
                    <div 
                      className={`absolute bottom-0 left-0 right-0 h-[2px] bg-burnt-orange transition-transform duration-300 origin-left ${
                        illumisTextareaFocused ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </div>

                  {/* Secure acknowledgement checkbox */}
                  <div className="pt-4">
                    <label className="flex items-start gap-4 cursor-pointer group select-none">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="checkbox"
                          checked={illumisForm.agreed}
                          onChange={(e) => setIllumisForm(prev => ({ ...prev, agreed: e.target.checked }))}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 border transition-all duration-300 flex items-center justify-center ${
                          illumisForm.agreed 
                            ? 'bg-burnt-orange border-burnt-orange text-black' 
                            : 'border-zinc-800 bg-transparent group-hover:border-zinc-600'
                        }`}>
                          {illumisForm.agreed && <Check size={12} strokeWidth={3} />}
                        </div>
                      </div>
                      <span className="text-[11px] uppercase tracking-wider text-white/55 font-montserrat leading-relaxed group-hover:text-white/80 transition-colors">
                        I acknowledge that submitted data is securely processed in accordance with the Illumis Privacy Policy.
                      </span>
                    </label>
                  </div>

                  <div className="w-full h-px bg-zinc-900 pt-4" />

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-5 bg-burnt-orange text-black hover:bg-white hover:text-black font-montserrat font-bold uppercase tracking-[0.35em] text-xs transition-colors duration-300 cursor-pointer shadow-lg shadow-burnt-orange/10"
                      style={{ borderRadius: '0px' }} // Sharp rectangular edges, no rounding
                    >
                      INITIATE SECURE REQUEST
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="monsoon"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Brand Logo / Intro */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 text-burnt-orange mb-3">
                    <Sparkles size={16} />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase">MONSOON LUXURY Vertical</span>
                  </div>
                  <h2 className="text-2xl font-serif text-white uppercase tracking-wider mb-2">MONSOON RESERVATION DESK</h2>
                  <p className="text-white/40 text-xs tracking-wide uppercase">
                    Curate your bespoke grooming and wellness experience.
                  </p>
                  <div className="w-full h-px bg-zinc-900 mt-6" />
                </div>

                <form onSubmit={handleMonsoonSubmit} className="space-y-8">
                  {/* Row 1: Guest details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <ConciergeInput
                        label="Guest Name"
                        placeholder="Please input guest name"
                        required
                        value={monsoonForm.guestName}
                        onChange={(val) => setMonsoonForm(prev => ({ ...prev, guestName: val }))}
                      />
                    </div>
                    <ConciergeInput
                      label="Mobile Contact"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      value={monsoonForm.mobile}
                      onChange={(val) => setMonsoonForm(prev => ({ ...prev, mobile: val }))}
                    />
                  </div>

                  {/* Row 2: Email & Category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ConciergeInput
                      label="Email Address"
                      type="email"
                      placeholder="For correspondence"
                      required
                      value={monsoonForm.email}
                      onChange={(val) => setMonsoonForm(prev => ({ ...prev, email: val }))}
                    />
                    <ConciergeDropdown
                      label="Service Category"
                      placeholder="Select category"
                      required
                      value={monsoonForm.category}
                      onChange={(val) => setMonsoonForm(prev => ({ ...prev, category: val }))}
                      options={[
                        'Structural Hair Design',
                        'Precision Color & Balayage',
                        'Advanced PMU Aesthetics',
                        'Luxury Spa & Nail Architecture'
                      ]}
                    />
                  </div>

                  {/* Row 3: Date & Schedule */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CustomDatePicker
                      label="Preferred Reservation Date"
                      placeholder="Select booking date"
                      required
                      selectedDate={monsoonForm.date}
                      onChange={(date) => setMonsoonForm(prev => ({ ...prev, date: date }))}
                    />
                    <ConciergeDropdown
                      label="Preferred Schedule"
                      placeholder="Select schedule window"
                      required
                      value={monsoonForm.schedule}
                      onChange={(val) => setMonsoonForm(prev => ({ ...prev, schedule: val }))}
                      options={[
                        '10:00 AM - 12:00 PM',
                        '12:00 PM - 3:00 PM',
                        '3:00 PM - 6:00 PM',
                        '6:00 PM Onwards'
                      ]}
                    />
                  </div>

                  {/* File Upload Field */}
                  <div className="space-y-2 relative">
                    <label className="text-[10px] tracking-[0.25em] uppercase text-white/50 block font-montserrat font-semibold">
                      Aesthetic Reference Media (Upload reference files for your master artist)
                    </label>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      {/* Hidden File Input */}
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/jpeg,image/png,application/pdf"
                        className="hidden"
                      />
                      
                      <button
                        type="button"
                        onClick={triggerFileBrowser}
                        className="px-6 py-3.5 border border-zinc-800 text-xs text-white uppercase tracking-widest hover:border-burnt-orange hover:text-burnt-orange font-bold flex items-center justify-center gap-3 transition-colors cursor-pointer"
                        style={{ borderRadius: '0px' }}
                      >
                        <Upload size={14} /> Browse Files
                      </button>

                      <div className="flex-1 flex flex-col justify-center min-h-[44px]">
                        {monsoonForm.file ? (
                          <div className="flex items-center justify-between border border-zinc-900 bg-black/40 px-4 py-2">
                            <span className="text-xs text-white/60 truncate max-w-xs sm:max-w-sm flex items-center gap-2">
                              <FileText size={12} className="text-burnt-orange" />
                              {monsoonForm.file.name} ({(monsoonForm.file.size / 1024 / 1024).toFixed(2)}MB)
                            </span>
                            <button
                              type="button"
                              onClick={() => setMonsoonForm(prev => ({ ...prev, file: null }))}
                              className="text-[10px] uppercase tracking-wider text-burnt-orange font-bold hover:text-white transition-colors cursor-pointer px-2"
                            >
                              Remove
                            </button>
                          </div>
                        ) : (
                          <span className="text-xs text-white/20 italic">Max 5MB: JPG/PNG/PDF</span>
                        )}
                        {fileError && <span className="text-xs text-burnt-orange font-bold mt-1">{fileError}</span>}
                      </div>
                    </div>
                  </div>

                  {/* Additional Requests (represented as two lines layout) */}
                  <div className="relative group w-full">
                    <label className="text-[10px] tracking-[0.25em] uppercase text-white/50 block font-montserrat font-semibold mb-1">
                      Additional Concierge Requests (Specific stylist preference, beverage request, etc.)
                    </label>
                    <textarea
                      rows={2}
                      value={monsoonForm.requests}
                      onChange={(e) => setMonsoonForm(prev => ({ ...prev, requests: e.target.value }))}
                      onFocus={() => setMonsoonTextareaFocused(true)}
                      onBlur={() => setMonsoonTextareaFocused(false)}
                      placeholder="Stylist preference, beverages, or specific arrangements..."
                      className="w-full bg-transparent border-none py-3.5 outline-none text-sm font-light text-white placeholder-white/20 font-montserrat resize-none"
                    />
                    {/* 1px Charcoal Base Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-zinc-800 transition-colors group-hover:bg-zinc-700" />
                    {/* 2px Burnt Orange Active Focus Line */}
                    <div 
                      className={`absolute bottom-0 left-0 right-0 h-[2px] bg-burnt-orange transition-transform duration-300 origin-left ${
                        monsoonTextareaFocused ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </div>

                  <div className="w-full h-px bg-zinc-900 pt-4" />

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-5 bg-black border-2 border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-black font-montserrat font-bold uppercase tracking-[0.35em] text-xs transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                      style={{ borderRadius: '0px' }} // Sharp rectangular edges, no rounding
                    >
                      <span>CONFIRM RESERVATION REQUEST</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Security & Assistance note */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-white/30 uppercase tracking-[0.2em] font-montserrat gap-4">
          <span className="flex items-center gap-2">
            <Lock size={12} className="text-burnt-orange" /> secure 256-bit encryption protocol active
          </span>
          <span>
            Need assistance? call concierge support: +91 98622 24291
          </span>
        </div>

      </div>
    </div>
  );
}
