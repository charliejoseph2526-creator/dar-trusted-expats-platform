import { Link } from 'react-router-dom';
import { Mail, MapPin, Shield } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-[#174B3A] text-white pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1 & 2: Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="footer" />

            <p className="text-stone-300 text-sm leading-relaxed max-w-md">
              Dar es Salaam’s trusted accommodation and settlement services platform. Connecting expatriates, international professionals, diplomatic missions, and relocating families with vetted residential properties and reliable local services.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-stone-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C49A45] shrink-0" />
                <a
                  href="mailto:dartrustedexpats@gmail.com"
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  dartrustedexpats@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C49A45] shrink-0" />
                <span>Msasani Peninsula, Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider mb-4 border-b border-[#C49A45]/40 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/accommodation" className="hover:text-white transition-colors">
                  Find Accommodation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Explore Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Expat Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider mb-4 border-b border-[#C49A45]/40 pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link to="/accommodation" className="hover:text-white transition-colors">
                  Villas & Apartments
                </Link>
              </li>
              <li>
                <Link to="/services?category=moving-relocation" className="hover:text-white transition-colors">
                  Moving & Customs Clearance
                </Link>
              </li>
              <li>
                <Link to="/services?category=international-schools" className="hover:text-white transition-colors">
                  International Schools
                </Link>
              </li>
              <li>
                <Link to="/services?category=healthcare" className="hover:text-white transition-colors">
                  Healthcare & Clinics
                </Link>
              </li>
              <li>
                <Link to="/services?category=home-services" className="hover:text-white transition-colors">
                  Home & Generator Services
                </Link>
              </li>
              <li>
                <Link to="/services?category=transport" className="hover:text-white transition-colors">
                  Dedicated Drivers & Fleet
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Business Partners & Trust */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider mb-4 border-b border-[#C49A45]/40 pb-2">
              For Providers
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300 mb-6">
              <li>
                <Link to="/provider/register" className="text-[#C49A45] hover:text-white font-medium transition-colors">
                  Become a Service Provider →
                </Link>
              </li>
              <li>
                <Link to="/provider/register" className="hover:text-white transition-colors">
                  Submit Property for Review
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">
                  Verification Standards
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white transition-colors">
                  Provider Portal (Demo)
                </Link>
              </li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-xs text-stone-300 space-y-1">
              <div className="flex items-center gap-1.5 text-[#C49A45] font-semibold">
                <Shield className="w-3.5 h-3.5" />
                <span>Verified Ecosystem</span>
              </div>
              <p className="text-[11px] leading-relaxed text-stone-400">
                Independent platform connecting expatriates with vetted Tanzanian suppliers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <p>© {new Date().getFullYear()} Dar Trusted Expats Link. All rights reserved.</p>
            <p className="text-[11px] text-stone-500 mt-0.5">
              Phase 1 Frontend Prototype. Sample property and service listings are for demonstration purposes.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-stone-300 font-medium">Tagline: Find. Move. Settle. Connect.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
