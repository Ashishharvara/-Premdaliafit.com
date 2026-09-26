import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  onStartTrainingClick: () => void;
}

const primaryNavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Results', href: '#results' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const allNavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Results', href: '#results' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onStartTrainingClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = allNavLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-[#0B0B0B]/80 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo (Single-Line, Zero Wrapping) */}
        <a
          href="#home"
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer shrink-0 select-none whitespace-nowrap"
        >
          <div className="w-10 h-10 rounded-xl bg-[#171717] border border-white/10 flex items-center justify-center text-[#C7F000] group-hover:border-[#C7F000] group-hover:shadow-[0_0_15px_rgba(199,240,0,0.25)] transition-all">
            <Dumbbell className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-black tracking-wider uppercase text-white font-heading whitespace-nowrap">
              PREM DALIA <span className="text-[#C7F000]">FIT</span>
            </span>

            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest bg-[#C7F000]/10 text-[#C7F000] border border-[#C7F000]/30 whitespace-nowrap">
              10+ YRS EXP
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 shrink-0">
          {primaryNavLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-[#C7F000]'
                    : 'text-[#A1A1A1] hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C7F000] rounded-full shadow-[0_0_8px_#C7F000]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <Button
            variant="primary"
            size="sm"
            showArrow
            onClick={onStartTrainingClick}
            className="whitespace-nowrap font-black"
          >
            START TRAINING
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2.5">
          <Button
            variant="primary"
            size="sm"
            onClick={onStartTrainingClick}
            className="text-[10px] sm:text-xs px-3 py-1.5 font-black uppercase tracking-wider whitespace-nowrap"
          >
            START
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl bg-[#171717] border border-white/10 text-white hover:text-[#C7F000] hover:border-[#C7F000] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-[#0B0B0B]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2.5">
            {allNavLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider font-bold transition-colors ${
                    isActive
                      ? 'bg-[#171717] text-[#C7F000] border-l-2 border-[#C7F000]'
                      : 'text-[#D4D4D8] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000]" />}
                </a>
              );
            })}

            <div className="pt-4 border-t border-white/10">
              <Button
                variant="primary"
                size="md"
                showArrow
                className="w-full font-black"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartTrainingClick();
                }}
              >
                START TRAINING NOW
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
