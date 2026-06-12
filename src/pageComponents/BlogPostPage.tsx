'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import FinalCTA from '@/components/FinalCTA';
import GridBackground from '@/components/GridBackground';
import { BlogPost, ContentBlock } from '@/data/blog';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
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
    case 'table':
      return (
        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50">
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="px-5 py-3 text-sm font-semibold text-gray-900 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`px-5 py-4 text-gray-700 leading-relaxed align-top ${
                        i === 0 ? 'font-semibold text-gray-900 whitespace-nowrap' : ''
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  return (
    <div className="bg-modern-primary min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-8 overflow-hidden">
        <GridBackground />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-secondary-purple transition-colors no-underline mb-8"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-5 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>{post.author}</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
            {post.excerpt}
          </p>
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="pb-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Keep reading</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group card-modern overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 no-underline block"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-secondary-purple uppercase tracking-wider">
                      {r.category}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 mt-2 mb-2 leading-snug">
                      {r.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-secondary-purple font-semibold text-sm group-hover:gap-3 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </div>
  );
}
