# Dar Trusted Expats Link

> **Tagline:** *Find. Move. Settle. Connect.*  
> **Location:** Dar es Salaam, Tanzania  
> **Platform Version:** Phase 1 / Phase 2 Frontend Prototype (Phase 3 GitHub Staging)

---

## 1. Overview & Business Purpose

**Dar Trusted Expats Link** is a trusted accommodation and settlement-services web platform built for expatriates, international professionals, diplomatic missions, humanitarian organizations, relocating families, and local residents moving to or living in Dar es Salaam, Tanzania.

The platform bridges international newcomers with vetted property owners, professional property managers, accredited international schools, licensed relocation services, and verified home and professional service providers.

### Core Value Pillars
- **Verified Residential Accommodations:** High-standard apartments, villas, and townhouses situated in key expatriate residential corridors (Masaki, Oyster Bay, Mikocheni, Upanga, Msasani Peninsula).
- **Essential Expatriate Relocation Verticals:** Instant access to 8 curated service categories:
  1. Apartments & Residential Houses
  2. International Schools & Childcare
  3. Relocation & International Moving
  4. Healthcare, Clinics & Emergency Care
  5. Home Maintenance, Plumbing & Electrical
  6. Chauffeur, Airport Transfer & Transport
  7. High-Speed Fiber Internet & Connectivity
  8. Legal, Residency, Banking & Expat Support
- **Expat-Specific Housing Criteria:** Verified backup electricity generators (TANESCO-redundant), DAWASA water reserves, borehole desalination systems, and 24/7 security standards.
- **Privacy & Owner Protection:** Strict barrier preventing unauthorized broker spam and unauthorized phone number harvesting.

---

## 2. Technology Roadmap

Our multi-stage engineering roadmap follows a modern, decoupled cloud architecture:

```
┌─────────────────────────────────┐
│       1. Google AI Studio       │  ➔ Interactive prototype & UI/UX engineering (Completed)
└────────────────┬────────────────┘
                 │
┌────────────────▼────────────────┐
│            2. GitHub            │  ➔ Source code management & Git version control (Current Stage)
└────────────────┬────────────────┘
                 │
┌────────────────▼────────────────┐
│           3. Supabase           │  ➔ PostgreSQL, GoTrue Auth, Storage Buckets & RLS (Next Stage)
└────────────────┬────────────────┘
                 │
┌────────────────▼────────────────┐
│          4. Cloudflare          │  ➔ Global edge hosting, custom domain, SSL, DDoS protection
└─────────────────────────────────┘
```

---

## 3. Brand Identity & Design System

The platform strictly adheres to the official brand design system:

| Design Token | Value | Application |
|:---|:---|:---|
| **Forest Green** | `#174B3A` | Primary brand color, headers, CTAs, badge accents |
| **Warm Gold** | `#C49A45` | Accent trim, premium ratings, highlight indicators |
| **Neutral Light** | `#F4F5F1` | Background canvas, card surfaces |
| **White** | `#FFFFFF` | Card backgrounds, crisp contrast containers |
| **Heading Font** | **Poppins** | Strong, modern, authoritative headings |
| **Body Font** | **Inter** | Clean, highly legible UI copy and data tables |
| **Official Logo** | Emblem & Wordmark | Maintained at locked aspect ratios in `/public/assets/` |

---

## 4. Frontend Architecture & Separation of Concerns

The codebase is organized into cleanly separated functional layers to enable a seamless transition to a dynamic database without rewriting UI components:

