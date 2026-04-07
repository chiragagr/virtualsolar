import React, { useState, useEffect } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Loader2, Lock, LogOut } from 'lucide-react';

interface WaitlistEntry {
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  city: string;
  discom: string;
  category: string;
  created_at: string;
}

export const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [waitlist, setWaitlist] = useState<WaitlistEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError(null);
    
    try {
      const res = await fetch('/api/waitlist', {
        headers: {
          'Authorization': `Bearer ${password}`
        }
      });
      
      if (!res.ok) {
        throw new Error('Invalid password or unauthorized');
      }
      
      const data = await res.json();
      setWaitlist(data);
      setIsAuthenticated(true);
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "Failed to log in");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setWaitlist([]);
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-24">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-amber-400" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Admin Access</h1>
          <p className="text-slate-400">Enter the admin password to view the waitlist.</p>
        </div>

        <form onSubmit={handleLogin} className="bg-navy-900 border border-slate-800 p-8 rounded-3xl space-y-6">
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm">
              {error}
            </div>
          )}

          <div>
            <input 
              type="password"
              required
              placeholder="Admin Password"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-400 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit"
            disabled={isLoggingIn}
            className="w-full py-4 bg-amber-400 hover:bg-amber-500 disabled:bg-amber-400/50 text-navy-900 font-bold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            {isLoggingIn ? <><Loader2 className="animate-spin" size={20} /> Verifying...</> : 'Login'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <SectionLabel>Dashboard</SectionLabel>
          <h1 className="text-3xl font-bold text-slate-100">Waitlist Entries</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-slate-400 text-sm">
            Total: <span className="text-amber-400 font-bold text-lg">{waitlist.length}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg flex items-center gap-2 transition-colors text-sm"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      <div className="bg-navy-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-800/50 text-slate-400 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">WhatsApp</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">City</th>
                <th className="px-6 py-4 font-medium">DISCOM</th>
                <th className="px-6 py-4 font-medium">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <Loader2 className="animate-spin text-amber-400 mx-auto mb-2" size={24} />
                    <p className="text-slate-500">Loading entries...</p>
                  </td>
                </tr>
              ) : waitlist.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                    No waitlist entries found.
                  </td>
                </tr>
              ) : (
                waitlist.map((entry) => (
                  <tr key={entry.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry.created_at ? new Date(entry.created_at).toLocaleDateString() : '-'}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-200">{entry.name}</td>
                    <td className="px-6 py-4">{entry.whatsapp}</td>
                    <td className="px-6 py-4">{entry.email || '-'}</td>
                    <td className="px-6 py-4">{entry.city}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-800 rounded text-xs">{entry.discom}</span>
                    </td>
                    <td className="px-6 py-4">{entry.category}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
