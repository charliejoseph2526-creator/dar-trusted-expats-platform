import { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Expat Housing & Relocation',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#174B3A]/10 text-xs font-semibold text-[#174B3A]">
          <MessageSquare className="w-3.5 h-3.5 text-[#C49A45]" />
          <span>Direct Contact Desk</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight">
          Get in Touch With Our Team
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Whether you are planning your move to Dar es Salaam, searching for a family villa, or seeking to list verified services, we are here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Info (5 Cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-xs space-y-6">
            <h3 className="font-heading font-bold text-xl text-stone-900">
              Contact Information
            </h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#174B3A]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#174B3A]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Official Business Email
                  </div>
                  <a
                    href="mailto:dartrustedexpats@gmail.com"
                    className="text-[#174B3A] font-semibold text-base hover:underline"
                  >
                    dartrustedexpats@gmail.com
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    For all general, property, and partnership inquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#174B3A]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#174B3A]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Location Desk
                  </div>
                  <div className="font-semibold text-stone-900">
                    Msasani Peninsula / Masaki Corridor
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Dar es Salaam, Tanzania
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#174B3A]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#174B3A]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Office Hours (EAT / UTC+3)
                  </div>
                  <div className="font-semibold text-stone-900">
                    Monday – Friday: 8:30 AM – 5:30 PM
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    Saturday: 9:00 AM – 1:00 PM (By Appointment)
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
              <ShieldCheck className="w-4 h-4 text-[#C49A45] shrink-0" />
              <span>We respect your privacy. No unsolicited promotional messages.</span>
            </div>
          </div>

          <div className="bg-[#174B3A] text-white rounded-3xl p-8 shadow-md space-y-3">
            <h4 className="font-heading font-bold text-lg">
              Relocating with a Delegation or Corporate Team?
            </h4>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
              We arrange bespoke relocation programs for international non-governmental organizations (INGOs), diplomatic embassies, and multinational corporate postings.
            </p>
            <div className="text-xs text-[#C49A45] font-semibold pt-2">
              Priority coordination available via email.
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-md">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-stone-900">
                  Message Sent Successfully
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your message has been received by our Dar es Salaam coordination desk. We usually respond within 24 business hours.
                </p>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-500 max-w-sm mx-auto">
                  <strong>Prototype Simulation:</strong> In this Phase 1 prototype, no live emails were dispatched.
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      inquiryType: 'Expat Housing & Relocation',
                      subject: '',
                      message: ''
                    });
                  }}
                  className="bg-[#174B3A] text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-[#0f3327] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading font-bold text-xl text-stone-900 mb-1">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-stone-500 mb-4">
                  Please fill out the form below and our team will get back to you promptly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Richardson"
                      className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. david@agency.org"
                      className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+255 ... or international"
                      className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden bg-white cursor-pointer"
                    >
                      <option value="Expat Housing & Relocation">Expat Housing & Relocation</option>
                      <option value="Service Provider Partnership">Service Provider Partnership</option>
                      <option value="Property Owner Listing Review">Property Owner Listing Review</option>
                      <option value="Corporate / Diplomatic Relocation">Corporate / Diplomatic Relocation</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. 4-Bedroom House in Masaki starting January"
                    className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Message & Move Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please mention your preferred neighborhood, move-in timeframe, budget range, and any special requirements..."
                    className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#174B3A] hover:bg-[#0f3327] text-white font-semibold py-3 px-6 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#C49A45]" />
                  <span>Send Message (Prototype)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
