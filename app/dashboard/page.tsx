'use client';

import DashboardPage from '@/pageComponents/DashboardPage';
import { Providers } from '../providers';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function Page() {
  return (
    <Providers>
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    </Providers>
  );
}
