import type { Metadata } from 'next';
import WhyUsPage from '@/pageComponents/WhyUsPage';

export const metadata: Metadata = {
  title: 'Why Choose Cyvera Digitals',
};

export default function Page() {
  return <WhyUsPage />;
}
