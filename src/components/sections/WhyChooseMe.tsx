import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { whyChooseFeatures } from '../../data/whyChooseMe';
import { UserCheck, ShieldCheck, Flame, Trophy } from 'lucide-react';

export const WhyChooseMe: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#C7F000]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C7F000]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#C7F000]" />;
      default:
        return <Trophy className="w-6 h-6 text-[#C7F000]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="THE ADVANTAGE"
          title="WHY PERSONAL COACHING?"
          highlightedWord="COACHING"
          subtitle="Stop leaving your physical performance to chance. Experience the synergy of scientific protocol and direct mentorship."
        />

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseFeatures.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-[#171717] border border-white/10 hover:border-[#C7F000]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Header: Icon & Big Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#1F1F1F] border border-white/10 flex items-center justify-center group-hover:border-[#C7F000]/40 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-3xl font-black text-white/20 group-hover:text-[#C7F000]/30 transition-colors font-mono">
                    {item.number}
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C7F000] block mb-1">
                  {item.subtitle}
                </span>

                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 font-heading">
                  {item.title}
                </h3>

                <p className="text-sm text-[#A1A1A1] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Micro-Pill */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#D4D4D8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
                <span>{item.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
