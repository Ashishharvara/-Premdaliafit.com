import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, Share2 } from 'lucide-react';
import type { BlogPost } from '../../types';

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  post,
  isOpen,
  onClose
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

  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-[#141414] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 z-10 text-left custom-scrollbar"
          >
            <button
              onClick={onClose}
              aria-label="Close article"
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-[#A1A1A1] hover:text-white hover:border-[#C7F000] hover:bg-[#C7F000]/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded bg-[#C7F000]/10 border border-[#C7F000]/30 text-xs font-bold uppercase tracking-wider text-[#C7F000]">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#A1A1A1]">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#A1A1A1]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase leading-snug mb-6">
              {post.title}
            </h2>

            <div className="w-full h-64 sm:h-80 overflow-hidden rounded-xl mb-6">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-base text-[#D4D4D8] leading-relaxed mb-8">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="border-l-2 border-[#C7F000]/30 pl-4 py-1">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#C7F000]/50"
                />
                <div>
                  <p className="text-sm font-bold text-white">{post.author.name}</p>
                  <p className="text-xs text-[#A1A1A1]">{post.author.role}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }}
                className="flex items-center gap-2 text-xs font-medium text-[#A1A1A1] hover:text-[#C7F000] transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
