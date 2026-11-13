import { Property } from '../types';

export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: 'dtel-prop-01',
    title: 'Executive 4-Bedroom Villa with Private Pool & Garden',
    propertyType: 'Villa / Standalone',
    location: 'Masaki',
    addressSummary: 'Near Kahawa Cafe, Chole Road, Masaki Peninsula',
    priceUsd: 3500,
    priceTzsApprox: 9100000,
    bedrooms: 4,
    bathrooms: 4.5,
    sizeSqm: 420,
    furnishing: 'Furnished',
    featured: true,
    images: [
      '/assets/images/prop_masaki_villa_1794054958706.jpg',
      '/assets/images/prop_oysterbay_apt_1794054958034.jpg',
      '/assets/images/hero_dar_es_salaam_1794054957825.jpg'
    ],
    description: 'Immaculate contemporary residence situated in the tranquil diplomatic enclave of Masaki. Features floor-to-ceiling glass patio doors leading to a private chlorinated swimming pool, manicured tropical courtyard, chef-grade fitted kitchen with built-in European appliances, ensuite bathrooms for all bedrooms, and dedicated staff quarters.',
    amenities: [
      'Private Swimming Pool',
      'Standby Backup Generator (Full Load)',
      'Solar Water Heating',
      'Air Conditioning in All Rooms',
      'Spacious Veranda & Sun Deck',
      'Fitted Gourmet Kitchen',
      'Private Borehole Water Supply & Desalination',
      'Double Carport & Ample Parking'
    ],
    securityFeatures: [
      'Perimeter Electric Fencing',
      '24/7 Manned Security Guard Post',
      'High Boundary Walls',
      'Automated Access Gate',
      'CCTV Surveillance Ready'
    ],
    utilitiesIncluded: ['Water Supply', 'Gardening & Pool Maintenance'],
    minLeaseMonths: 12,
    isDemonstration: true,
    createdAt: '2026-10-15'
  },
  {
    id: 'dtel-prop-02',
    title: 'Modern 3-Bedroom Ocean-View Luxury Apartment',
    propertyType: 'Apartment',
    location: 'Oyster Bay',
    addressSummary: 'Toure Drive Waterfront, Oyster Bay',
    priceUsd: 2200,
    priceTzsApprox: 5720000,
    bedrooms: 3,
    bathrooms: 3,
    sizeSqm: 230,
    furnishing: 'Furnished',
    featured: true,
    images: [
      '/assets/images/prop_oysterbay_apt_1794054958034.jpg',
      '/assets/images/prop_masaki_villa_1794054958706.jpg',
      '/assets/images/hero_dar_es_salaam_1794054957825.jpg'
    ],
    description: 'Experience refined coastal living in this high-floor luxury flat overlooking the Indian Ocean. Features expansive floor-to-ceiling sliding glass doors opening onto an ocean breeze balcony, open-plan Italian dining and lounge, primary suite with ocean panoramas and walk-in dressing area, and direct lift access.',
    amenities: [
      'Panoramic Ocean Views',
      'Communal Infinity Pool',
      'Fully Equipped Fitness Gym',
      'Central High-Efficiency A/C',
      'Fiber Optic High-Speed Internet Ready',
      'Secure Underground Allocated Parking (2 Bays)',
      'Backup Generator',
      'Resident Lounge & Rooftop Terrace'
    ],
    securityFeatures: [
      'Biometric Access Control',
      '24/7 Uniformed Guard Service',
      'CCTV in All Common Areas',
      'Fire Suppression Sprinklers'
    ],
    utilitiesIncluded: ['Building Service Charge', 'Water Supply', 'Gym & Pool Access'],
    minLeaseMonths: 6,
    isDemonstration: true,
    createdAt: '2026-10-20'
  },
  {
    id: 'dtel-prop-03',
    title: 'Chic 2-Bedroom Serviced Residence with Balcony',
    propertyType: 'Apartment',
    location: 'Masaki',
    addressSummary: 'Haile Selassie Road, Masaki',
    priceUsd: 1650,
    priceTzsApprox: 4290000,
    bedrooms: 2,
    bathrooms: 2,
    sizeSqm: 145,
    furnishing: 'Furnished',
    featured: true,
    images: [
      '/assets/images/prop_oysterbay_apt_1794054958034.jpg',
      '/assets/images/hero_dar_es_salaam_1794054957825.jpg'
    ],
    description: 'Turnkey urban residence ideal for international consultants, diplomats, or couples. Walking distance to international restaurants, supermarkets, and wellness studios. Includes weekly housekeeping options, modern furniture package, and seamless workspace desk nook.',
    amenities: [
      'Turnkey Furnished',
      'Balcony with Greenery Views',
      'Dedicated Workstation / Desk',
      'Communal Swimming Pool',
      'Air Conditioning Throughout',
      'Laundry Washer & Dryer',
      'Generator & Water Storage'
    ],
    securityFeatures: [
      '24/7 Security Personnel',
      'Intercom Entry System',
      'Gated Compound'
    ],
    utilitiesIncluded: ['Water Supply', 'Refuse Collection', 'Compound Security'],
    minLeaseMonths: 6,
    isDemonstration: true,
    createdAt: '2026-10-28'
  },
  {
    id: 'dtel-prop-04',
    title: 'Spacious 4-Bedroom Family Residence in Gated Compound',
    propertyType: 'Townhouse',
    location: 'Mikocheni',
    addressSummary: 'Mikocheni B, Close to St. Constantine / Regency',
    priceUsd: 1900,
    priceTzsApprox: 4940000,
    bedrooms: 4,
    bathrooms: 3.5,
    sizeSqm: 310,
    furnishing: 'Semi-Furnished',
    featured: true,
    images: [
      '/assets/images/prop_masaki_villa_1794054958706.jpg',
      '/assets/images/hero_dar_es_salaam_1794054957825.jpg'
    ],
    description: 'Perfect for expat families requiring spacious indoor and outdoor living within easy reach of top international schools and diplomatic areas. Features enclosed private lawn, large open kitchen, family TV den on the upper floor, and serene neighborhood setting.',
    amenities: [
      'Private Walled Garden',
      'Covered Parking for 2 Cars',
      'Split A/C Units',
      'Solar Backed Water Heaters',
      'Underground Water Reservoir',
      'Domestic Staff Quarters'
    ],
    securityFeatures: [
      '24-Hour Compound Security Guard',
      'Razor Wire & Electric Perimeter',
      'Secure Night Gates'
    ],
    utilitiesIncluded: ['Security Guard Fee', 'Common Area Maintenance'],
    minLeaseMonths: 12,
    isDemonstration: true,
    createdAt: '2026-11-01'
  },
  {
    id: 'dtel-prop-05',
    title: 'Elegant 3-Bedroom Penthouse with Wrap-around Terrace',
    propertyType: 'Penthouse',
    location: 'Upanga',
    addressSummary: 'Upanga West, near International School of Tanganyika campus',
    priceUsd: 2600,
    priceTzsApprox: 6760000,
    bedrooms: 3,
    bathrooms: 3.5,
    sizeSqm: 340,
    furnishing: 'Furnished',
    featured: false,
    images: [
      '/assets/images/prop_oysterbay_apt_1794054958034.jpg',
      '/assets/images/hero_dar_es_salaam_1794054957825.jpg'
    ],
    description: 'Top-tier penthouse with panoramic views of the Dar es Salaam skyline and coastal channel. Features vast entertainment terrace, dual living rooms, Italian marble flooring, and master suite with deep soaking bathtub.',
    amenities: [
      'Wraparound Sky Terrace',
      'Elevator with Keycard Access',
      'Backup Power Generator',
      'Gym & Sauna Access',
      'Private Storage Unit',
      'Reserved Covered Parking'
    ],
    securityFeatures: [
      'Card Controlled Lifts',
      '24/7 Concierge & Security',
      'CCTV Monitoring'
    ],
    utilitiesIncluded: ['Building Service Charge', 'Water'],
    minLeaseMonths: 12,
    isDemonstration: true,
    createdAt: '2026-10-18'
  },
  {
    id: 'dtel-prop-06',
    title: 'Coastal 5-Bedroom Detached Beach Villa with Lawn',
    propertyType: 'Beach House',
    location: 'Mbezi Beach',
    addressSummary: 'Mbezi Beach Africana, Direct Coastal Access',
    priceUsd: 3800,
    priceTzsApprox: 9880000,
    bedrooms: 5,
    bathrooms: 5,
    sizeSqm: 520,
    furnishing: 'Semi-Furnished',
    featured: false,
    images: [
      '/assets/images/prop_masaki_villa_1794054958706.jpg',
      '/assets/images/hero_dar_es_salaam_1794054957825.jpg'
    ],
    description: 'Expansive private retreat with direct pedestrian access to the beach. Surrounded by swaying coconut palms, large green lawn for children and entertaining, private pool, separate 2-room guest chalet, and reinforced security setup.',
    amenities: [
      'Direct Beach Access Path',
      'Private Swimming Pool',
      'Detached Guest / Staff Cottage',
      'Lush Tropical Garden',
      'Industrial Capacity Generator',
      'High Volume Water Storage Tanks'
    ],
    securityFeatures: [
      'Substantial Perimeter Walls',
      'Electric Fencing',
      'Guard House with Rest Facilities',
      'Security Sensor Beams'
    ],
    utilitiesIncluded: ['Garden & Pool Care'],
    minLeaseMonths: 12,
    isDemonstration: true,
    createdAt: '2026-10-05'
  },
  {
    id: 'dtel-prop-07',
    title: 'Modern Minimalist 1-Bedroom Studio Apartment',
    propertyType: 'Apartment',
    location: 'Msasani',
    addressSummary: 'Kimweri Avenue, Msasani Village area',
    priceUsd: 950,
    priceTzsApprox: 2470000,
    bedrooms: 1,
    bathrooms: 1,
    sizeSqm: 68,
    furnishing: 'Furnished',
    featured: false,
    images: [
      '/assets/images/prop_oysterbay_apt_1794054958034.jpg',
      '/assets/images/hero_dar_es_salaam_1794054957825.jpg'
    ],
    description: 'Smart, efficient and newly finished modern 1-bedroom flat suitable for single expatriates, NGO fellows or visiting professionals. Quiet compound with reliable utilities, fast fiber internet connection, and easy access to both Peninsula and downtown.',
    amenities: [
      'Smart TV & High Speed WiFi Ready',
      'Split Air Conditioner',
      'Compact Fitted Kitchenette',
      'Washing Machine',
      'Generator Power Backup',
      'One Gated Parking Space'
    ],
    securityFeatures: [
      'Night Watchman',
      'Day Caretaker',
      'Gated Compound'
    ],
    utilitiesIncluded: ['Water', 'Trash Collection'],
    minLeaseMonths: 3,
    isDemonstration: true,
    createdAt: '2026-11-03'
  },
  {
    id: 'dtel-prop-08',
    title: 'Peaceful 3-Bedroom Garden Duplex in Ada Estate',
    propertyType: 'Duplex',
    location: 'Ada Estate',
    addressSummary: 'Near French School, Ada Estate, Kinondoni',
    priceUsd: 1800,
    priceTzsApprox: 4680000,
    bedrooms: 3,
    bathrooms: 2.5,
    sizeSqm: 210,
    furnishing: 'Furnished',
    featured: false,
    images: [
      '/assets/images/prop_masaki_villa_1794054958706.jpg',
      '/src/assets/images/prop_oysterbay_apt_1794054958034.jpg'
    ],
    description: 'Tree-lined neighborhood residence minutes from the French International School (Arthur Rimbaud). Peaceful community, private rear patio, hardwood staircase, renovated open kitchen, and friendly expat neighborhood atmosphere.',
    amenities: [
      'Private Paved Patio Garden',
      'Walk to French School',
      'Full Generator Backup',
      'Split A/C in All Rooms',
      'Kitchen with Dishwasher & Oven',
      'Dedicated Domestic Staff Room'
    ],
    securityFeatures: [
      '24/7 Security Guards',
      'Perimeter Wall & Electric Fence',
      'Neighborhood Security Patrol'
    ],
    utilitiesIncluded: ['Compound Security', 'Water Supply'],
    minLeaseMonths: 6,
    isDemonstration: true,
    createdAt: '2026-10-12'
  }
];
