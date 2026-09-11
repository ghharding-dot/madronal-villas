import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'El Madroñal Local Knowledge | Geoff Harding',
  description: 'Practical local knowledge of El Madroñal from Geoff Harding, drawing on direct experience managing villas and advising owners in the estate since 2010.',
  alternates: { canonical: '/local-knowledge' },
  openGraph: {
    title: 'El Madroñal Local Knowledge | Madroñal Villas',
    description: 'An experienced, practical perspective on living, owning, renting and buying in El Madroñal above Marbella.',
    url: '/local-knowledge',
    type: 'article'
  }
};

const insights = [
  {
    number: '01',
    title: 'Access is part of the address',
    copy: 'El Madroñal is a hillside estate with several entrances and very different approaches. The most convenient route depends on the position of the property, the time of day and whether the priority is Marbella, San Pedro, Benahavís or the airport.'
  },
  {
    number: '02',
    title: 'Orientation changes the experience',
    copy: 'Two nearby villas can feel completely different. Height, aspect, tree cover and the shape of the plot affect morning light, afternoon sun, views, privacy and the way outdoor spaces are used through the seasons.'
  },
  {
    number: '03',
    title: 'Privacy is more than plot size',
    copy: 'A large plot is valuable, but mature landscaping, neighbouring sightlines, road position and the placement of terraces and pools often make the greater difference to genuine privacy.'
  },
  {
    number: '04',
    title: 'A substantial villa needs stewardship',
    copy: 'Gardens, pools, water systems, security, access, staffing and preventive maintenance all need coordinated attention. Good management protects both the enjoyment of the home and its long-term value.'
  }
];

const guideLinks = [
  ['The estate', '/discover/the-estate'],
  ['Location & access', '/discover/location'],
  ['Everyday conveniences', '/discover/conveniences'],
  ['Dining', '/discover/dining'],
  ['Golf & outdoors', '/discover/outdoors'],
  ['Beaches', '/discover/beaches']
];

export default function LocalKnowledgePage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'El Madroñal Local Knowledge',
    url: 'https://madronalvillas.com/local-knowledge',
    mainEntity: {
      '@type': 'Person',
      '@id': 'https://madronalvillas.com/local-knowledge#geoff-harding',
      name: 'Geoff Harding',
      jobTitle: 'Property adviser and villa manager',
      description: 'Costa del Sol resident since 1984 and directly involved with private villas in El Madroñal since 2010.',
      knowsAbout: ['El Madroñal', 'Marbella property', 'Villa management', 'Luxury villa rentals']
    }
  };

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema).replace(/</g, '\\u003c') }}
        />

        <section className="discoverHero knowledgeHero">
          <div className="shade" />
          <div className="wrap heroCopy">
            <p className="eyebrow">Local Knowledge · El Madroñal</p>
            <h1>Experience that lives<em>beyond the listing.</em></h1>
            <p>Practical perspective shaped by managing homes, welcoming guests and advising owners within El Madroñal since 2010.</p>
          </div>
        </section>

        <section className="intro pad">
          <div className="wrap split">
            <p className="eyebrow darkEye">Understanding the Estate</p>
            <div>
              <h2>Every road, aspect and plot<em>has its own character.</em></h2>
              <p className="lead">
                El Madroñal is not one uniform residential development. It is a
                mature mountain estate where elevation, orientation, access and
                landscaping can matter as much as the villa itself. Meaningful
                advice starts with understanding those differences.
              </p>
            </div>
          </div>
        </section>

        <section className="pad knowledgeInsights">
          <div className="wrap">
            <div className="heading knowledgeHeading">
              <div>
                <p className="eyebrow darkEye">What Local Knowledge Changes</p>
                <h2>Details that shape<em>daily life.</em></h2>
              </div>
              <p>Useful guidance for guests, buyers and owners considering a home in this distinctive hillside community.</p>
            </div>
            <div className="insightGrid">
              {insights.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="featureSplit knowledgePerspective">
          <div className="featureImage knowledgeFeatureImage" />
          <div className="featureCopy">
            <p className="eyebrow">A Practical Perspective</p>
            <h2>Living well in<em>El Madroñal.</em></h2>
            <p>
              The estate offers unusual calm and discretion while keeping the
              coast within easy reach. The practical side matters too: planning
              journeys around the right entrance, coordinating household
              services, caring for extensive grounds and preparing a property
              properly for periods of occupation or absence.
            </p>
            <p>
              That operational knowledge is especially useful when comparing
              properties. It helps separate a beautiful viewing from a home
              that will work exceptionally well over time.
            </p>
            <div className="actions">
              <Link className="btn gold" href="/el-madronal">Explore the estate</Link>
            </div>
          </div>
        </section>

        <section className="pad geoffProfile" id="geoff-harding">
          <div className="wrap geoffProfileGrid">
            <div className="profileMarker" aria-hidden="true">
              <span>GH</span>
              <small>El Madroñal · Since 2010</small>
            </div>
            <div className="profileCopy">
              <p className="eyebrow darkEye">About Geoff Harding</p>
              <h2>Long-standing local involvement.<em>Personal, informed advice.</em></h2>
              <p className="lead">
                Geoff Harding has lived on the Costa del Sol since 1984 and has
                been directly involved with private villas in El Madroñal since
                2010. His experience spans villa management, luxury rentals,
                owner representation and high-value residential property.
              </p>
              <p>
                Through Madroñal Villas, Geoff has helped owners care for their
                homes and welcomed international guests to the estate. Today he
                also advises property clients through Property Facilitators
                Iberia, collaborates with Aylesford Spain on selected prime
                Marbella property and works with PF EuroAsia for international
                clients. His approach is straightforward: understand the
                person, understand the property and give clear advice based on
                direct experience.
              </p>
              <div className="actions profileActions">
                <a className="btn gold" href="https://pfiberia.com/">Property advice in Marbella</a>
                <a className="under" href="https://www.pfeuroasia.com/">International clients</a>
              </div>
            </div>
          </div>
        </section>

        <section className="pad localGuideLinks">
          <div className="wrap">
            <div className="heading">
              <div>
                <p className="eyebrow">The Local Guide</p>
                <h2>Explore El Madroñal<em>and its surroundings.</em></h2>
              </div>
              <p>Start with the questions that matter to you, from access and everyday life to beaches, dining and time outdoors.</p>
            </div>
            <div className="guideLinkGrid">
              {guideLinks.map(([label, href]) => (
                <Link href={href} key={href}><span>{label}</span><b aria-hidden="true">→</b></Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
