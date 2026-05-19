import type { Metadata } from 'next';
import PortfolioPage from '@/pageComponents/PortfolioPage';

export const metadata: Metadata = {
  title: 'Our Work | Cyvera Digitals',
};

export default function Page() {
  return <PortfolioPage />;
}
