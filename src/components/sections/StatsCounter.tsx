import React from 'react';
import { motion } from 'framer-motion';
import { trainerStats } from '../../data/stats';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const StatsCounter: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#111111] border-y border-white/5 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-[#C7F000]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {trainerStats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#171717]/60 border border-white/5 hover:border-[#C7F000]/30 transition-all group"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white group-hover:text-[#C7F000] transition-colors mb-2 font-heading">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2.2}
                />
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-2">
                {stat.label}
              </h3>

              <p className="text-xs text-[#A1A1A1] max-w-[220px] leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
