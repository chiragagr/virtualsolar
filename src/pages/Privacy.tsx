import { SectionLabel } from '../components/ui/SectionLabel';

export const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <SectionLabel>Legal</SectionLabel>
      <h1 className="text-4xl font-bold text-slate-100 mb-8">Privacy Policy</h1>
      <div className="prose prose-invert prose-slate max-w-none">
        <p>Last updated: April 2026</p>
        
        <h3>1. Information We Collect</h3>
        <p>When you join our waitlist, we collect your name, WhatsApp number, email address (optional), city, DISCOM, and consumer category. We use this information solely to notify you about Virtual Net Metering capacity in your area.</p>

        <h3>2. How We Use Your Information</h3>
        <p>We use your information to:</p>
        <ul>
          <li>Send you updates regarding your waitlist status.</li>
          <li>Notify you when solar capacity becomes available in your DISCOM.</li>
          <li>Improve our platform and services.</li>
        </ul>

        <h3>3. Data Protection</h3>
        <p>Your data is stored securely using industry-standard encryption. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

        <h3>4. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us at jawaisolar25@gmail.com.</p>
      </div>
    </div>
  );
};
