'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { Providers } from '../providers';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <SmoothScrollProvider>
        <div
          className="min-h-screen gpu-accelerated"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        >
          <Header />
          <main className="smooth-scroll-section">{children}</main>
          <Footer />
        </div>
      </SmoothScrollProvider>
    </Providers>
  );
}
