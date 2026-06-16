import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';

// Custom high-quality WhatsApp SVG icon
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.019-5.101-2.875-6.958C16.604 1.926 14.129.9 11.5.9c-5.448 0-9.88 4.417-9.883 9.866-.001 1.77.463 3.5 1.34 5.025l-.995 3.634 3.725-.977zm11.367-7.251c-.33-.164-1.951-.964-2.251-1.074-.3-.109-.518-.164-.736.164-.218.327-.844 1.073-1.034 1.291-.19.218-.379.245-.71.081-.33-.164-1.393-.513-2.653-1.636-.98-.874-1.642-1.953-1.834-2.28-.192-.327-.02-.504.145-.668.148-.148.33-.379.496-.569.165-.189.219-.327.33-.545.109-.217.055-.408-.028-.571-.081-.164-.736-1.773-1.008-2.427-.267-.64-.539-.553-.736-.563-.19-.01-.409-.012-.627-.012-.218 0-.573.082-.873.409-.3.327-1.145 1.116-1.145 2.723 0 1.605 1.17 3.159 1.334 3.377.164.217 2.301 3.513 5.576 4.922.779.335 1.387.535 1.861.685.783.249 1.497.213 2.062.129.629-.094 1.951-.797 2.224-1.569.273-.772.273-1.436.191-1.571-.081-.135-.3-.217-.63-.381z" />
  </svg>
);

export default function WhatsappWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [message, setMessage] = useState('');
  const [hasNewNotification, setHasNewNotification] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // Automatically show the tooltip 3 seconds after loading to engage users
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
    if (hasNewNotification) {
      setHasNewNotification(false);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const targetMessage = message.trim() || "Hello! I would like to know more about Vellisii Salon's services.";
    const encodedText = encodeURIComponent(targetMessage);
    const phoneNumber = "919862224291"; // Naharlagun, Arunachal Pradesh branch number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Clear input and optionally close widget after redirect
    setMessage('');
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans select-none">
      
      {/* Tooltip text bubble above the button */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-16 right-0 mb-2 w-48 bg-luxury-black border border-gold/30 p-3 rounded-xl shadow-2xl text-center"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1 right-1 text-white/40 hover:text-white"
              aria-label="Close tooltip"
            >
              <X size={12} />
            </button>
            <p className="text-white text-xs font-serif italic mb-1">Need assistance?</p>
            <p className="text-gold text-[10px] tracking-wider uppercase font-medium">Chat with us! 👋</p>
            {/* Tooltip tail */}
            <div className="absolute -bottom-1 right-6 w-2.5 h-2.5 bg-luxury-black border-r border-b border-gold/30 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full cursor-pointer shadow-2xl transition-all duration-300 focus:outline-none z-10 ${
          isOpen
            ? 'bg-luxury-black border border-gold/50 text-gold hover:border-gold'
            : 'bg-[#25D366] text-white hover:bg-[#20ba5a] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]'
        }`}
        aria-label="WhatsApp Support"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <WhatsAppIcon size={28} />
              
              {/* Notification Badge */}
              {hasNewNotification && (
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 items-center justify-center text-[8px] font-bold text-white leading-none">1</span>
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] opacity-30 animate-pulse pointer-events-none"></span>
        )}
      </motion.button>

      {/* WhatsApp Chat Window Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="absolute bottom-20 right-0 w-[88vw] sm:w-[360px] bg-luxury-black border border-gold/25 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col z-0"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-luxury-black to-[#0d0d0d] border-b border-gold/15 flex items-center gap-3">
              <div className="relative">
                <img
                  src="/logo.jpeg"
                  alt="Vellisii Salon Logo"
                  className="w-10 h-10 rounded-full object-cover border border-gold/40 bg-black"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-luxury-black rounded-full animate-pulse"></span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white text-sm font-serif font-medium tracking-wide">Vellisii Salon</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-gold text-[10px] uppercase tracking-wider font-semibold">Online Support</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-gold transition-colors p-1"
                aria-label="Close Chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-5 max-h-[220px] overflow-y-auto bg-[url('/assets/images/pattern.png')] bg-repeat bg-opacity-5 space-y-4">
              <div className="flex flex-col gap-1.5 max-w-[85%]">
                <div className="glass px-4 py-3 rounded-2xl rounded-tl-none border border-gold/10 text-white text-xs leading-relaxed">
                  Hi there! Welcome to Vellisii Salon. 👋
                  <br /><br />
                  How can we assist you with our premium hair, beauty, or bridal services today? ✨
                </div>
                <span className="text-[9px] text-white/35 ml-1">Just now</span>
              </div>
            </div>

            {/* Chat Footer / Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-white/5 border-t border-gold/15 flex gap-2 items-center">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your query..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                autoFocus
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-light text-luxury-black rounded-xl p-2 transition-all flex items-center justify-center cursor-pointer active:scale-95"
                aria-label="Send prefilled WhatsApp message"
              >
                <Send size={14} className="stroke-[2.5]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
