import { SectionLabel } from '../components/ui/SectionLabel';

export const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <SectionLabel>Legal</SectionLabel>
      <h1 className="text-4xl font-bold text-slate-100 mb-8">Terms & Conditions</h1>
      <div className="prose prose-invert prose-slate max-w-none">
        <p>Last updated: April 2026</p>
        
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing and using VirtualSolar, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h3>2. Waitlist Registration</h3>
        <p>Joining the waitlist does not guarantee immediate access to Virtual Net Metering capacity. Capacity is allocated based on availability within your specific DISCOM and consumer category.</p>

        <h3>3. Accuracy of Information</h3>
        <p>You agree to provide current, complete, and accurate information when joining the waitlist. We reserve the right to remove entries with invalid contact information.</p>

        <h3>4. RERC Compliance</h3>
        <p>Our services operate strictly under the Rajasthan Electricity Regulatory Commission (RERC) Grid Interactive Distributed Renewable Energy Generating Systems Regulations. Terms of service may change based on regulatory updates.</p>

        <h3>5. Contact Information</h3>
        <p>For any questions regarding these terms, please contact us at jawaisolar25@gmail.com.</p>
      </div>
    </div>
  );
};
