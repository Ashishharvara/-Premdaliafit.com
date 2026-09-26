import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeroProps {
  onStartJourney: () => void;
  onViewPrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartJourney, onViewPrograms }) => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-24 flex items-center overflow-hidden bg-[#0B0B0B]">
      {/* Background Ambient Glow & Grid Pattern */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C7F000]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#C7F000]/5 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Subtle Grid Lines Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#171717] border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#C7F000] animate-ping" />
              <span className="text-xs font-black tracking-widest uppercase text-[#C7F000]">
                PERSONAL TRAINER • ONLINE COACH
              </span>
            </motion.div>

            {/* Large Impactful Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase text-white tracking-tight leading-[0.95] mb-6 font-heading"
            >
              TRAIN HARD.<br />
              <span className="text-[#C7F000] relative inline-block">
                LIVE STRONG.
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#C7F000]/40 rounded-full" />
              </span>
            </motion.h1>

            {/* Description Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#A1A1A1] leading-relaxed max-w-2xl mb-8"
            >
              Choose a workout plan according to your goal and start your fitness journey today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <Button
                variant="primary"
                size="lg"
                showArrow
                onClick={onStartJourney}
                className="w-full sm:w-auto"
              >
                START YOUR JOURNEY
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onViewPrograms}
                className="w-full sm:w-auto"
              >
                VIEW PROGRAMS
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-white/10 w-full grid grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#C7F000] shrink-0" />
                <span className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-[#D4D4D8]">
                  500+ Clients
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C7F000] shrink-0" />
                <span className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-[#D4D4D8]">
                  10+ Yrs Exp
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C7F000] shrink-0" />
                <span className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-[#D4D4D8]">
                  100% Bespoke
                </span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT VISUAL COLUMN (Cols 8-12) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Frame & Shadow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-lg aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#171717] mx-auto"
            >
              {/* Trainer Portrait Photography */}
              <img
                src="/images/prem-fitness-journey.jpg"
                alt="Prem Dalia - Fitness Coach"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/40 via-transparent to-[#0B0B0B]/40" />

              {/* Top Accent Pill */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#C7F000]/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C7F000]" />
                <span className="text-[10px] font-bold tracking-wider uppercase text-white">Elite Head Coach</span>
              </div>
            </motion.div>

            {/* FLOATING STAT CARD 1: 97K+ YouTube Views */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-4 rounded-xl glass-panel shadow-2xl border border-white/10 flex items-center gap-3.5 z-20"
            >
              <div className="w-11 h-11 rounded-lg bg-[#C7F000]/10 border border-[#C7F000]/30 flex items-center justify-center text-[#C7F000]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white leading-none">97K+</p>
                <p className="text-[11px] font-semibold text-[#A1A1A1] uppercase tracking-wider mt-0.5">
                  YouTube Views
                </p>
              </div>
            </motion.div>

            {/* FLOATING STAT CARD 2: 289 Videos */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-12 -right-4 sm:top-16 sm:-right-8 p-4 rounded-xl glass-panel shadow-2xl border border-white/10 flex items-center gap-3.5 z-20"
            >
              <div className="w-11 h-11 rounded-lg bg-[#C7F000]/10 border border-[#C7F000]/30 flex items-center justify-center text-[#C7F000]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#C7F000] leading-none">289</p>
                <p className="text-[11px] font-semibold text-[#A1A1A1] uppercase tracking-wider mt-0.5">
                  Workout Videos
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
