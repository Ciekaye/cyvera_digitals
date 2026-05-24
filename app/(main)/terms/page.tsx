import type { Metadata } from 'next';
import LegalPage from '@/pageComponents/LegalPage';
import { terms } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Cyvera Digitals',
  description:
    'The terms and conditions governing the use of the Cyvera Digitals website and services.',
  alternates: { canonical: '/terms' },
};

export default function Page() {
  return <LegalPage doc={terms} />;
}
