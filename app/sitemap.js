export default function sitemap() {
  const base = 'https://www.madronalvillas.com';
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
    '/concierge',
    '/es',
    '/es/villa-candela',
    '/es/villa-lampara',
    '/es/el-madronal',
    '/es/conocimiento-local',
    '/es/descubrir',
    '/es/descubrir/la-urbanizacion',
    '/es/descubrir/ubicacion',
    '/es/descubrir/servicios-cercanos',
    '/es/descubrir/compras',
    '/es/descubrir/playas',
    '/es/descubrir/gastronomia',
    '/es/descubrir/aire-libre',
    '/es/descubrir/familia',
    '/es/descubrir/bienestar',
    '/es/descubrir/excursiones',
    '/es/descubrir/servicios',
    '/es/conserjeria'
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/local-knowledge' || route === '/el-madronal' ? 0.9 : 0.7
  }));
}
