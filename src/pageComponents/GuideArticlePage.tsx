'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Info } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import GuideCard from '@/components/GuideCard';
import { Guide, GuideBlock } from '@/data/guides';

const SERVICE_LABELS: Record<string, string> = {
  '/services/website-development': 'Website Development',
  '/services/ui-ux-strategy': 'UI/UX Strategy',
  '/services/graphic-brand-design': 'Graphic & Brand Design',
  '/services/social-media-management': 'Social Media Management',
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2
          id={slugify(block.text)}
          className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28"
        >
          {block.text}
        </h2>
      );
    case 'paragraph':
      return (
        <p className="text-gray-700 leading-relaxed text-lg mb-5">{block.text}</p>
      );
    case 'list':
      return (
        <ul className="space-y-3 mb-6">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-700 text-lg">
              <span className="w-2 h-2 rounded-full bg-secondary-purple mt-2.5 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote className="border-l-4 border-secondary-purple pl-6 py-1 my-8 text-xl font-medium text-gray-800 italic leading-relaxed">
          {block.text}
        </blockquote>
      );
    case 'callout':
      return (
        <div className="flex gap-3 p-5 my-8 rounded-xl bg-purple-50 border border-purple-100">
          <Info size={20} className="text-secondary-purple flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-gray-700 leading-relaxed m-0">{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default function GuideArticlePage({
  guide,
  related,
}: {
  guide: Guide;
  related: Guide[];
}) {
  const toc = guide.content
    .filter((b): b is Extract<GuideBlock, { type: 'heading' }> => b.type === 'heading')
    .map((b) => ({ id: slugify(b.text), text: b.text }));

  const service = guide.relatedServices[0];
  const serviceLabel = service ? SERVICE_LABELS[service] ?? 'Our Services' : null;

  return (
    <div className="bg-modern-primary min-h-screen">
      {/* Skip link */}
      <a
        href="#guide-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:shadow-lg focus:text-secondary-purple focus:font-semibold"
      >
        Skip to content
      </a>

      {/* Header */}
      <section className="pt-28 pb-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Guides', href: '/guides' },
                { label: guide.title },
              ]}
            />
          </div>
          <span className="text-xs font-semibold text-secondary-purple uppercase tracking-wider">
            {guide.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
            {guide.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>Cyvera Digitals</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} /> Updated {formatDate(guide.updatedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {guide.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={guide.heroImage}
              alt={guide.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Body + sticky TOC */}
      <section id="guide-content" className="pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-12">
            {/* TOC */}
            {toc.length > 0 && (
              <aside className="hidden lg:block">
                <nav aria-label="Table of contents" className="sticky top-28">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    On this page
                  </p>
                  <ul className="space-y-2.5 border-l border-gray-200">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="block -ml-px pl-4 border-l-2 border-transparent text-sm text-gray-600 hover:text-secondary-purple hover:border-secondary-purple transition-colors"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}

            {/* Article */}
            <article>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
                {guide.excerpt}
              </p>
              {guide.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}

              {/* Service CTA */}
              {service && (
                <div className="mt-12 rounded-2xl p-8 text-center" style={{ backgroundColor: '#C02B7D' }}>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Ready to put this into practice?
                  </h2>
                  <p className="text-white/85 mb-6 max-w-xl mx-auto">
                    Want this handled by a team that does it every day? Our{' '}
                    {serviceLabel} service turns these ideas into results for your
                    business.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href={service}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold no-underline hover:-translate-y-0.5 transition-transform"
                    >
                      Explore {serviceLabel} <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/60 text-white font-semibold no-underline hover:bg-white/10 transition-colors"
                    >
                      Book a Free Discovery Call
                    </Link>
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>

      {/* Related guides */}
      {related.length > 0 && (
        <section className="pb-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Keep reading</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
