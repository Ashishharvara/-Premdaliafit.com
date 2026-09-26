import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { transformations } from '../../data/transformations';
import { Calendar, TrendingDown, CheckCircle2 } from 'lucide-react';

export const Transformations: React.FC = () => {
  return (
    <section id="results" className="py-20 lg:py-32 bg-[#0E0E0E] relative overflow-hidden border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#C7F000]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="CLIENT TRANSFORMATIONS"
          title="REAL PEOPLE. REAL RESULTS."
          highlightedWord="RESULTS"
          subtitle="Genuine client transformations achieved through Prem Dalia's structured workout plans, disciplined progression, and consistent guidance."
        />

        {/* Verification Guarantee Pill */}
        <div className="flex items-center justify-center gap-3 -mt-6 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 rounded-full bg-[#141414] border border-white/10 text-xs text-[#D4D4D8] shadow-md">
            <CheckCircle2 className="w-4 h-4 text-[#C7F000] shrink-0" />
            <span className="font-bold text-white tracking-wide">100% Verified Client Results</span>
            <span className="text-[#444444]">|</span>
            <span className="text-[#A1A1A1]">Real Progress Tracking • Unedited Proof</span>
          </div>
        </div>

        {/* Client Transformation Cards in 2-Column High-Res Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {transformations.map((trans, idx) => (
            <motion.div
              key={trans.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-[#171717] border border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:border-[#C7F000]/40 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Card Header: Client Title & Duration Badge (Above image so face is never blocked) */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-black text-white uppercase font-heading tracking-wide">
                      {trans.clientName}
                    </h4>
                    <p className="text-xs font-bold text-[#C7F000] uppercase tracking-wider mt-0.5">
                      {trans.goal}
                    </p>
                  </div>

                  <span className="px-3 py-1.5 rounded-full bg-[#C7F000]/10 border border-[#C7F000]/30 text-[#C7F000] text-xs font-black uppercase tracking-wider shrink-0">
                    {trans.duration}
                  </span>
                </div>

                {/* Transformation Visual (Uncropped 1:1 Aspect Ratio) */}
                <div className="relative rounded-2xl overflow-hidden mb-5 aspect-square bg-[#0A0A0A] border border-white/10 shadow-inner">
                  <img
                    src={trans.fullImage || trans.afterImage}
                    alt={`${trans.clientName} transformation`}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Story Description */}
                <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed mb-6">
                  "{trans.story}"
                </p>
              </div>

              {/* Stats Highlight Bar */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-xl bg-[#141414] border border-white/5">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#A1A1A1] uppercase font-bold tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-[#C7F000]" />
                    <span>Duration</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white mt-1">{trans.duration}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#C7F000]/10 border border-[#C7F000]/25">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#C7F000] uppercase font-bold tracking-wider">
                    <TrendingDown className="w-3.5 h-3.5 text-[#C7F000]" />
                    <span>Net Result</span>
                  </div>
                  <p className="text-xs sm:text-sm font-black text-[#C7F000] mt-1">{trans.statChange}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
