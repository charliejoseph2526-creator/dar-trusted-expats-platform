import { useState } from 'react';
import { X, Send, CheckCircle2, Shield, Calendar, Phone, Mail, User } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'property' | 'service';
  targetId?: string;
  targetPrice?: number;
}

export const InquiryModal = ({
  isOpen,
  onClose,
  title,
  type,
  targetId,
  targetPrice
}: InquiryModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveInDate: '',
    leaseDuration: '12 Months',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#174B3A] text-white p-5 flex items-start justify-between">
          <div>
            <div className="text-[11px] font-semibold text-[#C49A45] uppercase tracking-wider">
              {type === 'property' ? 'Property Rental Inquiry' : 'Service Request'}
            </div>
            <h3 className="font-heading font-semibold text-lg text-white mt-1 pr-6 line-clamp-1">
              {title}
            </h3>
            {targetPrice && (
              <p className="text-xs text-stone-200 mt-0.5">
                Target Monthly Rate: ${targetPrice.toLocaleString()} / mo
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-semibold text-xl text-stone-900 mb-2">
                Inquiry Received (Prototype Demo)
              </h4>
              <p className="text-sm text-stone-600 mb-6 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong>{formData.name || 'Valued Guest'}</strong>! In the live production system, your inquiry will be routed through verified Dar Trusted Expats Link coordinators to arrange a viewing or service booking.
              </p>
              <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-500 mb-6 border border-stone-200">
                <strong>Notice:</strong> This is a Phase 1 frontend prototype. No real communications or credit card charges will occur.
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full bg-[#174B3A] text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-[#0f3327] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#174B3A] shrink-0 mt-0.5" />
                <p>
                  <strong>Trust Guarantee:</strong> Private owner contacts are protected and verified. We never share your personal information with unvetted parties.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+255 ... or international"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {type === 'property' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Expected Move-in Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="date"
                        value={formData.moveInDate}
                        onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Desired Lease Term
                    </label>
                    <select
                      value={formData.leaseDuration}
                      onChange={(e) => setFormData({ ...formData, leaseDuration: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden bg-white"
                    >
                      <option value="6 Months">6 Months</option>
                      <option value="12 Months">12 Months (Standard)</option>
                      <option value="24 Months+">24 Months+ (Corporate/Diplomatic)</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Specific Requirements or Questions
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Generator backup requirements, pet friendly, family moving from abroad..."
                  className="w-full p-3 text-sm border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#174B3A] hover:bg-[#0f3327] text-white font-semibold py-2.5 px-4 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#C49A45]" />
                  <span>Submit Inquiry (Demonstration)</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
