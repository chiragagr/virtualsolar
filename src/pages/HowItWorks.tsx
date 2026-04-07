import { SectionLabel } from '../components/ui/SectionLabel';
import { Sun, Building, FileText, Zap } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <SectionLabel>The Process</SectionLabel>
        <h1 className="text-4xl font-bold text-slate-100 mb-4">Understanding Virtual Net Metering</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">How we generate solar power off-site and credit it directly to your existing electricity bill.</p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />
        
        <div className="space-y-12 md:space-y-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 md:text-right">
              <h3 className="text-2xl font-bold text-amber-400 mb-2">1. Subscribe & Sign LOI</h3>
              <p className="text-slate-400">You sign a Letter of Intent (LOI) to subscribe to a specific capacity (kW) of our upcoming solar plant based on your historical usage. No upfront payment is required.</p>
            </div>
            <div className="w-16 h-16 shrink-0 bg-navy-900 border-2 border-amber-400 rounded-full flex items-center justify-center z-10">
              <FileText className="text-amber-400" />
            </div>
            <div className="flex-1 hidden md:block" />
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-amber-400 mb-2">2. We Build the Plant</h3>
              <p className="text-slate-400">Once we aggregate enough demand, we build a utility-scale solar plant in a high-irradiance zone in Rajasthan. We handle all land, permits, and construction.</p>
            </div>
            <div className="w-16 h-16 shrink-0 bg-navy-900 border-2 border-amber-400 rounded-full flex items-center justify-center z-10">
              <Sun className="text-amber-400" />
            </div>
            <div className="flex-1 hidden md:block" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 md:text-right">
              <h3 className="text-2xl font-bold text-amber-400 mb-2">3. Energy Injected to Grid</h3>
              <p className="text-slate-400">The solar plant generates electricity and feeds it directly into the state grid (AVVNL/JVVNL/JdVVNL). The DISCOM tracks every unit generated.</p>
            </div>
            <div className="w-16 h-16 shrink-0 bg-navy-900 border-2 border-amber-400 rounded-full flex items-center justify-center z-10">
              <Zap className="text-amber-400" />
            </div>
            <div className="flex-1 hidden md:block" />
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-amber-400 mb-2">4. Credits on Your Bill</h3>
              <p className="text-slate-400">Under RERC Virtual Net Metering regulations, the DISCOM credits your share of the generated solar units directly to your monthly electricity bill, reducing your cost drastically.</p>
            </div>
            <div className="w-16 h-16 shrink-0 bg-navy-900 border-2 border-amber-400 rounded-full flex items-center justify-center z-10">
              <Building className="text-amber-400" />
            </div>
            <div className="flex-1 hidden md:block" />
          </div>
        </div>
      </div>

      <div className="mt-24 p-8 bg-slate-800/50 rounded-2xl border border-slate-700">
        <h3 className="text-xl font-bold text-slate-100 mb-4">Regulatory Framework</h3>
        <p className="text-slate-400 mb-4">Virtual Net Metering (VNM) is a billing arrangement that allows multiple consumers to share the electricity generated from a single renewable energy system. In Rajasthan, this is governed by the RERC (Grid Interactive Distributed Renewable Energy Generating Systems) Regulations.</p>
        <p className="text-slate-400">This means you get all the financial benefits of rooftop solar, without needing a roof, without maintenance hassles, and without capital investment.</p>
      </div>
    </div>
  );
};
