'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, Clock } from 'lucide-react';
import FinalCTA from '@/components/FinalCTA';
import GridBackground from '@/components/GridBackground';
import { getSortedPosts } from '@/data/blog';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function ResourcesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const posts = getSortedPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="bg-modern-primary min-h-screen">
      {/* Hero */}
      <section ref={ref} className="relative pt-24 pb-12 overflow-hidden">
        <GridBackground />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <Sparkles size={16} className="text-secondary-purple" />
              <span className="text-sm font-semibold text-secondary-purple">The Blog</span>
            </div>
            <h1 className="text-display text-gray-900 mb-6">
              Insights to Grow Your{' '}
              <span className="text-gradient-purple">Digital Presence</span>
            </h1>
            <p className="text-subheading max-w-2xl mx-auto" style={{ color: '#535252' }}>
              Practical advice on web design, branding, SEO, and social media —
              written to help your business show up and stand out online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="pb-8">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid lg:grid-cols-2 gap-8 items-center card-modern overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 no-underline"
              >
                <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <span className="text-xs font-semibold text-secondary-purple uppercase tracking-wider">
                    {featured.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} /> {formatDate(featured.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} /> {featured.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-secondary-purple font-semibold text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Post grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group card-modern overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="no-underline block">
                  <div className="aspect-video overflow-hidden relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-secondary-purple uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 leading-snug">
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
