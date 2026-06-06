import type { Metadata } from 'next';
import AboutPage from '@/pageComponents/AboutPage';

export const metadata: Metadata = {
  title: 'About Us | Cyvera Digitals',
};

export default function Page() {
  return <AboutPage />;
}
