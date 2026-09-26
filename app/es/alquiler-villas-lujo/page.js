import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import RentalVillaCarousel from '../../components/RentalVillaCarousel';

const enquiryHref = 'https://www.pfeuroasia.com/luxury-villa-rentals?utm_source=madronalvillas&utm_medium=referral&utm_campaign=100_plus_villas_es#villa-enquiry';
const collectionHref = 'https://www.pfeuroasia.com/luxury-villa-rentals?utm_source=madronalvillas&utm_medium=referral&utm_campaign=100_plus_villas_es#villa-rentals-collection';

const areas = [
  ['El Madroñal', 'Fincas privadas entre bosques maduros, a pocos minutos de Marbella y Puerto Banús.'],
  ['La Zagaleta', 'Residencias excepcionales en una de las urbanizaciones más seguras y exclusivas de Europa.'],
  ['Milla de Oro', 'Villas cerca de Marbella Club, Puente Romano, la playa y la mejor gastronomía de Marbella.'],
  ['Sierra Blanca', 'Urbanizaciones cerradas elevadas con vistas panorámicas y acceso cómodo al centro de Marbella.'],
  ['Puerto Banús', 'Villas contemporáneas y residencias junto a la playa, cerca del puerto deportivo.'],
  ['Benahavís y Costa del Sol', 'Fincas familiares, villas de golf y refugios costeros seleccionados por toda la región.']
];

const concierge = [
  'Traslados privados al aeropuerto', 'Chóferes y vehículos de lujo', 'Chefs privados y servicio en la villa',
  'Yates y aviación privada', 'Golf, bienestar y experiencias locales', 'Limpieza, cuidado infantil y seguridad'
];

const faqs = [
  ['¿Se muestran online las más de 100 villas?', 'No. La disponibilidad cambia con frecuencia y muchos propietarios prefieren una distribución privada. Preparamos una selección actualizada después de recibir sus fechas y requisitos.'],
  ['¿Qué información debo facilitar?', 'Indique sus fechas, número de huéspedes, dormitorios necesarios, zona preferida, presupuesto aproximado y cualquier requisito de conserjería o accesibilidad.'],
  ['¿Pueden organizar servicios durante la estancia?', 'Sí. Podemos coordinar traslados, chóferes, chefs privados, yates, bienestar, golf, limpieza y otros servicios, sujetos a disponibilidad.'],
  ['¿Quién gestiona mi consulta?', 'Property Facilitators EuroAsia gestiona su consulta en colaboración con The Luxury Villa Collection, con Madroñal Villas como colaborador local de referencia.']
];

export const metadata = {
  title: 'Más de 100 villas de lujo en alquiler en Marbella',
  description: 'Acceso a más de 100 villas de lujo en alquiler en Marbella, El Madroñal, La Zagaleta, Milla de Oro, Puerto Banús, Benahavís y la Costa del Sol.',
  alternates: { canonical: '/es/alquiler-villas-lujo', languages: { en: '/luxury-villa-rentals', es: '/es/alquiler-villas-lujo', 'x-default': '/luxury-villa-rentals' } },
  openGraph: {
    title: 'Más de 100 villas de lujo | Madroñal Villas',
    description: 'Una selección privada de villas excepcionales en Marbella y la Costa del Sol, con servicio de conserjería.',
    url: '/es/alquiler-villas-lujo',
    images: [{ url: '/images/lampara/sun-terrace.webp', width: 1200, height: 630, alt: 'Terraza de villa de lujo sobre Marbella' }]
  }
};

