import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide every 5 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      next(); // Swiped left -> next
    } else if (diff < -50) {
      prev(); // Swiped right -> prev
    }
    touchStartX.current = null;
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-[#0E0E0E] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="ATHLETE VOICES"
          title="WHAT CLIENTS SAY"
          highlightedWord="SAY"
          subtitle="Genuine stories from professionals, executives, and lifters who transformed their health and performance."
        />

        {/* Testimonials Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Card with Animated Slide */}
          <div className="relative min-h-[340px] sm:min-h-[290px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full p-8 sm:p-10 rounded-3xl bg-[#171717] border border-white/10 shadow-2xl relative text-left"
              >
                {/* Big decorative quote mark */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 pointer-events-none" />

                {/* Star rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C7F000] text-[#C7F000]" />
                  ))}
                  <span className="text-xs font-bold text-[#A1A1A1] ml-2">5.0 Verified Review</span>
                </div>

                {/* Quote Body */}
                <p className="text-lg sm:text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                  "{current.quote}"
                </p>

                {/* Client Profile Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#C7F000]/60"
                    />
                    <div>
                      <h4 className="text-base font-bold text-white font-heading">
                        {current.name}
                      </h4>
                      <p className="text-xs text-[#A1A1A1]">{current.role}</p>
                    </div>
                  </div>

                  {/* Goal and Result Pill */}
                  <div className="hidden sm:block text-right">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C7F000] block">
                      {current.result}
                    </span>
                    <span className="text-[11px] text-[#71717A]">{current.goal}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="mt-8 flex items-center justify-between">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#C7F000]'
                      : 'w-2 bg-[#2D2D2D] hover:bg-[#444]'
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="p-3 rounded-full bg-[#171717] border border-white/10 text-white hover:text-[#C7F000] hover:border-[#C7F000] transition-colors cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="p-3 rounded-full bg-[#171717] border border-white/10 text-white hover:text-[#C7F000] hover:border-[#C7F000] transition-colors cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
