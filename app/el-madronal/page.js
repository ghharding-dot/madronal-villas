import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';

const distances = [
  ['Marbella', 'Approx. 15 minutes'],
  ['Puerto Banús', 'Approx. 15 minutes'],
  ['Beaches', 'Approx. 15 minutes'],
  ['Golf courses', 'Approx. 10–20 minutes'],
  ['Málaga Airport', 'Approx. 45 minutes']
];

const qualities = [
  ['Privacy', 'Large private plots, mature woodland and discreet hillside positioning create a rare sense of seclusion.'],
  ['Security', 'Controlled gated access and 24-hour professional security provide complete peace of mind.'],
  ['Nature', 'Mountain air, established trees and quiet private roads offer a calm contrast to the coast below.'],
  ['Access', 'Marbella, Puerto Banús, beaches, restaurants and golf remain within easy reach.']
];

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="villaHero estateHero">
          <div className="shade" />
          <div className="wrap heroCopy">
            <p className="eyebrow">El Madroñal · Benahavís</p>
            <h1>Above Marbella.<em>A world apart.</em></h1>
            <p>A secure private estate of mountain roads, mature woodland and exceptional residences, only minutes from the Mediterranean coast.</p>
          </div>
        </section>

        <section className="intro pad">
          <div className="wrap split">
            <p className="eyebrow darkEye">The Estate</p>
            <div>
              <h2>Peace without isolation.<em>Privacy without compromise.</em></h2>
              <p className="lead">El Madroñal occupies a privileged position in the hills above Marbella. Its natural setting, generous plots and controlled access have made it one of the Costa del Sol's most discreet residential addresses.</p>
            </div>
          </div>
        </section>

        <section className="pad estateQualities">
          <div className="wrap qualityGrid">
            {qualities.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="featureSplit darkFeature">
          <div className="featureImage estateNatureFeature" />
          <div className="featureCopy">
            <p className="eyebrow">A Natural Sanctuary</p>
            <h2>Mountain calm.<em>Mediterranean light.</em></h2>
            <p>Winding private roads pass through cork oaks, pines and mature gardens. The elevated setting provides cooler summer air, open mountain outlooks and an atmosphere of genuine tranquillity.</p>
            <p>Unlike densely developed coastal areas, El Madroñal retains a strong connection to the Andalusian landscape, with homes positioned to preserve space and discretion.</p>
          </div>
        </section>

        <section className="pad estateLocation">
          <div className="wrap locationPanel">
            <div>
              <p className="eyebrow darkEye">Perfectly Positioned</p>
              <h2>Close to everything.<em>Removed from the noise.</em></h2>
              <p className="lead locationLead">Guests can enjoy complete calm at the villa while remaining within easy reach of Marbella's beaches, restaurants, marinas, golf courses and international connections.</p>
            </div>
            <dl>
              {distances.map(([place, time]) => (
                <div key={place}><dt>{place}</dt><dd>{time}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="featureSplit reverseFeature">
          <div className="featureImage estateSecurityFeature" />
          <div className="featureCopy lightCopy">
            <p className="eyebrow darkEye">Security & Discretion</p>
            <h2>Confidence from arrival.<em>Privacy throughout your stay.</em></h2>
            <p>Controlled entrances, professional security and quiet private roads allow guests to relax from the moment they arrive. Access is managed discreetly, preserving the residential character of the estate.</p>
            <div className="serviceList compactList">
              <span>24-hour gated security</span>
              <span>Controlled vehicle access</span>
              <span>Professional estate management</span>
              <span>Quiet private roads</span>
              <span>Low-density residential setting</span>
              <span>Exceptional discretion</span>
            </div>
          </div>
        </section>

        <section className="pad collectionCta">
          <div className="wrap collectionInner">
            <p className="eyebrow darkEye">The Private Collection</p>
            <h2>Two exceptional villas.<em>One extraordinary estate.</em></h2>
            <p>Discover Villa Candela and Villa Lámpara, each offering its own interpretation of luxury, privacy and relaxed Mediterranean living.</p>
            <div className="actions">
              <Link className="btn gold" href="/villa-candela">Explore Villa Candela</Link>
              <Link className="under" href="/villa-lampara">Explore Villa Lámpara</Link>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footerGrid">
          <div><strong>Madroñal Villas</strong><span>Private Collection · Marbella</span></div>
          <div><strong>Residences</strong><Link href="/villa-candela">Villa Candela</Link><Link href="/villa-lampara">Villa Lámpara</Link></div>
          <div><strong>Explore</strong><Link href="/el-madronal">El Madroñal</Link><Link href="/">Home</Link></div>
          <div><strong>Contact</strong><a href="mailto:reservations@madronalvillas.com">Reservations</a></div>
        </div>
      </footer>
    </>
  );
}
