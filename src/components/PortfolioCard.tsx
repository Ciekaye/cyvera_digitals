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
      whileHover={{ y: -10 }}
      className="group card-modern overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer no-underline block"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
          <div>
            {project.category && (
              <p className="text-white/80 text-xs font-medium mb-1">
                {project.category}
              </p>
            )}
            <p className="text-white font-bold text-lg">{project.title}</p>
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ExternalLink size={18} className="text-white" />
          </div>
        </div>
      </div>
      <div className="p-6">
        {project.category && (
          <span className="text-xs font-semibold text-secondary-purple uppercase tracking-wider">
            {project.category}
          </span>
        )}
        <h3 className="text-lg font-bold text-gray-900 mt-1">{project.title}</h3>
        {showDescription && project.description && (
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            {project.description}
          </p>
        )}
      </div>
    </motion.a>
  );
}
