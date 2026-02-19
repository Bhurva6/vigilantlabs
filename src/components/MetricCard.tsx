'use client';

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  change?: number;
  icon?: React.ReactNode;
  color?: string;
  bgColor?: string;
}

export default function MetricCard({
  title,
  value,
  unit,
  change,
  icon,
  color = 'bg-blue-500',
  bgColor = 'bg-blue-50',
}: MetricCardProps) {
  const isPositive = change ? change >= 0 : false;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-black text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-black mt-2">
            {value}
            {unit && <span className="text-lg text-black ml-2">{unit}</span>}
          </p>
        </div>
      </div>

      {change !== undefined && (
        <div className="flex items-center gap-1">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-green-600" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-600" />
          )}
          <span
            className={isPositive ? 'text-green-600 text-sm font-medium' : 'text-red-600 text-sm font-medium'}
          >
            {Math.abs(change)}% vs last period
          </span>
        </div>
      )}
    </div>
  );
}
