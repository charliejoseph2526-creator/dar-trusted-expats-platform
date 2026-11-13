/**
 * Future Supabase Integration Architecture Blueprint
 * 
 * In Phase 1 (Frontend Prototype):
 * - No active database connection or secret keys are loaded.
 * - This file documents the future schema, tables, auth policies, and transition steps.
 * 
 * FUTURE SCHEMA SPECIFICATION (Phase 2):
 * 
 * 1. public.profiles
 *    - id: uuid (references auth.users.id)
 *    - email: text
 *    - full_name: text
 *    - role: 'customer' | 'service_provider' | 'property_owner' | 'admin'
 *    - phone_number: text
 *    - nationality: text
 *    - verified_at: timestamp with time zone (null until verified)
 *    - created_at: timestamp with time zone
 * 
 * 2. public.properties
 *    - id: uuid (primary key)
 *    - owner_id: uuid (references profiles.id)
 *    - title: text
 *    - property_type: text
 *    - location: text (Masaki, Oyster Bay, Mikocheni, etc.)
 *    - address_summary: text
 *    - price_usd: numeric
 *    - bedrooms: integer
 *    - bathrooms: numeric
 *    - size_sqm: integer
 *    - furnishing: text
 *    - description: text
 *    - amenities: text[]
 *    - security_features: text[]
 *    - utilities_included: text[]
 *    - images: text[] (stored in Supabase Storage bucket 'property-images')
 *    - status: 'draft' | 'pending_review' | 'active' | 'leased'
 *    - is_featured: boolean
 *    - created_at: timestamp with time zone
 * 
 * 3. public.service_providers
 *    - id: uuid (primary key)
 *    - profile_id: uuid (references profiles.id)
 *    - business_name: text
 *    - category_id: text
 *    - license_number: text (TIN / BRELA in Tanzania)
 *    - verification_status: 'pending' | 'audited' | 'verified' | 'rejected'
 *    - description: text
 *    - phone_contact_protected: text (unlocked only on backend server upon verified inquiry)
 *    - website: text
 *    - created_at: timestamp with time zone
 * 
 * 4. public.inquiries
 *    - id: uuid (primary key)
 *    - customer_id: uuid (references profiles.id)
 *    - target_type: 'property' | 'service'
 *    - target_id: uuid
 *    - move_in_date: date
 *    - budget_usd: numeric
 *    - message: text
 *    - status: 'new' | 'routed' | 'connected' | 'closed'
 *    - created_at: timestamp with time zone
 * 
 * SECURITY & RLS POLICIES (Future Phase):
 * - Properties: Public can read active properties. Only property_owner and admin can insert/update.
 * - Private Owner Contacts: Strictly hidden behind backend function (never returned in public select).
 * - Service Provider Documents: Protected; accessible only to admin reviewers.
 */

export interface FutureSupabaseConfig {
  status: 'PROTOTYPE_PHASE_1';
  targetBackend: 'Supabase PostgreSQL + GoTrue Auth + Storage';
  authRolesSupported: ['customer', 'service_provider', 'property_owner', 'admin'];
}

export const SUPABASE_ARCHITECTURE_METADATA: FutureSupabaseConfig = {
  status: 'PROTOTYPE_PHASE_1',
  targetBackend: 'Supabase PostgreSQL + GoTrue Auth + Storage',
  authRolesSupported: ['customer', 'service_provider', 'property_owner', 'admin']
};
