'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Project, getPreviewUrl } from '@/data/portfolio';

type Props = {
  project: Project;
  /** Stagger delay (seconds) for the pop-in animation. */
  delay?: number;
  /** Whether to render the project description below the title. */
  showDescription?: boolean;
  /** Eagerly load + prioritize the image (use for above-the-fold cards). */
  priority?: boolean;
};

export default function PortfolioCard({ project, delay = 0, showDescription = false, priority = false }: Props) {
  const previewUrl = getPreviewUrl(project);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={priority ? false : { opacity: 0, scale: 0.9, y: 30 }}
      animate={priority || isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group card-modern overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer no-underline block h-full flex flex-col"
    >
      <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
        <Image
          src={previewUrl}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover overlay: just a CTA affordance, details live below */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
          <span className="inline-flex items-center gap-1.5 text-white text-sm font-semibold bg-white/15 backdrop-blur-sm rounded-full pl-3 pr-2.5 py-1.5">
            View site
            <ExternalLink size={15} />
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        {project.category && (
          <span className="text-[11px] font-semibold text-secondary-purple uppercase tracking-wider">
            {project.category}
          </span>
        )}
        <h3 className="text-base font-bold text-gray-900 mt-1 group-hover:text-secondary-purple transition-colors duration-200">
          {project.title}
        </h3>
        {showDescription && project.description && (
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            {project.description}
          </p>
        )}
      </div>
    </motion.a>
  );
}
