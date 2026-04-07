import { SectionLabel } from '../components/ui/SectionLabel';
import { Users, Building, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HousingSocieties = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <SectionLabel>For RWAs & Societies</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Power Your Community. Zero Capital.</h1>
          <p className="text-lg text-slate-400 mb-8">
            High common area maintenance (CAM) charges are a pain for every resident. VirtualSolar allows Resident Welfare Associations (RWAs) to offset common area electricity bills (lifts, pumps, lighting) by up to 40% without installing a single panel on your limited rooftop space.
          </p>
          <Link to="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-navy-900 font-bold rounded-xl transition-all">
            Get a Proposal for Your RWA <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-navy-900 border border-slate-800 rounded-2xl">
            <Building className="text-amber-400 mb-4" size={32} />
            <h3 className="font-bold text-slate-100 mb-2">No Roof Needed</h3>
            <p className="text-sm text-slate-400">Save your terrace for amenities. We generate the power off-site.</p>
          </div>
          <div className="p-6 bg-navy-900 border border-slate-800 rounded-2xl mt-8">
            <Users className="text-amber-400 mb-4" size={32} />
            <h3 className="font-bold text-slate-100 mb-2">Resident Benefits</h3>
            <p className="text-sm text-slate-400">Individual flat owners can also subscribe to reduce their personal bills.</p>
          </div>
          <div className="p-6 bg-navy-900 border border-slate-800 rounded-2xl">
            <Leaf className="text-amber-400 mb-4" size={32} />
            <h3 className="font-bold text-slate-100 mb-2">Green Society</h3>
            <p className="text-sm text-slate-400">Drastically reduce your community's carbon footprint instantly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
