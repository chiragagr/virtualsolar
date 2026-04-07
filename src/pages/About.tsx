import { SectionLabel } from '../components/ui/SectionLabel';

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <SectionLabel>Our Mission</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Democratizing Solar Energy</h1>
        <p className="text-xl text-slate-400">We believe that everyone deserves access to clean, cheap energy—not just those who own a standalone house with a large roof.</p>
      </div>

      <div className="space-y-12">
        <div className="p-8 bg-navy-900 border border-slate-800 rounded-2xl">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">The Problem</h2>
          <p className="text-slate-300 leading-relaxed">
            Over 60% of urban residents in India live in apartments or rented houses. Traditional rooftop solar is impossible for them due to lack of roof rights, structural limitations, or the transient nature of renting. They are locked out of the renewable energy revolution and forced to pay ever-increasing grid tariffs.
          </p>
        </div>

        <div className="p-8 bg-navy-900 border border-slate-800 rounded-2xl">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">The VirtualSolar Solution</h2>
          <p className="text-slate-300 leading-relaxed">
            By leveraging the latest Virtual Net Metering (VNM) regulations, we aggregate consumer demand and build large-scale solar plants in high-irradiance areas of Rajasthan. The power generated is fed into the grid, and the DISCOM credits the equivalent units to our subscribers' bills. It's a win-win: consumers save money, and the grid gets greener.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 border border-slate-800 rounded-2xl">
            <div className="text-3xl font-bold text-slate-100 mb-2">300+</div>
            <div className="text-sm text-slate-500 uppercase tracking-wider">Days of Sun in Rajasthan</div>
          </div>
          <div className="p-6 border border-slate-800 rounded-2xl">
            <div className="text-3xl font-bold text-slate-100 mb-2">0</div>
            <div className="text-sm text-slate-500 uppercase tracking-wider">Maintenance Required</div>
          </div>
          <div className="p-6 border border-slate-800 rounded-2xl">
            <div className="text-3xl font-bold text-slate-100 mb-2">100%</div>
            <div className="text-sm text-slate-500 uppercase tracking-wider">Digital Experience</div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-slate-900/50 border border-slate-800 rounded-2xl text-center">
          <h2 className="text-xl font-bold text-slate-100 mb-2">Contact Us</h2>
          <p className="text-slate-400 mb-4">Have questions? We'd love to hear from you.</p>
          <div className="space-y-2">
            <p className="text-amber-400 font-semibold">JAWAI SOLAR PRIVATE LIMITED</p>
            <a href="mailto:jawaisolar25@gmail.com" className="text-slate-300 hover:text-amber-400 transition-colors">
              jawaisolar25@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
