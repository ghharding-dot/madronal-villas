import Link from 'next/link';

const navigation = [['Villas', '/#villas'], ['Discover', '/discover'], ['El Madroñal', '/el-madronal'], ['Concierge', '/concierge']];
function NavigationLinks() { return navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>); }

export default function SiteHeader() {
  return <header className="header">
    <Link className="brand" href="/" aria-label="Madroñal Villas home"><span aria-hidden="true">MV</span><b>Madroñal Villas<small>Private Collection · Marbella</small></b></Link>
    <nav className="desktopNav" aria-label="Primary navigation"><NavigationLinks /><Link className="enquire" href="/#contact">Enquire</Link></nav>
    <details className="mobileNav"><summary aria-label="Open navigation"><span>Menu</span></summary><nav aria-label="Mobile navigation"><NavigationLinks /><Link className="enquire" href="/#contact">Enquire</Link></nav></details>
  </header>;
}
