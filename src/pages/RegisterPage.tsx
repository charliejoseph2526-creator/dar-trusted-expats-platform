import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Mail, 
  ShieldAlert, 
  CheckCircle2, 
  Briefcase, 
  Home
} from 'lucide-react';
import { UserRole } from '../types';

export const RegisterPage = () => {
  const [role, setRole] = useState<UserRole>('customer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-16 space-y-8">
      {/* Disclaimer */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 space-y-1">
        <div className="flex items-center gap-2 font-semibold">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
          <span>Frontend Prototype Notice (Phase 1)</span>
        </div>
        <p className="leading-relaxed">
          This registration page illustrates the role onboarding flow. No permanent user accounts are created in Phase 1.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-md space-y-6">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-center justify-center mx-auto mb-3 p-1">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-11-07_at_16.01.57_394697f5.jpeg"
              alt="Dar Trusted Expats Link"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="font-heading font-bold text-2xl text-stone-900">
            Create an Account
          </h1>
          <p className="text-xs text-stone-500">
            Select your primary objective on Dar Trusted Expats Link.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="font-heading font-bold text-xl text-stone-900">
              Registration Simulated
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
              Thank you, <strong>{name || 'New User'}</strong>! In Phase 2, a confirmation email with a verification link will be dispatched via Supabase GoTrue Auth.
            </p>
            <div className="pt-2">
              <Link
                to="/accommodation"
                className="bg-[#174B3A] text-white text-xs font-semibold py-2.5 px-5 rounded-xl hover:bg-[#0f3327] inline-block"
              >
                Browse Accommodations
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role Cards */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                I Am Joining As:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setRole('customer')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    role === 'customer'
                      ? 'border-[#174B3A] bg-[#174B3A]/5 text-[#174B3A]'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <User className="w-4 h-4 mb-2 text-[#174B3A]" />
                  <span className="text-xs font-bold block">Expat / Resident</span>
                  <span className="text-[10px] text-stone-500">Seeking housing & services</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole('property_owner')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    role === 'property_owner'
                      ? 'border-[#174B3A] bg-[#174B3A]/5 text-[#174B3A]'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <Home className="w-4 h-4 mb-2 text-[#174B3A]" />
                  <span className="text-xs font-bold block">Property Owner</span>
                  <span className="text-[10px] text-stone-500">List villas & apartments</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole('service_provider')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    role === 'service_provider'
                      ? 'border-[#174B3A] bg-[#174B3A]/5 text-[#174B3A]'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <Briefcase className="w-4 h-4 mb-2 text-[#174B3A]" />
                  <span className="text-xs font-bold block">Service Partner</span>
                  <span className="text-[10px] text-stone-500">Offer relocation services</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Henderson"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Password *
              </label>
              <input
                type="password"
                required
                placeholder="At least 8 characters"
                className="w-full text-sm p-3 border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#174B3A] hover:bg-[#0f3327] text-white font-semibold py-3 px-4 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Register Account (Demo)
            </button>
          </form>
        )}

        <div className="text-center text-xs text-stone-500 pt-4 border-t border-stone-100">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-[#174B3A] hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