```
dar-trusted-expats-link/
├── public/                       # Static public assets served directly
│   ├── assets/
│   │   ├── aistudio/             # Official Dar Trusted Expats Link logo assets
│   │   └── images/               # High-resolution property and hero photography
│   └── logo.jpeg                 # Brand emblem fallback
├── src/
│   ├── components/               # Reusable presentational & interactive UI components
│   │   ├── DemonstrationNotice.tsx # Prototype preview banner
│   │   ├── FilterSidebar.tsx     # Multi-parameter faceted search sidebar
│   │   ├── Footer.tsx            # Multi-column branded footer
│   │   ├── Header.tsx            # Sticky desktop navigation & responsive mobile drawer
│   │   ├── InquiryModal.tsx      # Modal for viewing bookings & lease inquiries
│   │   ├── Logo.tsx              # Reusable responsive brand logo component
│   │   ├── PropertyCard.tsx      # Property display card with badges and actions
│   │   ├── SearchBar.tsx         # Dual-category smart search bar
│   │   └── ServiceCategoryCard.tsx # Service vertical category card
│   ├── data/                     # Mock data models (Phase 1 & 2 prototype)
│   │   ├── locations.ts          # Dar es Salaam neighborhood guides & coordinates
│   │   ├── properties.ts         # Sample verified residential listings
│   │   └── services.ts           # Sample verified service providers
│   ├── hooks/                    # Reusable React state & filter hooks
│   │   └── usePropertyFilter.ts  # Multi-parameter filter & search state machine
│   ├── layouts/                  # Base layout wrappers
│   │   └── MainLayout.tsx        # Standard viewport shell with Header & Footer
│   ├── pages/                    # Route-level page views (10 primary routes)
│   │   ├── AboutPage.tsx         # Mission, leadership & verification protocols
│   │   ├── AccommodationPage.tsx # Find Accommodation listing & filter view
│   │   ├── ContactPage.tsx       # Office details, inquiry form & support desk
│   │   ├── HomePage.tsx          # Master landing page
│   │   ├── HowItWorksPage.tsx    # 4-step expat relocation journey guide
│   │   ├── LoginPage.tsx         # User & provider authentication interface
│   │   ├── PropertyDetailPage.tsx# Full residence specification & viewing modal
│   │   ├── ProviderRegisterPage.tsx # Provider onboarding with document upload
│   │   ├── RegisterPage.tsx      # Expat user account registration
│   │   └── ServicesPage.tsx      # Relocation & settlement services directory
│   ├── services/                 # Decoupled Data Access Layer (Future Supabase Gateway)
│   │   ├── categoryService.ts   # Category and provider query functions
│   │   ├── propertyService.ts   # Property query, search, and filter methods
│   │   ├── supabaseClientPlaceholder.ts # Future Supabase schema & table blueprint
│   │   └── index.ts              # Services module index
│   ├── types/                    # TypeScript interfaces & domain models
│   │   └── index.ts              # Strongly-typed Property, Service, User models
│   ├── App.tsx                   # Main React Router configuration
│   ├── index.css                 # Global Tailwind CSS imports
│   └── main.tsx                  # Application entry point
├── .env.example                  # Environment variable blueprint
├── .gitignore                    # Comprehensive Git ignore rules
├── index.html                    # HTML5 shell with fonts, meta, and favicons
├── metadata.json                 # AI Studio deployment metadata
├── package.json                  # Dependencies and execution scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite 8 build & dev server configuration
```

---

## 5. Technology Stack & Dependencies

- **Framework:** React 19 (`react` ^19.0.1, `react-dom` ^19.0.1)
- **Language:** TypeScript 7 (`typescript` ^7.0.2)
- **Routing:** React Router DOM v7 (`react-router-dom` ^7.18.5)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite` ^4.3.3)
- **Build Tool:** Vite 8 (`vite` ^8.3.0)
- **Icons:** Lucide React (`lucide-react` ^0.546.0)
- **Animation:** Motion (`motion` ^12.23.24)

---

## 6. Local Development & Build Commands

Ensure you have **Node.js 20+** installed on your workstation.

```bash
# 1. Clone the repository (once created on GitHub)
git clone https://github.com/YOUR_ORGANIZATION/dar-trusted-expats-link.git
cd dar-trusted-expats-link

# 2. Install dependencies
npm install

# 3. Start local development server (runs on port 3000)
npm run dev

# 4. Run TypeScript type validation (zero errors expected)
npm run lint

# 5. Build for production (outputs optimized static bundle to /dist)
npm run build

# 6. Preview production build locally
npm run preview
```

---

## 7. Future Backend Integration Blueprint (Supabase)

The service layer in `src/services/` is architected to be swapped with a real Supabase client in Phase 4 without requiring refactoring in any consuming page or component:

```
UI Component / Hook
       │
       ▼
src/services/propertyService.ts
       │
   ┌───┴────────────────────────┐
   │                            │
[Phase 1 & 2]              [Phase 4]
Local Mock Data            Supabase Client (`@supabase/supabase-js`)
(SAMPLE_PROPERTIES)        `supabase.from('properties').select('*')`
```

### Planned PostgreSQL Schema
- `public.profiles`: Stores expat tenants, property managers, service providers, and administrators.
- `public.properties`: Stores residence listings, monthly rent, neighborhood, amenities, generator/water specifications.
- `public.property_images`: Image assets stored in Supabase Storage (`property-images` bucket).
- `public.service_providers`: Verified business registrations, license numbers (BRELA / TIN), categories, and ratings.
- `public.inquiries`: Secure inquiry routing without exposing owner personal phone numbers on the public web.

---

## 8. Security & Secret Management

- **Zero Credentials in Code:** No production secrets, database credentials, or private contact details are hardcoded.
- **Environment Isolation:** `.gitignore` excludes all `.env`, `.env.local`, and credential files. Only `.env.example` is committed.
- **Client Security:** Private landlord phone numbers and provider tax documents are protected behind server verification workflows.

---

## 9. License & Credits

- **Copyright:** &copy; 2026 Dar Trusted Expats Link. All rights reserved.
- **Brand Assets:** Official Dar Trusted Expats Link logo and marks are proprietary assets.
