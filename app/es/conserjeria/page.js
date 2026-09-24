import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const services = [
  ['Chefs privados','Desde desayunos familiares hasta cenas formales y celebraciones, los menús se adaptan a sus preferencias.'],
  ['Traslados al aeropuerto','Traslados privados desde el aeropuerto de Málaga, Marbella, Puerto Banús u otros puntos de llegada.'],
  ['Vehículos de lujo','Vehículos ejecutivos y de alta gama, con o sin chófer, durante toda la estancia.'],
  ['Alquiler de yates','Salidas de medio día, día completo o al atardecer desde Puerto Banús y puertos cercanos.'],
  ['Reservas de golf','Green fees, traslados y alquiler de material en campos de la Costa del Sol.'],
  ['Bienestar','Masajes, tratamientos de belleza, yoga y entrenamiento personal en la villa.'],
  ['Compra previa','La villa puede prepararse antes de su llegada con productos cotidianos, marcas preferidas y vinos seleccionados.'],
  ['Limpieza','Servicios adicionales de limpieza y ropa de hogar según las necesidades del grupo.'],
  ['Cuidado infantil','Asistencia infantil de confianza, sujeta a disponibilidad y reserva previa.'],
  ['Seguridad privada','Personal adicional y medidas especiales de seguridad cuando se requieran.'],
  ['Celebraciones','Cenas privadas, aniversarios y eventos íntimos organizados con discreción.'],
  ['Reservas locales','Restaurantes, beach clubs y experiencias seleccionadas en Marbella.']
];

export const metadata = {
  title: 'Conserjería privada',
  description: 'Servicios de conserjería discretos y personalizados para estancias en villas de El Madroñal, Marbella.',
  alternates: { canonical: '/es/conserjeria', languages: { en: '/concierge', es: '/es/conserjeria', 'x-default': '/concierge' } }
};

export default function Conserjeria() { return <>
  <SiteHeader locale="es" languageHref="/concierge" />
  <main>
    <section className="villaHero conciergeHero"><div className="shade" /><div className="wrap heroCopy"><p className="eyebrow">Conserjería privada · Marbella</p><h1>Cada detalle.<em>Organizado personalmente.</em></h1><p>Atención discreta antes y durante su estancia, adaptada a su familia, sus horarios y su forma de viajar.</p></div></section>
    <section className="intro pad"><div className="wrap split"><p className="eyebrow darkEye">El servicio</p><div><h2>Su estancia, a su manera.<em>Sin complicaciones.</em></h2><p className="lead">Nuestro servicio de conserjería facilita cada aspecto de su estancia con discreción, comunicación clara y un conocimiento práctico de Marbella.</p></div></div></section>
    <section className="pad conciergeServices"><div className="wrap"><div className="heading"><div><p className="eyebrow darkEye">Servicios disponibles</p><h2>Desde la llegada.<em>Hasta la salida.</em></h2></div><p>Los servicios están sujetos a disponibilidad y se presupuestan por separado. Recomendamos reservar con antelación en temporada alta.</p></div><div className="conciergeGrid">{services.map(([title,description],index)=><article key={title}><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="featureSplit darkFeature"><div className="featureImage conciergeDiningFeature" /><div className="featureCopy"><p className="eyebrow">Gastronomía privada</p><h2>Diseñada para usted.<em>Servida en casa.</em></h2><p>Chefs privados pueden preparar desde almuerzos informales junto a la piscina hasta cenas de varios platos. Menús, dietas y estilo de servicio se acuerdan previamente.</p><ul className="cleanList"><li>Desayunos y brunch</li><li>Almuerzos familiares y barbacoas</li><li>Cenas privadas formales</li><li>Menús infantiles y dietas especiales</li><li>Selección de vinos y bebidas</li><li>Cenas de celebración</li></ul></div></section>
    <section className="pad collectionCta"><div className="wrap collectionInner"><p className="eyebrow darkEye">Planifique su estancia</p><h2>Cuéntenos qué importa.<em>Nos ocuparemos del resto.</em></h2><p>Comparta sus fechas, el perfil del grupo y los servicios que contempla. Confirmaremos disponibilidad y le enviaremos una propuesta clara antes de su llegada.</p><div className="actions"><a className="btn gold" href="https://www.pfeuroasia.com/luxury-villa-rentals">Solicitar villa y conserjería</a><Link className="under" href="/es">Volver a la colección</Link></div></div></section>
    <section id="enquire" className="contact pad"><div className="wrap contactGrid"><div><p className="eyebrow">Consulta de villa y conserjería</p><h2>Planifique su estancia<em>en Marbella.</em></h2><p>Nuestras villas no están actualmente en alquiler. PF EuroAsia y The Luxury Villa Collection pueden proponer alternativas disponibles y organizar la conserjería necesaria.</p></div><div><p>Utilice el formulario de PF EuroAsia para indicar fechas, número de huéspedes, zona preferida y servicios adicionales.</p><div className="actions"><a className="btn gold" href="https://www.pfeuroasia.com/luxury-villa-rentals">Abrir consulta de alquiler</a></div></div></div></section>
  </main><SiteFooter locale="es" />
</>; }
