'use client';

import React from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useCases } from '@/lib/use-cases';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  selectedUseCase: string;
  onUseCaseSelect: (useCaseId: string) => void;
}

export default function Sidebar({
  isOpen,
  onToggle,
  selectedUseCase,
  onUseCaseSelect,
}: SidebarProps) {
  const groupedUseCases = useCases.reduce(
    (acc, useCase) => {
      if (!acc[useCase.category]) {
        acc[useCase.category] = [];
      }
      acc[useCase.category].push(useCase);
      return acc;
    },
    {} as Record<string, typeof useCases>
  );

  const categoryNames: Record<string, string> = {
    security: 'Security',
    traffic: 'Traffic Management',
    safety: 'Safety',
    operations: 'Operations',
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`sidebar-bg transition-all duration-300 overflow-y-auto flex flex-col ${isOpen ? 'w-64' : 'w-20'}`}
        style={{ fontFamily: 'Inter, Arial, Helvetica, sans-serif', background: 'var(--sidebar-bg)', color: 'var(--foreground)' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 px-4 pt-6">
          <div style={{
            background: 'var(--logo-bg, #fff)',
            borderRadius: '8px',
            padding: '8px',
            border: '1px solid var(--border)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <img src="/vigilant-logo.png" alt="Vigilant Labs Logo" style={{ height: 40, width: 40, objectFit: 'contain', display: 'block', background: '#fff' }} onError={e => { e.currentTarget.src = '/vl%20logo.jpg'; }} />
          </div>
          <span className="text-xl font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>VigilantLabs</span>
        </div>

        {/* Use Cases */}
        <nav className="flex-1 p-4 space-y-6">
          {Object.entries(groupedUseCases).map(([category, items]) => (
            <div key={category}>
              {isOpen && (
                <h3 className="text-xs font-semibold uppercase tracking-wider mb-2 px-2 opacity-70" style={{ color: 'var(--foreground)' }}>
                  {categoryNames[category]}
                </h3>
              )}
              <div className="space-y-1">
                {items.map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => onUseCaseSelect(useCase.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium ${
                      selectedUseCase === useCase.id
                        ? 'sidebar-active'
                        : 'hover:sidebar-hover opacity-90'
                    }`}
                    style={selectedUseCase === useCase.id ? { background: 'var(--sidebar-active)', color: '#0B0D10' } : { color: 'var(--foreground)' }}
                    title={isOpen ? '' : useCase.name}
                  >
                    {isOpen && (
                      <span className="text-sm font-medium truncate" style={{ color: 'inherit' }}>
                        {useCase.name}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="p-4 border-t border-gray-700 hover:bg-gray-800 transition-colors"
          style={{ color: 'var(--foreground)' }}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </aside>
    </>
  );
}
