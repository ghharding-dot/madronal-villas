import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import RentalVillaCarousel from '../components/RentalVillaCarousel';

const enquiryHref = 'https://www.pfeuroasia.com/luxury-villa-rentals?utm_source=madronalvillas&utm_medium=referral&utm_campaign=100_plus_villas#villa-enquiry';
const collectionHref = 'https://www.pfeuroasia.com/luxury-villa-rentals?utm_source=madronalvillas&utm_medium=referral&utm_campaign=100_plus_villas#villa-rentals-collection';

const areas = [
  ['El Madroñal', 'Private hillside estates surrounded by mature woodland, minutes from Marbella and Puerto Banús.'],
  ['La Zagaleta', 'Exceptional private homes within one of Europe’s most secure and exclusive residential estates.'],
  ['Golden Mile', 'Prime villas close to Marbella Club, Puente Romano, the beach and Marbella’s finest dining.'],
  ['Sierra Blanca', 'Elevated gated communities with panoramic views and convenient access to central Marbella.'],
  ['Puerto Banús', 'Contemporary villas and beachside homes close to the marina, shopping and nightlife.'],
  ['Benahavís & Costa del Sol', 'Selected family estates, golf villas and coastal retreats across the wider region.']
];

const concierge = [
  'Private airport transfers', 'Chauffeurs and luxury vehicles', 'Private chefs and in-villa dining',
  'Yacht and private aviation support', 'Golf, wellness and local experiences', 'Housekeeping, childcare and security'
];

const faqs = [
  ['Are all 100+ villas displayed online?', 'No. Availability changes frequently and many owners prefer private distribution. We prepare a current selection after receiving your dates and requirements.'],
  ['What information should I provide?', 'Please share your dates, number of guests, bedroom requirement, preferred area, approximate budget and any concierge or accessibility requirements.'],
  ['Can you arrange services during the stay?', 'Yes. Transfers, chauffeurs, private chefs, yachts, wellness, golf, housekeeping and other services can be coordinated subject to availability.'],
  ['Who handles my enquiry?', 'Your enquiry is managed by Property Facilitators EuroAsia in collaboration with The Luxury Villa Collection, with Madroñal Villas as the referring local partner.']
];

export const metadata = {
  title: '100+ Luxury Villa Rentals in Marbella & Costa del Sol',
  description: 'Access more than 100 luxury rental villas across Marbella, El Madroñal, La Zagaleta, the Golden Mile, Puerto Banús, Benahavís and the Costa del Sol.',
  alternates: { canonical: '/luxury-villa-rentals', languages: { en: '/luxury-villa-rentals', es: '/es/alquiler-villas-lujo', 'x-default': '/luxury-villa-rentals' } },
  openGraph: {
    title: '100+ Luxury Villa Rentals | Madroñal Villas',
    description: 'A private selection of exceptional villas across Marbella and the Costa del Sol, with complete concierge support.',
    url: '/luxury-villa-rentals',
    images: [{ url: '/images/lampara/sun-terrace.webp', width: 1200, height: 630, alt: 'Luxury villa terrace above Marbella' }]
  }
};

