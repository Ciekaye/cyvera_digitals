import type { Metadata } from 'next';
import TechExpertise from '@/components/TechExpertise';

export const metadata: Metadata = {
  title: 'Our Work | Cyvera Digitals',
};

export default function PortfolioPage() {
  return (
    <section id="tech-expertise" className="smooth-scroll-section">
      <TechExpertise />
    </section>
  );
}
