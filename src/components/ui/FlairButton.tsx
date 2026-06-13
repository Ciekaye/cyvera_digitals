'use client';

import { useRef, type ReactNode } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

/**
 * Outlined CTA button with the gsap.com "flair" hover effect: a gradient
 * circle grows from the cursor's entry point, trails the cursor while
 * hovering, and shrinks toward the exit point on leave.
 *
 * Ported from gsap.com's own Button implementation (header.js).
 * Styles live in globals.css under .btn-flair.
 */
export default function FlairButton({
  href,
  className = '',
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const flairRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const button = buttonRef.current;
      const flair = flairRef.current;
      if (!button || !flair || !contextSafe) return;

      const xSet = gsap.quickSetter(flair, 'xPercent');
      const ySet = gsap.quickSetter(flair, 'yPercent');

      const getXY = (e: MouseEvent) => {
        const { left, top, width, height } = button.getBoundingClientRect();
        const xTransformer = gsap.utils.pipe(
          gsap.utils.mapRange(0, width, 0, 100),
          gsap.utils.clamp(0, 100)
        );
        const yTransformer = gsap.utils.pipe(
          gsap.utils.mapRange(0, height, 0, 100),
          gsap.utils.clamp(0, 100)
        );
        return {
          x: xTransformer(e.clientX - left),
          y: yTransformer(e.clientY - top),
        };
      };

      const onEnter = contextSafe((e: MouseEvent) => {
        const { x, y } = getXY(e);
        xSet(x);
        ySet(y);
        gsap.to(flair, { scale: 1, duration: 0.4, ease: 'power2.out' });
      }) as (e: MouseEvent) => void;

      const onLeave = contextSafe((e: MouseEvent) => {
        const { x, y } = getXY(e);
        gsap.killTweensOf(flair);
        gsap.to(flair, {
          xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
          yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
          scale: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }) as (e: MouseEvent) => void;

      const onMove = contextSafe((e: MouseEvent) => {
        const { x, y } = getXY(e);
        gsap.to(flair, {
          xPercent: x,
          yPercent: y,
          duration: 0.4,
          ease: 'power2',
        });
      }) as (e: MouseEvent) => void;

      button.addEventListener('mouseenter', onEnter);
      button.addEventListener('mouseleave', onLeave);
      button.addEventListener('mousemove', onMove);

      return () => {
        button.removeEventListener('mouseenter', onEnter);
        button.removeEventListener('mouseleave', onLeave);
        button.removeEventListener('mousemove', onMove);
      };
    },
    { scope: buttonRef }
  );

  return (
    <Link ref={buttonRef} href={href} className={`btn-flair ${className}`}>
      <span ref={flairRef} className="btn-flair__bg" aria-hidden="true" />
      <span className="btn-flair__label">{children}</span>
    </Link>
  );
}
