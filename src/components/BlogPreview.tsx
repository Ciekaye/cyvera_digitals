'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import { getSortedPosts } from '@/data/blog';

export default function BlogPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const trackRef = useRef<HTMLDivElement>(null);
  const posts = getSortedPosts();

  if (posts.length === 0) return null;

  const scrollByCard = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('[data-card]') as HTMLElement | null;
    const amount = card ? card.offsetWidth + 24 /* gap */ : track.clientWidth * 0.8;
    track.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="py-24 bg-modern-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-display text-gray-900 mb-3"
            >
              From the <span className="text-gradient-purple">Blog</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-gray-600 max-w-xl"
            >
              Practical insights on web design, branding, SEO, and social media.
            </motion.p>
          </div>

          {/* Arrows (desktop) */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByCard(-1)}
              className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-purple-300 hover:text-secondary-purple transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollByCard(1)}
              className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-purple-300 hover:text-secondary-purple transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide"
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              data-card
              className="group snap-start flex-shrink-0 w-[300px] sm:w-[340px] card-modern overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 no-underline"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="340px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-secondary-purple uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={13} /> {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-secondary-purple font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:border-purple-300 hover:text-purple-700 transition-all no-underline"
          >
            Read the Blog
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
