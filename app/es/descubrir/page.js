import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { destinations } from './data';
import { DestinationCard, VillaCta } from './DiscoverTemplate';

export const metadata = {
  title: 'Descubrir El Madroñal',
  description: 'Descubra El Madroñal y lo mejor de Marbella: playas, gastronomía, familia, bienestar y actividades al aire libre.',
  alternates: { canonical: '/es/descubrir', languages: { en: '/discover', es: '/es/descubrir', 'x-default': '/discover' } }
};

export default function Descubrir() { return <><SiteHeader locale="es" languageHref="/discover" /><main>
  <section className="discoverHero discoverLandingHero"><div className="shade" /><div className="wrap heroCopy"><p className="eyebrow">La guía de El Madroñal · Marbella</p><h1>Descubra otra<em>cara de Marbella.</em></h1><p>Calma de montaña, días mediterráneos y experiencias excepcionales desde la privacidad de El Madroñal.</p><a className="under" href="#explore">Empezar a explorar</a></div></section>
  <section className="intro pad"><div className="wrap discoverIntro"><p className="eyebrow darkEye">Sobre la costa</p><div><h2>Un lugar para detenerse.<em>Un mundo por descubrir.</em></h2><p className="lead">El Madroñal se siente maravillosamente apartado, aunque las playas, la gastronomía y la vida cultural de Marbella quedan muy cerca. Esta es nuestra selección de lugares y experiencias para una estancia inolvidable.</p></div></div></section>
  <section id="explore" className="pad discoverDestinations"><div className="wrap"><div className="heading"><div><p className="eyebrow darkEye">El destino</p><h2>Siga su<em>curiosidad.</em></h2></div><p>Guías escogidas para mañanas tranquilas, tardes animadas y noches memorables en la Costa del Sol.</p></div><div className="destinationGrid">{destinations.map(item=><DestinationCard item={item} key={item.slug} />)}</div></div></section>
  <section className="whyDiscover pad"><div className="wrap whyGrid"><div><p className="eyebrow">Por qué elegir El Madroñal</p><h2>Espacio para respirar.<em>Todo a su alcance.</em></h2></div><div className="whyList">{[['01','Privacidad excepcional'],['02','Tranquilidad de montaña'],['03','Marbella a 15 minutos'],['04','Vida mediterránea todo el año']].map(([n,t])=><div key={n}><span>{n}</span><h3>{t}</h3></div>)}</div></div></section>
  <VillaCta />
</main><SiteFooter locale="es" /></>; }
