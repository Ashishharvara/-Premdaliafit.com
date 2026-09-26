import React from 'react';
import { Dumbbell, Mail, Globe } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '../ui/SocialIcons';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-16 pb-12 text-[#A1A1A1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#171717] border border-white/10 flex items-center justify-center text-[#C7F000]">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-wider uppercase text-white font-heading">
                PREM DALIA <span className="text-[#C7F000]">FIT</span>
              </span>
            </div>

            <p className="text-sm text-[#A1A1A1] leading-relaxed max-w-sm">
              Prem Dalia has 10 years of fitness experience and has shared his knowledge and experience through structured workout plans designed around different fitness goals.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/Premdaliafit"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram @Premdaliafit"
                className="w-9 h-9 rounded-lg bg-[#171717] border border-white/10 flex items-center justify-center text-white hover:text-[#C7F000] hover:border-[#C7F000] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@premfit"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube @premfit"
                className="w-9 h-9 rounded-lg bg-[#171717] border border-white/10 flex items-center justify-center text-white hover:text-[#C7F000] hover:border-[#C7F000] transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About', 'Programs', 'Results', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="hover:text-[#C7F000] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Workout Plans */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Workout Plans
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://imojo.in/11uuLkm"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C7F000] transition-colors text-left block"
                >
                  Muscle Gain Plan
                </a>
              </li>
              <li>
                <a
                  href="https://imojo.in/11uulkn"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C7F000] transition-colors text-left block"
                >
                  3-Month Fat Loss Plan
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Contact & Official Website */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Contact & Links
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C7F000] shrink-0" />
                <a href="https://premdaliafit.com" className="text-white hover:text-[#C7F000] transition-colors font-medium">
                  Premdaliafit.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C7F000] shrink-0" />
                <a href="mailto:Prem30dalia@gmail.com" className="text-white hover:text-[#C7F000] transition-colors text-xs truncate">
                  Prem30dalia@gmail.com
                </a>
              </div>
              <div className="pt-1 text-xs">
                <p className="text-[#C7F000] font-semibold">10+ Years Fitness Experience</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Prem Dalia Fit. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
