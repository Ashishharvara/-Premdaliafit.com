import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  clientName?: string;
  stats?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  clientName,
  stats,
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 select-none bg-[#111111] ${className}`}>
      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[380px] sm:h-[460px] md:h-[540px] cursor-ew-resize overflow-hidden"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* After Image (Background layer) */}
        <img
          src={afterImage}
          alt="After transformation"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          loading="lazy"
        />

        {/* After Badge */}
        <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded bg-[#0B0B0B]/80 backdrop-blur-md border border-[#C7F000]/40 text-[#C7F000] text-xs font-black tracking-widest pointer-events-none">
          {afterLabel}
        </div>

        {/* Before Image (Clipped with CSS clipPath polygon) */}
        <img
          src={beforeImage}
          alt="Before transformation"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
          }}
          loading="lazy"
        />

        {/* Before Badge */}
        <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded bg-[#0B0B0B]/80 backdrop-blur-md border border-white/20 text-white text-xs font-black tracking-widest pointer-events-none">
          {beforeLabel}
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 z-30 w-1 bg-[#C7F000] shadow-[0_0_12px_#C7F000] pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          {/* Draggable Handle Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-11 h-11 rounded-full bg-[#0B0B0B] border-2 border-[#C7F000] shadow-xl flex items-center justify-center text-[#C7F000] transition-transform group-hover:scale-110 active:scale-95">
            <ChevronsLeftRight className="w-5 h-5 animate-pulse" />
          </div>
        </div>

        {/* Bottom Metadata Overlay */}
        {(clientName || stats) && (
          <div className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-2 pointer-events-none">
            {clientName && (
              <div>
                <p className="text-white font-bold text-base sm:text-lg">{clientName}</p>
                <p className="text-xs text-[#A1A1A1] uppercase tracking-wider">Verified 12-Week Transformation</p>
              </div>
            )}
            {stats && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#C7F000]/10 border border-[#C7F000]/30 text-[#C7F000] text-xs sm:text-sm font-bold tracking-wide">
                <span>{stats}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Touch/Mouse Hint */}
      <div className="py-2.5 px-4 bg-[#141414] border-t border-white/5 flex items-center justify-center gap-2 text-xs text-[#A1A1A1]">
        <ChevronsLeftRight className="w-3.5 h-3.5 text-[#C7F000]" />
        <span>Drag the slider left and right to inspect muscle definition and posture</span>
      </div>
    </div>
  );
};
