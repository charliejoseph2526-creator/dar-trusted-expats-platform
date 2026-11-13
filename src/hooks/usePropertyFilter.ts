import { useState, useEffect, useMemo } from 'react';
import { Property, PropertyFilterParams } from '../types';
import { propertyService } from '../services/propertyService';

const DEFAULT_FILTERS: PropertyFilterParams = {
  location: 'All Locations',
  propertyType: 'All Types',
  bedrooms: 'Any',
  furnishing: 'Any Furnishing',
  minPrice: 0,
  maxPrice: 6000,
  searchTerm: '',
  sortBy: 'newest'
};

export function usePropertyFilter(initialParams?: Partial<PropertyFilterParams>) {
  const [filters, setFilters] = useState<PropertyFilterParams>({
    ...DEFAULT_FILTERS,
    ...initialParams
  });
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    propertyService.getProperties(filters).then((data) => {
      if (isMounted) {
        setProperties(data);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [filters]);

  const updateFilter = (key: keyof PropertyFilterParams, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.location && filters.location !== 'All Locations') count++;
    if (filters.propertyType && filters.propertyType !== 'All Types') count++;
    if (filters.bedrooms && filters.bedrooms !== 'Any') count++;
    if (filters.furnishing && filters.furnishing !== 'Any Furnishing') count++;
    if (filters.minPrice && filters.minPrice > 0) count++;
    if (filters.maxPrice && filters.maxPrice < 6000) count++;
    if (filters.searchTerm && filters.searchTerm.trim() !== '') count++;
    return count;
  }, [filters]);

  return {
    properties,
    filters,
    loading,
    updateFilter,
    resetFilters,
    activeFilterCount,
    setFilters
  };
}