export default function AlquilerVillasLujoPage() {
  return <>
    <SiteHeader locale="es" languageHref="/luxury-villa-rentals" />
    <main>
      <section className="rentalHubHero">
        <Image src="/images/lampara/sun-terrace.webp" alt="Terraza y piscina de una villa de lujo en las colinas de Marbella" fill priority sizes="100vw" />
        <div className="rentalHubShade" />
        <div className="wrap heroCopy rentalHubHeroCopy">
          <p className="eyebrow">Alquiler de Villas de Lujo y Conserjería</p>
          <h1>Más de 100 villas excepcionales.<em>Una consulta privada.</em></h1>
          <p>Acceda a una cuidada cartera en Marbella, Benahavís y la Costa del Sol, con numerosas villas disponibles únicamente mediante consulta privada.</p>
          <div className="actions"><a className="btn gold" href={enquiryHref}>Enviar sus requisitos</a><a className="under" href={collectionHref}>Ver la selección actual</a></div>
        </div>
      </section>

      <section className="intro pad"><div className="wrap split"><p className="eyebrow darkEye">La colección ampliada</p><div>
        <h2>Más opciones.<em>Seleccionadas personalmente.</em></h2>
        <p className="lead">Madroñal Villas ofrece acceso a más de 100 villas de lujo en alquiler a través de Property Facilitators EuroAsia, en colaboración con The Luxury Villa Collection.</p>
        <p className="rentalHubBody">Las villas publicadas representan solo una parte de la cartera. Indíquenos sus fechas, grupo, zona preferida, dormitorios y presupuesto aproximado, y prepararemos una selección actualizada para su estancia.</p>
        <div className="actions"><a className="btn gold" href={collectionHref}>Ver la selección actual de villas</a><a className="under darkUnder" href={enquiryHref}>Enviar sus requisitos</a></div>
      </div></div></section>

      <RentalVillaCarousel locale="es" />

      <section className="rentalHubStats" aria-label="Datos de la colección de alquiler"><div className="wrap rentalHubStatsGrid">
        <div><strong>100+</strong><span>Villas de lujo</span></div><div><strong>6</strong><span>Zonas prime</span></div><div><strong>Privada</strong><span>Selección personalizada</span></div><div><strong>Completo</strong><span>Servicio de conserjería</span></div>
      </div></section>

      <section className="pad rentalHubAreas"><div className="wrap">
        <div className="heading"><div><p className="eyebrow darkEye">A lo largo de la costa</p><h2>Direcciones prime.<em>Estancias singulares.</em></h2></div><p>Desde fincas privadas en la montaña hasta residencias junto al mar, la colección cubre las zonas más solicitadas de Marbella y destinos seleccionados de la Costa del Sol.</p></div>
        <div className="rentalHubAreaGrid">{areas.map(([name, description], index) => <article key={name}><span>{String(index + 1).padStart(2, '0')}</span><h3>{name}</h3><p>{description}</p></article>)}</div>
      </div></section>

      <section className="rentalHubEditorial">
        <div className="rentalHubEditorialImage"><Image src="/images/candela/pool-dining.webp" alt="Comedor privado junto a la piscina de una villa de lujo" fill sizes="(max-width: 850px) 100vw, 52vw" /></div>
        <div className="rentalHubEditorialCopy"><p className="eyebrow">Un enfoque privado</p><h2>No es solo una lista.<em>La villa adecuada para usted.</em></h2><p>La disponibilidad, las preferencias del propietario y las necesidades de cada grupo son diferentes. Preparamos una selección concreta según el uso previsto de la villa.</p><ul className="cleanList"><li>Vacaciones familiares y multigeneracionales</li><li>Grupos grandes y estancias prolongadas</li><li>Viajes de golf y retiros corporativos</li><li>Celebraciones en villas autorizadas</li><li>Opciones privadas y fuera del mercado</li></ul><div className="actions"><a className="btn gold" href={enquiryHref}>Solicitar una selección privada</a></div></div>
      </section>

      <section className="pad rentalHubProcess"><div className="wrap"><div className="rentalHubProcessHeading"><p className="eyebrow darkEye">Cómo funciona</p><h2>Tres pasos sencillos.<em>Un servicio personal.</em></h2></div><div className="rentalHubProcessGrid">
        <article><span>01</span><h3>Comparta sus requisitos</h3><p>Fechas, huéspedes, dormitorios, ubicación, presupuesto y necesidades especiales.</p></article>
        <article><span>02</span><h3>Reciba una selección</h3><p>Seleccionamos las opciones actuales más adecuadas y se las enviamos de forma privada.</p></article>
        <article><span>03</span><h3>Confirme su estancia</h3><p>Coordinamos la reserva de la villa y los servicios de conserjería adicionales.</p></article>
      </div></div></section>

      <section className="rentalHubConcierge">
        <div className="rentalHubConciergeCopy"><p className="eyebrow">Servicio de conserjería</p><h2>Su villa es<em>solo el comienzo.</em></h2><p>Podemos coordinar todos los detalles prácticos y experiencias antes y durante su estancia.</p><div className="rentalHubConciergeList">{concierge.map(item => <span key={item}>{item}</span>)}</div><div className="actions"><Link className="under" href="/es/conserjeria">Descubrir la conserjería</Link></div></div>
        <div className="rentalHubConciergeImage"><Image src="/images/lampara/breakfast-terrace.webp" alt="Desayuno preparado en la terraza de una villa privada" fill sizes="(max-width: 850px) 100vw, 50vw" /></div>
      </section>

      <section className="pad rentalHubFaq"><div className="wrap rentalHubFaqGrid"><div><p className="eyebrow darkEye">Preguntas frecuentes</p><h2>Planifique su<em>estancia en Marbella.</em></h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

      <section className="contact pad rentalHubFinal"><div className="wrap contactGrid"><div><p className="eyebrow">Más de 100 villas de lujo</p><h2>Díganos qué<em>necesita.</em></h2></div><div><p>Comparta sus fechas, grupo, dormitorios, zona y presupuesto. Property Facilitators EuroAsia gestionará su consulta en colaboración con The Luxury Villa Collection.</p><div className="actions"><a className="btn gold" href={enquiryHref}>Enviar sus requisitos</a></div><small>Madroñal Villas es el colaborador local de referencia. Disponibilidad y servicios sujetos a confirmación.</small></div></div></section>
    </main>
    <SiteFooter locale="es" />
  </>;
}
