import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Cyvera Digitals',
};

export default function ContactPage() {
  return (
    <section id="contact" className="smooth-scroll-section">
      <Contact />
    </section>
  );
}
