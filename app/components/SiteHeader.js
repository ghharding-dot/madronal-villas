import Link from 'next/link';
import styles from './SiteHeader.module.css';

const navigation = [
  ['Villas', '/#villas'],
  ['Discover', '/discover'],
  ['El Madroñal', '/el-madronal'],
  ['Local Knowledge', '/local-knowledge'],
  ['Concierge', '/concierge']
];
function NavigationLinks() { return navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>); }

export default function SiteHeader() {
  return <>
    <a className={styles.announcement} href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">
      <span>Rental Collection</span>
      Madroñal Villas, in collaboration with The Luxury Villa Collection — access 80 exceptional villas for rent across the Costa del Sol.
      <strong>Explore availability →</strong>
    </a>
    <header className={`header ${styles.shiftedHeader}`}>
      <Link className="brand" href="/" aria-label="Madroñal Villas home">
        <img src="/images/madronal-villas-logo-gold-black.webp" alt="Madroñal Villas" />
      </Link>
      <nav className="desktopNav" aria-label="Primary navigation"><NavigationLinks /><a className="enquire" href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">Rental enquiry</a></nav>
      <details className="mobileNav"><summary aria-label="Open navigation"><span>Menu</span></summary><nav aria-label="Mobile navigation"><NavigationLinks /><a className="enquire" href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">Rental enquiry</a></nav></details>
    </header>
  </>;
}
