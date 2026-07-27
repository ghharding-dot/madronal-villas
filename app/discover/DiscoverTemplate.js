import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { destinations } from './data';

export default function DiscoverTemplate({ page }) {
  const index = destinations.findIndex((item) => item.slug === page.slug);
  const more = [1, 2, 3].map((offset) => destinations[(index + offset) % destinations.length]);
  return <><SiteHeader /><main>
    <section className="discoverHero" style={{ backgroundImage: `url(${page.image})` }}><div className="shade" /><div className="wrap heroCopy"><p className="eyebrow">Discover El Madroñal · {page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p></div></section>
    <section className="intro pad"><div className="wrap discoverIntro"><p className="eyebrow darkEye">A Local Perspective</p><div><h2>Make the most of<em>every moment.</em></h2><p className="lead">Our guide to {page.title.toLowerCase()} is being carefully curated. Soon, this page will bring together personal recommendations and considered details for guests of Madroñal Villas.</p></div></div></section>
    <section className="discoverFeature pad"><div className="wrap discoverFeatureGrid"><img src={page.image} alt="" /><div><p className="eyebrow darkEye">The Guide</p><h2>Beautifully local.<em>Entirely your own.</em></h2><p>El Madroñal offers the rare pleasure of seclusion without isolation. Explore at your own pace, return to the privacy of your villa, and let our team arrange the details.</p><Link className="under" href="/concierge">Explore private concierge</Link></div></div></section>
    <section className="pad continueSection"><div className="wrap"><div className="heading"><div><p className="eyebrow darkEye">Continue Exploring</p><h2>More to<em>discover.</em></h2></div></div><div className="destinationGrid">{more.map(item => <DestinationCard item={item} key={item.slug} />)}</div></div></section>
    <VillaCta />
  </main><SiteFooter /></>;
}

export function DestinationCard({ item }) { return <Link className="destinationCard" href={`/discover/${item.slug}`}><img src={item.image} alt="" /><div><span>{item.eyebrow}</span><h3>{item.title}</h3><p>{item.intro}</p></div></Link>; }
export function VillaCta() { return <section className="pad discoverCta"><div className="wrap collectionInner"><p className="eyebrow">Your Private Retreat</p><h2>Stay at the heart<em>of El Madroñal.</em></h2><p>Choose between two exceptional private residences, with personal support from enquiry to departure.</p><div className="actions"><Link className="btn gold" href="/villa-candela">Villa Candela</Link><Link className="btn outlineBtn" href="/villa-lampara">Villa Lámpara</Link><Link className="under" href="/#contact">Make an enquiry</Link></div></div></section>; }
