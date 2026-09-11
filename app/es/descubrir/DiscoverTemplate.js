import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { destinations } from './data';

export default function DiscoverTemplate({ page }) {
  const index = destinations.findIndex(item=>item.slug===page.slug);
  const more = [1,2,3].map(offset=>destinations[(index+offset)%destinations.length]);
  return <><SiteHeader locale="es" languageHref={`/discover/${page.englishSlug}`} /><main>
    <section className="discoverHero" style={{backgroundImage:`url(${page.image})`}}><div className="shade" /><div className="wrap heroCopy"><p className="eyebrow">Descubrir El Madroñal · {page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p></div></section>
    <section className="intro pad"><div className="wrap discoverIntro"><p className="eyebrow darkEye">Una perspectiva local</p><div><h2>Aproveche<em>cada momento.</em></h2><p className="lead">Estamos preparando cuidadosamente nuestra guía de {page.title.toLowerCase()}. Pronto reunirá recomendaciones personales e información útil para los huéspedes de Madroñal Villas.</p></div></div></section>
    <section className="discoverFeature pad"><div className="wrap discoverFeatureGrid"><img src={page.image} alt={`${page.title} cerca de El Madroñal`} /><div><p className="eyebrow darkEye">La guía</p><h2>Auténticamente local.<em>Enteramente a su manera.</em></h2><p>El Madroñal ofrece el raro privilegio de la tranquilidad sin aislamiento. Descubra la zona a su ritmo, regrese a la privacidad de su villa y deje los detalles en manos de nuestro equipo.</p><Link className="under" href="/es/conserjeria">Descubrir la conserjería privada</Link></div></div></section>
    <section className="pad continueSection"><div className="wrap"><div className="heading"><div><p className="eyebrow darkEye">Seguir explorando</p><h2>Mucho más por<em>descubrir.</em></h2></div></div><div className="destinationGrid">{more.map(item=><DestinationCard item={item} key={item.slug} />)}</div></div></section>
    <VillaCta />
  </main><SiteFooter locale="es" /></>;
}

export function DestinationCard({item}) { return <Link className="destinationCard" href={`/es/descubrir/${item.slug}`}><img src={item.image} alt={`${item.title} cerca de El Madroñal`} /><div><span>{item.eyebrow}</span><h3>{item.title}</h3><p>{item.intro}</p></div></Link>; }
export function VillaCta() { return <section className="pad discoverCta"><div className="wrap collectionInner"><p className="eyebrow">Su refugio privado</p><h2>Alójese en el corazón<em>de El Madroñal.</em></h2><p>Descubra nuestras residencias privadas, actualmente fuera del mercado de alquiler, o solicite una selección personalizada de villas disponibles mediante PF EuroAsia y The Luxury Villa Collection.</p><div className="actions"><Link className="btn gold" href="/es/villa-candela">Villa Candela</Link><Link className="btn outlineBtn" href="/es/villa-lampara">Villa Lámpara</Link><a className="under" href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">Consulta de alquiler</a></div></div></section>; }
