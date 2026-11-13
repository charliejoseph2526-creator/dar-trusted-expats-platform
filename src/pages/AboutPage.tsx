import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Compass, 
  HeartHandshake, 
  Target, 
  Eye, 
  Users, 
  ArrowRight,
  Globe2,
  Award
} from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero / Mission Statement */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#174B3A]/10 text-xs font-semibold text-[#174B3A]">
          <Compass className="w-3.5 h-3.5 text-[#C49A45]" />
          <span>Our Vision & Purpose</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight">
          About Dar Trusted Expats Link
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
          Building Tanzania’s most trusted accommodation and settlement services platform for expatriates, international professionals, families, and residents.
        </p>
      </div>

      {/* 2-Column Story & Purpose */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C49A45]">
            Business Purpose
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-stone-900 leading-snug">
            Bridging the Gap Between International Expats & Quality Local Services
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Relocating to a new country is an exciting milestone, yet navigating residential leases, reliable utility infrastructure, bilingual schooling, and trustworthy service providers can often feel fragmented and opaque.
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            <strong>Dar Trusted Expats Link</strong> was created to eliminate guesswork. We connect customers directly with legitimate property owners, vetted property managers, licensed service providers, and relevant Tanzanian businesses through a clear, customer-centric digital framework.
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Our long-term goal is to build a complete digital marketplace with verified identities, real-time availability, secure communications, and transparent pricing benchmarks for Dar es Salaam.
          </p>
        </div>

        {/* Brand Core Identity Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-md space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-center justify-center p-1.5">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-11-07_at_16.01.57_394697f5.jpeg"
              alt="Dar Trusted Expats Link"
              className="w-full h-full object-contain"
            />
          </div>

          <h3 className="font-heading font-bold text-xl text-stone-900">
            Brand Identity: Find · Move · Settle · Connect
          </h3>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#174B3A] mt-2 shrink-0" />
              <div>
                <strong>Find:</strong> Curated residential villas, beachfront homes, and modern ocean-view apartments across Dar es Salaam’s safest corridors.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C49A45] mt-2 shrink-0" />
              <div>
                <strong>Move:</strong> Professional customs clearance, port logistics, domestic moving, and pet relocation assistance.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#174B3A] mt-2 shrink-0" />
              <div>
                <strong>Settle:</strong> Reliable connections for backup generators, international schools, high-speed fiber internet, and vetted home services.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C49A45] mt-2 shrink-0" />
              <div>
                <strong>Connect:</strong> A welcoming community network linking international residents with reputable Tanzanian professionals and cultural hubs.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Principles Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C49A45] mb-1">
            Our Foundation
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-stone-900">
            Core Operating Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#174B3A]/10 text-[#174B3A] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#174B3A]" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-stone-900">
              Vetting & Standards
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We insist on verifiable property ownership, clear lease terms, and legitimate business documentation to protect both expats and suppliers.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#174B3A]/10 text-[#174B3A] flex items-center justify-center">
              <Eye className="w-5 h-5 text-[#174B3A]" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-stone-900">
              Price Transparency
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We discourage hidden middleman markups. Listings clearly state inclusions, service charges, generator obligations, and tax parameters.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#174B3A]/10 text-[#174B3A] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-[#174B3A]" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-stone-900">
              Responsible Care
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We treat relocating families and international teams with dedicated personal attention, understanding the stresses of cross-border moves.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#174B3A]/10 text-[#174B3A] flex items-center justify-center">
              <Globe2 className="w-5 h-5 text-[#174B3A]" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-stone-900">
              Local Empowerment
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We spotlight skilled Tanzanian service technicians, registered contractors, and local enterprises, fostering sustainable economic collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap & Prototype Notice */}
      <div className="bg-stone-100 rounded-3xl p-8 sm:p-10 border border-stone-200 space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#174B3A] uppercase tracking-wider">
          <Award className="w-4 h-4 text-[#C49A45]" />
          <span>Product Development Roadmap</span>
        </div>
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-stone-900">
          Phase 1 Prototype & Architecture
        </h3>
        <p className="text-sm text-stone-600 leading-relaxed max-w-3xl">
          This web application represents <strong>Phase 1: Frontend Prototype</strong>. The architecture has been intentionally constructed with separated data services, type definitions, and modular components to enable smooth integration with <strong>Supabase</strong> (PostgreSQL, GoTrue Auth, and Row Level Security) in Phase 2.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#174B3A] px-4 py-2.5 rounded-xl hover:bg-[#0f3327] transition-colors"
          >
            <span>Connect with our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
