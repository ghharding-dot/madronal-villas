export default function sitemap() {
  const base = 'https://madronalvillas.com';
  const routes = [
    '',
    '/villa-candela',
    '/villa-lampara',
    '/el-madronal',
    '/local-knowledge',
    '/discover',
    '/discover/the-estate',
    '/discover/location',
    '/discover/conveniences',
    '/discover/shopping',
    '/discover/beaches',
    '/discover/dining',
    '/discover/outdoors',
    '/discover/family',
    '/discover/wellbeing',
    '/discover/day-trips',
    '/discover/services',
    '/concierge'
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/local-knowledge' || route === '/el-madronal' ? 0.9 : 0.7
  }));
}
