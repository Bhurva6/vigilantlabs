'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';

export default function Home() {
  const [selectedUseCase, setSelectedUseCase] = useState('crowd-estimation');

  return (
    <DashboardLayout
      selectedUseCase={selectedUseCase}
      onUseCaseChange={setSelectedUseCase}
    />
  );
}
