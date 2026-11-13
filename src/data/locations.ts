import { NeighborhoodInfo } from '../types';

export const NEIGHBORHOOD_GUIDES: NeighborhoodInfo[] = [
  {
    id: 'masaki',
    name: 'Masaki',
    tagline: 'The vibrant heart of Dar es Salaam expat life and diplomatic living.',
    overview: 'Located on the tip of the Msasani Peninsula, Masaki is known for embassies, upscale coastal dining, cafes, international gyms, and modern luxury compounds.',
    expatAppeal: [
      'High concentration of international restaurants, cafes, and supermarkets',
      'Walking proximity to yacht clubs, sea-view walking routes, and wellness centers',
      'Extensive diplomatic security patrols and gated compound living',
      'Close to leading international preschools and IST Elementary Campus'
    ],
    popularFor: 'Luxury villas, beachfront apartments, and vibrant expat dining scene',
    distanceToAirportKm: 22,
    schoolsNearby: ['International School of Tanganyika (IST) Elementary', 'Braeburn International'],
    hospitalsNearby: ['Premier Care Clinic Masaki', 'IST Medical Clinic']
  },
  {
    id: 'oyster-bay',
    name: 'Oyster Bay',
    tagline: 'Prestigious, leafy avenues and serene oceanfront properties.',
    overview: 'Directly bordering Masaki, Oyster Bay offers historic tree-lined avenues, diplomatic residences, peaceful waterfront walkways along Toure Drive, and upscale low-density living.',
    expatAppeal: [
      'Serene residential ambiance with historic mature mahogany trees',
      'Direct coastal promenade along Coco Beach and Toure Drive',
      'Proximity to diplomatic missions, embassies, and cultural centers',
      'Rapid access to both Masaki Peninsula and Downtown'
    ],
    popularFor: 'Diplomatic compounds, ocean-view luxury apartments, and tranquil estates',
    distanceToAirportKm: 19,
    schoolsNearby: ['French International School Arthur Rimbaud', 'International School of Tanganyika'],
    hospitalsNearby: ['Aga Khan Hospital', 'Premier Care Clinic']
  },
  {
    id: 'mikocheni',
    name: 'Mikocheni',
    tagline: 'Spacious family compounds and accessible international schools.',
    overview: 'Just off the peninsula, Mikocheni offers generous lot sizes, private family villas, convenient shopping malls (Mayfair, Shoppers Plaza), and calm residential roads.',
    expatAppeal: [
      'Larger family compounds with spacious private gardens and pools',
      'Lower rental costs compared to the Peninsula while remaining very central',
      'Easy access to Bagamoyo Road and Ali Hassan Mwinyi Road arterial routes',
      'Diverse selection of standalone residences and newer gated communities'
    ],
    popularFor: 'Large family homes with gardens, value-for-money expat leases',
    distanceToAirportKm: 18,
    schoolsNearby: ['Feza International School', 'St. Constantine International'],
    hospitalsNearby: ['Regency Medical Centre', 'Kairuki Hospital']
  },
  {
    id: 'upanga',
    name: 'Upanga',
    tagline: 'Central convenience, major medical centers, and top-tier secondary schools.',
    overview: 'Strategically nestled between downtown Dar es Salaam and the ocean, Upanga is favored by diplomats, university lecturers, and medical professionals who value short commutes.',
    expatAppeal: [
      'Home to International School of Tanganyika (IST) Secondary Campus',
      'Walking distance to Aga Khan Hospital and premier medical centers',
      'Short 5-minute commute to downtown financial and ministry offices',
      'Modern high-rise residential towers with panoramic city and harbour views'
    ],
    popularFor: 'Modern apartment towers, short commutes, and IST Secondary families',
    distanceToAirportKm: 14,
    schoolsNearby: ['International School of Tanganyika (IST) Secondary', 'Shaaban Robert Secondary'],
    hospitalsNearby: ['Aga Khan Hospital (Main Campus)', 'Sanitas Hospital']
  },
  {
    id: 'mbezi-beach',
    name: 'Mbezi Beach',
    tagline: 'Relaxed coastal lifestyle with expansive beach properties.',
    overview: 'Extending north along the Indian Ocean coast, Mbezi Beach appeals to expats who prefer a tranquil coastal lifestyle, pristine beaches, and large detached beachfront residences.',
    expatAppeal: [
      'Direct beach frontage and water sports access',
      'Large private plots with ample space for swimming pools and gardens',
      'Community feel with relaxed beach resorts, seafood grills, and boat launches',
      'Home to Haven of Peace Academy (HOPAC)'
    ],
    popularFor: 'Detached beachfront villas, families seeking quiet coastal living',
    distanceToAirportKm: 28,
    schoolsNearby: ['Haven of Peace Academy (HOPAC)'],
    hospitalsNearby: ['Massana Hospital', 'Mbezi Beach Medical Center']
  }
];
