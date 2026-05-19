'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Project, getPreviewUrl } from '@/data/portfolio';

type Props = {
  project: Project;
};

export default function PortfolioCard({ project }: Props) {
  const previewUrl = getPreviewUrl(project);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group card-modern overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer no-underline block"
    >
      <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
        <Image
          src={previewUrl}
          alt={project.title}
          width={1200}
          height={900}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
        {project.description && (
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            {project.description}
          </p>
        )}
      </div>
    </a>
  );
}
