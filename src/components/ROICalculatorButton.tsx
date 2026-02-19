'use client';

import React, { useState } from 'react';
import ROICalculator from './ROICalculator';

export default function ROICalculatorButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 font-semibold border"
        style={{
          background: 'var(--accent-cyan)',
          color: 'var(--background)',
          border: '2px solid var(--accent-cyan)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
          outline: '2px solid var(--background)',
          outlineOffset: '2px',
        }}
      >
        ₹ ROI Calculator
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" style={{background: 'rgba(0,0,0,0.40)'}} onClick={() => setOpen(false)}>
          <div
            className="rounded-t-lg sm:rounded-lg shadow-xl w-full sm:w-auto max-w-lg animate-slide-up"
            style={{
              background: 'var(--card-bg)',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b px-4 py-2" style={{borderColor: 'var(--border)'}}>
              <h3 className="font-semibold text-lg">ROI Calculator</h3>
              <button onClick={() => setOpen(false)} className="text-2xl" style={{color: 'var(--muted-foreground)'}}>&times;</button>
            </div>
            <ROICalculator />
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.3s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </>
  );
}
