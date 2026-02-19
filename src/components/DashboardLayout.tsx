'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardContent from './DashboardContent';
import ROICalculatorButton from './ROICalculatorButton';

interface DashboardLayoutProps {
  onUseCaseChange: (useCaseId: string) => void;
  selectedUseCase: string;
}

export default function DashboardLayout({
  onUseCaseChange,
  selectedUseCase,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    endDate: new Date(),
  });

  return (
    <div className="flex h-screen" style={{ background: 'var(--background)' }}>
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        selectedUseCase={selectedUseCase}
        onUseCaseSelect={onUseCaseChange}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          sidebarOpen={sidebarOpen}
          onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />

        <main className="flex-1 overflow-auto">
          <DashboardContent
            selectedUseCase={selectedUseCase}
            dateRange={dateRange}
          />
        </main>
      </div>

      {/* ROI Calculator Button - Bottom Left */}
      <ROICalculatorButton />
    </div>
  );
}
