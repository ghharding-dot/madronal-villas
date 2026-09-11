import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const galleryImages = ['hero','pool-dining','entrance','pool','lounge','kitchen','courtyard','bedroom-1','bedroom-2','bedroom-3','bedroom-4','bedroom-5','bedroom-6','bedroom-7','bedroom-9','bedroom-10'];
const highlights = [['10','Dormitorios'],['20','Huéspedes'],['1.300 m²','Superficie construida aprox.'],['36.000 m²','Parcela privada'],['Wi-Fi 7','Conectividad en toda la propiedad'],['24/7','Seguridad privada']];
const outdoorFeatures = ['Piscina climatizada','Jacuzzi','Cocina exterior y barbacoa','Jardines privados paisajísticos','Varias terrazas para comer','Aparcamiento privado seguro'];

export const metadata = {
  title: 'Villa Candela',
  description: 'Villa privada de diez dormitorios, parcela de 36.000 m², piscina climatizada, jacuzzi y personal residente en El Madroñal, Marbella.',
  alternates: { canonical: '/es/villa-candela', languages: { en: '/villa-candela', es: '/es/villa-candela', 'x-default': '/villa-candela' } }
};

export default function VillaCandela() { return <>
  <SiteHeader locale="es" languageHref="/villa-candela" />
  <main>
    <section className="villaHero candelaHero"><div className="shade" /><div className="wrap heroCopy"><p className="eyebrow">Villa Candela · El Madroñal</p><h1>Espacio generoso.<em>Privacidad absoluta.</em></h1><p>Una gran finca mediterránea de diez dormitorios, creada para familias, grupos privados y una vida relajada al aire libre.</p><div className="actions"><a className="btn gold" href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">Encontrar una villa disponible</a><a className="under" href="#gallery">Descubrir la villa</a></div></div></section>
    <section className="intro pad"><div className="wrap split"><p className="eyebrow darkEye">Villa Candela</p><div><h2>Una gran finca privada.<em>Creada para compartir.</em></h2><p className="lead">Villa Candela combina espacios amplios, jardines maduros y extensas terrazas con el servicio discreto y la seguridad propios de una residencia privada gestionada profesionalmente.</p></div></div></section>
    <section className="statsBand"><div className="wrap statsGrid">{highlights.map(([n,l])=><div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></section>
    <section className="pad editorial"><div className="wrap editorialGrid"><div><p className="eyebrow darkEye">La residencia</p><h2>Espacio para reunirse.<em>Rincones para retirarse.</em></h2></div><div className="copyColumns"><p>Aproximadamente 1.300 m² de superficie ofrecen amplios salones, diez dormitorios y una distribución flexible para familias y grupos privados.</p><p>Patios, terrazas cubiertas y jardines maduros conectan el interior con una finca de 36.000 m².</p></div></div></section>
    <section className="featureSplit darkFeature"><div className="featureImage candelaPoolFeature" /><div className="featureCopy"><p className="eyebrow">Vida al aire libre</p><h2>Largas sobremesas.<em>Atardeceres sin prisa.</em></h2><p>La piscina climatizada, el jacuzzi, la cocina exterior y la barbacoa forman el centro de la vida en Villa Candela. Sus terrazas ofrecen sol, sombra, conversación y comidas al aire libre durante todo el día.</p><ul className="cleanList">{outdoorFeatures.map(item=><li key={item}>{item}</li>)}</ul></div></section>
    <section className="pad lifestyleSection"><div className="wrap heading"><div><p className="eyebrow darkEye">La experiencia</p><h2>Privada por diseño.<em>Sencilla gracias al servicio.</em></h2></div><p>Villa Candela resulta ideal para vacaciones multigeneracionales, celebraciones, estancias ejecutivas y temporadas largas en Marbella.</p></div><div className="wrap lifestyleCards">
      <article><span>01</span><h3>Vida familiar</h3><p>Diez dormitorios, amplios terrenos y varias zonas de reunión permiten convivir sin renunciar al espacio personal.</p></article>
      <article><span>02</span><h3>Conectividad</h3><p>Fibra de 1 Gbps, Wi-Fi 7 e IPTV para trabajar, comunicarse y disfrutar del entretenimiento.</p></article>
      <article><span>03</span><h3>Atención profesional</h3><p>Personal residente, ropa de cama de calidad, limpieza y conserjería adaptadas a cada estancia.</p></article>
    </div></section>
    <section id="gallery" className="pad gallerySection"><div className="wrap galleryHeading"><p className="eyebrow darkEye">Galería</p><h2>Villa Candela.<em>Por dentro y por fuera.</em></h2></div><div className="wrap gallery">{galleryImages.map((image,index)=><figure className={index%7===0?'wide':''} key={image}><img src={`/images/candela/${image}.webp`} alt={`Villa Candela — ${image.replaceAll('-',' ')}`} /></figure>)}</div></section>
    <section className="featureSplit reverseFeature"><div className="featureImage candelaServiceFeature" /><div className="featureCopy lightCopy"><p className="eyebrow darkEye">Conserjería y servicio</p><h2>Su estancia.<em>Organizada personalmente.</em></h2><p>Desde traslados y compra previa hasta chefs privados, golf, bienestar y alquiler de yates, cada estancia puede adaptarse discretamente a sus planes.</p><div className="serviceList compactList"><span>Chefs privados</span><span>Traslados al aeropuerto</span><span>Limpieza diaria</span><span>Vehículos de lujo</span><span>Reservas de golf</span><span>Tratamientos de bienestar</span></div></div></section>
    <section id="enquire" className="contact pad"><div className="wrap contactGrid"><div><p className="eyebrow">Disponibilidad actual</p><h2>Villa Candela no está<em>actualmente en alquiler.</em></h2><p>Property Facilitators EuroAsia y The Luxury Villa Collection pueden preparar una selección personalizada de villas de lujo disponibles.</p></div><div><p>Indique fechas, número de huéspedes, dormitorios, zona preferida y presupuesto aproximado para recibir alternativas adecuadas.</p><div className="actions"><a className="btn gold" href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">Solicitar villas disponibles</a></div></div></div></section>
  </main><SiteFooter locale="es" />
</>; }
