import type { Metadata } from 'next';
import PricingPage from '@/pageComponents/PricingPage';

export const metadata: Metadata = {
  title: 'Pricing Plans | Cyvera Digitals',
};

export default function Page() {
  return <PricingPage />;
}
