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
  alternates: {
    canonical: '/'
  },
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
  return <html lang="en"><body>{children}</body></html>;
}
