import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Activity, CheckCircle2, Target, ExternalLink } from 'lucide-react';
import type { Program } from '../../types';
import { Button } from './Button';

interface ProgramModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProgram: (programName: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  isOpen,
  onClose,
  onSelectProgram
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!program) return null;

  const handleStartProgram = () => {
    if (program.link) {
      window.open(program.link, '_blank', 'noopener,noreferrer');
      return;
    }
    onSelectProgram(program.title);
    onClose();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#141414] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 z-10 text-left custom-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-[#A1A1A1] hover:text-white hover:border-[#C7F000] hover:bg-[#C7F000]/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl font-black text-[#C7F000]">
                {program.number}
              </span>
              <span className="text-xs uppercase tracking-widest px-3 py-1 rounded bg-[#1f1f1f] text-[#C7F000] font-bold border border-[#C7F000]/20">
                {program.subtitle}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-3">
              {program.title}
            </h2>

            <p className="text-base text-[#A1A1A1] leading-relaxed mb-6">
              {program.description}
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 p-4 rounded-xl bg-[#1a1a1a] border border-white/5">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#C7F000] shrink-0" />
                <div>
                  <p className="text-[11px] text-[#A1A1A1] uppercase tracking-wider font-semibold">Duration</p>
                  <p className="text-sm font-bold text-white">{program.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-[#C7F000] shrink-0" />
                <div>
                  <p className="text-[11px] text-[#A1A1A1] uppercase tracking-wider font-semibold">Intensity</p>
                  <p className="text-sm font-bold text-white">{program.intensity}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#C7F000] shrink-0" />
                <div>
                  <p className="text-[11px] text-[#A1A1A1] uppercase tracking-wider font-semibold">Weekly Split</p>
                  <p className="text-sm font-bold text-white">{program.schedule}</p>
                </div>
              </div>
            </div>

            {/* Who It's For */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-[#C7F000]" />
                <h3 className="text-sm font-bold tracking-wider uppercase text-white">Target Candidate</h3>
              </div>
              <p className="text-sm text-[#A1A1A1] bg-[#1a1a1a] p-3.5 rounded-lg border border-white/5">
                {program.targetAudience}
              </p>
            </div>

            {/* Curriculum Phasing */}
            <div className="mb-8">
              <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-3">
                Progression Curriculum Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.curriculum.map((curr, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#181818] border border-white/5 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-black text-[#C7F000]">{curr.phase}</span>
                      <span className="text-[11px] text-[#A1A1A1] font-medium">{curr.weeks}</span>
                    </div>
                    <p className="text-sm font-medium text-white">{curr.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-3">
                What's Included in This Program
              </h3>
              <div className="space-y-2.5">
                {program.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C7F000] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#A1A1A1]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Milestones */}
            <div className="mb-8">
              <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-3">
                Expected Milestones & Deliverables
              </h3>
              <div className="space-y-2">
                {program.expectedMilestones.map((milestone, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#C7F000]/5 border border-[#C7F000]/20 text-xs sm:text-sm text-[#E2E8F0] font-medium">
                    ✓ {milestone}
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={onClose}
                className="text-xs uppercase tracking-wider text-[#A1A1A1] hover:text-white transition-colors cursor-pointer"
              >
                Close Details
              </button>

              {program.link ? (
                <a
                  href={program.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#C7F000] text-black font-black text-sm uppercase tracking-wider hover:bg-[#d6ff00] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#C7F000]/20"
                >
                  <span>GET THIS WORKOUT PLAN</span>
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                </a>
              ) : (
                <Button
                  variant="primary"
                  size="md"
                  showArrow
                  onClick={handleStartProgram}
                  className="w-full sm:w-auto"
                >
                  START THIS PROGRAM
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
