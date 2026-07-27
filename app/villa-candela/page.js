import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';

const galleryImages = [
  'hero',
  'pool-dining',
  'entrance',
  'pool',
  'lounge',
  'kitchen',
  'courtyard',
  'bedroom-1',
  'bedroom-2',
  'bedroom-3',
  'bedroom-4',
  'bedroom-5',
  'bedroom-6',
  'bedroom-7',
  'bedroom-9',
  'bedroom-10'
];

const highlights = [
  ['10', 'Bedrooms'],
  ['20', 'Guest capacity'],
  ['1,300 m²', 'Approximate living space'],
  ['36,000 m²', 'Private grounds'],
  ['Wi-Fi 7', 'Whole-property connectivity'],
  ['24/7', 'Gated security']
];

const outdoorFeatures = [
  'Heated swimming pool',
  'Jacuzzi',
  'Outdoor kitchen and barbecue',
  'Landscaped private gardens',
  'Multiple dining terraces',
  'Secure private parking'
];

export const metadata = {
  title: 'Villa Candela',
  description: 'A ten-bedroom private villa with 36,000 m² of grounds, heated pool, Jacuzzi and resident staff in El Madroñal, Marbella.'
};

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="villaHero candelaHero">
          <div className="shade" />
          <div className="wrap heroCopy">
            <p className="eyebrow">Villa Candela · El Madroñal</p>
            <h1>Generous space.<em>Complete privacy.</em></h1>
            <p>A substantial ten-bedroom Mediterranean estate created for extended families, private groups and relaxed outdoor living.</p>
            <div className="actions">
              <a className="btn gold" href="#enquire">Enquire about availability</a>
              <a className="under" href="#gallery">Explore the villa</a>
            </div>
          </div>
        </section>

        <section className="intro pad">
          <div className="wrap split">
            <p className="eyebrow darkEye">Villa Candela</p>
            <div>
              <h2>A grand private estate.<em>Made for time together.</em></h2>
              <p className="lead">Villa Candela combines expansive accommodation, mature gardens and extensive terraces with the discreet service and security expected from a professionally operated private residence.</p>
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
              <h2>Space to gather.<em>Room to retreat.</em></h2>
            </div>
            <div className="copyColumns">
              <p>Approximately 1,300 square metres of living space provide generous reception rooms, ten bedrooms and flexible accommodation for families and private groups.</p>
              <p>Courtyards, covered terraces and mature gardens create a relaxed connection between the interiors and the surrounding 36,000-square-metre estate.</p>
            </div>
          </div>
        </section>

        <section className="featureSplit darkFeature">
          <div className="featureImage candelaPoolFeature" />
          <div className="featureCopy">
            <p className="eyebrow">Outdoor Living</p>
            <h2>Long lunches.<em>Slow evenings.</em></h2>
            <p>The heated pool, Jacuzzi, outdoor kitchen and barbecue area form the centre of life at Villa Candela. Multiple terraces offer places for dining, conversation, sunshine and shade throughout the day.</p>
            <ul className="cleanList">
              {outdoorFeatures.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="pad lifestyleSection">
          <div className="wrap heading">
            <div>
              <p className="eyebrow darkEye">The Experience</p>
              <h2>Private by design.<em>Effortless by service.</em></h2>
            </div>
            <p>Villa Candela is equally suited to multi-generational holidays, celebrations, executive stays and longer periods in Marbella.</p>
          </div>
          <div className="wrap lifestyleCards">
            <article>
              <span>01</span>
              <h3>Family Living</h3>
              <p>Ten bedrooms, extensive grounds and multiple reception areas allow large groups to stay together without sacrificing personal space.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Connectivity</h3>
              <p>1 Gbps fibre, Wi-Fi 7 and IPTV make the villa suitable for international business travellers as well as family entertainment.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Professional Care</h3>
              <p>Resident staff, quality bedding, housekeeping and concierge support ensure the residence is prepared around each guest's requirements.</p>
            </article>
          </div>
        </section>

        <section id="gallery" className="pad gallerySection">
          <div className="wrap galleryHeading">
            <p className="eyebrow darkEye">Gallery</p>
            <h2>Villa Candela.<em>Inside and out.</em></h2>
          </div>
          <div className="wrap gallery">
            {galleryImages.map((image, index) => (
              <figure className={index % 7 === 0 ? 'wide' : ''} key={image}>
                <img src={`/images/candela/${image}.webp`} alt={`Villa Candela ${image.replaceAll('-', ' ')}`} />
              </figure>
            ))}
          </div>
        </section>

        <section className="featureSplit reverseFeature">
          <div className="featureImage candelaServiceFeature" />
          <div className="featureCopy lightCopy">
            <p className="eyebrow darkEye">Concierge & Service</p>
            <h2>Your stay.<em>Personally arranged.</em></h2>
            <p>From arrival transfers and grocery stocking to private chefs, golf, wellness and yacht charters, each stay can be tailored discreetly around your plans.</p>
            <div className="serviceList compactList">
              <span>Private chefs</span>
              <span>Airport transfers</span>
              <span>Daily housekeeping</span>
              <span>Luxury vehicle hire</span>
              <span>Golf reservations</span>
              <span>Wellness treatments</span>
            </div>
          </div>
        </section>

        <section id="enquire" className="contact pad">
          <div className="wrap contactGrid">
            <div>
              <p className="eyebrow">Private Enquiries</p>
              <h2>Begin your stay.<em>At Villa Candela.</em></h2>
              <p>Tell us your preferred dates, number of guests and any services you would like arranged. Every enquiry is handled personally and discreetly.</p>
              <a href="mailto:reservations@madronalvillas.com">reservations@madronalvillas.com</a>
            </div>
            <form action="mailto:reservations@madronalvillas.com" method="post" encType="text/plain">
              <label>Name<input type="text" name="name" required /></label>
              <label>Email<input type="email" name="email" required /></label>
              <label>Arrival<input type="date" name="arrival" /></label>
              <label>Departure<input type="date" name="departure" /></label>
              <label>Guests<input type="number" name="guests" min="1" /></label>
              <label className="full">Message<textarea name="message" /></label>
              <button className="btn gold full" type="submit">Send private enquiry</button>
            </form>
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
