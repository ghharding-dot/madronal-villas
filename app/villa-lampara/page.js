import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const galleryImages = [
  'aerial',
  'pool',
  'sun-terrace',
  'breakfast-terrace',
  'upper-terrace',
  'lounge-main',
  'lounge-wide',
  'entrance',
  'dining',
  'courtyard',
  'bbq-terrace',
  'master-suite',
  'master-suite-wide',
  'family-suite',
  'family-bathroom',
  'bedroom-3',
  'bedroom-4',
  'bedroom-5',
  'bedroom-6'
];

const highlights = [
  ['7', 'Bedroom suites'],
  ['14', 'Indoor dining'],
  ['20', 'Outdoor dining'],
  ['40–50', 'Private event capacity'],
  ['1,100 m²', 'Approximate living space'],
  ['Wi-Fi 7', 'Whole-property connectivity']
];

const outdoorFeatures = [
  'Heated saltwater infinity pool',
  "Children's shallow pool area",
  'Twin barbecue stations',
  'Outdoor entertaining platform',
  'Private bar and commercial fridges',
  'Landscaped gardens and sun terraces'
];

export const metadata = {
  title: 'Villa Lámpara',
  description: 'A private seven-bedroom villa with a heated saltwater infinity pool and exceptional outdoor living in El Madroñal, Marbella.',
  alternates: { canonical: '/villa-lampara', languages: { en: '/villa-lampara', es: '/es/villa-lampara', 'x-default': '/villa-lampara' } }
};

export default function Page() {
  return (
    <>
      <SiteHeader languageHref="/es/villa-lampara" />

      <main>
        <section className="villaHero lamparaHero">
          <div className="shade" />
          <div className="wrap heroCopy">
            <p className="eyebrow">Villa Lámpara · El Madroñal</p>
            <h1>Contemporary luxury.<em>Made for outdoor living.</em></h1>
            <p>A private seven-bedroom residence with a heated saltwater infinity pool, exceptional entertaining spaces and complete mountain seclusion.</p>
            <div className="actions">
              <a className="btn gold" href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">Find an available villa</a>
              <a className="under" href="#gallery">Explore the villa</a>
            </div>
          </div>
        </section>

        <section className="intro pad">
          <div className="wrap split">
            <p className="eyebrow darkEye">Villa Lámpara</p>
            <div>
              <h2>Relaxed elegance.<em>Above Marbella.</em></h2>
              <p className="lead">Villa Lámpara combines generous interiors, landscaped terraces and a spectacular pool setting to create a private home designed for family time, celebrations and effortless Mediterranean living.</p>
            </div>
          </div>
        </section>

        <section className="statsBand">
          <div className="wrap statsGrid">
            {highlights.map(([number, label]) => (
              <div className="stat" key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pad editorial">
          <div className="wrap editorialGrid">
            <div>
              <p className="eyebrow darkEye">The Residence</p>
              <h2>A private hillside home.<em>Warm, open and welcoming.</em></h2>
            </div>
            <div className="copyColumns">
              <p>Approximately 1,100 square metres of living space are arranged around light-filled reception rooms, bedroom suites and terraces that connect naturally with the gardens.</p>
              <p>The architecture is contemporary without feeling formal. Large windows frame the surrounding mountains, while every principal living space opens towards the pool, terraces or landscaped grounds.</p>
            </div>
          </div>
        </section>

        <section className="featureSplit darkFeature">
          <div className="featureImage lamparaPoolFeature" />
          <div className="featureCopy">
            <p className="eyebrow">The Infinity Pool</p>
            <h2>The centre of the villa.<em>From morning to midnight.</em></h2>
            <p>The heated saltwater infinity pool forms the natural heart of Villa Lámpara. A dedicated shallow area gives younger guests their own space, while extensive terraces provide room for sunbathing, dining and relaxed evenings overlooking the mountains.</p>
            <ul className="cleanList">
              {outdoorFeatures.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="pad lifestyleSection">
          <div className="wrap heading">
            <div>
              <p className="eyebrow darkEye">Indoor & Outdoor Living</p>
              <h2>Space to gather.<em>Privacy when it matters.</em></h2>
            </div>
            <p>Indoor dining for fourteen, outdoor dining for twenty and an event platform suitable for approximately forty to fifty guests make Villa Lámpara exceptionally versatile.</p>
          </div>
          <div className="wrap lifestyleCards">
            <article>
              <span>01</span>
              <h3>Entertaining</h3>
              <p>Twin barbecue stations, a private bar, commercial refrigeration and extensive terraces make hosting feel effortless.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Family Living</h3>
              <p>Seven bedroom suites, flexible lounges and a children's pool area allow multi-generational groups to stay together comfortably.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Technology</h3>
              <p>1 Gbps fibre, Wi-Fi 7, IPTV and a 75-inch main lounge television provide seamless connectivity and entertainment.</p>
            </article>
          </div>
        </section>

        <section id="gallery" className="pad gallerySection">
          <div className="wrap galleryHeading">
            <p className="eyebrow darkEye">Gallery</p>
            <h2>Villa Lámpara.<em>Inside and out.</em></h2>
          </div>
          <div className="wrap gallery">
            {galleryImages.map((image, index) => (
              <figure className={index % 7 === 0 ? 'wide' : ''} key={image}>
                <img src={`/images/lampara/${image}.webp`} alt={`Villa Lámpara ${image.replaceAll('-', ' ')}`} />
              </figure>
            ))}
          </div>
        </section>

        <section className="featureSplit reverseFeature">
          <div className="featureImage lamparaTerraceFeature" />
          <div className="featureCopy lightCopy">
            <p className="eyebrow darkEye">The Madroñal Standard</p>
            <h2>Security, service.<em>And complete discretion.</em></h2>
            <p>Guests benefit from 24-hour gated security, resident staff, professional housekeeping, hotel-quality bedding and a concierge service tailored to each stay.</p>
            <div className="serviceList compactList">
              <span>Private chefs</span>
              <span>Airport transfers</span>
              <span>Luxury vehicle hire</span>
              <span>Yacht charters</span>
              <span>Golf reservations</span>
              <span>Wellness treatments</span>
            </div>
          </div>
        </section>

        <section id="enquire" className="contact pad">
          <div className="wrap contactGrid">
            <div>
              <p className="eyebrow">Current Availability</p>
              <h2>Villa Lámpara is currently<em>off rental.</em></h2>
              <p>Property Facilitators EuroAsia and The Luxury Villa Collection can prepare a bespoke selection of available luxury villas around your dates and requirements.</p>
            </div>
            <div>
              <p>Share your preferred dates, group size, bedroom requirement, location and approximate budget to receive suitable alternatives.</p>
              <div className="actions">
                <a className="btn gold" href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">Request available villas</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
