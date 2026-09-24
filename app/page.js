import Link from 'next/link';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

export const metadata = {
  alternates: { canonical: '/', languages: { en: '/', es: '/es', 'x-default': '/' } }
};

const standards = [
  '1 Gbps fibre internet',
  'Wi-Fi 7 throughout',
  '24-hour gated security',
  'Resident professional staff',
  'Heated swimming pools',
  'Five-star bedding and towels',
  'Fully licensed accommodation',
  'Private parking',
];

export default function HomePage() {
  return (
    <main>
      <SiteHeader languageHref="/es" />

      <section className="hero">
        <div className="shade" />
        <div className="wrap heroCopy">
          <p className="eyebrow">Madroñal Villas · Private Collection</p>
          <h1>
            Luxury. Privacy.
            <em>Perfection.</em>
          </h1>
          <p>
            Two exceptional private villas within the exclusive gated estate of
            El Madroñal, Marbella.
          </p>
          <div className="actions">
            <a className="btn gold" href="#villas">Explore the villas</a>
            <a className="under" href="https://www.pfeuroasia.com/luxury-villa-rentals">Find an available villa</a>
          </div>
        </div>
      </section>

      <section className="intro pad">
        <div className="wrap split">
          <p className="eyebrow darkEye">The Collection</p>
          <div>
            <h2>Two Exceptional Villas.<em>One Extraordinary Estate.</em></h2>
            <p className="lead">
              Hidden within the prestigious gated estate of El Madroñal, Villa
              Candela and Villa Lámpara combine privacy, generous living spaces
              and discreet professional service, only minutes from Marbella and
              Puerto Banús.
            </p>
          </div>
        </div>
      </section>

      <section id="villas" className="pad">
        <div className="wrap">
          <div className="heading">
            <div>
              <p className="eyebrow darkEye">Our Villas</p>
              <h2>Choose your<em>private retreat.</em></h2>
            </div>
            <p>
              Each residence has its own character, extensive private grounds,
              heated pool and dedicated staff support throughout your stay.
            </p>
          </div>

          <div className="cards">
            <Link className="villa candela" href="/villa-candela">
              <div>
                <p className="eyebrow">10 Bedrooms · 36,000 m² Grounds</p>
                <h3>Villa Candela</h3>
                <p>
                  A grand private residence with expansive gardens, generous
                  entertaining spaces, an outdoor kitchen and Jacuzzi.
                </p>
                <span>Discover Villa Candela →</span>
              </div>
            </Link>

            <Link className="villa lampara" href="/villa-lampara">
              <div>
                <p className="eyebrow">7 Bedrooms · Infinity Pool</p>
                <h3>Villa Lámpara</h3>
                <p>
                  An elegant villa with panoramic mountain views, a heated
                  saltwater infinity pool and exceptional outdoor living.
                </p>
                <span>Discover Villa Lámpara →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="rentalCollectionFeature">
        <div className="rentalCollectionImage" role="img" aria-label="Luxury villa pool and terrace in Marbella" />
        <div className="rentalCollectionCopy">
          <p className="eyebrow">The Wider Rental Collection</p>
          <h2>Looking for a luxury villa<em>in Marbella?</em></h2>
          <p className="rentalLead">Villa Candela and Villa Lámpara are currently being held privately and are not accepting reservations.</p>
          <p>Through Property Facilitators EuroAsia, in collaboration with The Luxury Villa Collection, we offer access to more than 100 exceptional rental villas across Marbella, Benahavís, El Madroñal, La Zagaleta, the Golden Mile and surrounding prime areas.</p>
          <div className="rentalProof" aria-label="Rental collection highlights">
            <strong>100+</strong><span>Luxury villas</span><i />
            <strong>Marbella</strong><span>&amp; Costa del Sol</span>
          </div>
          <div className="actions">
            <a className="btn gold" href="https://www.pfeuroasia.com/luxury-villa-rentals">Explore available villas</a>
          </div>
        </div>
      </section>

      <section id="standards" className="services pad">
        <div className="wrap servicesGrid">
          <div className="serviceImg" />
          <div>
            <p className="eyebrow darkEye">The Madroñal Standard</p>
            <h2>Comfort without<em>compromise.</em></h2>
            <p className="lead">
              Every stay is professionally managed, with strong connectivity,
              quality amenities and discreet on-site support.
            </p>
            <div className="serviceList">
              {standards.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="actions">
              <Link className="btn gold" href="/concierge">Explore concierge services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="location" id="location">
        <div className="locationImg" />
        <div className="locationCopy">
          <p className="eyebrow">El Madroñal · Marbella</p>
          <h2>Private by nature.<em>Connected by location.</em></h2>
          <p>
            El Madroñal is one of Marbella's most established gated estates,
            known for mature landscapes, mountain views and complete discretion.
          </p>
          <dl>
            <div><dt>Marbella</dt><dd>Approximately 15 minutes</dd></div>
            <div><dt>Puerto Banús</dt><dd>Approximately 15 minutes</dd></div>
            <div><dt>Málaga Airport</dt><dd>Approximately 45 minutes</dd></div>
          </dl>
          <div className="actions">
            <Link className="btn gold" href="/el-madronal">Discover El Madroñal</Link>
          </div>
        </div>
      </section>

      <section className="localKnowledgeTeaser pad">
        <div className="wrap localKnowledgeGrid">
          <div>
            <p className="eyebrow darkEye">Local Knowledge · Since 2010</p>
            <h2>El Madroñal,<em>understood from within.</em></h2>
          </div>
          <div className="localKnowledgeCopy">
            <p className="lead">
              In El Madroñal, the details matter: which entrance suits a home,
              how the orientation changes the light, where the most private
              plots sit and what it takes to care for a substantial hillside
              property throughout the year.
            </p>
            <p>
              Our knowledge comes from more than a decade of managing homes,
              welcoming guests and advising owners in the estate—not from a
              map or a property listing.
            </p>
            <div className="knowledgePoints" aria-label="Areas of local knowledge">
              <span>Estate access &amp; orientation</span>
              <span>Villa ownership &amp; management</span>
              <span>Rentals, buying &amp; selling</span>
            </div>
            <div className="actions">
              <Link className="btn gold" href="/local-knowledge">Explore local knowledge</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="collectionCta pad">
        <div className="wrap collectionInner">
          <p className="eyebrow darkEye">International Property &amp; Relocation</p>
          <h2>From Marbella.<em>Across Europe &amp; Asia.</em></h2>
          <p>
            For guests considering buying property, relocating or exploring
            opportunities beyond Spain, Property Facilitators EuroAsia connects
            clients with trusted property, residency, legal and business
            specialists across Europe and Asia.
          </p>
          <div className="actions">
            <a className="btn gold" href="https://www.pfeuroasia.com/">
              Explore PF EuroAsia
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact pad">
        <div className="wrap contactGrid">
          <div>
            <p className="eyebrow">Luxury Villa Rentals</p>
            <h2>Our villas are currently<em>off rental.</em></h2>
            <p>
              Villa Candela and Villa Lámpara are not presently accepting
              reservations.
            </p>
          </div>
          <div>
            <p>
              Property Facilitators EuroAsia works with The Luxury Villa
              Collection to provide access to more than 100 available luxury
              villas across Marbella and the surrounding prime areas.
            </p>
            <div className="actions">
              <a className="btn gold" href="https://www.pfeuroasia.com/luxury-villa-rentals">
                Explore 100+ available villas
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