export default function LuxuryVillaRentalsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service', name: 'Luxury Villa Rentals & Concierge',
        provider: { '@type': 'LodgingBusiness', name: 'Madroñal Villas', url: 'https://www.madronalvillas.com/' },
        areaServed: ['Marbella', 'Benahavís', 'El Madroñal', 'La Zagaleta', 'Puerto Banús', 'Costa del Sol'],
        description: 'Access to more than 100 luxury villas across Marbella and the Costa del Sol through Property Facilitators EuroAsia and The Luxury Villa Collection.'
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } }))
      }
    ]
  };

  return <>
    <SiteHeader languageHref="/es/alquiler-villas-lujo" />
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="rentalHubHero">
        <Image src="/images/lampara/sun-terrace.webp" alt="Luxury villa terrace and pool in the Marbella hills" fill priority sizes="100vw" />
        <div className="rentalHubShade" />
        <div className="wrap heroCopy rentalHubHeroCopy">
          <p className="eyebrow">Luxury Villa Rentals &amp; Concierge</p>
          <h1>100+ luxury villas to rent.<em>Marbella &amp; Costa del Sol.</em></h1>
          <p>Access a carefully selected portfolio across Marbella, Benahavís and the Costa del Sol—many available only through private enquiry.</p>
          <div className="actions"><a className="btn gold" href={enquiryHref}>Send your requirements</a><a className="under" href={collectionHref}>View the current selection</a></div>
        </div>
      </section>

      <section className="intro pad"><div className="wrap split"><p className="eyebrow darkEye">The Wider Collection</p><div>
        <h2>More choice.<em>Personally selected.</em></h2>
        <p className="lead">Madroñal Villas provides access to more than 100 luxury rental villas through Property Facilitators EuroAsia, in collaboration with The Luxury Villa Collection.</p>
        <p className="rentalHubBody">The villas shown publicly represent only part of the available portfolio. Tell us your dates, group size, preferred area, bedroom requirement and approximate budget, and a current selection will be prepared specifically for your stay.</p>
        <div className="actions"><a className="btn gold" href={collectionHref}>View the current villa selection</a><a className="under darkUnder" href={enquiryHref}>Send your requirements</a></div>
      </div></div></section>

      <RentalVillaCarousel />

      <section className="rentalHubStats" aria-label="Rental collection highlights"><div className="wrap rentalHubStatsGrid">
        <div><strong>100+</strong><span>Luxury villas</span></div><div><strong>6</strong><span>Prime rental areas</span></div><div><strong>Private</strong><span>Tailored shortlist</span></div><div><strong>Complete</strong><span>Concierge support</span></div>
      </div></section>

      <section className="pad rentalHubAreas"><div className="wrap">
        <div className="heading"><div><p className="eyebrow darkEye">Across the Coast</p><h2>Prime addresses.<em>Distinctive stays.</em></h2></div><p>From private mountain estates to beachside homes, the collection covers Marbella’s most requested locations and selected destinations along the Costa del Sol.</p></div>
        <div className="rentalHubAreaGrid">{areas.map(([name, description], index) => <article key={name}><span>{String(index + 1).padStart(2, '0')}</span><h3>{name}</h3><p>{description}</p></article>)}</div>
      </div></section>

      <section className="rentalHubEditorial">
        <div className="rentalHubEditorialImage"><Image src="/images/candela/pool-dining.webp" alt="Private poolside dining at a luxury villa" fill sizes="(max-width: 850px) 100vw, 52vw" /></div>
        <div className="rentalHubEditorialCopy">
          <p className="eyebrow">A Private Approach</p><h2>Not simply a list.<em>The right villa for you.</em></h2>
          <p>Availability, owner preferences and the needs of each group are different. Rather than presenting an overwhelming catalogue, we provide a focused shortlist based on how you intend to use the villa.</p>
          <ul className="cleanList"><li>Family and multi-generational holidays</li><li>Large groups and extended stays</li><li>Golf trips and corporate retreats</li><li>Celebrations in event-approved villas</li><li>Privately distributed and off-market options</li></ul>
          <div className="actions"><a className="btn gold" href={enquiryHref}>Request a private selection</a></div>
        </div>
      </section>

      <section className="pad rentalHubProcess"><div className="wrap">
        <div className="rentalHubProcessHeading"><p className="eyebrow darkEye">How It Works</p><h2>Three simple steps.<em>One personal service.</em></h2></div>
        <div className="rentalHubProcessGrid">
          <article><span>01</span><h3>Share your requirements</h3><p>Dates, guests, bedrooms, preferred location, budget and any special requirements.</p></article>
          <article><span>02</span><h3>Receive a tailored shortlist</h3><p>Current, suitable options are selected from the wider portfolio and shared with you privately.</p></article>
          <article><span>03</span><h3>Confirm your stay</h3><p>Once the villa is selected, the reservation and additional concierge services are coordinated.</p></article>
        </div>
      </div></section>

      <section className="rentalHubConcierge">
        <div className="rentalHubConciergeCopy"><p className="eyebrow">Concierge Support</p><h2>Your villa is<em>only the beginning.</em></h2><p>Practical arrangements and exceptional experiences can be coordinated before and during your stay.</p><div className="rentalHubConciergeList">{concierge.map(item => <span key={item}>{item}</span>)}</div><div className="actions"><Link className="under" href="/concierge">Explore concierge services</Link></div></div>
        <div className="rentalHubConciergeImage"><Image src="/images/lampara/breakfast-terrace.webp" alt="Breakfast prepared on a private Marbella villa terrace" fill sizes="(max-width: 850px) 100vw, 50vw" /></div>
      </section>

      <section className="pad rentalHubFaq"><div className="wrap rentalHubFaqGrid"><div><p className="eyebrow darkEye">Rental FAQ</p><h2>Planning your<em>Marbella stay.</em></h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

      <section className="contact pad rentalHubFinal"><div className="wrap contactGrid"><div><p className="eyebrow">100+ Luxury Villas</p><h2>Tell us what<em>you require.</em></h2></div><div><p>Share your dates, group size, bedrooms, preferred area and approximate budget. Your enquiry will be managed by Property Facilitators EuroAsia in collaboration with The Luxury Villa Collection.</p><div className="actions"><a className="btn gold" href={enquiryHref}>Send your requirements</a></div><small>Madroñal Villas is the referring local partner. Availability and services are subject to confirmation.</small></div></div></section>
    </main>
    <SiteFooter />
  </>;
}
