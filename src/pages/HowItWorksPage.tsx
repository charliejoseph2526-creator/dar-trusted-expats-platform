import { Link } from 'react-router-dom';
import { 
  Building2, 
  Search, 
  Send, 
  HeartHandshake, 
  ShieldCheck, 
  Key, 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  ArrowRight,
  Zap,
  Droplet
} from 'lucide-react';

export const HowItWorksPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#174B3A]/10 text-xs font-semibold text-[#174B3A]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C49A45]" />
          <span>Operational Transparency</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight">
          How Dar Trusted Expats Link Works
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          A modern, transparent framework connecting expatriates, diplomatic staff, and international companies with vetted housing and reliable local services in Dar es Salaam.
        </p>
      </div>

      {/* The 3 Core Steps */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="font-heading font-bold text-2xl text-stone-900">
            The Three-Step Expat Journey
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Simple, secure, and supported by local settlement specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-xs relative">
            <div className="w-12 h-12 rounded-2xl bg-[#174B3A] text-[#C49A45] font-heading font-bold flex items-center justify-center text-xl mb-6 shadow-xs">
              01
            </div>
            <h3 className="font-heading font-semibold text-xl text-stone-900 mb-3">
              Explore Properties & Services
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Browse residential listings filtered by preferred Dar es Salaam neighborhoods (Masaki, Oyster Bay, Mikocheni, Upanga), bedroom counts, furnishing, and budget in USD or TZS. Discover accredited service providers across 8 core categories.
            </p>
            <ul className="text-xs text-stone-600 space-y-2 border-t border-stone-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#174B3A]" />
                <span>Transparent price benchmarks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#174B3A]" />
                <span>Verified power & water infrastructure</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-xs relative">
            <div className="w-12 h-12 rounded-2xl bg-[#174B3A] text-[#C49A45] font-heading font-bold flex items-center justify-center text-xl mb-6 shadow-xs">
              02
            </div>
            <h3 className="font-heading font-semibold text-xl text-stone-900 mb-3">
              Submit an Inquiry or Request
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              When you find a residence or service that matches your requirements, submit an inquiry. Detail your arrival timeline, family needs, or specific questions without exposing your private contact details to unverified third parties.
            </p>
            <ul className="text-xs text-stone-600 space-y-2 border-t border-stone-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#174B3A]" />
                <span>Zero unsolicited spam</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#174B3A]" />
                <span>Protected owner contact desk</span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-xs relative">
            <div className="w-12 h-12 rounded-2xl bg-[#174B3A] text-[#C49A45] font-heading font-bold flex items-center justify-center text-xl mb-6 shadow-xs">
              03
            </div>
            <h3 className="font-heading font-semibold text-xl text-stone-900 mb-3">
              Connect With The Relevant Provider
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Our coordination desk arranges on-site or virtual video walkthroughs, verifies lease terms (including diplomatic break-clauses), and introduces you directly to accredited property managers and service suppliers.
            </p>
            <ul className="text-xs text-stone-600 space-y-2 border-t border-stone-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#174B3A]" />
                <span>Assisted lease negotiations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#174B3A]" />
                <span>Direct handover and settle-in support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Expat Living in Dar es Salaam Guide Section */}
      <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-xs space-y-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C49A45] mb-1">
            Essential Practical Knowledge
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-stone-900">
            What Every Expat Should Know About Renting in Dar es Salaam
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#174B3A]/10 text-[#174B3A] flex items-center justify-center shrink-0 mt-0.5">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-base text-stone-900">
                  Power & Backup Generators
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Grid electricity in Tanzania is managed by TANESCO and operated via prepaid LUKU meters. In premium expat neighborhoods, full-load standby diesel generators with automatic transfer switches (ATS) are standard to maintain continuous air conditioning and refrigeration during outages.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#174B3A]/10 text-[#174B3A] flex items-center justify-center shrink-0 mt-0.5">
                <Droplet className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-base text-stone-900">
                  Water Storage & Filtration
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Mains water (DAWASA) is generally fed into underground reserve tanks (usually 5,000 to 10,000 liters) and pumped to overhead tanks with pressure booster systems. Many coastal properties also possess on-site boreholes.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#174B3A]/10 text-[#174B3A] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-base text-stone-900">
                  Security Standards
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Expat housing standards typically require 24/7 uniformed guards, perimeter masonry walls topped with electric razor wire, solid hardwood or steel security doors, and rapid-response alarm buttons linked to private security companies (e.g. SGA, Ultimate Security, Knight Support).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#174B3A]/10 text-[#174B3A] flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-base text-stone-900">
                  Lease Terms & Currency
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  High-end expat leases in Masaki and Oyster Bay are commonly negotiated in US Dollars (USD) or TZS equivalent, payable quarterly or semi-annually in advance. Standard diplomatic clauses allow early termination in case of international reassignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Provider Onboarding Path */}
      <div className="bg-[#174B3A] text-white rounded-3xl p-8 sm:p-12 shadow-lg space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C49A45]">
            For Property Owners & Service Providers
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white">
            How To List Your Property or Service
          </h2>
          <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
            We partner with legitimate property owners, registered property management agencies, and verified service companies in Dar es Salaam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="bg-white/10 rounded-2xl p-5 border border-white/15">
            <span className="text-xs font-semibold text-[#C49A45] block mb-2">Step 1</span>
            <h4 className="font-heading font-semibold text-base mb-1">Submit Application</h4>
            <p className="text-xs text-stone-300">
              Provide business registration (BRELA/TIN) and complete service or property details.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 border border-white/15">
            <span className="text-xs font-semibold text-[#C49A45] block mb-2">Step 2</span>
            <h4 className="font-heading font-semibold text-base mb-1">Verification Audit</h4>
            <p className="text-xs text-stone-300">
              Our review team verifies ownership papers, physical property condition, and service track record.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 border border-white/15">
            <span className="text-xs font-semibold text-[#C49A45] block mb-2">Step 3</span>
            <h4 className="font-heading font-semibold text-base mb-1">Direct Expat Inquiries</h4>
            <p className="text-xs text-stone-300">
              Receive qualified inquiries from international clients, embassies, and relocating corporate executives.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <Link
            to="/provider/register"
            className="inline-flex items-center gap-2 bg-[#C49A45] hover:bg-[#a97f2e] text-white font-semibold text-sm py-3 px-6 rounded-xl transition-colors"
          >
            <span>Register as a Service Provider</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
