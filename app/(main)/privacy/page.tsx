import type { Metadata } from 'next';
import LegalPage from '@/pageComponents/LegalPage';
import { privacy } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cyvera Digitals',
  description:
    'How Cyvera Digitals collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy' },
};

export default function Page() {
  return <LegalPage doc={privacy} />;
}
