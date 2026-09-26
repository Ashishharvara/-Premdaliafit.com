import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  isLoading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  isLoading = false,
  href,
  target,
  rel,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "group relative inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 rounded-lg select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C7F000]/50 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider gap-1.5",
    md: "px-6 py-3 text-sm uppercase tracking-wider gap-2",
    lg: "px-8 py-4 text-base uppercase tracking-wider gap-2.5 font-bold"
  };

  const variantStyles = {
    primary: "bg-[#C7F000] text-black hover:bg-[#d6ff00] active:scale-[0.98] glow-accent shadow-lg shadow-[#C7F000]/20 font-bold",
    secondary: "bg-[#171717] text-white border border-white/10 hover:border-[#C7F000]/60 hover:bg-[#202020] active:scale-[0.98]",
    outline: "bg-transparent text-white border-2 border-[#C7F000] hover:bg-[#C7F000] hover:text-black active:scale-[0.98]",
    ghost: "bg-transparent text-[#A1A1A1] hover:text-white hover:bg-white/5 active:scale-[0.98]"
  };

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : null}
      <span>{children}</span>
      {showArrow && !isLoading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-current" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
