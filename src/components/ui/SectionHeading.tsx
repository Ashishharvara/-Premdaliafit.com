import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedWord,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';

  const renderTitle = () => {
    if (!highlightedWord) {
      return title;
    }

    const parts = title.split(new RegExp(`(${highlightedWord})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlightedWord.toLowerCase() ? (
            <span key={i} className="text-[#C7F000]">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171717] border border-white/10 mb-4 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000] animate-pulse" />
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#C7F000]">
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
        {renderTitle()}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#A1A1A1] font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
