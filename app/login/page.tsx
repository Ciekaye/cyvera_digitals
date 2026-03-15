'use client';

import LoginPage from '@/pageComponents/LoginPage';
import { Providers } from '../providers';

export default function Page() {
  return (
    <Providers>
      <LoginPage />
    </Providers>
  );
}
