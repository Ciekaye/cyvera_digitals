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
      
      // Check if we're at the very top (within 100px)
      if (scrollY < 100) {
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname);
        }
        return;
      }
      
      // Find the section currently in view
      let currentSection = '';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Check if section is in the middle of the viewport
          if (scrollY + windowHeight / 2 >= elementTop && scrollY + windowHeight / 2 <= elementBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      // Update hash if we found a section and it's different from current hash
      if (currentSection && window.location.hash !== `#${currentSection}`) {
        window.history.replaceState(null, '', `#${currentSection}`);
      }
    };

    // Throttled scroll handler for hash updates
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateHashBasedOnScroll, 100);
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
      window.history.replaceState(null, '', `#${sectionId}`);
      scrollToElement(element as HTMLElement, options);
    }
  };

  const updateHash = (hash: string) => {
    window.history.replaceState(null, '', `#${hash}`);
  };

  const clearHash = () => {
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
