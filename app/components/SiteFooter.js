import Link from 'next/link';
export default function SiteFooter() { return <footer><div className="wrap footerGrid">
  <div><img className="footerBrandLogo" src="/images/madronal-villas-logo-gold-black.webp" alt="Madroñal Villas" /><span>Private Collection · Marbella</span><address className="footerAddress">Urbanización El Madroñal<br />Benahavís, Málaga, Spain</address><a className="footerPhone" href="tel:+34647026881">+34 647 026 881</a></div>
  <div><strong>Villas</strong><Link href="/villa-candela">Villa Candela</Link><Link href="/villa-lampara">Villa Lámpara</Link></div>
  <div><strong>Explore</strong><Link href="/discover">Discover El Madroñal</Link><Link href="/local-knowledge">Local Knowledge</Link><Link href="/concierge">Private Concierge</Link></div>
  <div><strong>Contact</strong><a href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">Rental enquiries</a><a href="https://www.instagram.com/madronalvillasspain/" target="_blank" rel="noopener noreferrer">Instagram @Madronalvillasspain</a></div>
</div></footer>; }
