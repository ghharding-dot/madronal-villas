export const destinations = [
  { slug:'la-urbanizacion', englishSlug:'the-estate', title:'La urbanización', eyebrow:'Privada por naturaleza', image:'/images/lampara/aerial.webp', intro:'Descubra las tranquilas carreteras, el bosque maduro y el carácter discreto de El Madroñal.' },
  { slug:'ubicacion', englishSlug:'location', title:'Ubicación', eyebrow:'Perfectamente situada', image:'/images/candela/driveway.webp', intro:'Calma de montaña con Marbella, Puerto Banús y el Mediterráneo muy cerca.' },
  { slug:'servicios-cercanos', englishSlug:'conveniences', title:'Servicios cercanos', eyebrow:'Estancias sencillas', image:'/images/discover/conveniences.webp', intro:'Todo lo cotidiano y servicios cuidadosamente elegidos a poca distancia de la urbanización.' },
  { slug:'compras', englishSlug:'shopping', title:'Compras', eyebrow:'Estilo Marbella', image:'/images/discover/shopping.webp', intro:'Desde boutiques independientes hasta las firmas internacionales de Puerto Banús.' },
  { slug:'playas', englishSlug:'beaches', title:'Playas', eyebrow:'El Mediterráneo', image:'/images/discover/beaches.webp', intro:'Arena dorada, calas tranquilas y elegantes beach clubs a lo largo de la Costa del Sol.' },
  { slug:'gastronomia', englishSlug:'dining', title:'Gastronomía', eyebrow:'Sabores de Andalucía', image:'/images/discover/dining.webp', intro:'Una región de chiringuitos relajados, producto excepcional y restaurantes de destino.' },
  { slug:'aire-libre', englishSlug:'outdoors', title:'Aire libre', eyebrow:'En plena naturaleza', image:'/images/discover/outdoors.webp', intro:'Senderos de montaña, campos de golf de primer nivel y días bajo el cielo abierto.' },
  { slug:'familia', englishSlug:'family', title:'Familia', eyebrow:'Tiempo juntos', image:'/images/discover/family.webp', intro:'Experiencias sin prisa para todas las generaciones, desde la costa hasta el campo.' },
  { slug:'bienestar', englishSlug:'wellbeing', title:'Bienestar', eyebrow:'Recupere su ritmo', image:'/images/discover/wellbeing.webp', intro:'Bienestar privado, aire puro de montaña y la libertad de bajar el ritmo.' },
  { slug:'excursiones', englishSlug:'day-trips', title:'Excursiones', eyebrow:'Más allá de Marbella', image:'/images/discover/day-trips.webp', intro:'Pueblos blancos, ciudades históricas y paisajes extraordinarios para descubrir en un día.' },
  { slug:'servicios', englishSlug:'services', title:'Servicios', eyebrow:'Organizados personalmente', image:'/images/discover/services.webp', intro:'Atención local para que cada día de su estancia resulte sencillo.' }
];
export const destinationBySlug = Object.fromEntries(destinations.map(item=>[item.slug,item]));
