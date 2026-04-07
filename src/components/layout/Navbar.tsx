import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Societies', path: '/societies' },
    { name: 'Businesses', path: '/businesses' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-navy-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center">
            <Zap className="text-navy-900 fill-navy-900" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-100">VirtualSolar</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-6">
          {links.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/signup"
            className="px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-navy-900 text-sm font-bold transition-all"
          >
            Join Waitlist
          </Link>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <Link 
            to="/signup"
            className="px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-navy-900 text-sm font-bold transition-all"
          >
            Join Waitlist
          </Link>
          <button className="text-slate-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="lg:hidden bg-navy-900 border-b border-slate-800 px-4 py-4 flex flex-col gap-4">
          {links.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium ${location.pathname === link.path ? 'text-amber-400' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 rounded-xl bg-amber-400 text-navy-900 text-sm font-bold text-center"
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
};
