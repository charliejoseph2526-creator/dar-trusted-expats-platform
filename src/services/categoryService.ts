import { ServiceCategory, ServiceProvider, ServiceCategoryId } from '../types';
import { SERVICE_CATEGORIES, SAMPLE_SERVICE_PROVIDERS } from '../data/services';

/**
 * Service Category & Provider Service
 * Clean service layer ready for future database integration.
 */
export const categoryService = {
  async getCategories(): Promise<ServiceCategory[]> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    return SERVICE_CATEGORIES;
  },

  async getCategoryById(id: ServiceCategoryId): Promise<ServiceCategory | null> {
    await new Promise((resolve) => setTimeout(resolve, 40));
    return SERVICE_CATEGORIES.find((c) => c.id === id) || null;
  },

  async getProviders(categoryId?: ServiceCategoryId): Promise<ServiceProvider[]> {
    await new Promise((resolve) => setTimeout(resolve, 60));
    if (!categoryId) {
      return SAMPLE_SERVICE_PROVIDERS;
    }
    return SAMPLE_SERVICE_PROVIDERS.filter((sp) => sp.categoryId === categoryId);
  }
};
