import React, { useState } from 'react';

interface ROIInputs {
  helmetViolations: number;
  thefts: number;
  queueOverflows: number;
  costPerHelmetViolation: number;
  costPerTheft: number;
  costPerQueueOverflow: number;
}

const defaultInputs: ROIInputs = {
  helmetViolations: 5,
  thefts: 2,
  queueOverflows: 3,
  costPerHelmetViolation: 10000, // in rupees
  costPerTheft: 50000, // in rupees
  costPerQueueOverflow: 20000, // in rupees
};

function formatINR(num: number): string {
  if (num >= 10000000) {
    return (num / 10000000).toFixed(2) + ' Cr';
  } else if (num >= 100000) {
    return (num / 100000).toFixed(2) + ' Lakh';
  } else {
    return num.toLocaleString('en-IN');
  }
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>(defaultInputs);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const totalSavings =
    inputs.helmetViolations * inputs.costPerHelmetViolation +
    inputs.thefts * inputs.costPerTheft +
    inputs.queueOverflows * inputs.costPerQueueOverflow;

  return (
    <div className="p-6 w-full max-w-md mx-auto" style={{background: 'var(--card-bg)', color: 'var(--foreground)'}}>
      <h2 className="text-xl font-bold mb-4">ROI Calculator</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Helmet Violations Caught/Month</label>
          <input type="number" name="helmetViolations" value={inputs.helmetViolations} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" min={0} style={{background: 'var(--input-bg)', color: 'var(--foreground)', borderColor: 'var(--border)'}} />
        </div>
        <div>
          <label className="block text-sm font-medium">Cost per Helmet Violation (₹)</label>
          <input type="number" name="costPerHelmetViolation" value={inputs.costPerHelmetViolation} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" min={0} style={{background: 'var(--input-bg)', color: 'var(--foreground)', borderColor: 'var(--border)'}} />
        </div>
        <div>
          <label className="block text-sm font-medium">Thefts Caught/Month</label>
          <input type="number" name="thefts" value={inputs.thefts} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" min={0} style={{background: 'var(--input-bg)', color: 'var(--foreground)', borderColor: 'var(--border)'}} />
        </div>
        <div>
          <label className="block text-sm font-medium">Cost per Theft (₹)</label>
          <input type="number" name="costPerTheft" value={inputs.costPerTheft} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" min={0} style={{background: 'var(--input-bg)', color: 'var(--foreground)', borderColor: 'var(--border)'}} />
        </div>
        <div>
          <label className="block text-sm font-medium">Queue Overflows Caught/Month</label>
          <input type="number" name="queueOverflows" value={inputs.queueOverflows} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" min={0} style={{background: 'var(--input-bg)', color: 'var(--foreground)', borderColor: 'var(--border)'}} />
        </div>
        <div>
          <label className="block text-sm font-medium">Cost per Queue Overflow (₹)</label>
          <input type="number" name="costPerQueueOverflow" value={inputs.costPerQueueOverflow} onChange={handleChange} className="mt-1 w-full border rounded px-2 py-1" min={0} style={{background: 'var(--input-bg)', color: 'var(--foreground)', borderColor: 'var(--border)'}} />
        </div>
      </form>
      <div className="mt-6 p-4 rounded font-semibold text-lg" style={{background: 'var(--accent-green)', color: 'var(--background)'}}>
        Estimated Monthly Savings: <span className="font-bold">₹ {formatINR(totalSavings)}</span>
      </div>
      <p className="mt-2 text-xs" style={{color: 'var(--muted-foreground)'}}>All values are in rupees. Large numbers are shown in lakhs/crores for clarity.</p>
    </div>
  );
}
