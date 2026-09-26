import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { blogPosts } from '../../data/blog';
import type { BlogPost } from '../../types';
import { BlogModal } from '../ui/BlogModal';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 lg:py-32 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="KNOWLEDGE HUB"
          title="FROM THE COACH"
          highlightedWord="COACH"
          subtitle="Evidence-based training theory, nutrition protocols, and psychological tactics to optimize your physical performance."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="group flex flex-col justify-between rounded-2xl bg-[#171717] border border-white/10 hover:border-[#C7F000]/50 overflow-hidden transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1.5"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0B0B0B]/80 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-[#C7F000] border border-white/10">
                    {post.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 text-left">
                  <div className="flex items-center gap-3 text-[11px] text-[#A1A1A1] mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C7F000]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C7F000]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white uppercase group-hover:text-[#C7F000] transition-colors leading-snug mb-3 font-heading line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#A1A1A1] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Article Link */}
              <div className="px-6 pb-6 pt-2 text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C7F000] group-hover:gap-2.5 transition-all">
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      <BlogModal
        post={selectedPost}
        isOpen={selectedPost !== null}
        onClose={() => setSelectedPost(null)}
      />
    </section>
  );
};
