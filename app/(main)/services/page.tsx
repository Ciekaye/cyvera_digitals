import type { Metadata } from 'next';
import ServicesPage from '@/pageComponents/ServicesPage';

export const metadata: Metadata = {
  title: 'Web Design & Development Services | Cyvera Digitals',
};

export default function Page() {
  return <ServicesPage />;
}
