'use client';

import React from 'react';
import { useCases } from '@/lib/use-cases';
import MetricCard from './MetricCard';
import AIInsights from './AIInsights';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { useTheme } from './ThemeContext';

interface DashboardContentProps {
  selectedUseCase: string;
  dateRange: {
    startDate: Date;
    endDate: Date;
  };
}

// Generate mock data
const generateChartData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    name: `Point ${i + 1}`,
    value: Math.floor(Math.random() * 1000) + 100,
    secondary: Math.floor(Math.random() * 500) + 50,
  }));
};

const chartData = generateChartData(7);
const pieData = [
  { name: 'High Risk', value: 400 },
  { name: 'Medium Risk', value: 300 },
  { name: 'Low Risk', value: 300 },
];
const colors = ['#dc2626', '#f59e0b', '#10b981'];

const areaData = [
  { name: 'Jan', uv: 400, pv: 240, amt: 240 },
  { name: 'Feb', uv: 300, pv: 139, amt: 221 },
  { name: 'Mar', uv: 200, pv: 980, amt: 229 },
  { name: 'Apr', uv: 278, pv: 390, amt: 200 },
  { name: 'May', uv: 189, pv: 480, amt: 218 },
  { name: 'Jun', uv: 239, pv: 380, amt: 250 },
  { name: 'Jul', uv: 349, pv: 430, amt: 210 },
];

const radarData = [
  { subject: 'Detection', A: 120, B: 110, fullMark: 150 },
  { subject: 'Response', A: 98, B: 130, fullMark: 150 },
  { subject: 'Accuracy', A: 86, B: 130, fullMark: 150 },
  { subject: 'Coverage', A: 99, B: 100, fullMark: 150 },
  { subject: 'Speed', A: 85, B: 90, fullMark: 150 },
  { subject: 'Reliability', A: 65, B: 85, fullMark: 150 },
];

