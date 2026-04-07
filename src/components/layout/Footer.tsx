import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export const Footer = () => (
  <footer className="py-12 border-t border-slate-800 bg-navy-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="text-amber-400" size={24} />
            <span className="text-xl font-bold text-slate-100">VirtualSolar</span>
          </div>
          <p className="text-slate-400 max-w-sm">
            India's first Virtual Net Metering aggregation platform. Democratizing solar access for urban dwellers in Rajasthan.
          </p>
        </div>
        <div>
          <h4 className="text-slate-100 font-bold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link to="/societies" className="hover:text-amber-400">For Housing Societies</Link></li>
            <li><Link to="/businesses" className="hover:text-amber-400">For Businesses</Link></li>
            <li><Link to="/calculator" className="hover:text-amber-400">Savings Calculator</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-100 font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link to="/about" className="hover:text-amber-400">About Us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-amber-400">How It Works</Link></li>
            <li><Link to="/signup" className="hover:text-amber-400">Join Waitlist</Link></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© 2026 VirtualSolar Aggregation Platform. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-amber-400">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-amber-400">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);
