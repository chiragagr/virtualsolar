import { SectionLabel } from '../components/ui/SectionLabel';
import { Factory, TrendingDown, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Businesses = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 md:order-1 grid grid-cols-1 gap-4">
          <div className="p-8 bg-navy-900 border border-slate-800 rounded-2xl flex gap-6 items-center">
            <TrendingDown className="text-amber-400 shrink-0" size={40} />
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Slash Commercial Tariffs</h3>
              <p className="text-slate-400">Commercial rates in Rajasthan are high. Offset them with cheaper solar power credited directly via VNM.</p>
            </div>
          </div>
          <div className="p-8 bg-navy-900 border border-slate-800 rounded-2xl flex gap-6 items-center">
            <ShieldCheck className="text-amber-400 shrink-0" size={40} />
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Meet ESG Mandates</h3>
              <p className="text-slate-400">Achieve your sustainability goals and get certified green energy without managing physical infrastructure.</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <SectionLabel>For Commercial & Industrial</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Smart Energy for Smart Businesses.</h1>
          <p className="text-lg text-slate-400 mb-8">
            Whether you run a retail chain, a hospital, or a manufacturing unit, roof space is often insufficient to meet your massive energy needs. VirtualSolar provides scalable off-site solar capacity tailored to your exact load requirements.
          </p>
          <Link to="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-navy-900 font-bold rounded-xl transition-all">
            Contact Enterprise Sales <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};
