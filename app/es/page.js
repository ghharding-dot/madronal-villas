import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const standards = [
  'Internet de fibra de 1 Gbps', 'Wi-Fi 7 en toda la propiedad', 'Seguridad privada 24 horas',
  'Personal profesional residente', 'Piscinas climatizadas', 'Ropa de cama y toallas de calidad cinco estrellas',
  'Alojamiento con licencia turística', 'Aparcamiento privado'
];

export const metadata = {
  title: 'Más de 100 villas de lujo en alquiler en Marbella',
  description: 'Acceso a más de 100 villas de lujo en alquiler en Marbella, El Madroñal, Benahavís y la Costa del Sol. Solicite una selección para sus fechas.',
  alternates: { canonical: '/es', languages: { en: '/', es: '/es', 'x-default': '/' } },
  openGraph: { title: 'Madroñal Villas — Más de 100 villas en alquiler', description: 'Más de 100 villas de lujo en alquiler en Marbella y la Costa del Sol, con selección personalizada.', url: '/es' }
};

export default function Inicio() {
  return <main>
    <SiteHeader locale="es" languageHref="/" />
    <section className="hero"><div className="shade" /><div className="wrap heroCopy">
      <p className="eyebrow">Madroñal Villas · Más de 100 villas en alquiler</p>
      <h1>Villas de lujo en alquiler.<em>Marbella y Costa del Sol.</em></h1>
      <p>Acceda a más de 100 villas de lujo en alquiler en Marbella, Benahavís, El Madroñal y la Costa del Sol. Comparta sus fechas y requisitos para recibir una selección personalizada.</p>
      <div className="actions"><Link className="btn gold" href="/es/alquiler-villas-lujo">Explorar más de 100 villas</Link><a className="under" href="https://www.pfeuroasia.com/luxury-villa-rentals?utm_source=madronalvillas&amp;utm_medium=referral&amp;utm_campaign=homepage_rentals_es#villa-enquiry">Solicitar una selección</a></div>
    </div></section>

    <section className="rentalCollectionFeature">
      <div className="rentalCollectionImage" role="img" aria-label="Piscina y terraza de una villa de lujo en Marbella" />
      <div className="rentalCollectionCopy">
        <p className="eyebrow">La colección ampliada de alquiler</p>
        <h2>¿Busca una villa de lujo?<em>Tenemos más de 100 opciones.</em></h2>
        <p className="rentalLead">Indíquenos sus fechas, huéspedes, zona preferida y presupuesto. Buscaremos la villa adecuada en la colección ampliada, confirmando la disponibilidad para su estancia.</p>
        <p>A través de Property Facilitators EuroAsia, en colaboración con The Luxury Villa Collection, ofrecemos acceso a más de 100 villas excepcionales en Marbella, Benahavís, El Madroñal, La Zagaleta, la Milla de Oro y otras zonas prime de la Costa del Sol.</p>
        <div className="rentalProof" aria-label="Datos de la colección de alquiler"><strong>100+</strong><span>Villas de lujo</span><i /><strong>Marbella</strong><span>y Costa del Sol</span></div>
        <div className="actions"><Link className="btn gold" href="/es/alquiler-villas-lujo">Descubrir la colección</Link></div>
      </div>
    </section>

    <section className="intro pad"><div className="wrap split"><p className="eyebrow darkEye">La colección</p><div>
      <h2>Experiencia local.<em>Una colección más amplia.</em></h2>
      <p className="lead">Nuestra experiencia gestionando Villa Candela y Villa Lámpara en El Madroñal guía nuestra selección personal de villas en Marbella. Ambas son actualmente residencias privadas y no aceptan reservas; seguimos atendiendo consultas para la colección de más de 100 villas.</p>
    </div></div></section>

    <section id="villas" className="pad"><div className="wrap">
      <div className="heading"><div><p className="eyebrow darkEye">Residencias privadas · Fuera de alquiler</p><h2>Descubra nuestras<em>residencias en El Madroñal.</em></h2></div><p>Villa Candela y Villa Lámpara son actualmente residencias privadas y no aceptan reservas. Conozca las viviendas y la urbanización que forman parte de nuestra experiencia local.</p></div>
      <div className="cards">
        <Link className="villa candela" href="/es/villa-candela"><div><p className="eyebrow">10 dormitorios · 36.000 m² de parcela</p><h3>Villa Candela</h3><p>Una gran residencia privada con amplios jardines, generosas zonas de reunión, cocina exterior y jacuzzi.</p><span>Descubrir Villa Candela →</span></div></Link>
        <Link className="villa lampara" href="/es/villa-lampara"><div><p className="eyebrow">7 dormitorios · Piscina infinita</p><h3>Villa Lámpara</h3><p>Una villa elegante con vistas panorámicas a la montaña, piscina infinita climatizada de agua salada y magníficas zonas exteriores.</p><span>Descubrir Villa Lámpara →</span></div></Link>
      </div>
    </div></section>

    <section id="standards" className="services pad"><div className="wrap servicesGrid"><div className="serviceImg" /><div>
      <p className="eyebrow darkEye">El estándar Madroñal</p><h2>Confort sin<em>concesiones.</em></h2>
      <p className="lead">Nuestra experiencia en Candela y Lámpara se construyó sobre estos estándares. Las instalaciones y los servicios de la colección ampliada varían según la villa y se confirmarán con su selección.</p>
      <div className="serviceList">{standards.map(item => <span key={item}>{item}</span>)}</div>
      <div className="actions"><Link className="btn gold" href="/es/conserjeria">Servicios de conserjería</Link></div>
    </div></div></section>

    <section className="location" id="location"><div className="locationImg" /><div className="locationCopy">
      <p className="eyebrow">El Madroñal · Marbella</p><h2>Privado por naturaleza.<em>Conectado por ubicación.</em></h2>
      <p>El Madroñal es una de las urbanizaciones cerradas más consolidadas de Marbella, conocida por sus paisajes maduros, vistas a la montaña y absoluta discreción.</p>
      <dl><div><dt>Marbella</dt><dd>Aproximadamente 15 minutos</dd></div><div><dt>Puerto Banús</dt><dd>Aproximadamente 15 minutos</dd></div><div><dt>Aeropuerto de Málaga</dt><dd>Aproximadamente 45 minutos</dd></div></dl>
      <div className="actions"><Link className="btn gold" href="/es/el-madronal">Descubrir El Madroñal</Link></div>
    </div></section>

    <section className="localKnowledgeTeaser pad"><div className="wrap localKnowledgeGrid"><div><p className="eyebrow darkEye">Conocimiento local · Desde 2010</p><h2>El Madroñal,<em>conocido desde dentro.</em></h2></div><div className="localKnowledgeCopy">
      <p className="lead">En El Madroñal importan los detalles: qué acceso conviene a cada vivienda, cómo cambia la luz según la orientación, dónde se encuentran las parcelas más privadas y qué exige cuidar una gran propiedad en la ladera durante todo el año.</p>
      <p>Nuestro conocimiento nace de más de una década gestionando viviendas, recibiendo huéspedes y asesorando a propietarios dentro de la urbanización; no de un mapa ni de un anuncio inmobiliario.</p>
      <div className="knowledgePoints" aria-label="Áreas de conocimiento local"><span>Accesos y orientación</span><span>Propiedad y gestión de villas</span><span>Alquiler, compra y venta</span></div>
      <div className="actions"><Link className="btn gold" href="/es/conocimiento-local">Explorar el conocimiento local</Link></div>
    </div></div></section>

    <section className="collectionCta pad"><div className="wrap collectionInner"><p className="eyebrow darkEye">Propiedad internacional y traslado</p><h2>Desde Marbella.<em>Por Europa y Asia.</em></h2><p>Para quienes contemplan comprar una propiedad, trasladarse o explorar oportunidades fuera de España, Property Facilitators EuroAsia conecta a sus clientes con especialistas de confianza en propiedad, residencia, asuntos legales y negocios en Europa y Asia.</p><div className="actions"><a className="btn gold" href="https://www.pfeuroasia.com/">Descubrir PF EuroAsia</a></div></div></section>

    <section id="contact" className="contact pad"><div className="wrap contactGrid"><div><p className="eyebrow">Alquiler de villas de lujo</p><h2>Encuentre su villa en Marbella.<em>Más de 100 opciones.</em></h2><p>Comparta sus fechas, huéspedes, dormitorios y presupuesto para recibir una selección de villas de lujo en Marbella y la Costa del Sol.</p></div><div><p>Property Facilitators EuroAsia colabora con The Luxury Villa Collection para ofrecer acceso a más de 100 villas de lujo disponibles en Marbella y sus zonas prime.</p><div className="actions"><Link className="btn gold" href="/es/alquiler-villas-lujo">Explorar más de 100 villas</Link></div></div></div></section>
    <SiteFooter locale="es" />
  </main>;
}
