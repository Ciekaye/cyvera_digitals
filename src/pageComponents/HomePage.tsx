import Hero from '../components/Hero';
import Positioning from '../components/Positioning';
import ServicesOverview from '../components/ServicesOverview';
import WhyUsPreview from '../components/WhyUsPreview';
import HowWeWork from '../components/HowWeWork';
import PortfolioPreview from '../components/PortfolioPreview';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <section id="hero" className="smooth-scroll-section">
        <Hero />
      </section>
      <section id="positioning" className="smooth-scroll-section">
        <Positioning />
      </section>
      <section id="services-overview" className="smooth-scroll-section">
        <ServicesOverview />
      </section>
      <section id="why-us-preview" className="smooth-scroll-section">
        <WhyUsPreview />
      </section>
      <section id="how-we-work" className="smooth-scroll-section">
        <HowWeWork />
      </section>
      <section id="portfolio-preview" className="smooth-scroll-section">
        <PortfolioPreview />
      </section>
      <section id="final-cta" className="smooth-scroll-section">
        <FinalCTA />
      </section>
    </>
  );
}
