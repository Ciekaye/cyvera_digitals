'use client';

import Header from './Header';
import Footer from './Footer';
import { SmoothScrollProvider } from './SmoothScrollProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
