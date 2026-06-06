'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Guide } from '@/data/guides';

type Props = {
  guide: Guide;
  /** Larger, horizontal layout for the featured strip. */
  featured?: boolean;
};

export default function GuideCard({ guide, featured = false }: Props) {
  if (featured) {
    return (
      <Link
        href={`/guides/${guide.slug}`}
        className="group grid lg:grid-cols-2 gap-8 items-center card-modern overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 no-underline"
      >
        <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] overflow-hidden">
          <Image
            src={guide.heroImage}
            alt={guide.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-8 lg:p-10">
          <span className="text-xs font-semibold text-secondary-purple uppercase tracking-wider">
            Featured · {guide.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            {guide.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-5">{guide.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {guide.readTime}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-secondary-purple font-semibold text-sm group-hover:gap-3 transition-all">
            Read the Guide <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group card-modern overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 no-underline block"
    >
      <div className="aspect-video overflow-hidden relative">
        <Image
          src={guide.heroImage}
          alt={guide.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-secondary-purple uppercase tracking-wider">
          {guide.category}
        </span>
        <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 leading-snug line-clamp-2">
          {guide.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {guide.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
            <Clock size={13} /> {guide.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5 text-secondary-purple font-semibold text-sm group-hover:gap-3 transition-all">
            Read More <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
