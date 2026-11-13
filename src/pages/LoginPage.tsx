import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  Mail, 
  UserCircle, 
  ShieldAlert, 
  CheckCircle 
} from 'lucide-react';
import { UserRole } from '../types';

export const LoginPage = () => {
  const [role, setRole] = useState<UserRole>('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [demoSignedIn, setDemoSignedIn] = useState(false);

  const handleDemoLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSignedIn(true);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-16 space-y-8">
      {/* Prototype Notice Banner */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 space-y-2">
        <div className="flex items-center gap-2 font-semibold">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
          <span>Frontend Prototype Notice (Phase 1)</span>
        </div>
        <p className="leading-relaxed">
          This authentication interface is a visual and functional prototype. No real user records or passwords are stored. Future production releases will integrate <strong>Supabase GoTrue Authentication</strong> with Role-Based Access Control (RBAC).
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
            Sign In to Your Account
          </h1>
          <p className="text-xs text-stone-500">
            Select a prototype role to preview how the platform accommodates different user types.
          </p>
        </div>

        {demoSignedIn ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h2 className="font-heading font-bold text-xl text-stone-900">
              Demo Session Initialized
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
              You are simulating a session as <strong>{role.replace('_', ' ').toUpperCase()}</strong> ({email || 'guest@example.com'}).
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/accommodation"
                className="bg-[#174B3A] text-white text-xs font-semibold py-2.5 px-4 rounded-xl hover:bg-[#0f3327]"
              >
                Explore Accommodations
              </Link>
              <button
                onClick={() => setDemoSignedIn(false)}
                className="text-stone-500 hover:text-stone-800 text-xs py-2"
              >
                Sign Out of Demo
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDemoLogin} className="space-y-5">
            {/* Role Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                Simulated User Role
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'customer', label: 'Expat Customer' },
                  { id: 'service_provider', label: 'Service Provider' },
                  { id: 'property_owner', label: 'Property Owner / Mgr' },
                  { id: 'admin', label: 'Platform Admin' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRole(item.id as UserRole)}
                    className={`py-2 px-3 rounded-xl font-medium border text-left transition-all cursor-pointer ${
                      role === item.id
                        ? 'border-[#174B3A] bg-[#174B3A]/5 text-[#174B3A] font-semibold'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="expat@international.org"
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-stone-700">
                  Password
                </label>
                <span className="text-[11px] text-stone-400">Any password works in demo</span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#174B3A] hover:bg-[#0f3327] text-white font-semibold py-3 px-4 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <UserCircle className="w-4 h-4 text-[#C49A45]" />
              <span>Sign In (Prototype Preview)</span>
            </button>
          </form>
        )}

        <div className="text-center text-xs text-stone-500 pt-4 border-t border-stone-100">
          Do not have an account yet?{' '}
          <Link to="/register" className="font-semibold text-[#174B3A] hover:underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};
