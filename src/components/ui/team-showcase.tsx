'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { founders, Founder } from '@/data/founders';

interface TeamShowcaseProps {
  members?: Founder[];
}

export default function TeamShowcase({ members = founders }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 select-none w-full max-w-6xl mx-auto py-8 px-4 md:px-6 font-poppins">
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
            />
          ))}
        </div>
      </div>

      {/* ── Right: member name list ── */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-4 lg:gap-6 pt-0 lg:pt-2 flex-1 w-full min-w-0 lg:min-w-[260px]">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: Founder;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const scale = member.imageScale ?? 1;
  const origin = member.imageOrigin ?? '50% 0%';

  return (
    <Link
      href={`/founders/${member.slug}`}
      aria-label={`View ${member.name}'s profile`}
      className={cn(
        'block overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-400',
        className,
        isDimmed ? 'opacity-60' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
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
    </Link>
  );
}

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: Founder;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const linkedin = member.social?.linkedin;
  const hasLinkedin = !!linkedin;

  return (
    <Link
      href={`/founders/${member.slug}`}
      className={cn(
        'block cursor-pointer transition-opacity duration-300 no-underline',
        isDimmed ? 'opacity-50' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social */}
      <div className="flex items-start gap-2.5">
        <span
          className={cn(
            'h-3 mt-0.5 rounded-[5px] flex-shrink-0 transition-all duration-300 bg-[#C02B7D]',
            isActive ? 'w-5' : 'w-4 opacity-25',
          )}
        />
        <span
          className={cn(
            'text-[17px] md:text-[13px] lg:text-[20px] font-semibold leading-tight tracking-tight transition-colors duration-300 font-poppins',
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
            {linkedin && (
              <span
                role="link"
                tabIndex={0}
                aria-label={`${member.name} on LinkedIn`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(linkedin, '_blank', 'noopener,noreferrer');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(linkedin, '_blank', 'noopener,noreferrer');
                  }
                }}
                className="p-1 rounded text-gray-500 hover:text-[#C02B7D] hover:bg-[#C02B7D]/10 transition-all duration-150 hover:scale-110 cursor-pointer inline-flex"
                title="LinkedIn"
              >
                <FaLinkedinIn size={10} />
              </span>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-1.5 pl-[27px] text-[9px] md:text-[8px] lg:text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500 font-poppins">
        {member.role}
      </p>
    </Link>
  );
}
