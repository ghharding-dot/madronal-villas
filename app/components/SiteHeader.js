import Link from 'next/link';
import styles from './SiteHeader.module.css';

const englishNavigation = [
  ['Villas', '/#villas'],
  ['Discover', '/discover'],
  ['El Madroñal', '/el-madronal'],
  ['Local Knowledge', '/local-knowledge'],
  ['Concierge', '/concierge']
];
const spanishNavigation = [
  ['Villas', '/es/#villas'],
  ['Descubrir', '/es/descubrir'],
  ['El Madroñal', '/es/el-madronal'],
  ['Conocimiento local', '/es/conocimiento-local'],
  ['Conserjería', '/es/conserjeria']
];
function NavigationLinks({ locale }) {
  const navigation = locale === 'es' ? spanishNavigation : englishNavigation;
  return navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>);
}

export default function SiteHeader({ locale = 'en', languageHref = locale === 'es' ? '/' : '/es' }) {
  const spanish = locale === 'es';
  return <>
    <a className={styles.announcement} href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">
      <span>{spanish ? 'Colección de alquiler' : 'Rental Collection'}</span>
      {spanish
        ? 'Madroñal Villas, en colaboración con The Luxury Villa Collection — acceso a 80 villas excepcionales en alquiler en la Costa del Sol.'
        : 'Madroñal Villas, in collaboration with The Luxury Villa Collection — access 80 exceptional villas for rent across the Costa del Sol.'}
      <strong>{spanish ? 'Consultar disponibilidad →' : 'Explore availability →'}</strong>
    </a>
    <header className={`header ${styles.shiftedHeader}`}>
      <Link className="brand" href={spanish ? '/es' : '/'} aria-label={spanish ? 'Inicio de Madroñal Villas' : 'Madroñal Villas home'}>
        <img src="/images/madronal-villas-logo-gold-black.webp" alt="Madroñal Villas" />
      </Link>
      <nav className="desktopNav" aria-label={spanish ? 'Navegación principal' : 'Primary navigation'}>
        <NavigationLinks locale={locale} />
        <span className={styles.languages} aria-label={spanish ? 'Seleccionar idioma' : 'Choose language'}>
          <Link href={spanish ? languageHref : '#'} aria-current={!spanish ? 'page' : undefined}>EN</Link>
          <i aria-hidden="true">|</i>
          <Link href={spanish ? '#' : languageHref} aria-current={spanish ? 'page' : undefined}>ES</Link>
        </span>
        <a className="enquire" href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">{spanish ? 'Consulta de alquiler' : 'Rental enquiry'}</a>
      </nav>
      <details className="mobileNav">
        <summary aria-label={spanish ? 'Abrir navegación' : 'Open navigation'}><span>{spanish ? 'Menú' : 'Menu'}</span></summary>
        <nav aria-label={spanish ? 'Navegación móvil' : 'Mobile navigation'}>
          <NavigationLinks locale={locale} />
          <span className={styles.mobileLanguages}><Link href={spanish ? languageHref : '#'}>English</Link><Link href={spanish ? '#' : languageHref}>Español</Link></span>
          <a className="enquire" href="https://www.pfeuroasia.com/luxury-villa-rentals#villa-enquiry">{spanish ? 'Consulta de alquiler' : 'Rental enquiry'}</a>
        </nav>
      </details>
    </header>
  </>;
}
