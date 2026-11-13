/**
 * Services Module Index
 * 
 * Provides clean decoupling between UI components and backend data access.
 * In Phase 1 & 2: Services serve mock data with simulated asynchronous latency.
 * In Phase 3 & 4: These methods will connect directly to the Supabase client
 * without requiring changes to consuming React components.
 */

export * from './propertyService';
export * from './categoryService';
export * from './supabaseClientPlaceholder';
