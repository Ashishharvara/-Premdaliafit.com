import React from 'react';
import { motion } from 'framer-motion';
import { Check, Award } from 'lucide-react';
import { Button } from '../ui/Button';

interface AboutTrainerProps {
  onMeetCoachClick: () => void;
}

export const AboutTrainer: React.FC<AboutTrainerProps> = ({ onMeetCoachClick }) => {
  const features = [
    'Personalized workout plans built for your unique biomechanics',
    'Dynamic nutrition guidance with flexible macros and dining protocols',
    'Weekly bio-metric progress tracking & HD form video audits',
    'Direct one-on-one accountability via WhatsApp and private calls'
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Trainer Image with floating badge (Cols 1-6) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square max-w-lg mx-auto bg-[#171717] shadow-2xl"
            >
              <img
                src="/images/prem-fitness-journey.jpg"
                alt="Prem Dalia - 10+ Years Fitness Experience"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C7F000]/10 border border-[#C7F000]/30 flex items-center justify-center text-[#C7F000]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white uppercase tracking-wider">Prem Dalia</p>
                    <p className="text-xs text-[#A1A1A1]">10+ Years Fitness Experience</p>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-lg bg-[#C7F000] text-black text-xs font-black tracking-wider uppercase">
                  10+ YRS EXP
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Philosophy & Features (Cols 7-12) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171717] border border-white/10 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#C7F000]">
                ABOUT YOUR COACH
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[1.05] mb-6 font-heading"
            >
              MORE THAN TRAINING.<br />
              <span className="text-[#C7F000]">IT'S A LIFESTYLE.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-base sm:text-lg text-[#A1A1A1] leading-relaxed mb-8"
            >
              <p>
                "Prem Dalia has 10 years of fitness experience and has shared his knowledge and experience through structured workout plans designed around different fitness goals."
              </p>
            </motion.div>

            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full space-y-3.5 mb-10"
            >
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C7F000]/10 border border-[#C7F000]/30 flex items-center justify-center text-[#C7F000] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base text-[#D4D4D8] font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                variant="primary"
                size="md"
                showArrow
                onClick={onMeetCoachClick}
              >
                MEET YOUR COACH
              </Button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
