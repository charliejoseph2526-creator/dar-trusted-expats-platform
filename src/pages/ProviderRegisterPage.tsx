import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Briefcase, 
  Upload, 
  Send 
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/services';

export const ProviderRegisterPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string>('');
  const [formData, setFormData] = useState({
    businessName: '',
    providerType: 'Service Provider',
    category: 'moving-relocation',
    tinNumber: '',
    contactName: '',
    email: '',
    phone: '',
    operatingAreas: 'Peninsula (Masaki / Oyster Bay)',
    yearsOperating: '3-5 years',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#174B3A]/10 text-xs font-semibold text-[#174B3A]">
          <Briefcase className="w-3.5 h-3.5 text-[#C49A45]" />
          <span>Partner Onboarding Portal</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
          Grow Your Business With Dar Trusted Expats Link
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Join our curated network of property managers, owners, and verified service providers catering to international personnel in Dar es Salaam.
        </p>
      </div>

      {/* Trust & Audit Banner */}
      <div className="p-4 bg-stone-100 border border-stone-200 rounded-2xl text-xs text-stone-700 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#174B3A] shrink-0 mt-0.5" />
        <div>
          <strong>Quality Verification Policy:</strong> To protect our expat community, all applications undergo physical inspection, business registration review (TIN / BRELA in Tanzania), and background checks before appearing in active search results.
        </div>
      </div>

      {/* Main Form Container */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-md">
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-stone-900">
              Application Submitted for Review
            </h2>
            <p className="text-stone-600 text-sm max-w-lg mx-auto leading-relaxed">
              Thank you, <strong>{formData.contactName}</strong>! Your application for <strong>{formData.businessName}</strong> has been logged in our verification pipeline.
            </p>
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-stone-500 max-w-md mx-auto text-left space-y-1">
              <div><strong>Application Reference:</strong> DTEL-REV-{(Math.random() * 9000 + 1000).toFixed(0)}</div>
              <div><strong>Status:</strong> Pending Initial Document Audit</div>
              <div><strong>Next Step:</strong> Our partnership officer will reach out via WhatsApp/email.</div>
            </div>
            <div className="pt-4 flex justify-center gap-3">
              <Link
                to="/"
                className="bg-[#174B3A] text-white text-xs font-semibold py-2.5 px-5 rounded-xl hover:bg-[#0f3327]"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h3 className="font-heading font-semibold text-lg text-stone-900">
                1. Business & Entity Details
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Provide legal business registration details for review.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Business / Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Serengeti Relocations Ltd"
                  className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Partner Entity Type *
                </label>
                <select
                  value={formData.providerType}
                  onChange={(e) => setFormData({ ...formData, providerType: e.target.value })}
                  className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden bg-white cursor-pointer"
                >
                  <option value="Service Provider">Service Provider</option>
                  <option value="Property Owner">Property Owner (Individual)</option>
                  <option value="Property Management Agency">Property Management Agency</option>
                  <option value="Educational / Medical Institution">Educational / Medical Institution</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Service Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden bg-white cursor-pointer"
                >
                  {SERVICE_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Tanzania TIN / BRELA Reg Number (Demo)
                </label>
                <input
                  type="text"
                  value={formData.tinNumber}
                  onChange={(e) => setFormData({ ...formData, tinNumber: e.target.value })}
                  placeholder="e.g. 104-582-990"
                  className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                />
              </div>
            </div>

            <div className="border-b border-stone-100 pb-4 pt-4">
              <h3 className="font-heading font-semibold text-lg text-stone-900">
                2. Contact Officer
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Designated representative for client introductions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  placeholder="e.g. Joseph Mushi"
                  className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="info@company.co.tz"
                  className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+255 7..."
                  className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                />
              </div>
            </div>

            <div className="border-b border-stone-100 pb-4 pt-4">
              <h3 className="font-heading font-semibold text-lg text-stone-900">
                3. Operations & Description
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Primary Coverage Area in Dar es Salaam
                </label>
                <select
                  value={formData.operatingAreas}
                  onChange={(e) => setFormData({ ...formData, operatingAreas: e.target.value })}
                  className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden bg-white cursor-pointer"
                >
                  <option value="Peninsula (Masaki / Oyster Bay)">Peninsula (Masaki / Oyster Bay)</option>
                  <option value="Mikocheni & Msasani">Mikocheni & Msasani</option>
                  <option value="Upanga & Downtown">Upanga & Downtown</option>
                  <option value="Mbezi Beach & North Coast">Mbezi Beach & North Coast</option>
                  <option value="Dar es Salaam Metropolitan (All Areas)">Dar es Salaam Metropolitan (All Areas)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Years in Operation
                </label>
                <select
                  value={formData.yearsOperating}
                  onChange={(e) => setFormData({ ...formData, yearsOperating: e.target.value })}
                  className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden bg-white cursor-pointer"
                >
                  <option value="Under 2 years">Under 2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Overview of Services, Fleet, or Property Portfolio *
              </label>
              <textarea
                rows={4}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your service capabilities, past experience with expatriate/diplomatic clients, English language fluency, and standards..."
                className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
              />
            </div>

            {/* Mock Document Upload */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Business Registration or Tax Clearance Document (Mock Upload)
              </label>
              <div className="border-2 border-dashed border-stone-300 rounded-2xl p-5 text-center bg-stone-50/50 hover:bg-stone-50 transition-colors">
                <Upload className="w-8 h-8 text-[#174B3A] mx-auto mb-2" />
                <div className="text-xs font-medium text-stone-700">
                  {uploadedFileName ? (
                    <span className="text-[#174B3A] font-semibold flex items-center justify-center gap-1.5">
                      <FileText className="w-4 h-4" />
                      {uploadedFileName}
                    </span>
                  ) : (
                    <>
                      <label htmlFor="doc-upload" className="text-[#174B3A] hover:underline cursor-pointer font-semibold">
                        Click to select document
                      </label>
                      <span className="text-stone-500"> or drag and drop</span>
                    </>
                  )}
                </div>
                <input
                  id="doc-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setUploadedFileName(e.target.files[0].name);
                    }
                  }}
                />
                <p className="text-[11px] text-stone-400 mt-1">
                  BRELA certificate, TIN certificate, or business license (PDF, PNG up to 10MB)
                </p>
              </div>
            </div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-stone-600 flex items-center gap-2">
              <input type="checkbox" required id="consent" className="rounded accent-[#174B3A]" />
              <label htmlFor="consent">
                I confirm that our business operates in compliance with Tanzanian regulations and agrees to the Dar Trusted Expats Link vetting standard.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#174B3A] hover:bg-[#0f3327] text-white font-semibold py-3.5 px-6 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <Send className="w-4 h-4 text-[#C49A45]" />
              <span>Submit Provider Application (Prototype Demo)</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
