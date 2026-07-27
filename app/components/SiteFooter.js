import Link from 'next/link';
export default function SiteFooter() { return <footer><div className="wrap footerGrid">
  <div><strong>Madroñal Villas</strong><span>Private Collection · Marbella</span><span>Luxury. Privacy. Perfection.</span></div>
  <div><strong>Villas</strong><Link href="/villa-candela">Villa Candela</Link><Link href="/villa-lampara">Villa Lámpara</Link></div>
  <div><strong>Explore</strong><Link href="/discover">Discover El Madroñal</Link><Link href="/concierge">Private Concierge</Link></div>
  <div><strong>Contact</strong><a href="mailto:reservations@madronalvillas.com">Email reservations</a></div>
</div></footer>; }
