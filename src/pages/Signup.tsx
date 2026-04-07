import React, { useState } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { CheckCircle2, Loader2 } from 'lucide-react';

export const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    city: '',
    discom: 'JVVNL',
    category: 'Domestic'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit signup');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Signup Error:', err);
      setError(err.message || "There was a problem submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 bg-emerald-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-emerald-400" size={40} />
        </div>
        <h1 className="text-3xl font-bold text-slate-100 mb-4">You're on the list!</h1>
        <p className="text-slate-400 mb-8">Thank you for joining the VirtualSolar waitlist. We will contact you on WhatsApp when capacity opens up in your DISCOM area.</p>
        <button onClick={() => setIsSubmitted(false)} className="text-amber-400 hover:underline">Submit another response</button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <SectionLabel>Join the Movement</SectionLabel>
        <h1 className="text-3xl font-bold text-slate-100 mb-4">Secure Your Spot</h1>
        <p className="text-slate-400">No payment required today. Sign the Letter of Intent to reserve your solar capacity.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-navy-900 border border-slate-800 p-8 rounded-3xl space-y-6">
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm">
            {error}
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Full Name / Company Name</label>
          <input 
            required
            type="text" 
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-400 transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">WhatsApp Number</label>
          <input 
            required
            type="tel" 
            pattern="[0-9]{10}"
            title="10 digit mobile number"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-400 transition-colors"
            placeholder="10-digit number"
            value={formData.whatsapp}
            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Email Address (Optional)</label>
          <input 
            type="email" 
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-400 transition-colors"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">City</label>
            <input 
              required
              type="text" 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-400 transition-colors"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">DISCOM</label>
            <select 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-400 transition-colors appearance-none"
              value={formData.discom}
              onChange={(e) => setFormData({...formData, discom: e.target.value})}
            >
              <option value="JVVNL">JVVNL (Jaipur)</option>
              <option value="AVVNL">AVVNL (Ajmer)</option>
              <option value="JdVVNL">JdVVNL (Jodhpur)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Consumer Category</label>
          <select 
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-400 transition-colors appearance-none"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          >
            <option value="Domestic">Domestic (Home/Apartment)</option>
            <option value="Commercial">Commercial (Shop/Office)</option>
            <option value="Industrial">Industrial</option>
            <option value="RWA">Housing Society (RWA)</option>
          </select>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-amber-400 hover:bg-amber-500 disabled:bg-amber-400/50 disabled:cursor-not-allowed text-navy-900 font-bold rounded-xl transition-all mt-4 shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2"
        >
          {isSubmitting ? <><Loader2 className="animate-spin" size={20} /> Submitting...</> : 'Join the Waitlist'}
        </button>
        <p className="text-xs text-center text-slate-500">
          By submitting this form, you agree to our Terms of Service and Privacy Policy.
        </p>
      </form>
    </div>
  );
};
