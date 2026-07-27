import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { destinations } from './data';
import { DestinationCard, VillaCta } from './DiscoverTemplate';
export const metadata = { title: 'Discover El Madroñal', description: 'Discover El Madroñal and the very best of Marbella, from beaches and dining to family days and outdoor adventures.' };
export default function DiscoverPage() { return <><SiteHeader /><main>
  <section className="discoverHero discoverLandingHero"><div className="shade" /><div className="wrap heroCopy"><p className="eyebrow">The Madroñal Guide · Marbella</p><h1>Discover a different<em>side of Marbella.</em></h1><p>Mountain calm, Mediterranean days and a world of exceptional experiences—all from the privacy of El Madroñal.</p><a className="under" href="#explore">Begin exploring</a></div></section>
  <section className="intro pad"><div className="wrap discoverIntro"><p className="eyebrow darkEye">Above the Coast</p><div><h2>A place to pause.<em>A world to explore.</em></h2><p className="lead">El Madroñal feels wonderfully removed, yet Marbella’s beaches, dining and vibrant culture are moments away. This is our edit of the places and experiences that make a stay here unforgettable.</p></div></div></section>
  <section id="explore" className="pad discoverDestinations"><div className="wrap"><div className="heading"><div><p className="eyebrow darkEye">The Destination</p><h2>Follow your<em>curiosity.</em></h2></div><p>Considered guides for slow mornings, spirited afternoons and memorable evenings on the Costa del Sol.</p></div><div className="destinationGrid">{destinations.map(item => <DestinationCard item={item} key={item.slug} />)}</div></div></section>
  <section className="whyDiscover pad"><div className="wrap whyGrid"><div><p className="eyebrow">Why Visit El Madroñal</p><h2>Space to breathe.<em>Everything within reach.</em></h2></div><div className="whyList">{[['01','Rare privacy'],['02','Mountain tranquillity'],['03','Marbella in 15 minutes'],['04','Year-round Mediterranean living']].map(([n,t])=><div key={n}><span>{n}</span><h3>{t}</h3></div>)}</div></div></section>
  <VillaCta />
</main><SiteFooter /></>; }