export default function DashboardContent({
  selectedUseCase,
  dateRange,
}: DashboardContentProps) {
  const useCase = useCases.find((uc) => uc.id === selectedUseCase);
  const { theme } = useTheme();

  // Get theme colors from CSS variables
  const getVar = (v: string, fallback: string) => typeof window !== 'undefined' ? getComputedStyle(document.documentElement).getPropertyValue(v) || fallback : fallback;
  const chartColors = {
    cyan: getVar('--accent-cyan', '#06b6d4'),
    green: getVar('--accent-green', '#22c55e'),
    red: getVar('--accent-red', '#ef4444'),
    foreground: getVar('--foreground', '#111'),
    cardBg: getVar('--card-bg', '#fff'),
  };

  const mockInsights = [
    {
      type: 'AI Recommendation',
      message: `Peak activity detected. Consider adjusting resources for optimal coverage.`,
      severity: 'info' as const,
    },
    {
      type: 'Alert',
      message: `Critical threshold reached. Immediate action may be required.`,
      severity: 'warning' as const,
    },
  ];

  return (
    <div className="p-6 h-full overflow-auto" style={{ color: 'var(--foreground)', background: 'var(--background)' }}>
      {useCase && (
        <div className="mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-3" style={{ color: 'var(--foreground)' }}>
            {useCase.name}
          </h2>
          <p className="mt-2" style={{ color: 'var(--foreground)' }}>{useCase.description}</p>
        </div>
      )}

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          title="Total Events"
          value={Math.floor(Math.random() * 5000) + 1000}
          unit="events"
          change={Math.floor(Math.random() * 40) - 20}
          icon={null}
          bgColor="bg-blue-50"
        />
        <MetricCard
          title="Alerts"
          value={Math.floor(Math.random() * 200) + 50}
          unit="alerts"
          change={Math.floor(Math.random() * 40) - 20}
          icon={null}
          bgColor="bg-red-50"
        />
        <MetricCard
          title="Avg Response Time"
          value={Math.floor(Math.random() * 60) + 10}
          unit="seconds"
          change={Math.floor(Math.random() * 40) - 20}
          icon={null}
          bgColor="bg-yellow-50"
        />
        <MetricCard
          title="System Health"
          value={Math.floor(Math.random() * 15) + 85}
          unit="%"
          change={Math.floor(Math.random() * 40) - 20}
          icon={null}
          bgColor="bg-green-50"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Line Chart */}
        <div className="rounded-lg shadow-sm border p-6" style={{background: 'var(--card-bg)', borderColor: 'var(--border)'}}>
          <h3 className="text-lg font-semibold mb-4" style={{color: 'var(--foreground)'}}>Trend Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke={chartColors.foreground} />
              <YAxis stroke={chartColors.foreground} />
              <Tooltip contentStyle={{ background: chartColors.cardBg, color: chartColors.foreground, border: `1px solid ${chartColors.cyan}` }} />
              <Legend />
              <Line type="monotone" dataKey="value" stroke={chartColors.cyan} strokeWidth={2} />
              <Line type="monotone" dataKey="secondary" stroke={chartColors.green} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="rounded-lg shadow-sm border p-6" style={{background: 'var(--card-bg)', borderColor: 'var(--border)'}}>
          <h3 className="text-lg font-semibold mb-4" style={{color: 'var(--foreground)'}}>Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke={chartColors.foreground} />
              <YAxis stroke={chartColors.foreground} />
              <Tooltip contentStyle={{ background: chartColors.cardBg, color: chartColors.foreground, border: `1px solid ${chartColors.cyan}` }} />
              <Legend />
              <Bar dataKey="value" fill={chartColors.cyan} />
              <Bar dataKey="secondary" fill={chartColors.green} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="rounded-lg shadow-sm border p-6" style={{background: 'var(--card-bg)', borderColor: 'var(--border)'}}>
          <h3 className="text-lg font-semibold mb-4" style={{color: 'var(--foreground)'}}>Risk Assessment</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div className="rounded-lg shadow-sm border p-6" style={{background: 'var(--card-bg)', borderColor: 'var(--border)'}}>
          <h3 className="text-lg font-semibold mb-4" style={{color: 'var(--foreground)'}}>Performance Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke={chartColors.foreground} />
              <YAxis stroke={chartColors.foreground} />
              <Tooltip contentStyle={{ background: chartColors.cardBg, color: chartColors.foreground, border: `1px solid ${chartColors.cyan}` }} />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Radar Chart */}
        <div className="rounded-lg shadow-sm border p-6" style={{background: 'var(--card-bg)', borderColor: 'var(--border)'}}>
          <h3 className="text-lg font-semibold mb-4" style={{color: 'var(--foreground)'}}>System Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Table */}
        <div className="rounded-lg shadow-sm border p-6 col-span-1 lg:col-span-2" style={{background: 'var(--card-bg)', borderColor: 'var(--border)'}}>
          <h3 className="text-lg font-semibold mb-4" style={{color: 'var(--foreground)'}}>Recent Events</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b" style={{borderColor: 'var(--border)'}}>
                <tr>
                  <th className="text-left py-2 font-semibold" style={{color: 'var(--foreground)'}}>Event Type</th>
                  <th className="text-left py-2 font-semibold" style={{color: 'var(--foreground)'}}>Count</th>
                  <th className="text-left py-2 font-semibold" style={{color: 'var(--foreground)'}}>Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50" style={{color: 'var(--foreground)'}}>
                    <td className="py-3" style={{color: 'var(--foreground)'}}>Event {i}</td>
                    <td className="py-3" style={{color: 'var(--foreground)'}}>{Math.floor(Math.random() * 100) + 10}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        Math.random() > 0.5
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`} style={{color: 'var(--foreground)'}}>
                        {Math.random() > 0.5 ? 'Active' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <AIInsights insights={mockInsights} />
    </div>
  );
}
