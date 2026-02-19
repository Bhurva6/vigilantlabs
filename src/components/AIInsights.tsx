'use client';

import React from 'react';
import { AlertCircle, Info, AlertTriangle } from 'lucide-react';

interface Insight {
  type: string;
  message: string;
  severity: 'info' | 'warning' | 'critical';
}

interface AIInsightsProps {
  insights: Insight[];
}

export default function AIInsights({ insights }: AIInsightsProps) {
  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info':
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'info':
      default:
        return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-3 mt-8">
      {insights.map((insight, idx) => (
        <div
          key={idx}
          className="rounded-lg p-4 flex items-center gap-3 shadow-sm"
          style={{
            background: 'var(--card-bg)',
            color: 'var(--foreground)',
            border: '1px solid var(--border)',
          }}
        >
          <span
            className={`inline-block w-2 h-2 rounded-full ${
              insight.severity === 'warning'
                ? 'bg-yellow-400'
                : insight.severity === 'info'
                ? 'bg-cyan-400'
                : 'bg-green-400'
            }`}
          ></span>
          <div>
            <div className="font-semibold" style={{ color: 'var(--foreground)' }}>
              {insight.type}
            </div>
            <div className="text-sm" style={{ color: 'var(--foreground)' }}>
              {insight.message}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
