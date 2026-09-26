import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { processSteps } from '../../data/howItWorks';
import { Check } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#0E0E0E] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="THE ROADMAP"
          title="HOW IT WORKS"
          highlightedWord="WORKS"
          subtitle="A clear, transparent 4-stage protocol designed to take you from uncertain to unshakeable."
        />

        {/* 4 Steps Timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#C7F000]/40 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-start p-6 sm:p-8 rounded-2xl bg-[#171717] border border-white/10 hover:border-[#C7F000]/40 transition-all text-left group"
              >
                {/* Step Circle Header */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0B0B0B] border-2 border-[#C7F000] text-[#C7F000] flex items-center justify-center font-black text-lg font-mono shadow-[0_0_15px_rgba(199,240,0,0.2)] group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1A1] px-2.5 py-1 rounded bg-[#202020]">
                    STEP {step.number}
                  </span>
                </div>

                <p className="text-xs uppercase font-bold text-[#C7F000] tracking-wider mb-1">
                  {step.subtitle}
                </p>

                <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight mb-3 font-heading">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Sub details bullet points */}
                <div className="mt-auto pt-4 border-t border-white/5 w-full space-y-2">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#D4D4D8]">
                      <Check className="w-3.5 h-3.5 text-[#C7F000] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
