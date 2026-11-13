import { Property, PropertyFilterParams } from '../types';
import { SAMPLE_PROPERTIES } from '../data/properties';

/**
 * Property Service
 * Currently runs against local mock data for Phase 1.
 * Structured to cleanly swap with Supabase `supabase.from('properties').select(...)` in Phase 2.
 */
export const propertyService = {
  /**
   * Fetch all properties or filtered properties
   */
  async getProperties(params: PropertyFilterParams = {}): Promise<Property[]> {
    // Simulate brief network latency for realistic feel
    await new Promise((resolve) => setTimeout(resolve, 80));

    let filtered = [...SAMPLE_PROPERTIES];

    // Filter by location
    if (params.location && params.location !== 'All Locations') {
      filtered = filtered.filter(
        (p) => p.location.toLowerCase() === params.location?.toLowerCase()
      );
    }

    // Filter by property type
    if (params.propertyType && params.propertyType !== 'All Types') {
      filtered = filtered.filter(
        (p) => p.propertyType.toLowerCase() === params.propertyType?.toLowerCase()
      );
    }

    // Filter by bedrooms
    if (params.bedrooms && params.bedrooms !== 'Any') {
      const bedCount = parseInt(params.bedrooms, 10);
      if (!isNaN(bedCount)) {
        if (params.bedrooms.includes('+')) {
          filtered = filtered.filter((p) => p.bedrooms >= bedCount);
        } else {
          filtered = filtered.filter((p) => p.bedrooms === bedCount);
        }
      }
    }

    // Filter by furnishing
    if (params.furnishing && params.furnishing !== 'Any Furnishing') {
      filtered = filtered.filter(
        (p) => p.furnishing.toLowerCase() === params.furnishing?.toLowerCase()
      );
    }

    // Filter by min price
    if (params.minPrice !== undefined && params.minPrice > 0) {
      filtered = filtered.filter((p) => p.priceUsd >= (params.minPrice || 0));
    }

    // Filter by max price
    if (params.maxPrice !== undefined && params.maxPrice > 0) {
      filtered = filtered.filter((p) => p.priceUsd <= (params.maxPrice || 0));
    }

    // Filter by search keyword
    if (params.searchTerm && params.searchTerm.trim() !== '') {
      const term = params.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.location.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.propertyType.toLowerCase().includes(term) ||
          p.amenities.some((a) => a.toLowerCase().includes(term))
      );
    }

    // Sort
    if (params.sortBy) {
      switch (params.sortBy) {
        case 'price-asc':
          filtered.sort((a, b) => a.priceUsd - b.priceUsd);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.priceUsd - a.priceUsd);
          break;
        case 'bedrooms-desc':
          filtered.sort((a, b) => b.bedrooms - a.bedrooms);
          break;
        case 'newest':
        default:
          filtered.sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          break;
      }
    }

    return filtered;
  },

  /**
   * Get single property by ID
   */
  async getPropertyById(id: string): Promise<Property | null> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    const found = SAMPLE_PROPERTIES.find((p) => p.id === id);
    return found || null;
  },

  /**
   * Get featured properties for the homepage
   */
  async getFeaturedProperties(): Promise<Property[]> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    return SAMPLE_PROPERTIES.filter((p) => p.featured);
  }
};
