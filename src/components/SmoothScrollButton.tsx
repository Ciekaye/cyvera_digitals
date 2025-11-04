import React from 'react';
import { useSmoothScrollContext } from './SmoothScrollProvider';

interface SmoothScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
  duration?: number;
  onClick?: () => void;
}

export const SmoothScrollButton: React.FC<SmoothScrollButtonProps> = ({
  targetId,
  children,
  className = '',
  offset = 80,
  duration = 800,
  onClick
}) => {
  const { scrollToSection } = useSmoothScrollContext();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(targetId, { offset, duration });
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`smooth-transition hover:shadow-lg transform hover:scale-105 ${className}`}
      style={{
        background: 'var(--gradient-secondary)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 24px',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(107, 70, 193, 0.2)'
      }}
      type="button"
    >
      {children}
    </button>
  );
};

interface SmoothScrollLinkProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
  duration?: number;
  onClick?: () => void;
}

export const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  targetId,
  children,
  className = '',
  offset = 80,
  duration = 800,
  onClick
}) => {
  const { scrollToSection } = useSmoothScrollContext();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(targetId, { offset, duration });
    onClick?.();
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
};
