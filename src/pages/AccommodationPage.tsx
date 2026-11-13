import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowUpDown, Building2 } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { FilterSidebar } from '../components/FilterSidebar';
import { usePropertyFilter } from '../hooks/usePropertyFilter';

export const AccommodationPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialLocation = searchParams.get('location') || 'All Locations';
  const initialKeyword = searchParams.get('q') || '';

  const {
    properties,
    filters,
    loading,
    updateFilter,
    resetFilters,
    activeFilterCount,
    setFilters
  } = usePropertyFilter({
    location: initialLocation,
    searchTerm: initialKeyword
  });

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Synchronize when URL searchParams change
  useEffect(() => {
    const loc = searchParams.get('location') || 'All Locations';
    const q = searchParams.get('q') || '';
    setFilters((prev) => {
      if (prev.location === loc && prev.searchTerm === q) {
        return prev;
      }
      return {
        ...prev,
        location: loc,
        searchTerm: q
      };
    });
  }, [searchParams, setFilters]);

  const handleResetFilters = () => {
    resetFilters();
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Title & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C49A45] mb-1">
            Residential Leases & Relocation
          </div>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-stone-900">
            Find Accommodation in Dar es Salaam
          </h1>
          <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-2xl">
            Explore vetted expatriate residences across Masaki, Oyster Bay, Mikocheni, Upanga, and Mbezi Beach.
          </p>
        </div>

        {/* Search bar inside page */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
          <input
            type="text"
            value={filters.searchTerm || ''}
            onChange={(e) => updateFilter('searchTerm', e.target.value)}
            placeholder="Search villas, pools, areas..."
            className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-stone-300 rounded-xl focus:border-[#174B3A] focus:outline-hidden"
          />
        </div>
      </div>

      {/* Demonstration Banner */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
        <div>
          <strong>Demonstration Content Notice:</strong> The accommodations displayed in this prototype are curated demonstration listings. In future phases, verified property managers and landlords will publish live vacancies subject to administrative review.
        </div>
      </div>

      {/* Main 2-Column Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between bg-white p-3.5 rounded-xl border border-stone-200">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 text-sm font-semibold text-stone-800"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#174B3A]" />
            <span>Filters ({activeFilterCount} Active)</span>
          </button>
          <span className="text-xs text-stone-500 font-mono">
            {properties.length} Listings
          </span>
        </div>

        {/* Sidebar Filter (Desktop) */}
        <div className={`lg:block ${mobileFilterOpen ? 'block' : 'hidden'} lg:col-span-1`}>
          <div className="sticky top-28">
            <FilterSidebar
              filters={filters}
              onUpdateFilter={updateFilter}
              onResetFilters={handleResetFilters}
              activeCount={activeFilterCount}
            />
          </div>
        </div>

        {/* Property Grid (3 columns on desktop) */}
        <div className="lg:col-span-3 space-y-6">
          {/* Top Sort and Results Count Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white px-4 py-3 rounded-xl border border-stone-200">
            <div className="text-sm font-medium text-stone-700">
              Showing <span className="font-semibold text-stone-900">{properties.length}</span> properties
              {filters.location && filters.location !== 'All Locations' && (
                <span> in <strong className="text-[#174B3A]">{filters.location}</strong></span>
              )}
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <ArrowUpDown className="w-4 h-4 text-stone-400" />
              <label htmlFor="property-sort-select" className="text-xs text-stone-500 font-medium">Sort by:</label>
              <select
                id="property-sort-select"
                value={filters.sortBy || 'newest'}
                onChange={(e) => updateFilter('sortBy', e.target.value)}
                className="text-xs bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 text-stone-800 focus:outline-hidden font-medium cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="bedrooms-desc">Bedrooms: Most to Least</option>
              </select>
            </div>
          </div>

          {/* Grid or Empty State */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="bg-white rounded-2xl h-80 animate-pulse border border-stone-200" />
              ))}
            </div>
          ) : properties.length === 0 ? (
            <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center space-y-4">
              <Building2 className="w-12 h-12 text-stone-300 mx-auto" />
              <h3 className="font-heading font-semibold text-lg text-stone-900">
                No matching properties found
              </h3>
              <p className="text-sm text-stone-500 max-w-md mx-auto">
                No properties matched your current filter criteria. Try broadening your location or price range.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-[#174B3A] text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-[#0f3327] transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
