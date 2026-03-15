'use client';

import Header from './Header';
import Footer from './Footer';
import { SmoothScrollProvider } from './SmoothScrollProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen gpu-accelerated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Header />
        <main className="smooth-scroll-section">
          {children}
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
