'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function InteractiveCostCalculator({ type }: { type: string }) {
  const [devCount, setDevCount] = useState(3);
  const [seniority, setSeniority] = useState<'mid' | 'senior' | 'lead'>('senior');
  const [durationMonths, setDurationMonths] = useState(6);

  const rates = {
    mid: 75000,
    senior: 105000,
    lead: 145000
  };

  const monthlyTotal = devCount * rates[seniority];
  const grandTotal = monthlyTotal * durationMonths;

  // Comparison with recruitment fees
  const permanentAgencyFees = devCount * (rates[seniority] * 12 * 0.20);
  const totalAgileSavings = permanentAgencyFees;

  return (
    <div className="bg-[#080808] border border-gray-800 p-8 space-y-8">
      <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
        <div className="w-8 h-8 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
          <Calculator size={18} />
        </div>
        <div>
          <h3 className="text-xl font-light text-white">Interactive Budget Estimator</h3>
          <p className="text-xs font-mono text-gray-400">South African Software Engineering Benchmarks</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Input 1: Developer Headcount */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-gray-300 uppercase tracking-widest block">
            Developer Headcount: <span className="text-accent font-bold">{devCount} Engineers</span>
          </label>
          <input 
            type="range" 
            min={1} 
            max={15} 
            value={devCount} 
            onChange={(e) => setDevCount(parseInt(e.target.value))}
            className="w-full accent-accent bg-gray-800 h-2 rounded cursor-pointer"
          />
        </div>

        {/* Input 2: Seniority Level */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-gray-300 uppercase tracking-widest block">
            Seniority Tier
          </label>
          <select 
            value={seniority}
            onChange={(e) => setSeniority(e.target.value as any)}
            className="w-full bg-black border border-gray-800 p-2.5 text-xs font-mono text-white focus:border-accent outline-none"
          >
            <option value="mid">Mid-Level Engineer (3-5 Yrs)</option>
            <option value="senior">Senior Full-Stack / Backend (6-10 Yrs)</option>
            <option value="lead">Principal Architect / Tech Lead (10+ Yrs)</option>
          </select>
        </div>

        {/* Input 3: Engagement Duration */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-gray-300 uppercase tracking-widest block">
            Duration: <span className="text-accent font-bold">{durationMonths} Months</span>
          </label>
          <input 
            type="range" 
            min={3} 
            max={24} 
            value={durationMonths} 
            onChange={(e) => setDurationMonths(parseInt(e.target.value))}
            className="w-full accent-accent bg-gray-800 h-2 rounded cursor-pointer"
          />
        </div>
      </div>

      {/* Output Display Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-800">
        <div className="p-6 bg-black border border-gray-800 space-y-1">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Monthly Team Retainer</span>
          <div className="text-2xl font-mono font-bold text-white">
            R {monthlyTotal.toLocaleString()} <span className="text-xs font-normal text-gray-500">/ mo</span>
          </div>
        </div>

        <div className="p-6 bg-black border border-accent/40 space-y-1">
          <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Estimated Engagement TCO</span>
          <div className="text-2xl font-mono font-bold text-accent">
            R {grandTotal.toLocaleString()}
          </div>
        </div>

        <div className="p-6 bg-black border border-gray-800 space-y-1">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Avoided Upfront Agency Fees</span>
          <div className="text-2xl font-mono font-bold text-emerald-400">
            R {permanentAgencyFees.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs font-mono text-gray-400">
          * Rates include workstation hardware, software licenses, and senior technical oversight.
        </div>
        <Link 
          href="/contact" 
          className="px-6 py-3 bg-accent text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-cyan-300 transition-colors shrink-0"
        >
          Request Formal Quote <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
