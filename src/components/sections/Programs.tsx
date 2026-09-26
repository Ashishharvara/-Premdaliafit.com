import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Dumbbell, ExternalLink, Flame } from 'lucide-react';
import { programs } from '../../data/programs';
import type { Program } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';

interface ProgramsProps {
  onExploreProgram: (program: Program) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onExploreProgram }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'beginner-fat-loss':
        return <Flame className="w-5 h-5 text-[#C7F000]" />;
      default:
        return <Dumbbell className="w-5 h-5 text-[#C7F000]" />;
    }
  };

  return (
    <section id="programs" className="py-20 lg:py-32 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="STRUCTURED WORKOUT PLANS"
          title="WORKOUT PLANS"
          highlightedWord="PLANS"
          subtitle="Choose a workout plan according to your goal and start your fitness journey today."
        />

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#171717] border border-white/10 hover:border-[#C7F000]/60 overflow-hidden transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(199,240,0,0.15)] hover:-translate-y-1.5"
            >
              {/* Program Image Header */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent" />

                {/* Big Number Accent */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#0B0B0B]/80 backdrop-blur-md border border-white/10 flex items-center gap-2">
                  <span className="text-sm font-black text-[#C7F000]">{program.number}</span>
                  <span className="text-[10px] uppercase font-bold text-white tracking-widest">{program.subtitle}</span>
                </div>

                {/* Corner Category Icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  {getIcon(program.id)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#C7F000] transition-colors font-heading leading-tight">
                    {program.title}
                  </h3>

                  <p className="text-sm text-[#A1A1A1] leading-relaxed mb-6 font-medium">
                    {program.tagline}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-white/5">
                    {program.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#D4D4D8]">
                        <CheckCircle2 className="w-4 h-4 text-[#C7F000] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => onExploreProgram(program)}
                    className="py-3 px-4 rounded-lg bg-[#202020] hover:bg-[#282828] text-white hover:text-[#C7F000] border border-white/5 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>EXPLORE DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {program.link && (
                    <a
                      href={program.link}
                      target="_blank"
                      rel="noreferrer"
                      className="py-3 px-4 rounded-lg bg-[#C7F000] text-black hover:bg-[#d6ff00] font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-[#C7F000]/20"
                    >
                      <span>GET PLAN NOW</span>
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom Subtle Lime Line */}
              <div className="h-[2px] w-0 group-hover:w-full bg-[#C7F000] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
