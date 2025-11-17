import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Difference from './components/Difference';
import TechExpertise from './components/TechExpertise';
import Testimonials from './components/Testimonials';
import Promise from './components/Promise';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import LogoLoader from './components/LogoLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <LogoLoader />;
  }

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen gpu-accelerated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Header />
        <main className="smooth-scroll-section">
          <section id="hero" className="smooth-scroll-section">
            <Hero />
          </section>
          <section id="difference" className="smooth-scroll-section">
            <Difference />
          </section>
          <section id="tech-expertise" className="smooth-scroll-section">
            <TechExpertise />
          </section>
          <section id="testimonials" className="smooth-scroll-section">
            <Testimonials />
          </section>
          <section id="promise" className="smooth-scroll-section">
            <Promise />
          </section>
          <section id="services" className="smooth-scroll-section">
            <Services />
          </section>
          <section id="contact" className="smooth-scroll-section">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
