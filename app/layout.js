import './globals.css';

export const metadata = {
  metadataBase: new URL('https://madronalvillas.com'),
  title: {
    default: 'Madroñal Villas | Private Luxury Villas in Marbella',
    template: '%s | Madroñal Villas'
  },
  description: 'Villa Candela and Villa Lámpara: two privately operated luxury villas in the gated El Madroñal estate near Marbella and Puerto Banús.',
  keywords: [
    'luxury villas Marbella',
    'El Madroñal villa rental',
    'private villa Marbella',
    'Villa Candela',
    'Villa Lámpara',
    'luxury accommodation Benahavís'
  ],
  openGraph: {
    title: 'Madroñal Villas — Private Collection',
    description: 'Two exceptional private villas within the exclusive gated estate of El Madroñal, Marbella.',
    url: 'https://madronalvillas.com',
    siteName: 'Madroñal Villas',
    images: [
      {
        url: '/images/lampara/aerial.webp',
        width: 1200,
        height: 630,
        alt: 'Madroñal Villas private collection above Marbella'
      }
    ],
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madroñal Villas — Private Collection',
    description: 'Luxury. Privacy. Perfection.',
    images: ['/images/lampara/aerial.webp']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LodgingBusiness',
        '@id': 'https://madronalvillas.com/#business',
        name: 'Madroñal Villas',
        url: 'https://madronalvillas.com/',
        telephone: '+34 647 026 881',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Benahavís',
          addressRegion: 'Málaga',
          addressCountry: 'ES'
        },
        areaServed: ['El Madroñal', 'Benahavís', 'Marbella', 'Costa del Sol'],
        employee: { '@id': 'https://madronalvillas.com/local-knowledge#geoff-harding' },
        sameAs: ['https://www.instagram.com/madronalvillasspain/']
      },
      {
        '@type': 'Person',
        '@id': 'https://madronalvillas.com/local-knowledge#geoff-harding',
        name: 'Geoff Harding',
        jobTitle: 'Property adviser and villa manager',
        worksFor: [
          { '@id': 'https://madronalvillas.com/#business' },
          {
            '@type': 'RealEstateAgent',
            name: 'Property Facilitators Iberia',
            url: 'https://pfiberia.com/'
          },
          {
            '@type': 'Organization',
            name: 'Property Facilitators EuroAsia',
            url: 'https://www.pfeuroasia.com/'
          }
        ],
        knowsAbout: [
          'El Madroñal property',
          'Luxury villa management',
          'Luxury villa rentals',
          'Marbella residential property'
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}
