import type { Metadata } from 'next';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Resources | Cyvera Digitals',
};

export default function BlogPage() {
  return (
    <section id="testimonials" className="smooth-scroll-section">
      <Testimonials />
    </section>
  );
}
