import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Building, Sparkles } from 'lucide-react';

interface SearchBarProps {
  initialCategory?: 'accommodation' | 'services';
  initialLocation?: string;
  initialKeyword?: string;
  onSearch?: (params: { category: 'accommodation' | 'services'; location: string; keyword: string }) => void;
  standalone?: boolean;
}

export const SearchBar = ({
  initialCategory = 'accommodation',
  initialLocation = 'All Locations',
  initialKeyword = '',
  onSearch,
  standalone = false
}: SearchBarProps) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<'accommodation' | 'services'>(initialCategory);
  const [location, setLocation] = useState<string>(initialLocation);
  const [keyword, setKeyword] = useState<string>(initialKeyword);

  const darLocations = [
    'All Locations',
    'Masaki',
    'Oyster Bay',
    'Mikocheni',
    'Upanga',
    'Mbezi Beach',
    'Msasani',
    'Ada Estate'
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (onSearch) {
      onSearch({ category, location, keyword });
      return;
    }

    // Default router navigation
    const searchParams = new URLSearchParams();
    if (location && location !== 'All Locations') {
      searchParams.set('location', location);
    }
    if (keyword.trim()) {
      searchParams.set('q', keyword.trim());
    }

    const queryStr = searchParams.toString() ? `?${searchParams.toString()}` : '';

    if (category === 'accommodation') {
      navigate(`/accommodation${queryStr}`);
    } else {
      navigate(`/services${queryStr}`);
    }
  };

  return (
    <div
      className={`w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-stone-200/80 p-3 sm:p-4 ${
        standalone ? '' : 'backdrop-blur-md'
      }`}
    >
      {/* Category Segmented Control */}
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-stone-100">
        <button
          type="button"
          onClick={() => setCategory('accommodation')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            category === 'accommodation'
              ? 'bg-[#174B3A] text-white shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>Find Accommodation</span>
        </button>

        <button
          type="button"
          onClick={() => setCategory('services')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            category === 'services'
              ? 'bg-[#174B3A] text-white shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <Sparkles className="w-4 h-4 text-[#C49A45]" />
          <span>Explore Services</span>
        </button>
      </div>

      {/* Main Search Inputs Grid */}
      <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* Location Dropdown */}
        <div className="md:col-span-4 relative">
          <label htmlFor="search-location-select" className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1 ml-1">
            Neighborhood / Area
          </label>
          <div className="relative flex items-center">
            <MapPin className="w-4 h-4 text-[#C49A45] absolute left-3 pointer-events-none" />
            <select
              id="search-location-select"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-[#F4F5F1] text-stone-800 text-sm rounded-xl pl-9 pr-8 py-2.5 border border-transparent focus:border-[#174B3A] focus:bg-white focus:outline-hidden transition-all appearance-none cursor-pointer font-medium"
            >
              {darLocations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <div className="absolute right-3 pointer-events-none text-stone-400 text-xs">▼</div>
          </div>
        </div>

        {/* Keyword Input */}
        <div className="md:col-span-5 relative">
          <label htmlFor="search-keyword-input" className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1 ml-1">
            {category === 'accommodation' ? 'Property Keywords / Amenities' : 'Service Type / Keyword'}
          </label>
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
            <input
              id="search-keyword-input"
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder={
                category === 'accommodation'
                  ? 'e.g. Pool, 3-bed villa, Ocean view...'
                  : 'e.g. Relocation, Generator, School, Driver...'
              }
              className="w-full bg-[#F4F5F1] text-stone-800 text-sm rounded-xl pl-9 pr-4 py-2.5 border border-transparent focus:border-[#174B3A] focus:bg-white focus:outline-hidden transition-all placeholder:text-stone-400 font-medium"
            />
          </div>
        </div>

        {/* Search CTA Button */}
        <div className="md:col-span-3 pt-4 md:pt-5">
          <button
            type="submit"
            className="w-full bg-[#C49A45] hover:bg-[#a97f2e] text-white font-semibold text-sm rounded-xl py-2.5 px-5 shadow-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer focus:outline-hidden active:scale-[0.99]"
          >
            <Search className="w-4 h-4" />
            <span>Search Now</span>
          </button>
        </div>
      </form>
    </div>
  );
};
