import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const standards = [
  'Internet de fibra de 1 Gbps', 'Wi-Fi 7 en toda la propiedad', 'Seguridad privada 24 horas',
  'Personal profesional residente', 'Piscinas climatizadas', 'Ropa de cama y toallas de calidad cinco estrellas',
  'Alojamiento con licencia turística', 'Aparcamiento privado'
];

export const metadata = {
  title: 'Villas privadas de lujo en Marbella',
  description: 'Descubra Villa Candela y Villa Lámpara, dos villas privadas de lujo en El Madroñal, Marbella.',
  alternates: { canonical: '/es', languages: { en: '/', es: '/es', 'x-default': '/' } },
  openGraph: { title: 'Madroñal Villas — Colección privada', description: 'Dos villas privadas excepcionales en El Madroñal, Marbella.', url: '/es' }
};

export default function Inicio() {
  return <main>
    <SiteHeader locale="es" languageHref="/" />
    <section className="hero"><div className="shade" /><div className="wrap heroCopy">
      <p className="eyebrow">Madroñal Villas · Colección privada</p>
      <h1>Lujo. Privacidad.<em>Perfección.</em></h1>
      <p>Dos villas privadas excepcionales en la exclusiva urbanización cerrada de El Madroñal, Marbella.</p>
      <div className="actions"><a className="btn gold" href="#villas">Descubrir las villas</a><a className="under" href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">Encontrar una villa disponible</a></div>
    </div></section>

    <section className="intro pad"><div className="wrap split"><p className="eyebrow darkEye">La colección</p><div>
      <h2>Dos villas excepcionales.<em>Una urbanización extraordinaria.</em></h2>
      <p className="lead">En la prestigiosa urbanización cerrada de El Madroñal, Villa Candela y Villa Lámpara combinan privacidad, amplios espacios y un servicio profesional discreto, a pocos minutos de Marbella y Puerto Banús.</p>
    </div></div></section>

    <section id="villas" className="pad"><div className="wrap">
      <div className="heading"><div><p className="eyebrow darkEye">Nuestras villas</p><h2>Elija su<em>refugio privado.</em></h2></div><p>Cada residencia posee su propio carácter, amplios terrenos privados, piscina climatizada y atención profesional durante toda la estancia.</p></div>
      <div className="cards">
        <Link className="villa candela" href="/es/villa-candela"><div><p className="eyebrow">10 dormitorios · 36.000 m² de parcela</p><h3>Villa Candela</h3><p>Una gran residencia privada con amplios jardines, generosas zonas de reunión, cocina exterior y jacuzzi.</p><span>Descubrir Villa Candela →</span></div></Link>
        <Link className="villa lampara" href="/es/villa-lampara"><div><p className="eyebrow">7 dormitorios · Piscina infinita</p><h3>Villa Lámpara</h3><p>Una villa elegante con vistas panorámicas a la montaña, piscina infinita climatizada de agua salada y magníficas zonas exteriores.</p><span>Descubrir Villa Lámpara →</span></div></Link>
      </div>
    </div></section>

    <section id="standards" className="services pad"><div className="wrap servicesGrid"><div className="serviceImg" /><div>
      <p className="eyebrow darkEye">El estándar Madroñal</p><h2>Confort sin<em>concesiones.</em></h2>
      <p className="lead">Cada estancia se gestiona profesionalmente, con excelente conectividad, servicios de calidad y atención discreta en la propiedad.</p>
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

    <section id="contact" className="contact pad"><div className="wrap contactGrid"><div><p className="eyebrow">Alquiler de villas de lujo</p><h2>Nuestras villas no están<em>actualmente en alquiler.</em></h2><p>Villa Candela y Villa Lámpara no aceptan reservas en este momento.</p></div><div><p>Property Facilitators EuroAsia colabora con The Luxury Villa Collection para ofrecer una selección personalizada de villas de lujo disponibles en Marbella y sus zonas prime.</p><div className="actions"><a className="btn gold" href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">Solicitar villas disponibles</a></div></div></div></section>
    <SiteFooter locale="es" />
  </main>;
}
