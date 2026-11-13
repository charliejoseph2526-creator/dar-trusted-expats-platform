import { PropertyFilterParams } from '../types';
import { Filter, RotateCcw } from 'lucide-react';

interface FilterSidebarProps {
  filters: PropertyFilterParams;
  onUpdateFilter: (key: keyof PropertyFilterParams, value: any) => void;
  onResetFilters: () => void;
  activeCount: number;
}

export const FilterSidebar = ({
  filters,
  onUpdateFilter,
  onResetFilters,
  activeCount
}: FilterSidebarProps) => {
  const locations = [
    'All Locations',
    'Masaki',
    'Oyster Bay',
    'Mikocheni',
    'Upanga',
    'Mbezi Beach',
    'Msasani',
    'Ada Estate'
  ];

  const propertyTypes = [
    'All Types',
    'Villa / Standalone',
    'Apartment',
    'Townhouse',
    'Penthouse',
    'Beach House',
    'Duplex'
  ];

  const bedroomOptions = ['Any', '1', '2', '3', '4', '5+'];
  const furnishingOptions = ['Any Furnishing', 'Furnished', 'Semi-Furnished', 'Unfurnished'];

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-stone-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#174B3A]" />
          <h3 className="font-heading font-semibold text-base text-stone-900">
            Filter Properties
          </h3>
          {activeCount > 0 && (
            <span className="text-xs bg-[#174B3A]/10 text-[#174B3A] font-semibold px-2 py-0.5 rounded-full">
              {activeCount}
            </span>
          )}
        </div>

        {activeCount > 0 && (
          <button
            onClick={onResetFilters}
            className="text-xs text-stone-500 hover:text-[#174B3A] flex items-center gap-1 font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Location */}
      <div>
        <label htmlFor="filter-location-select" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
          Location
        </label>
        <select
          id="filter-location-select"
          value={filters.location || 'All Locations'}
          onChange={(e) => onUpdateFilter('location', e.target.value)}
          className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-800 focus:outline-hidden focus:border-[#174B3A] cursor-pointer"
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Property Type */}
      <div>
        <label htmlFor="filter-property-type-select" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
          Property Type
        </label>
        <select
          id="filter-property-type-select"
          value={filters.propertyType || 'All Types'}
          onChange={(e) => onUpdateFilter('propertyType', e.target.value)}
          className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-800 focus:outline-hidden focus:border-[#174B3A] cursor-pointer"
        >
          {propertyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
          Bedrooms
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {bedroomOptions.map((bed) => {
            const isSelected = (filters.bedrooms || 'Any') === bed;
            return (
              <button
                key={bed}
                type="button"
                onClick={() => onUpdateFilter('bedrooms', bed)}
                className={`text-xs py-2 px-2.5 rounded-lg font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#174B3A] text-white shadow-xs'
                    : 'bg-stone-50 text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {bed}
              </button>
            );
          })}
        </div>
      </div>

      {/* Furnishing */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
          Furnishing
        </label>
        <div className="space-y-1.5">
          {furnishingOptions.map((f) => {
            const isSelected = (filters.furnishing || 'Any Furnishing') === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => onUpdateFilter('furnishing', f)}
                className={`w-full text-left text-xs py-2 px-3 rounded-lg font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#174B3A]/10 text-[#174B3A] font-semibold border border-[#174B3A]/30'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="pt-2 border-t border-stone-100">
        <div className="flex items-center justify-between text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
          <label htmlFor="filter-price-range">Max Monthly Rent</label>
          <span className="text-[#174B3A] font-mono text-sm">
            ${(filters.maxPrice || 6000).toLocaleString()} / mo
          </span>
        </div>
        <input
          id="filter-price-range"
          type="range"
          min="800"
          max="6000"
          step="100"
          value={filters.maxPrice || 6000}
          onChange={(e) => onUpdateFilter('maxPrice', Number(e.target.value))}
          className="w-full accent-[#174B3A] cursor-pointer"
          aria-label="Filter maximum monthly rent"
        />
        <div className="flex justify-between text-[11px] text-stone-400 mt-1 font-mono">
          <span>$800</span>
          <span>$6,000+</span>
        </div>
      </div>
    </div>
  );
};
