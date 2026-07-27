export const localAreaPages = [
  {
    slug: 'everyday-conveniences',
    title: 'Everyday Conveniences',
    eyebrow: 'Daily Life',
    intro: 'El Madroñal offers the calm of a private country estate without sacrificing the practical comforts of everyday life.',
    sections: [
      { title: 'Within a few minutes', items: ['Supermarkets and gourmet food shops', 'Bakeries, pharmacies and banks', 'Cafés and international restaurants', 'Essential household and professional services'] },
      { title: 'San Pedro de Alcántara', items: ['Town-centre shopping and weekly markets', 'A broad choice of restaurants and cafés', 'Boutiques, services and everyday retail', 'Straightforward access to the A-7 coastal road'] },
    ],
  },
  {
    slug: 'shopping-and-markets',
    title: 'Shopping & Markets',
    eyebrow: 'Retail & Produce',
    intro: 'From fresh local produce to international luxury retail, the area offers both convenience and variety.',
    sections: [
      { title: 'Local shopping', items: ['Weekly markets in San Pedro and nearby towns', 'Fresh fruit, vegetables, flowers and artisan products', 'Major supermarkets and gourmet food halls', 'Independent boutiques and specialist stores'] },
      { title: 'Luxury retail', items: ['Designer boutiques in Puerto Banús', 'Marbella shopping centres and department stores', 'Interior design, jewellery and lifestyle stores', 'Private shopping and concierge assistance on request'] },
    ],
  },
  {
    slug: 'beaches-dining-and-lifestyle',
    title: 'Beaches, Dining & Lifestyle',
    eyebrow: 'The Mediterranean Coast',
    intro: 'The coast below El Madroñal brings together beach life, dining, marinas and the social energy of Marbella.',
    sections: [
      { title: 'By the sea', items: ['Beachfront restaurants and traditional chiringuitos', 'Scenic promenades and sandy beaches', 'Well-known beach clubs along the Golden Mile', 'Relaxed family beaches and quieter coastal spots'] },
      { title: 'Dining and nightlife', items: ['Fine dining in Marbella and Puerto Banús', 'International cuisine and local Andalusian restaurants', 'Marina-side bars and evening venues', 'Private chefs and in-villa dining available through concierge'] },
    ],
  },
  {
    slug: 'sports-and-outdoor-activities',
    title: 'Sports & Outdoor Activities',
    eyebrow: 'Active Living',
    intro: 'Golf, racquet sports, mountain routes and Mediterranean water activities are all within easy reach.',
    sections: [
      { title: 'Land', items: ['A wide choice of golf courses within a short drive', 'Tennis, padel and private sports clubs', 'Horse riding and countryside trails', 'Hiking, cycling and guided mountain routes', 'Gyms, yoga and Pilates studios'] },
      { title: 'Sea', items: ['Private yacht charters and coastal cruises', 'Paddleboarding, jet skiing and water skiing', 'Marina access in Puerto Banús and Marbella', 'Family boat trips and water-based excursions'] },
    ],
  },
  {
    slug: 'healthcare-and-wellbeing',
    title: 'Healthcare & Wellbeing',
    eyebrow: 'Care & Wellness',
    intro: 'Residents and guests benefit from strong private and public healthcare provision across Marbella and the western Costa del Sol.',
    sections: [
      { title: 'Healthcare access', items: ['Private and public hospitals nearby', 'International medical and dental clinics', 'Specialist consultations and diagnostic services', 'At-home medical call-out options'] },
      { title: 'Wellbeing', items: ['Spa and wellness centres', 'Massage and beauty treatments at the villa', 'Personal training and physiotherapy', 'Preventative health and nutrition support'] },
    ],
  },
  {
    slug: 'family-lifestyle-appeal',
    title: 'Family Lifestyle Appeal',
    eyebrow: 'For Families',
    intro: 'El Madroñal combines a peaceful natural setting with easy access to schools, activities and family services.',
    sections: [
      { title: 'Education', items: ['International and bilingual schools within reach', 'Private colleges and established local schools', 'School transport and family support services', 'A secure and low-density residential environment'] },
      { title: 'Family activities', items: ['Water parks and inflatable sea parks', 'Zoos, safari parks and nature attractions', 'Go-karting and outdoor adventure activities', 'Safe green surroundings for time outdoors'] },
    ],
  },
  {
    slug: 'travel-and-day-trips',
    title: 'Travel & Day Trips',
    eyebrow: 'Beyond Marbella',
    intro: 'El Madroñal is well positioned for international travel and for exploring Andalucía, the Mediterranean and northern Morocco.',
    sections: [
      { title: 'International access', items: ['Málaga Airport in approximately 45–60 minutes', 'Gibraltar Airport as an alternative connection', 'High-speed rail connections from Málaga', 'Marinas for private and chartered travel'] },
      { title: 'Day trips', items: ['Ronda and the white villages of Andalucía', 'Málaga for museums, culture and dining', 'Tarifa and the Strait of Gibraltar', 'Seville, Córdoba, Granada and Cádiz', 'Fast ferry connections to Tangier', 'Sierra Nevada for winter skiing'] },
    ],
  },
  {
    slug: 'at-home-services',
    title: 'At-Home Services',
    eyebrow: 'Private Concierge',
    intro: 'Many services can be arranged privately at the villa, allowing guests to enjoy the estate without unnecessary travel.',
    sections: [
      { title: 'Personal services', items: ['Massage, wellness and beauty treatments', 'Hair styling and grooming', 'Personal trainers, yoga and Pilates instructors', 'Private medical and physiotherapy visits'] },
      { title: 'Hospitality and lifestyle', items: ['Private chefs and tailored catering', 'Housekeeping and laundry support', 'Drivers, transfers and vehicle hire', 'Shopping, reservations and itinerary planning', 'Security and family support services'] },
    ],
  },
];

export function getLocalAreaPage(slug) {
  return localAreaPages.find((page) => page.slug === slug);
}
