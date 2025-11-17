import React, { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import Lenis from 'lenis';

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollToElement: (target: string | Element, options?: any) => void;
  scrollToTop: (options?: any) => void;
  scrollToSection: (sectionId: string, options?: any) => void;
  updateHash: (hash: string) => void;
  clearHash: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | undefined>(undefined);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const sectionsRef = useRef<string[]>(['hero', 'difference', 'tech-expertise', 'testimonials', 'promise', 'services']);
  const isScrollingRef = useRef(false);
  const lastHashRef = useRef<string>('');

  useEffect(() => {
    // Initialize Lenis with Framer-like settings
    const lenis = new Lenis({
      duration: 1.2, // Smooth duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for ultra-smooth feel
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Animation loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Hash management based on scroll position
    const updateHashBasedOnScroll = () => {
      if (isScrollingRef.current) return; // Don't update hash during programmatic scrolling
      
      const sections = sectionsRef.current;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if we're at the very top (within 150px)
      if (scrollY < 150) {
        const newHash = '';
        if (lastHashRef.current !== newHash) {
          lastHashRef.current = newHash;
          window.history.replaceState(null, '', window.location.pathname);
        }
        return;
      }
      
      // Find the section currently in view
      let currentSection = '';
      let maxVisibility = 0;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(0, -elementTop);
          const visibleBottom = Math.min(windowHeight, windowHeight - Math.max(0, elementBottom - windowHeight));
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibility = visibleHeight / rect.height;
          
          // Use the section with the highest visibility percentage
          if (visibility > maxVisibility && visibility > 0.3) { // At least 30% visible
            maxVisibility = visibility;
            currentSection = sectionId;
          }
        }
      }
      
      // Only update hash if we found a section and it's different from the last one
      if (currentSection && lastHashRef.current !== currentSection) {
        lastHashRef.current = currentSection;
        window.history.replaceState(null, '', `#${currentSection}`);
      }
    };

    // More aggressive throttling to prevent flickering
    let scrollTimeout: NodeJS.Timeout;
    let isThrottled = false;
    const handleScroll = () => {
      if (isThrottled) return;
      
      isThrottled = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        updateHashBasedOnScroll();
        isThrottled = false;
      }, 200); // Increased delay to reduce flickering
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Enhanced CSS for ultra-smooth scrolling
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: auto !important;
      }
      
      body {
        overflow-x: hidden;
      }
      
      .lenis.lenis-smooth {
        scroll-behavior: auto !important;
      }
      
      .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
      }
      
      .smooth-scroll-section {
        will-change: transform;
        transform: translateZ(0);
        backface-visibility: hidden;
      }
      
      .gpu-accelerated {
        transform: translate3d(0, 0, 0);
        will-change: transform;
        backface-visibility: hidden;
      }
      
      /* Ultra-smooth animations */
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }
      
      /* Optimize for 120fps displays */
      @media (min-resolution: 120dpi) {
        * {
          transform: translateZ(0);
        }
      }
    `;
    document.head.appendChild(style);

    // Handle anchor links with Lenis smooth scrolling
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault();
        const targetId = target.hash.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
          // Update hash immediately when clicking anchor
          window.history.replaceState(null, '', target.hash);
          
          // Set scrolling flag to prevent hash updates during scroll
          isScrollingRef.current = true;
          
          lenis.scrollTo(element, {
            offset: -80, // Account for fixed header
            duration: 1.5,
            easing: (t: number) => 1 - Math.pow(1 - t, 4), // easeOutQuart for buttery smoothness
            onComplete: () => {
              isScrollingRef.current = false;
            }
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      lenis.destroy();
    };
  }, []);

  const scrollToElement = (target: string | Element, options: any = {}) => {
    if (!lenisRef.current) return;
    
    let element: Element | null;
    if (typeof target === 'string') {
      element = document.querySelector(target);
    } else {
      element = target;
    }

    if (element) {
      // Set scrolling flag to prevent hash updates during scroll
      isScrollingRef.current = true;
      
      lenisRef.current.scrollTo(element as HTMLElement, {
        offset: options.offset || -80,
        duration: options.duration || 1.5,
        easing: options.easing || ((t: number) => 1 - Math.pow(1 - t, 4)),
        onComplete: () => {
          isScrollingRef.current = false;
        },
        ...options
      });
    }
  };

  const scrollToTop = (options: any = {}) => {
    if (!lenisRef.current) return;
    
    // Clear hash when scrolling to top
    lastHashRef.current = '';
    window.history.replaceState(null, '', window.location.pathname);
    
    // Set scrolling flag to prevent hash updates during scroll
    isScrollingRef.current = true;
    
    lenisRef.current.scrollTo(0, {
      duration: options.duration || 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      onComplete: () => {
        isScrollingRef.current = false;
      },
      ...options
    });
  };

  const scrollToSection = (sectionId: string, options: any = {}) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Update hash immediately when navigating to section
      lastHashRef.current = sectionId;
      window.history.replaceState(null, '', `#${sectionId}`);
      scrollToElement(element as HTMLElement, options);
    }
  };

  const updateHash = (hash: string) => {
    lastHashRef.current = hash;
    window.history.replaceState(null, '', `#${hash}`);
  };

  const clearHash = () => {
    lastHashRef.current = '';
    window.history.replaceState(null, '', window.location.pathname);
  };

  const contextValue = {
    lenis: lenisRef.current,
    scrollToElement,
    scrollToTop,
    scrollToSection,
    updateHash,
    clearHash,
  };

  return (
    <SmoothScrollContext.Provider value={contextValue}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScrollContext = () => {
  const context = useContext(SmoothScrollContext);
  if (context === undefined) {
    throw new Error('useSmoothScrollContext must be used within a SmoothScrollProvider');
  }
  return context;
};
