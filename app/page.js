import Link from 'next/link';

const Header = () => (
  <header className="header">
    <Link className="brand" href="/">
      <span>MV</span>
      <b>Madroñal Villas<small>Private Collection · Marbella</small></b>
    </Link>
    <nav>
      <a href="#villas">Villas</a>
      <a href="#location">El Madroñal</a>
      <a href="#standards">Standards</a>
      <a href="#services">Services</a>
      <a className="enquire" href="#contact">Enquire</a>
    </nav>
  </header>
);

const Feature = ({