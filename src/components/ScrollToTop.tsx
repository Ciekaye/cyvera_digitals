import React, { useState, useEffect } from 'react';
import { useSmoothScrollContext } from './SmoothScrollProvider';

interface ScrollToTopProps {
  showAfter?: number;
  className?: string;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({
  showAfter = 300,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useSmoothScrollContext();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter]);

  const handleClick = () => {
    scrollToTop({ duration: 1.2 });
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed bottom-6 right-6 z-[9999] 
        w-14 h-14 
        text-white 
        rounded-full 
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        transform hover:scale-110
        gpu-accelerated
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        ${className}
      `}
      style={{
        background: 'var(--gradient-primary)',
        boxShadow: '0 10px 25px rgba(76, 29, 149, 0.3)',
        zIndex: 9999
      }}
      aria-label="Scroll to top"
      type="button"
    >
      <svg
        className="w-6 h-6 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};
