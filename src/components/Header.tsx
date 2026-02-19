'use client';

import React from 'react';
import { Menu, Calendar, Bell, User, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface DateRange {
  startDate: Date;
  endDate: Date;
}

interface HeaderProps {
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
}

export default function Header({
  sidebarOpen,
  onSidebarToggle,
  dateRange,
  onDateRangeChange,
}: HeaderProps) {
  const handleDateChange = (type: 'start' | 'end', value: string) => {
    const newDate = new Date(value);
    if (type === 'start') {
      onDateRangeChange({ ...dateRange, startDate: newDate });
    } else {
      onDateRangeChange({ ...dateRange, endDate: newDate });
    }
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-gray-200 px-6 py-4" style={{background: 'var(--card-bg)'}}>
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onSidebarToggle}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden"
            style={{ color: 'var(--foreground)' }}
          >
            <Menu className="w-5 h-5" style={{ color: 'var(--foreground)' }} />
          </button>
          <h1 className="text-2xl font-bold" style={{color: 'var(--foreground)'}}>VigilantLabs</h1>
        </div>

        {/* Center - Date Range Filter */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{background: 'var(--neutral-1)'}}>
            <Calendar className="w-4 h-4" style={{color: 'var(--foreground)'}} />
            <input
              type="date"
              value={formatDate(dateRange.startDate)}
              onChange={(e) => handleDateChange('start', e.target.value)}
              className="bg-transparent text-sm focus:outline-none"
              style={{color: 'var(--foreground)'}}
            />
            <span style={{color: 'var(--foreground)'}}>→</span>
            <input
              type="date"
              value={formatDate(dateRange.endDate)}
              onChange={(e) => handleDateChange('end', e.target.value)}
              className="bg-transparent text-sm focus:outline-none"
              style={{color: 'var(--foreground)'}}
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative" style={{ color: 'var(--foreground)' }}>
            <Bell className="w-5 h-5" style={{color: 'var(--foreground)'}} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" style={{ color: 'var(--foreground)' }}>
            <User className="w-5 h-5" style={{color: 'var(--foreground)'}} />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors border border-gray-700 hover:bg-gray-800"
            aria-label="Toggle theme"
            style={{background: 'var(--neutral-1)'}}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" style={{color: 'var(--accent-cyan)'}} /> : <Moon className="w-5 h-5" style={{color: 'var(--accent-cyan)'}} />}
          </button>
        </div>
      </div>
    </header>
  );
}
