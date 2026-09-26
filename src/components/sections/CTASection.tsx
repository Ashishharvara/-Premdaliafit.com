import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Flame } from 'lucide-react';

interface CTASectionProps {
  onStartClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartClick }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0B0B] overflow-hidden border-y border-white/5">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop"
          alt="Athletic training backdrop"
          className="w-full h-full object-cover object-center opacity-20 filter grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/90 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
      </div>

      {/* Radiant Electric Lime Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#C7F000]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle pill badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171717] border border-[#C7F000]/30 mb-8"
        >
          <Flame className="w-4 h-4 text-[#C7F000]" />
          <span className="text-xs font-black tracking-widest uppercase text-[#C7F000]">
            LIMITED CLIENT ENROLLMENT
          </span>
        </motion.div>

        {/* Powerful Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[1.02] mb-6 font-heading"
        >
          YOUR STRONGER SELF<br />
          <span className="text-[#C7F000]">STARTS TODAY.</span>
        </motion.h2>

        {/* Motivational Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-xl text-[#A1A1A1] max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          Choose a workout plan according to your goal and start your fitness journey today.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            showArrow
            onClick={onStartClick}
            className="w-full sm:w-auto text-base"
          >
            START YOUR FITNESS JOURNEY
          </Button>
        </motion.div>

        {/* Micro Guarantee Note */}
        <p className="text-xs text-[#71717A] mt-6 uppercase tracking-wider">
          ✦ Complimentary 15-Minute Diagnostic Consultation • No Obligation
        </p>

      </div>
    </section>
  );
};
