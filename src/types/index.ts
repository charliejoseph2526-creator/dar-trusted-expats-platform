/**
 * Dar Trusted Expats Link - Type Definitions
 * Designed for clean separation of concerns and future Supabase schema alignment.
 */

export type UserRole = 'customer' | 'service_provider' | 'property_owner' | 'admin';

export type FurnishingStatus = 'Furnished' | 'Semi-Furnished' | 'Unfurnished';

export type PropertyType = 'Apartment' | 'Villa / Standalone' | 'Townhouse' | 'Penthouse' | 'Duplex' | 'Beach House';

export type DarNeighborhood = 
  | 'Masaki'
  | 'Oyster Bay'
  | 'Mikocheni'
  | 'Upanga'
  | 'Mbezi Beach'
  | 'Msasani'
  | 'Ada Estate'
  | 'Kigamboni'
  | 'City Centre';

export interface Property {
  id: string;
  title: string;
  propertyType: PropertyType;
  location: DarNeighborhood;
  addressSummary: string;
  priceUsd: number;
  priceTzsApprox: number;
  bedrooms: number;
  bathrooms: number;
  sizeSqm?: number;
  furnishing: FurnishingStatus;
  featured: boolean;
  images: string[];
  description: string;
  amenities: string[];
  securityFeatures: string[];
  utilitiesIncluded: string[];
  minLeaseMonths: number;
  isDemonstration: boolean;
  createdAt: string;
}

export type ServiceCategoryId = 
  | 'apartments-houses'
  | 'international-schools'
  | 'moving-relocation'
  | 'healthcare'
  | 'home-services'
  | 'transport'
  | 'internet-connectivity'
  | 'other-expat-services';

export interface ServiceCategory {
  id: ServiceCategoryId;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  providerCountEstimated: number;
  popularSubcategories: string[];
}

export interface ServiceProvider {
  id: string;
  name: string;
  categoryId: ServiceCategoryId;
  categoryTitle: string;
  location: string;
  description: string;
  servicesOffered: string[];
  languagesSpoken: string[];
  experienceYears: number;
  verificationStatus: 'Pending Review' | 'Under Audit' | 'Verified Partner (Sample)';
  isDemonstration: boolean;
}

export interface NeighborhoodInfo {
  id: string;
  name: DarNeighborhood;
  tagline: string;
  overview: string;
  expatAppeal: string[];
  popularFor: string;
  distanceToAirportKm: number;
  schoolsNearby: string[];
  hospitalsNearby: string[];
}

export interface PropertyFilterParams {
  location?: string;
  propertyType?: string;
  bedrooms?: string;
  furnishing?: string;
  minPrice?: number;
  maxPrice?: number;
  searchTerm?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'bedrooms-desc' | 'newest';
}

export interface SearchState {
  category: 'accommodation' | 'services';
  location: string;
  keyword: string;
}

export interface InquirySubmission {
  id?: string;
  targetType: 'property' | 'service' | 'general';
  targetId?: string;
  targetTitle?: string;
  name: string;
  email: string;
  phone: string;
  moveInDate?: string;
  preferredNeighborhood?: string;
  budgetRange?: string;
  notes: string;
  timestamp: string;
}
