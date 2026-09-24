import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

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

export const metadata = {
  title: 'El Madroñal, Marbella',
  description: 'A detailed guide to El Madroñal in Benahavís: privacy, gated security, villas, landscape, lifestyle and access to Marbella, Puerto Banús, golf and beaches.',
  alternates: { canonical: '/el-madronal', languages: { en: '/el-madronal', es: '/es/el-madronal', 'x-default': '/el-madronal' } }
};

export default function Page() {
  return (
    <>
      <SiteHeader languageHref="/es/el-madronal" />

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

        <section className="pad editorial">
          <div className="wrap editorialGrid">
            <div>
              <p className="eyebrow darkEye">Understanding El Madroñal</p>
              <h2>An established estate.<em>With its own character.</em></h2>
            </div>
            <div className="copyColumns">
              <p>El Madroñal is a long-established private residential community within the municipality of Benahavís, immediately above the Marbella coastline. Rather than a conventional resort, it is a collection of individually designed villas set along quiet hillside roads and mature woodland.</p>
              <p>The estate is arranged around several controlled entrances. This matters in daily life: access, orientation and elevation vary across El Madroñal, and individual homes can feel remarkably different depending on their position, outlook and surrounding landscape.</p>
            </div>
          </div>
        </section>

        <section className="pad lifestyleSection">
          <div className="wrap heading">
            <div>
              <p className="eyebrow darkEye">Life in El Madroñal</p>
              <h2>Space, nature.<em>And Marbella within reach.</em></h2>
            </div>
            <p>The appeal is the combination: a genuinely private mountain setting without giving up the restaurants, beaches, golf, shopping and international connections of the coast.</p>
          </div>
          <div className="wrap lifestyleCards">
            <article><span>01</span><h3>Marbella & Puerto Banús</h3><p>The coast is close enough for lunch, shopping, the marina or an evening out, while the return home quickly leaves the busier coastal atmosphere behind.</p></article>
            <article><span>02</span><h3>Benahavís & Dining</h3><p>Benahavís and the wider Marbella area provide everything from traditional Andalusian restaurants to internationally recognised fine dining and private-chef services.</p></article>
            <article><span>03</span><h3>Golf & Outdoors</h3><p>El Madroñal sits among some of the Costa del Sol's best-known golf territory, while the surrounding hills are equally suited to walking, cycling and time outdoors.</p></article>
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

        <section className="pad estateLocation">
          <div className="wrap locationPanel">
            <div>
              <p className="eyebrow darkEye">For Guests & Residents</p>
              <h2>Private living.<em>Practical every day.</em></h2>
              <p className="lead locationLead">The setting feels secluded, but everyday requirements remain straightforward. Supermarkets, restaurants, schools, private healthcare, beach clubs and sporting facilities are all available in the wider Benahavís–Marbella area.</p>
            </div>
            <div className="serviceList compactList">
              <span>International dining</span><span>Supermarkets & fresh food</span><span>Private healthcare</span><span>International schools</span><span>Golf & racquet sports</span><span>Beaches & beach clubs</span>
            </div>
          </div>
        </section>

        <section className="pad collectionCta">
          <div className="wrap collectionInner">
            <p className="eyebrow darkEye">Luxury Villa Rentals</p>
            <h2>Stay in Marbella.<em>Find the right villa.</em></h2>
            <p>Villa Candela and Villa Lámpara are currently held privately. Through Property Facilitators EuroAsia and The Luxury Villa Collection, guests can explore more than 100 luxury rental villas across Marbella, Benahavís, El Madroñal and surrounding prime areas.</p>
            <div className="actions"><a className="btn gold" href="https://www.pfeuroasia.com/luxury-villa-rentals">Explore 100+ rental villas</a></div>
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

      <SiteFooter />
    </>
  );
}
