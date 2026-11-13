import { ServiceCategory, ServiceProvider } from '../types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'apartments-houses',
    title: 'Apartments & Houses',
    shortDescription: 'Long-term residential leases, diplomatic villas, coastal apartments, and serviced residences.',
    detailedDescription: 'Find vetted rental accommodation across Dar es Salaam premier expatriate residential corridors including Masaki, Oyster Bay, Mikocheni, Upanga, and Mbezi Beach.',
    iconName: 'Building2',
    providerCountEstimated: 24,
    popularSubcategories: ['Furnished Apartments', 'Diplomatic Villas', 'Serviced Long-Stay', 'Townhouse Compounds']
  },
  {
    id: 'international-schools',
    title: 'International Schools',
    shortDescription: 'IB, British, French, and American curriculum international schools and early childhood centers.',
    detailedDescription: 'Access accredited international education options in Dar es Salaam, including International School of Tanganyika (IST), French School Arthur Rimbaud, Braeburn, and Haven of Peace Academy (HOPAC).',
    iconName: 'GraduationCap',
    providerCountEstimated: 12,
    popularSubcategories: ['IB Diploma Programmes', 'British National Curriculum', 'French Bilingual', 'Kindergarten & Montessori']
  },
  {
    id: 'moving-relocation',
    title: 'Moving & Relocation',
    shortDescription: 'International shipping customs clearance, door-to-door relocation, and pet immigration.',
    detailedDescription: 'Professional international packing, freight forwarding, Dar es Salaam port clearing, unpacking, and dedicated expatriate relocation coordinators.',
    iconName: 'Truck',
    providerCountEstimated: 9,
    popularSubcategories: ['International Freight & Clearance', 'Local Household Moving', 'Pet Relocation Services', 'Orientation & Settle-In Tours']
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    shortDescription: 'International medical clinics, English-speaking specialists, emergency services, and pharmacies.',
    detailedDescription: 'Quality healthcare facilities catering to the international community, including Aga Khan Hospital, Premier Care Clinic, IST Clinic, and specialized pediatric care.',
    iconName: 'HeartPulse',
    providerCountEstimated: 15,
    popularSubcategories: ['International Clinics', 'Pediatric Specialists', 'Dental & Orthodontics', 'Emergency Ambulance Services']
  },
  {
    id: 'home-services',
    title: 'Home Services',
    shortDescription: 'Trusted domestic staff agencies, trusted housekeeping, pool maintenance, and electrical backup repair.',
    detailedDescription: 'Verified home service technicians, generator technicians, air-conditioner servicing, plumbing, pool cleaners, and vetted housekeeping assistance.',
    iconName: 'Wrench',
    providerCountEstimated: 31,
    popularSubcategories: ['Generator Maintenance', 'A/C Servicing & Gas Refill', 'Domestic Staff Recruitment', 'Swimming Pool Care']
  },
  {
    id: 'transport',
    title: 'Transport',
    shortDescription: 'Airport transfers, dedicated drivers, 4WD vehicle leasing, and safari-ready rentals.',
    detailedDescription: 'Reliable private transit solutions, Julius Nyerere International Airport (DAR) meet-and-greet transfers, monthly chauffeured drivers, and long-term vehicle rentals.',
    iconName: 'Car',
    providerCountEstimated: 18,
    popularSubcategories: ['Vetted Dedicated Chauffeurs', 'Airport VIP Transfers', 'Long-term 4x4 Vehicle Lease', 'Corporate Shuttle Services']
  },
  {
    id: 'internet-connectivity',
    title: 'Internet & Connectivity',
    shortDescription: 'High-speed fiber optic providers, 5G backup routers, local eSIM setup, and enterprise WiFi.',
    detailedDescription: 'Ensure reliable high-speed work-from-home connectivity in Dar es Salaam through leading fiber networks, dual-failover 4G/5G routers, and local mobile SIM assistance.',
    iconName: 'Wifi',
    providerCountEstimated: 8,
    popularSubcategories: ['Residential Fiber Optic', 'LTE & 5G Backup Routers', 'Home Mesh WiFi Setup', 'Expat Mobile Sim & eSIM']
  },
  {
    id: 'other-expat-services',
    title: 'Other Expat Services',
    shortDescription: 'Visa & work permit advisors, Swahili language tutors, banking assistance, and social expat clubs.',
    detailedDescription: 'Essential auxiliary services to ease your transition: resident permit advisory, corporate registration, cultural orientation, Swahili language lessons, and fitness & yacht club memberships.',
    iconName: 'Compass',
    providerCountEstimated: 16,
    popularSubcategories: ['Work Permit & Visa Advisory', 'Private Swahili Tutoring', 'Banking & Currency Assistance', 'Social & Yacht Club Introductions']
  }
];

