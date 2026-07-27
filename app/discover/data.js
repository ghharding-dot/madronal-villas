export const destinations = [
  { slug: 'the-estate', title: 'The Estate', eyebrow: 'Private by nature', image: '/images/lampara/aerial.webp', intro: 'Discover the quiet roads, mature woodland and discreet character of El Madroñal.' },
  { slug: 'location', title: 'Location', eyebrow: 'Perfectly placed', image: '/images/candela/driveway.webp', intro: 'Mountain calm with Marbella, Puerto Banús and the Mediterranean close at hand.' },
  { slug: 'conveniences', title: 'Conveniences', eyebrow: 'Effortless stays', image: '/images/discover/conveniences.webp', intro: 'Everyday essentials and considered services within easy reach of the estate.' },
  { slug: 'shopping', title: 'Shopping', eyebrow: 'Marbella style', image: '/images/discover/shopping.webp', intro: 'From independent boutiques to the celebrated houses of Puerto Banús.' },
  { slug: 'beaches', title: 'Beaches', eyebrow: 'The Mediterranean', image: '/images/discover/beaches.webp', intro: 'Golden sand, quiet coves and elegant beach clubs along the Costa del Sol.' },
  { slug: 'dining', title: 'Dining', eyebrow: 'Taste Andalucía', image: '/images/discover/dining.webp', intro: 'A region of relaxed chiringuitos, exceptional produce and destination restaurants.' },
  { slug: 'outdoors', title: 'Outdoors', eyebrow: 'Into the landscape', image: '/images/discover/outdoors.webp', intro: 'Mountain trails, championship golf and days lived beneath open skies.' },
  { slug: 'family', title: 'Family', eyebrow: 'Time together', image: '/images/discover/family.webp', intro: 'Unhurried experiences for every generation, from the coast to the countryside.' },
  { slug: 'wellbeing', title: 'Wellbeing', eyebrow: 'Restore your rhythm', image: '/images/discover/wellbeing.webp', intro: 'Private wellness, fresh mountain air and the freedom to slow down.' },
  { slug: 'day-trips', title: 'Day Trips', eyebrow: 'Beyond Marbella', image: '/images/discover/day-trips.webp', intro: 'White villages, historic cities and remarkable landscapes within a day’s reach.' },
  { slug: 'services', title: 'Services', eyebrow: 'Personally arranged', image: '/images/discover/services.webp', intro: 'Thoughtful local support to make every day of your stay feel effortless.' }
];
export const destinationBySlug = Object.fromEntries(destinations.map((item) => [item.slug, item]));
