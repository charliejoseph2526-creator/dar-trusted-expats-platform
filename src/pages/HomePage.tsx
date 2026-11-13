import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Compass, 
  HeartHandshake, 
  CheckCircle, 
  ArrowRight, 
  MapPin, 
  Search, 
  Sparkles,
  Users,
  Briefcase,
  FileCheck,
  Building
} from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { PropertyCard } from '../components/PropertyCard';
import { ServiceCategoryCard } from '../components/ServiceCategoryCard';
import { SAMPLE_PROPERTIES } from '../data/properties';
import { SERVICE_CATEGORIES } from '../data/services';
import { NEIGHBORHOOD_GUIDES } from '../data/locations';

export const HomePage = () => {
  const featuredProperties = SAMPLE_PROPERTIES.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* SECTION B: HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-stone-900">
        {/* Hero Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_dar_es_salaam_1794054957825.jpg"
            alt="Dar es Salaam Msasani Peninsula Coastline"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/65 to-stone-900/40" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-stone-200">
            <span className="w-2 h-2 rounded-full bg-[#C49A45]" />
            <span>Expatriate & Relocation Gateway to Tanzania</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight text-balance leading-tight">
            Find Your Home. Settle Into Dar es Salaam.
          </h1>

          <p className="text-base sm:text-xl text-stone-200 max-w-3xl mx-auto font-normal text-balance leading-relaxed">
            Discover trusted accommodation and reliable settlement services designed to make your move to Dar es Salaam easier.
          </p>

          {/* Two Main CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/accommodation"
              className="w-full sm:w-auto bg-[#174B3A] hover:bg-[#0f3327] text-white font-semibold text-base py-3.5 px-8 rounded-xl shadow-lg border border-[#C49A45]/30 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Building2 className="w-5 h-5 text-[#C49A45]" />
              <span>Explore Accommodation</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto bg-white/95 hover:bg-white text-stone-900 font-semibold text-base py-3.5 px-8 rounded-xl shadow-lg backdrop-blur-md transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-[#C49A45]" />
              <span>Discover Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION C: SMART SEARCH SECTION */}
      <section className="-mt-16 sm:-mt-20 relative z-20 px-4 sm:px-6 lg:px-8">
        <SearchBar />
      </section>

      {/* SECTION D: SERVICE CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C49A45] mb-1">
              Essential Local Services
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-stone-900">
              Complete Relocation & Lifestyle Support
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#174B3A] hover:text-[#0f3327] group"
          >
            <span>View All Service Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_CATEGORIES.map((category) => (
            <ServiceCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* SECTION E: FEATURED PROPERTIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C49A45] mb-1">
              Curated Residential Catalog
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-stone-900">
              Featured Properties in Dar es Salaam
            </h2>
          </div>

          <Link
            to="/accommodation"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#174B3A] hover:text-[#0f3327] group"
          >
            <span>Browse All {SAMPLE_PROPERTIES.length} Listings</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Prototype notice banner */}
        <div className="mb-8 p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
          <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
          <p>
            <strong>Demonstration Notice:</strong> The listings below represent realistic sample properties for prototype preview in Dar es Salaam’s expatriate corridors (Masaki, Oyster Bay, Mikocheni, Upanga). Real availability and live bookings will activate in future production phases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* SECTION F: WHY CHOOSE US */}
      <section className="bg-white py-16 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C49A45] mb-1">
              Why Expats Trust Us
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-stone-900 mb-3">
              Designed For A Seamless Dar es Salaam Transition
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Relocating internationally presents unique challenges. We simplify your transition with focused local assistance and vetted options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#174B3A]/10 flex items-center justify-center text-[#174B3A]">
                <ShieldCheck className="w-6 h-6 text-[#174B3A]" />
              </div>
              <h3 className="font-heading font-semibold text-base text-stone-900">
                Trusted Connections
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We connect you directly with reputable property managers and vetted providers who understand international expat expectations.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#174B3A]/10 flex items-center justify-center text-[#174B3A]">
                <FileCheck className="w-6 h-6 text-[#174B3A]" />
              </div>
              <h3 className="font-heading font-semibold text-base text-stone-900">
                Carefully Reviewed Listings
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Every property and service listing is reviewed for backup power, water security, security perimeters, and lease clarity.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#174B3A]/10 flex items-center justify-center text-[#174B3A]">
                <Compass className="w-6 h-6 text-[#174B3A]" />
              </div>
              <h3 className="font-heading font-semibold text-base text-stone-900">
                Relocation Support
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Step-by-step assistance coordinating airport arrivals, household clearing, school applications, and neighborhood orientation.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#174B3A]/10 flex items-center justify-center text-[#174B3A]">
                <Building className="w-6 h-6 text-[#174B3A]" />
              </div>
              <h3 className="font-heading font-semibold text-base text-stone-900">
                Relevant Local Services
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                From emergency medical clinics and bilingual schools to trusted backup generator specialists and reliable private drivers.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#174B3A]/10 flex items-center justify-center text-[#174B3A]">
                <HeartHandshake className="w-6 h-6 text-[#174B3A]" />
              </div>
              <h3 className="font-heading font-semibold text-base text-stone-900">
                Customer-Focused Assistance
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Friendly, responsive advisory that listens to your family’s budget, lifestyle needs, and lease requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C49A45] mb-1">
            Simple 3-Step Journey
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-stone-900 mb-3">
            How Dar Trusted Expats Link Works
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Moving to a new city does not have to be stressful. Follow our straightforward path to finding your new home and settling comfortably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-xs relative flex flex-col">
            <div className="w-10 h-10 rounded-full bg-[#174B3A] text-[#C49A45] font-heading font-bold flex items-center justify-center text-base mb-6">
              1
            </div>
            <h3 className="font-heading font-semibold text-lg text-stone-900 mb-3">
              Explore Properties & Services
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Search by preferred Dar es Salaam neighborhoods, property type, bedroom requirements, and verified service categories.
            </p>
            <div className="mt-auto pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-[#174B3A] font-semibold">
              <CheckCircle className="w-4 h-4 text-[#C49A45]" />
              <span>Filter by location & price</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-xs relative flex flex-col">
            <div className="w-10 h-10 rounded-full bg-[#174B3A] text-[#C49A45] font-heading font-bold flex items-center justify-center text-base mb-6">
              2
            </div>
            <h3 className="font-heading font-semibold text-lg text-stone-900 mb-3">
              Submit an Inquiry or Request
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Tell us your move-in date, family requirements, or required service details using our simple, secure inquiry request forms.
            </p>
            <div className="mt-auto pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-[#174B3A] font-semibold">
              <CheckCircle className="w-4 h-4 text-[#C49A45]" />
              <span>Direct private inquiry routing</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-xs relative flex flex-col">
            <div className="w-10 h-10 rounded-full bg-[#174B3A] text-[#C49A45] font-heading font-bold flex items-center justify-center text-base mb-6">
              3
            </div>
            <h3 className="font-heading font-semibold text-lg text-stone-900 mb-3">
              Connect With The Provider
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Coordinate viewing appointments, lease agreements, and service delivery with reputable managers and local partners.
            </p>
            <div className="mt-auto pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-[#174B3A] font-semibold">
              <CheckCircle className="w-4 h-4 text-[#C49A45]" />
              <span>Assisted settlement support</span>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="text-sm font-semibold text-[#174B3A] hover:underline underline-offset-4 inline-flex items-center gap-1.5"
          >
            <span>Read Complete Expat Settlement Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SECTION H: SERVICE PROVIDER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-[#174B3A] to-[#0f3327] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#C49A45]">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Partner Ecosystem</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white tracking-tight">
              Grow Your Business With Dar Trusted Expats Link.
            </h2>

            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              Property owners, property managers, and verified service providers can submit their businesses, residential units, and services for review. Join Dar es Salaam’s premier network dedicated to international residents and relocating professionals.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                to="/provider/register"
                className="bg-[#C49A45] hover:bg-[#a97f2e] text-white font-semibold text-sm sm:text-base py-3 px-6 rounded-xl shadow-md transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>Become a Service Provider</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base py-3 px-6 rounded-xl border border-white/20 transition-colors text-center"
              >
                Contact Partnership Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
