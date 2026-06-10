'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn } from 'react-icons/fa';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageScale?: number;
  imageOrigin?: string;
  modalImagePosition?: string;
  bio?: string;
  skills?: string[];
  quote?: string;
  social?: {
    linkedin?: string;
  };
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Clark Kent Uyanguren',
    role: 'Co-Founder & Creative Director',
    image: '/team/clark.jpg',
    imageScale: 1.25,
    imageOrigin: '50% 50%',
    modalImagePosition: '50% 50%',
    bio: 'With nearly 6 years in the industry, Clark leads the creative vision at Cyvera Digitals — translating brand ideas into design systems that feel intentional and alive.',
    skills: ['Brand Identity', 'Creative Direction', 'UI Design', 'Visual Strategy', 'Front-End Development', 'WordPress'],
    quote: 'Design is how it works, not just how it looks.',
    social: { linkedin: '#' },
  },
  {
    id: '2',
    name: 'Jhon Carl Ignoro',
    role: 'Co-Founder & Growth Lead',
    image: '/team/jhon.jpg',
    bio: 'With nearly 10 years of experience, Jhon drives growth strategy at Cyvera Digitals — connecting businesses with the right audiences through data-informed campaigns.',
    modalImagePosition: '50% 10%',
    skills: ['Growth Marketing', 'Paid Media', 'SEO Strategy', 'Analytics', 'WordPress'],
    quote: 'Every click is a conversation — make it count.',
    social: { linkedin: '#' },
  },
  {
    id: '3',
    name: 'Rechcel Toledo Araneta',
    role: 'Co-Founder & Technical Lead',
    image: '/team/rechcel.jpg',
    modalImagePosition: '50% 10%',
    bio: 'A Software Developer with 3+ years of experience, Rechcel is passionate about development and technology. He architects the technical backbone of every project at Cyvera Digitals — building fast, scalable digital experiences with modern tools like React, TypeScript, and Tailwind CSS.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel', 'Full Stack Development'],
    quote: 'Good code is invisible — it just works.',
    social: { linkedin: '#' },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  const activeMember = members.find((m) => m.id === activeId) ?? null;

  return (
    <>
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16 select-none w-full max-w-6xl mx-auto py-8 px-4 md:px-6 font-poppins">
        {/* ── Left: photo grid ── */}
        <div className="flex gap-2 md:gap-3 flex-shrink-0 w-full md:w-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-2 md:gap-3 flex-1 md:flex-none">
            {col1.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-full md:w-[220px] h-[160px] sm:h-[220px] md:h-[293px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
                onOpen={setActiveId}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2 md:gap-3 mt-[50px] sm:mt-[68px] md:mt-[95px] flex-1 md:flex-none">
            {col2.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-full md:w-[242px] h-[176px] sm:h-[243px] md:h-[323px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
                onOpen={setActiveId}
              />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2 md:gap-3 mt-[24px] sm:mt-[33px] md:mt-[44px] flex-1 md:flex-none">
            {col3.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-full md:w-[230px] h-[167px] sm:h-[231px] md:h-[307px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
                onOpen={setActiveId}
              />
            ))}
          </div>
        </div>

        {/* ── Right: member name list ── */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-6 pt-0 md:pt-2 flex-1 w-full min-w-0 md:min-w-[260px]">
          {members.map((member) => (
            <MemberRow
              key={member.id}
              member={member}
              hoveredId={hoveredId}
              onHover={setHoveredId}
              onOpen={setActiveId}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeMember && (
          <FounderModal member={activeMember} onClose={() => setActiveId(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
  onOpen,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onOpen: (id: string) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const scale = member.imageScale ?? 1;
  const origin = member.imageOrigin ?? '50% 0%';

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-400',
        className,
        isDimmed ? 'opacity-60' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onOpen(member.id)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-top transition-[filter] duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.77)',
          transform: `scale(${scale})`,
          transformOrigin: origin,
        }}
      />
    </div>
  );
}

function MemberRow({
  member,
  hoveredId,
  onHover,
  onOpen,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onOpen: (id: string) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasLinkedin = !!member.social?.linkedin;

  return (
    <div
      className={cn(
        'cursor-pointer transition-opacity duration-300',
        isDimmed ? 'opacity-50' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onOpen(member.id)}
    >
      {/* Name + social */}
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'h-3 rounded-[5px] flex-shrink-0 transition-all duration-300 bg-[#C02B7D]',
            isActive ? 'w-5' : 'w-4 opacity-25',
          )}
        />
        <span
          className={cn(
            'text-[17px] md:text-[20px] font-semibold leading-none tracking-tight transition-colors duration-300 font-poppins',
            isActive ? 'text-gray-900' : 'text-gray-700',
          )}
        >
          {member.name}
        </span>

        {/* Social icons */}
        {hasLinkedin && (
          <div
            className={cn(
              'flex items-center gap-1.5 ml-0.5 transition-all duration-200',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none',
            )}
          >
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-gray-500 hover:text-[#C02B7D] hover:bg-[#C02B7D]/10 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn size={10} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-1.5 pl-[27px] text-[9px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500 font-poppins">
        {member.role}
      </p>
    </div>
  );
}

function FounderModal({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = original;
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const scale = member.imageScale ?? 1;
  const origin = member.imageOrigin ?? '50% 0%';

  return createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal card */}
      <motion.div
        className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo */}
        <div className="md:w-[42%] flex-shrink-0 overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none h-80 sm:h-96 md:h-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: member.modalImagePosition ?? '50% 20%' }}
          />
        </div>

        {/* Details */}
        <div className="flex-1 p-6 md:p-8 flex flex-col gap-4 font-poppins">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-150"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Name + role */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 leading-tight">{member.name}</h3>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#C02B7D]">
              {member.role}
            </p>
          </div>

          {/* Bio */}
          {member.bio && (
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{member.bio}</p>
          )}

          {/* Skills */}
          {member.skills && member.skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 text-gray-700 text-xs font-medium rounded-full px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Quote */}
          {member.quote && (
            <blockquote className="border-l-2 border-[#C02B7D] pl-4 italic text-gray-500 text-sm leading-relaxed">
              &ldquo;{member.quote}&rdquo;
            </blockquote>
          )}

          {/* Social */}
          {member.social?.linkedin && (
            <div className="mt-auto pt-2">
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#C02B7D] transition-colors duration-150"
              >
                <FaLinkedinIn size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
