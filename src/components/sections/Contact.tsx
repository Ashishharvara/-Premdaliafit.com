import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '../ui/SocialIcons';
import { SectionHeading } from '../ui/SectionHeading';

interface ContactProps {
  selectedProgramOrPlan?: string;
}

export const Contact: React.FC<ContactProps> = () => {
  const channels = [
    {
      name: 'Instagram',
      handle: '@Premdaliafit',
      description: 'Daily training insights, workout tips & updates',
      icon: InstagramIcon,
      actionText: 'Follow on Instagram',
      link: 'https://instagram.com/Premdaliafit',
      featured: true
    },
    {
      name: 'Email Inquiry',
      handle: 'Prem30dalia@gmail.com',
      description: 'Direct inquiries & custom training questions',
      icon: Mail,
      actionText: 'Send Direct Email',
      link: 'mailto:Prem30dalia@gmail.com',
      featured: false
    },
    {
      name: 'YouTube Channel',
      handle: '@premfit',
      description: '422 Subscribers • 289 Videos • 97,188 Views',
      icon: YoutubeIcon,
      actionText: 'Subscribe on YouTube',
      link: 'https://www.youtube.com/@premfit',
      featured: false
    },
    {
      name: 'Official Website',
      handle: 'Premdaliafit.com',
      description: 'All programs, workout blueprints & client results',
      icon: Globe,
      actionText: 'Visit Premdaliafit.com',
      link: 'https://premdaliafit.com',
      featured: false
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#0B0B0B] relative border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#C7F000]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="DIRECT CHANNELS"
          title="CONNECT WITH PREM DALIA"
          highlightedWord="PREM DALIA"
          subtitle="Choose a workout plan according to your goal and start your fitness journey today. If you have any questions or need guidance, reach out directly."
        />

        {/* Channels Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {channels.map((ch, idx) => {
            const Icon = ch.icon;

            return (
              <motion.a
                key={ch.name}
                href={ch.link}
                target={ch.link.startsWith('http') ? '_blank' : undefined}
                rel={ch.link.startsWith('http') ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 group cursor-pointer text-left ${
                  ch.featured
                    ? 'bg-[#171717] border-2 border-[#C7F000] shadow-[0_0_35px_rgba(199,240,0,0.15)] hover:-translate-y-1.5'
                    : 'bg-[#141414] border border-white/10 hover:border-white/25 hover:-translate-y-1.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#202020] border border-white/10 flex items-center justify-center text-[#C7F000] group-hover:scale-110 group-hover:bg-[#C7F000] group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#71717A] px-2.5 py-1 rounded bg-[#1A1A1A] border border-white/5">
                      {ch.name}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white uppercase tracking-wider mb-2 font-heading group-hover:text-[#C7F000] transition-colors break-all">
                    {ch.handle}
                  </h3>

                  <p className="text-xs text-[#A1A1A1] leading-relaxed mb-6">
                    {ch.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white group-hover:text-[#C7F000] transition-colors">
                  <span>{ch.actionText}</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Instamojo Workout Plans Access Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl bg-[#141414] border border-white/10 p-8 sm:p-10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7F000]/5 blur-3xl pointer-events-none" />

          <span className="inline-block px-3 py-1 rounded-full bg-[#C7F000]/10 border border-[#C7F000]/30 text-[#C7F000] text-xs font-black uppercase tracking-wider mb-3">
            INSTANT DIGITAL WORKOUT PLANS
          </span>

          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3 font-heading">
            READY TO START YOUR JOURNEY?
          </h3>

          <p className="text-sm text-[#A1A1A1] max-w-xl mx-auto mb-8">
            Get immediate digital access to Prem Dalia's proven workout blueprints on Instamojo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://premdaliafit.myinstamojo.com/product/3-month-beginner-fat-loss-workout-plan-prem-/"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#202020] text-white hover:bg-[#C7F000] hover:text-black border border-white/10 hover:border-[#C7F000] font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>3-Month Beginner Fat Loss Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://imojo.in/11uuLkm"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#C7F000] text-black hover:bg-[#d6ff00] font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#C7F000]/20"
            >
              <span>Muscle Gain Workout Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
