'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Briefcase, Globe, Mail } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';
import GridBackground from '@/components/GridBackground';
import FinalCTA from '@/components/FinalCTA';
import { Founder } from '@/data/founders';

export default function FounderPage({
  founder,
  others,
}: {
  founder: Founder;
  others: Founder[];
}) {
  return (
    <div className="bg-modern-primary min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-8 md:pt-12 pb-8 md:pb-16 overflow-hidden">
        <GridBackground />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-5xl">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-secondary-purple transition-colors no-underline mb-6 md:mb-8"
          >
            <ArrowLeft size={16} /> Back to About
          </Link>

          <div className="grid md:grid-cols-5 gap-10 lg:gap-14">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2 md:min-h-[480px]"
            >
              <div className="relative aspect-[4/5] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  style={{ objectPosition: founder.heroImagePosition ?? '50% 20%' }}
                />
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:col-span-3 font-poppins"
            >
              <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-secondary-purple mb-3">
                {founder.role}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                {founder.name}
              </h1>

              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                {founder.bio}
              </p>

              {founder.longBio?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-gray-700 leading-relaxed text-base md:text-lg mb-6"
                >
                  {paragraph}
                </p>
              ))}

              {/* Skills */}
              {founder.skills && founder.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {founder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 text-gray-700 text-xs font-medium rounded-full px-3 py-1.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Quote */}
              {founder.quote && (
                <blockquote className="border-l-2 border-secondary-purple pl-4 italic text-gray-500 leading-relaxed mb-8">
                  &ldquo;{founder.quote}&rdquo;
                </blockquote>
              )}

              {/* Social */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {founder.social?.linkedin && (
                  <SocialLink
                    href={founder.social.linkedin}
                    icon={<FaLinkedinIn size={14} />}
                    label="LinkedIn"
                  />
                )}
                {founder.social?.github && (
                  <SocialLink
                    href={founder.social.github}
                    icon={<FaGithub size={14} />}
                    label="GitHub"
                  />
                )}
                {founder.social?.youtube && (
                  <SocialLink
                    href={founder.social.youtube}
                    icon={<FaYoutube size={14} />}
                    label="YouTube"
                  />
                )}
                {founder.social?.website && (
                  <SocialLink
                    href={founder.social.website}
                    icon={<Globe size={14} />}
                    label="Website"
                  />
                )}
                {founder.social?.email && (
                  <SocialLink
                    href={`mailto:${founder.social.email}`}
                    icon={<Mail size={14} />}
                    label={founder.social.email}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      {founder.experience && founder.experience.length > 0 && (
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl font-poppins">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-10">
              Experience
            </h2>
            <div className="space-y-8">
              {founder.experience.map((item) => (
                <div
                  key={`${item.role}-${item.company}`}
                  className="flex items-start gap-4 md:gap-6"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#C02B7D]/10 flex items-center justify-center text-secondary-purple mt-1">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                      {item.role}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {item.company} · {item.period}
                    </p>
                    {item.description && (
                      <p className="text-gray-700 leading-relaxed mt-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Other founders ── */}
      {others.length > 0 && (
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl font-poppins">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
              Meet the other founders
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {others.map((other) => (
                <Link
                  key={other.id}
                  href={`/founders/${other.slug}`}
                  className="group flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow no-underline"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={other.image}
                      alt={other.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                      style={{ objectPosition: other.heroImagePosition ?? '50% 20%' }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 leading-tight group-hover:text-secondary-purple transition-colors">
                      {other.name}
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500 mt-1">
                      {other.role}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-gray-300 group-hover:text-secondary-purple group-hover:translate-x-0.5 transition-all flex-shrink-0"
                  />
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

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-secondary-purple transition-colors no-underline"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
