import { useState, useMemo } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Zap, Info } from 'lucide-react';

export const Calculator = () => {
  const [monthlyBill, setMonthlyBill] = useState<number>(5000);

  const calculateBillFromUnits = (units: number) => {
    let cost = 400; // Fixed charge
    let remainingUnits = units;

    const slabs = [
      { limit: 50, rate: 4.75 },
      { limit: 100, rate: 6.50 },
      { limit: 150, rate: 7.35 },
      { limit: 200, rate: 7.65 },
      { limit: Infinity, rate: 7.95 }
    ];

    for (const slab of slabs) {
      if (remainingUnits > slab.limit) {
        cost += slab.limit * slab.rate;
        remainingUnits -= slab.limit;
      } else {
        cost += remainingUnits * slab.rate;
        break;
      }
    }

    // Regulatory Surcharge: ₹1.00 per unit if total units > 100
    if (units > 100) {
      cost += units * 1.00;
    }

    return cost;
  };

  const calculateUnitsFromBill = (targetBill: number) => {
    if (targetBill <= 400) return 0;
    
    let low = 0;
    let high = 20000;
    let mid = 0;

    // Binary search to find the units that result in the target bill
    for (let i = 0; i < 50; i++) {
      mid = (low + high) / 2;
      const estimatedBill = calculateBillFromUnits(mid);
      if (estimatedBill < targetBill) {
        low = mid;
      } else {
        high = mid;
      }
    }
    return mid;
  };

  const results = useMemo(() => {
    const estimatedUnits = calculateUnitsFromBill(monthlyBill);
    const solarUnits = estimatedUnits; // 100% offset
    const newUnits = 0; // Since 100% offset, new grid units = 0
    
    const subscriptionFee = solarUnits * 4.5;
    
    const newDiscomBill = calculateBillFromUnits(newUnits); // This will be 400 (fixed charge)
    const totalNewCost = newDiscomBill + subscriptionFee;
    
    const monthlySavings = monthlyBill - totalNewCost;
    const yearlySavings = monthlySavings * 12;
    const co2Offset = (solarUnits * 12 * 0.82);

    return {
      estimatedUnits: Math.round(estimatedUnits),
      solarUnits: Math.round(solarUnits),
      newDiscomBill: Math.round(newDiscomBill),
      subscriptionFee: Math.round(subscriptionFee),
      totalNewCost: Math.round(totalNewCost),
      monthlySavings: Math.max(0, Math.round(monthlySavings)),
      yearlySavings: Math.max(0, Math.round(yearlySavings)),
      co2Offset: Math.round(co2Offset)
    };
  }, [monthlyBill]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <SectionLabel>Advanced Calculator</SectionLabel>
        <h1 className="text-4xl font-bold text-slate-100 mb-2">Calculate Your VNM Savings</h1>
        <div className="inline-block px-4 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 font-semibold rounded-full text-sm mb-6">
          For Domestic Consumers
        </div>
        <p className="text-slate-400 max-w-2xl mx-auto">Our calculator uses Rajasthan's domestic slab-based tariff logic (including regulatory surcharges) to accurately estimate your savings when switching to Virtual Net Metering.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Input Side */}
        <div className="bg-navy-900 border border-slate-800 p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-slate-100 mb-8">Current Usage</h3>

          <div className="mb-8">
            <div className="flex justify-between mb-4">
              <label className="text-sm font-medium text-slate-400">Average Monthly Bill</label>
              <span className="text-2xl font-bold text-amber-400">₹{monthlyBill.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="1000" 
              max="100000" 
              step="500"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between mt-2 text-xs text-slate-500">
              <span>₹1,000</span>
              <span>₹1,00,000+</span>
            </div>
          </div>

          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 flex gap-3">
            <Info className="text-amber-400 shrink-0" size={20} />
            <p className="text-sm text-slate-400">Based on your bill, we estimate you consume <strong className="text-slate-200">{results.estimatedUnits} units (kWh)</strong> per month.</p>
          </div>
        </div>

        {/* Output Side */}
        <div className="gold-border-gradient p-8 rounded-3xl bg-navy-900/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Zap size={120} className="text-amber-400" />
          </div>
          
          <h3 className="text-xl font-bold text-slate-100 mb-8 relative z-10">With VirtualSolar</h3>
          
          <div className="space-y-6 relative z-10">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <span className="text-slate-200 font-bold">Total New Monthly Cost</span>
              <span className="text-xl font-bold text-slate-100">₹{results.totalNewCost.toLocaleString()}</span>
            </div>

            <div className="pt-4">
              <div className="bg-emerald-400/10 border border-emerald-400/20 rounded-2xl p-6 text-center">
                <p className="text-emerald-400 font-semibold mb-1">Estimated Yearly Savings</p>
                <p className="text-4xl font-bold text-emerald-400 mb-2">₹{results.yearlySavings.toLocaleString()}</p>
                <p className="text-sm text-emerald-400/80">You save ₹{results.monthlySavings.toLocaleString()} every month</p>
              </div>
            </div>
            
            <div className="text-center pt-4">
              <p className="text-sm text-slate-400">Environmental Impact: <strong className="text-amber-400">{results.co2Offset.toLocaleString()} kg CO2</strong> offset per year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
