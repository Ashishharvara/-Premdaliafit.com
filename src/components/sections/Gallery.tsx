import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { galleryItems } from '../../data/gallery';
import { LightboxModal } from '../ui/LightboxModal';
import { Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === 0 ? galleryItems.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === galleryItems.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="THE CRAFT"
          title="FITNESS GALLERY"
          highlightedWord="GALLERY"
          subtitle="A visual documentation of heavy iron, metabolic discipline, and high-performance daily living."
        />

        {/* Editorial Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[240px] sm:auto-rows-[280px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => openLightbox(idx)}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer bg-[#141414] ${item.span || 'col-span-1 row-span-1'}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#C7F000]">
                  {item.category}
                </span>
              </div>

              {/* Click to Expand Icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#C7F000]" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 inset-x-4 z-10 text-left">
                <p className="text-white font-bold text-sm sm:text-base group-hover:text-[#C7F000] transition-colors leading-tight font-heading">
                  {item.title}
                </p>
                <p className="text-[11px] text-[#A1A1A1] mt-0.5">Click to view high-resolution photo</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={galleryItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex !== null}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
