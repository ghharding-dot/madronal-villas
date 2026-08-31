import Link from 'next/link';
export default function SiteFooter() { return <footer><div className="wrap footerGrid">
  <div><img className="footerBrandLogo" src="/images/madronal-villas-logo-gold-black.webp" alt="Madroñal Villas" /><span>Private Collection · Marbella</span><span>Luxury. Privacy. Perfection.</span></div>
  <div><strong>Villas</strong><Link href="/villa-candela">Villa Candela</Link><Link href="/villa-lampara">Villa Lámpara</Link></div>
  <div><strong>Explore</strong><Link href="/discover">Discover El Madroñal</Link><Link href="/concierge">Private Concierge</Link></div>
  <div><strong>Contact</strong><a href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">Rental enquiries</a></div>
</div></footer>; }
