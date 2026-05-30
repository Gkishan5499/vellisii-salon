import React from 'react';

export default function VillisiiAcademy() {
  return (
    <div className="min-h-[60vh] pt-24 md:pt-28 lg:pt-36 flex items-center justify-center bg-gradient-to-b from-luxury-black to-black text-white">
      <div className="max-w-3xl text-center px-6 py-20">
        <h1 className="text-4xl lg:text-6xl font-serif text-gold tracking-[0.2em]">VELLISSII ACADEMY</h1>
        <p className="mt-6 text-sm lg:text-base text-white/70 tracking-wider uppercase">Coming Soon</p>

        <p className="mt-8 text-white/60 leading-relaxed">
          We're building something beautiful for stylists and beauty professionals. Subscribe for updates and be the first to know when the Vellisii Academy opens.
        </p>

        <div className="mt-8">
          <button className="px-6 py-3 bg-gold text-black font-medium uppercase tracking-[0.12em]">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}
