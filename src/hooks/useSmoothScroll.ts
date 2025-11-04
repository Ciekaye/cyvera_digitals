import { useCallback, useRef } from 'react';

interface SmoothScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
  offset?: number;
}

// Easing functions for smooth animations
const easingFunctions = {
  easeInOutCubic: (t: number): number => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeOutQuart: (t: number): number => 1 - (--t) * t * t * t,
  easeInOutQuint: (t: number): number => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t,
};

export const useSmoothScroll = () => {
  const animationRef = useRef<number | null>(null);

  const scrollToElement = useCallback((
    target: string | Element,
    options: SmoothScrollOptions = {}
  ) => {
    const {
      duration = 1000,
      easing = easingFunctions.easeInOutCubic,
      offset = 0
    } = options;

    let element: Element | null;
    
    if (typeof target === 'string') {
      element = document.querySelector(target);
    } else {
      element = target;
    }

    if (!element) {
      console.warn('Target element not found');
      return;
    }

    // Cancel any ongoing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Apply easing function
      const easedProgress = easing(progress);
      
      // Use transform for GPU acceleration when possible
      const currentPosition = startPosition + (distance * easedProgress);
      
      // Smooth scroll using requestAnimationFrame for 60fps
      window.scrollTo({
        top: currentPosition,
        behavior: 'auto' // We handle the smoothness ourselves
      });

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateScroll);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animateScroll);
  }, []);

  const scrollToTop = useCallback((options?: SmoothScrollOptions) => {
    scrollToElement(document.body, { ...options, offset: 0 });
  }, [scrollToElement]);

  const scrollToSection = useCallback((sectionId: string, options?: SmoothScrollOptions) => {
    scrollToElement(`#${sectionId}`, options);
  }, [scrollToElement]);

  return {
    scrollToElement,
    scrollToTop,
    scrollToSection,
  };
};
