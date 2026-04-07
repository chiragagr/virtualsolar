import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ShieldCheck, Users, Building, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  
  return <span className="font-mono">{prefix}{count.toLocaleString()}{suffix}</span>;
};

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-amber-400/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>Virtual Net Metering in Rajasthan</SectionLabel>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight leading-[1.1]">
              Solar Without a Roof.<br />
              <span className="text-amber-400">Savings Without Capital.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              Join India's first Virtual Solar platform. Cut your electricity bill by 20-40% through government-approved Virtual Net Metering. Zero upfront cost. No panels required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/calculator" className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-500 text-navy-900 font-bold rounded-xl transition-all transform hover:scale-105">
                Calculate My Savings
              </Link>
              <Link to="/how-it-works" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2">
                How it Works <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2"><AnimatedCounter end={35} suffix="%" /></div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Avg. Savings</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2"><AnimatedCounter end={0} prefix="₹" /></div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Upfront Cost</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2"><AnimatedCounter end={100} suffix="%" /></div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">RERC Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / RERC Card */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-3xl gold-border-gradient bg-navy-900/50 relative overflow-hidden">
            <ShieldCheck className="absolute -right-10 -bottom-10 w-64 h-64 text-amber-400/5" />
            <div className="relative z-10">
              <SectionLabel>Government Backed</SectionLabel>
              <h2 className="text-3xl font-bold text-slate-100 mb-4">100% RERC Compliant</h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                We operate strictly under the <strong>Rajasthan Electricity Regulatory Commission (RERC)</strong> Grid Interactive Distributed Renewable Energy Generating Systems Regulations, 2021 & Amendments 2025. 
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3"><ShieldCheck className="text-emerald-400 shrink-0 mt-1" size={20} /> Credits applied directly to your DISCOM bill.</li>
                <li className="flex items-start gap-3"><ShieldCheck className="text-emerald-400 shrink-0 mt-1" size={20} /> Legal framework designed specifically for urban consumers without roof access.</li>
                <li className="flex items-start gap-3"><ShieldCheck className="text-emerald-400 shrink-0 mt-1" size={20} /> Approved for AVVNL, JVVNL, and JdVVNL consumers.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Segments */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>Who is this for?</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Solar for Everyone</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-800 bg-navy-900 hover:border-amber-400/50 transition-all">
              <ShieldCheck className="text-amber-400 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Domestic Consumers</h3>
              <p className="text-slate-400 mb-6">Renters and apartment owners can now enjoy the benefits of solar energy without needing roof access or capital investment.</p>
              <Link to="/calculator" className="text-amber-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Calculate Savings <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-8 rounded-2xl border border-slate-800 bg-navy-900 hover:border-amber-400/50 transition-all">
              <Users className="text-amber-400 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Housing Societies (RWAs)</h3>
              <p className="text-slate-400 mb-6">Power common areas (lifts, pumps, lighting) or offer individual flat owners a chance to subscribe to community solar.</p>
              <Link to="/societies" className="text-amber-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn more for RWAs <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-8 rounded-2xl border border-slate-800 bg-navy-900 hover:border-amber-400/50 transition-all">
              <Building className="text-amber-400 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Commercial & Industrial</h3>
              <p className="text-slate-400 mb-6">Meet ESG goals and slash high commercial tariffs without giving up valuable roof or ground space at your facility.</p>
              <Link to="/businesses" className="text-amber-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn more for C&I <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-100 mb-6">Ready to lower your bill?</h2>
          <p className="text-xl text-slate-400 mb-10">Join thousands of Rajasthan residents securing their spot for the first virtual solar plant.</p>
          <Link to="/signup" className="inline-block px-10 py-5 bg-amber-400 hover:bg-amber-500 text-navy-900 font-bold rounded-xl transition-all transform hover:scale-105 text-lg shadow-lg shadow-amber-400/20">
            Join the Waitlist Now
          </Link>
        </div>
      </section>
    </div>
  );
};