export const SAMPLE_SERVICE_PROVIDERS: ServiceProvider[] = [
  {
    id: 'sp-01',
    name: 'Kilimanjaro Relocation & Logistics (Demo)',
    categoryId: 'moving-relocation',
    categoryTitle: 'Moving & Relocation',
    location: 'Masaki & Dar Port Corridor',
    description: 'Providing seamless door-to-door international moving, customs clearance at Dar es Salaam Port, and white-glove home unpack for diplomats and corporate assignees.',
    servicesOffered: ['International Packing', 'Port Customs Clearance', 'Temporary Storage', 'Settlement Handover'],
    languagesSpoken: ['English', 'Swahili', 'French'],
    experienceYears: 14,
    verificationStatus: 'Verified Partner (Sample)',
    isDemonstration: true
  },
  {
    id: 'sp-02',
    name: 'Peninsula Home & Generator Services (Demo)',
    categoryId: 'home-services',
    categoryTitle: 'Home Services',
    location: 'Oyster Bay & Masaki',
    description: 'Specialized maintenance for expatriate residences: backup generator servicing, multi-split A/C maintenance, water pump repair, and electrical compliance.',
    servicesOffered: ['Generator Overhaul & Fueling', 'Air Conditioning Service', 'Inverter & Solar Diagnostics', 'Emergency Plumbing'],
    languagesSpoken: ['English', 'Swahili'],
    experienceYears: 9,
    verificationStatus: 'Verified Partner (Sample)',
    isDemonstration: true
  },
  {
    id: 'sp-03',
    name: 'Dar Executive Chauffeur & Fleet (Demo)',
    categoryId: 'transport',
    categoryTitle: 'Transport',
    location: 'Dar es Salaam Metropolitan Area',
    description: 'Vetted, English-speaking professional drivers and modern SUVs for school runs, diplomatic duties, daily office commutes, and airport transfers.',
    servicesOffered: ['Monthly Chauffeur Placement', 'DAR Airport Meet & Greet', 'Toyota Land Cruiser Lease', 'Cross-country Safari Transit'],
    languagesSpoken: ['English', 'Swahili'],
    experienceYears: 11,
    verificationStatus: 'Verified Partner (Sample)',
    isDemonstration: true
  },
  {
    id: 'sp-04',
    name: 'Swahili Bridge Language & Cultural Hub (Demo)',
    categoryId: 'other-expat-services',
    categoryTitle: 'Other Expat Services',
    location: 'Mikocheni & Online',
    description: 'Tailored conversational Swahili lessons for expatriate professionals, families, and diplomats. Flexible schedule at your home, office, or online.',
    servicesOffered: ['Conversational Swahili for Expats', 'Workplace Swahili', 'Cultural Etiquette Guidance', 'Domestic Staff Communication Course'],
    languagesSpoken: ['English', 'Swahili', 'German'],
    experienceYears: 8,
    verificationStatus: 'Verified Partner (Sample)',
    isDemonstration: true
  },
  {
    id: 'sp-05',
    name: 'Coastal Fiber & Secure Networking (Demo)',
    categoryId: 'internet-connectivity',
    categoryTitle: 'Internet & Connectivity',
    location: 'Masaki, Oyster Bay, Mikocheni',
    description: 'High-reliability home networking solutions, dual-WAN automatic failover (Fiber + 5G backup), and home WiFi mesh installation.',
    servicesOffered: ['Fiber Installation Liaison', 'Uninterruptible Dual-WAN Setup', 'Home Office WiFi Mesh', 'Remote Work Tech Support'],
    languagesSpoken: ['English', 'Swahili'],
    experienceYears: 6,
    verificationStatus: 'Verified Partner (Sample)',
    isDemonstration: true
  },
  {
    id: 'sp-06',
    name: 'Indian Ocean Expat Medical Advisory (Demo)',
    categoryId: 'healthcare',
    categoryTitle: 'Healthcare',
    location: 'Masaki & Upanga',
    description: 'Connecting international families with accredited general practitioners, pediatric vaccination schedules, travel immunizations, and medical repatriation plans.',
    servicesOffered: ['Pediatric Consultations', 'Travel Medicine & Malaria Prophylaxis', 'Emergency Medical Coordination', 'Chronic Care Management'],
    languagesSpoken: ['English', 'Swahili', 'Hindi'],
    experienceYears: 16,
    verificationStatus: 'Verified Partner (Sample)',
    isDemonstration: true
  }
];
