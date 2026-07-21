import Link from 'next/link';

const services = [
  ['Private chefs', 'From relaxed family breakfasts to formal dinners and special celebrations, menus can be arranged around your preferences.'],
  ['Airport transfers', 'Private transfers can be coordinated from Málaga Airport, Marbella, Puerto Banús or other arrival points.'],
  ['Luxury vehicle hire', 'Executive cars, prestige vehicles and chauffeur services can be arranged for the duration of your stay.'],
  ['Yacht charters', 'Half-day, full-day and sunset charters can be organised from Puerto Banús and nearby marinas.'],
  ['Golf reservations', 'Tee times, transfers and equipment hire can be coordinated across the Costa del Sol.'],
  ['Wellness treatments', 'In-villa massage, beauty treatments, yoga and personal training can be arranged privately.'],
  ['Grocery provisioning', 'The villa can be stocked before arrival with everyday essentials, preferred brands and selected wines.'],
  ['Housekeeping', 'Additional housekeeping and linen services can be scheduled according to the needs of your group.'],
  ['Childcare', 'Trusted childcare support can be arranged subject to availability and advance notice.'],
  ['Private security', 'Additional security personnel and specialist arrangements can be coordinated when required.'],
  ['Celebrations', 'Private dinners, anniversaries and intimate events can be planned discreetly within the villa.'],
  ['Local reservations', 'Restaurant bookings, beach clubs and selected Marbella experiences can be arranged in advance.']
];

export const metadata = {
  title: 'Private Concierge',
  description: 'Discreet concierge services for guests of Villa Candela and Villa Lámpara in El Madroñal, Marbella.'
};

export default function ConciergePage() {
  return (
    <>
      <header className="header darkHeader">
        <Link className="brand" href="/">
          <span>MV</span>
          <b>Madroñal Villas<small>Private Collection · Marbella</small></b>
        </Link>
        <nav>
          <Link href="/villa-candela">Candela</Link>
          <Link href="/villa-lampara">Lámpara</Link>
          <Link href="/el-madronal">El Madroñal</Link>
          <a className="enquire" href="#enquire">Enquire</a>
        </nav>
      </header>

      <main>
        <section className="villaHero conciergeHero">
          <div className="shade" />
          <div className="wrap heroCopy">
            <p className="eyebrow">Private Concierge · Marbella</p>
            <h1>Every detail.<em>Personally arranged.</em></h1>
            <p>Discreet support before and during your stay, tailored around your family, your schedule and the way you prefer to travel.</p>
          </div>
        </section>

        <section className="intro pad">
          <div className="wrap split">
            <p className="eyebrow darkEye">The Service</p>
            <div>
              <h2>Your stay, your way.<em>Without the complications.</em></h2>
              <p className="lead">Our concierge service is designed to remove friction from your stay. Arrangements are handled personally, with discretion, clear communication and a practical understanding of Marbella.</p>
            </div>
          </div>
        </section>

        <section className="pad conciergeServices">
          <div className="wrap">
            <div className="heading">
              <div>
                <p className="eyebrow darkEye">Available Services</p>
                <h2>From arrival.<em>To departure.</em></h2>
              </div>
              <p>Services are subject to availability and are quoted separately. Advance notice is recommended during peak periods.</p>
            </div>
            <div className="conciergeGrid">
              {services.map(([title, description], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="featureSplit darkFeature">
          <div className="featureImage conciergeDiningFeature" />
          <div className="featureCopy">
            <p className="eyebrow">Private Dining</p>
            <h2>Designed around you.<em>Served at home.</em></h2>
            <p>Private chefs can prepare anything from informal poolside lunches to multi-course dinners. Menus, dietary requirements and service style are agreed in advance.</p>
            <ul className="cleanList">
              <li>Breakfast and brunch service</li>
              <li>Family lunches and barbecue menus</li>
              <li>Formal private dinners</li>
              <li>Children's menus and dietary requests</li>
              <li>Wine and beverage coordination</li>
              <li>Celebration dining</li>
            </ul>
          </div>
        </section>

        <section className="pad collectionCta">
          <div className="wrap collectionInner">
            <p className="eyebrow darkEye">Planning Your Stay</p>
            <h2>Tell us what matters.<em>We will arrange the rest.</em></h2>
            <p>Share your dates, group profile and any services you are considering. We will confirm availability and provide a clear proposal before your arrival.</p>
            <div className="actions">
              <a className="btn gold" href="#enquire">Request concierge services</a>
              <Link className="under" href="/">Return to the collection</Link>
            </div>
          </div>
        </section>

        <section id="enquire" className="contact pad">
          <div className="wrap contactGrid">
            <div>
              <p className="eyebrow">Concierge Enquiry</p>
              <h2>Plan your<em>stay.</em></h2>
              <p>Tell us which villa you are considering and the services you would like included.</p>
              <a href="mailto:reservations@madronalvillas.com">reservations@madronalvillas.com</a>
            </div>
            <form action="mailto:reservations@madronalvillas.com" method="post" encType="text/plain">
              <label>Name<input name="name" required /></label>
              <label>Email<input type="email" name="email" required /></label>
              <label>Villa
                <select name="villa" defaultValue="">
                  <option value="" disabled>Select a villa</option>
                  <option>Villa Candela</option>
                  <option>Villa Lámpara</option>
                  <option>Not yet decided</option>
                </select>
              </label>
              <label>Arrival<input type="date" name="arrival" /></label>
              <label className="full">Services required<textarea name="services" /></label>
              <button className="btn gold full" type="submit">Send concierge enquiry</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footerGrid">
          <div><strong>Madroñal Villas</strong><span>Private Collection · Marbella</span></div>
          <div><strong>Residences</strong><Link href="/villa-candela">Villa Candela</Link><Link href="/villa-lampara">Villa Lámpara</Link></div>
          <div><strong>Explore</strong><Link href="/el-madronal">El Madroñal</Link><Link href="/concierge">Concierge</Link></div>
          <div><strong>Contact</strong><a href="mailto:reservations@madronalvillas.com">Reservations</a></div>
        </div>
      </footer>
    </>
  );
}
