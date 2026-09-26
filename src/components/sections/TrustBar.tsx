import React from 'react';

export const TrustBar: React.FC = () => {
  const brands = [
    { name: "MEN'S HEALTH", sub: "FEATURED EXPERT" },
    { name: "CROSSFIT GAMES", sub: "ATHLETIC RECOVERY" },
    { name: "IRONMAN TRIATHLON", sub: "METABOLIC ADVISOR" },
    { name: "SPARTAN RACE", sub: "OBSTACLE PEAK" },
    { name: "GYMSHARK ATHLETE", sub: "ALUMNI COACH" }
  ];

  return (
    <section className="py-10 bg-[#0E0E0E] border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#A1A1A1] mb-6">
          TRUSTED BY PEOPLE WHO CHOOSE TO CHANGE
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-70">
          {brands.map((brand, i) => (
            <div key={i} className="flex flex-col items-center group cursor-default transition-opacity hover:opacity-100">
              <span className="text-base sm:text-lg font-black tracking-wider text-white group-hover:text-[#C7F000] transition-colors font-heading">
                {brand.name}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#71717A] mt-0.5 font-semibold">
                {brand.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
