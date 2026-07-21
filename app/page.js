import Link from 'next/link';

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
      <header className="header">
        <Link className="brand" href="/">
          <span>MV</span>
          <b>
            Madroñal Villas
            <small>Private Collection · Marbella</small>
          </b>
        </Link>
        <nav>
          <a href="#villas">Villas</a>
          <Link href="/el-madronal">El Madroñal</Link>
          <Link href="/concierge">Concierge</Link>
          <a href="#standards">The Standard</a>
          <a href="#contact">Enquire</a>
        </nav>
      </header>

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
            <a className="under" href="#contact">Begin your stay</a>
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

      <section id="contact" className="contact pad">
        <div className="wrap contactGrid">
          <div>
            <p className="eyebrow">Reservations</p>
            <h2>Begin your<em>stay.</em></h2>
            <p>
              Tell us your preferred dates, group size and villa. We will reply
              personally with availability and the next steps.
            </p>
            <a href="mailto:reservations@madronalvillas.com">reservations@madronalvillas.com</a>
          </div>

          <form action="mailto:reservations@madronalvillas.com" method="post" encType="text/plain">
            <label>Name<input name="name" required /></label>
            <label>Email<input type="email" name="email" required /></label>
            <label>Arrival<input type="date" name="arrival" /></label>
            <label>Departure<input type="date" name="departure" /></label>
            <label>Guests<input type="number" name="guests" min="1" /></label>
            <label>Villa
              <select name="villa" defaultValue="">
                <option value="" disabled>Select a villa</option>
                <option>Villa Candela</option>
                <option>Villa Lámpara</option>
                <option>Either villa</option>
              </select>
            </label>
            <label className="full">Message<textarea name="message" /></label>
            <button className="btn gold full" type="submit">Send enquiry</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="wrap footerGrid">
          <div>
            <strong>Madroñal Villas</strong>
            <span>Private Collection · Marbella</span>
            <span>Luxury. Privacy. Perfection.</span>
          </div>
          <div>
            <strong>Villas</strong>
            <Link href="/villa-candela">Villa Candela</Link>
            <Link href="/villa-lampara">Villa Lámpara</Link>
          </div>
          <div>
            <strong>Explore</strong>
            <Link href="/el-madronal">El Madroñal Estate</Link>
            <Link href="/concierge">Private Concierge</Link>
          </div>
          <div>
            <strong>Contact</strong>
            <a href="mailto:reservations@madronalvillas.com">Email reservations</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
