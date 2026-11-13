import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Languages, 
  Briefcase, 
  HelpCircle, 
  ArrowRight,
  Search,
  X
} from 'lucide-react';
import { SERVICE_CATEGORIES, SAMPLE_SERVICE_PROVIDERS } from '../data/services';
import { ServiceCategoryId, ServiceProvider } from '../types';
import { InquiryModal } from '../components/InquiryModal';

export const ServicesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as ServiceCategoryId) || 'all';
  const initialKeyword = searchParams.get('q') || '';
  const initialLocation = searchParams.get('location') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchTerm, setSearchTerm] = useState<string>(initialKeyword);
  const [selectedLocation, setSelectedLocation] = useState<string>(initialLocation);
  const [selectedProviderForInquiry, setSelectedProviderForInquiry] = useState<ServiceProvider | null>(null);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    const q = searchParams.get('q') || '';
    const loc = searchParams.get('location') || '';
    setSelectedCategory(cat);
    setSearchTerm(q);
    setSelectedLocation(loc);
  }, [searchParams]);

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    const params = new URLSearchParams(searchParams);
    if (catId === 'all') {
      params.delete('category');
    } else {
      params.set('category', catId);
    }
    setSearchParams(params);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    const params = new URLSearchParams(searchParams);
    if (term.trim()) {
      params.set('q', term.trim());
    } else {
      params.delete('q');
    }
    setSearchParams(params);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setSelectedLocation('');
    setSearchParams({});
  };

  const filteredProviders = useMemo(() => {
    let result = [...SAMPLE_SERVICE_PROVIDERS];

    if (selectedCategory !== 'all') {
      result = result.filter((sp) => sp.categoryId === selectedCategory);
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter((sp) =>
        sp.name.toLowerCase().includes(term) ||
        sp.categoryTitle.toLowerCase().includes(term) ||
        sp.description.toLowerCase().includes(term) ||
        sp.servicesOffered.some((s) => s.toLowerCase().includes(term))
      );
    }

    if (selectedLocation && selectedLocation !== 'All Locations') {
      const loc = selectedLocation.toLowerCase().trim();
      result = result.filter((sp) =>
        sp.location.toLowerCase().includes(loc)
      );
    }

    return result;
  }, [selectedCategory, searchTerm, selectedLocation]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#174B3A]/10 text-xs font-semibold text-[#174B3A]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C49A45]" />
          <span>Expat Settlement Directory</span>
        </div>
        <h1 className="font-heading font-bold text-3xl sm:text-5xl text-stone-900 tracking-tight">
          Reliable Services in Dar es Salaam
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          From international school enrollments and customs clearance to backup generator maintenance and reliable private chauffeurs.
        </p>
      </div>

      {/* Demonstration Banner */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
        <div>
          <strong>Demonstration Content:</strong> Service providers listed below are sample profiles representing typical vetted partners in Dar es Salaam. In Phase 2, real licensed suppliers with verified TIN/BRELA records will receive inquiries.
        </div>
      </div>

      {/* Search & Category Filter Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-stone-200">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search services or providers by keyword (e.g. generator, relocation, clinic, driver)..."
              className="w-full pl-10 pr-9 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:border-[#174B3A] focus:bg-white focus:outline-hidden"
            />
            {searchTerm && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-2.5 text-stone-400 hover:text-stone-600 p-0.5 cursor-pointer"
                aria-label="Clear search keyword"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {(searchTerm || selectedCategory !== 'all' || selectedLocation) && (
            <button
              onClick={handleClearFilters}
              className="text-xs font-semibold text-stone-600 hover:text-[#174B3A] px-3 py-2 rounded-xl border border-stone-200 hover:bg-stone-50 whitespace-nowrap self-end sm:self-auto cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Category Pills Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => handleSelectCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#174B3A] text-white shadow-xs'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            All Categories ({SERVICE_CATEGORIES.length})
          </button>

          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#174B3A] text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Detailed Cards Overview (When all is selected) */}
      {selectedCategory === 'all' && (
        <div className="space-y-6">
          <h2 className="font-heading font-bold text-xl text-stone-900">
            8 Key Expat Service Pillars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className="bg-white rounded-2xl p-5 border border-stone-200 hover:border-[#174B3A]/40 transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading font-semibold text-base text-stone-900 mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-3 mb-4 leading-relaxed">
                    {cat.detailedDescription}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#174B3A]">
                  <span>View Partners</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sample Service Providers Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="font-heading font-bold text-2xl text-stone-900">
              {selectedCategory === 'all'
                ? 'Sample Verified Service Providers'
                : `Verified Providers in ${SERVICE_CATEGORIES.find((c) => c.id === selectedCategory)?.title}`}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Providers undergo credential review, background verification, and service quality audits.
            </p>
          </div>

          <Link
            to="/provider/register"
            className="text-xs font-semibold text-white bg-[#174B3A] hover:bg-[#0f3327] px-4 py-2 rounded-xl shadow-xs transition-colors self-start sm:self-auto inline-flex items-center gap-1.5"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#C49A45]" />
            <span>List Your Business</span>
          </Link>
        </div>

        {filteredProviders.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center space-y-3">
            <h3 className="font-heading font-semibold text-lg text-stone-900">
              No matching service providers found
            </h3>
            <p className="text-sm text-stone-500 max-w-md mx-auto">
              {searchTerm
                ? `No service providers matched "${searchTerm}". Try a different keyword or reset filters.`
                : 'Our team is currently auditing prospective providers for this category. You can still submit a custom inquiry request.'}
            </p>
            <button
              onClick={handleClearFilters}
              className="bg-[#174B3A] text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-[#0f3327] cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider) => (
              <div
                key={provider.id}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-[#174B3A] bg-[#174B3A]/10 px-2.5 py-1 rounded-md">
                      {provider.categoryTitle}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      {provider.verificationStatus}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-lg text-stone-900 mb-1">
                    {provider.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#C49A45]" />
                    <span>{provider.location}</span>
                    <span>·</span>
                    <span>{provider.experienceYears}+ yrs exp</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 mb-4 leading-relaxed">
                    {provider.description}
                  </p>

                  {/* Services tags */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[11px] font-semibold text-stone-700 block">
                      Services Provided:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {provider.servicesOffered.map((srv, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-2 border-t border-stone-100">
                    <Languages className="w-3.5 h-3.5 text-stone-400" />
                    <span>Languages: {provider.languagesSpoken.join(', ')}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <span className="text-[10px] text-stone-400 italic">
                    Sample Partner
                  </span>
                  <button
                    onClick={() => setSelectedProviderForInquiry(provider)}
                    className="text-xs font-semibold text-white bg-[#174B3A] hover:bg-[#0f3327] px-4 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    Request Introduction
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Relocation Settlement Tips Banner */}
      <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-[#174B3A] font-semibold text-sm">
            <HelpCircle className="w-4 h-4 text-[#C49A45]" />
            <span>Expat Advice for Procuring Services in Tanzania</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-stone-900">
            Need Help Navigating Local Procedures?
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            From registering residential leases to obtaining Class A, B, or C resident permits, our platform helps you identify accredited professionals and avoid unlicensed street middlemen.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#174B3A] hover:underline"
            >
              <span>Speak with a Relocation Specialist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {selectedProviderForInquiry && (
        <InquiryModal
          isOpen={!!selectedProviderForInquiry}
          onClose={() => setSelectedProviderForInquiry(null)}
          title={selectedProviderForInquiry.name}
          type="service"
          targetId={selectedProviderForInquiry.id}
        />
      )}
    </div>
  );
};
