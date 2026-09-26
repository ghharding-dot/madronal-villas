'use client';

import Image from 'next/image';
import { useState } from 'react';

const villas = [
  {
    code: 'LVC26-002',
    name: 'Villa Chantay',
    location: 'Monte Mayor, Benahavís',
    price: 'From £7,815 per week',
    bedrooms: 5,
    bathrooms: 5,
    sleeps: 10,
    image: 'https://muvwzgovydm6kz0t.public.blob.vercel-storage.com/private-portfolio/rentals/1788608578736-ddb0340d-bfdc-4c29-a50b-05b809f0d308/main-5GbUHVxJ1jS3WLbPdmNHnQlL3nbNer.jpg'
  },
  {
    code: 'LVC26-003',
    name: 'Villa Los Artes',
    location: 'Los Monteros, Marbella',
    price: 'From £33,750 per week',
    bedrooms: 5,
    bathrooms: 6,
    sleeps: 10,
    image: 'https://muvwzgovydm6kz0t.public.blob.vercel-storage.com/private-portfolio/rentals/1788609767196-5631d1bf-824a-48e8-a293-a58635a68c70/main-O4wv8JkpG3G6OujrMp2ZYRVh9f43Jh.jpg'
  },
  {
    code: 'LVC26-005',
    name: 'Villa Kynthia',
    location: 'El Paraíso, Estepona',
    price: 'From £6,800 per week',
    bedrooms: 6,
    bathrooms: 6,
    sleeps: 12,
    image: 'https://muvwzgovydm6kz0t.public.blob.vercel-storage.com/private-portfolio/rentals/1788611894854-cf9cf5dd-474a-4e74-86f1-2a09a09106e8/main-WBriKIL4soaWFiYtmhEvGTlUbklEYB.jpg'
  },
  {
    code: 'LVC26-004',
    name: 'Villa Espace',
    location: 'Los Flamingos, Estepona',
    price: 'From £14,500 per week',
    bedrooms: 6,
    bathrooms: 7,
    sleeps: 12,
    image: 'https://muvwzgovydm6kz0t.public.blob.vercel-storage.com/private-portfolio/rentals/1788611507974-a54f74b7-1330-4064-8a87-4aae540037eb/main-8gn3SzjZusUvKUmQkWluBUvUNms9Z6.jpg'
  },
  {
    code: 'LVC26-006',
    name: 'Villa Tennang',
    location: 'Golden Mile, Marbella',
    price: 'From £33,000 per week',
    bedrooms: 8,
    bathrooms: 9,
    sleeps: 16,
    image: 'https://muvwzgovydm6kz0t.public.blob.vercel-storage.com/private-portfolio/rentals/1788612195347-64563118-c5b8-409c-895c-08f742c4299c/main-PL9a6sXa4gmWNBOoP3YjHXMRPaU6gB.jpg'
  },
  {
    code: 'LVC26-001',
    name: 'Villa Zensei',
    location: 'Sierra Blanca, Marbella',
    price: 'Price on request',
    bedrooms: 8,
    bathrooms: 8,
    sleeps: 15,
    image: 'https://muvwzgovydm6kz0t.public.blob.vercel-storage.com/private-portfolio/rentals/1788547739368-ebec3fb9-275e-462c-8274-44c57a16198f/main-MS6O0qNjbHGFIozUM4RdDTyRfwMbG7.jpg'
  }
];

export default function RentalVillaCarousel({ locale = 'en' }) {
  const [index, setIndex] = useState(0);
  const villa = villas[index];
  const spanish = locale === 'es';
  const campaign = spanish ? '100_plus_villas_es' : '100_plus_villas';
  const enquiryHref = `https://www.pfeuroasia.com/luxury-villa-rentals?villa=${villa.code}&utm_source=madronalvillas&utm_medium=referral&utm_campaign=${campaign}#villa-enquiry`;
  const collectionHref = `https://www.pfeuroasia.com/luxury-villa-rentals?utm_source=madronalvillas&utm_medium=referral&utm_campaign=${campaign}#villa-rentals-collection`;
  const move = (direction) => setIndex((index + direction + villas.length) % villas.length);

  return <section className="rentalPreview" aria-labelledby={`rental-preview-${locale}`}>
    <div className="wrap rentalPreviewHeading">
      <div><p className="eyebrow">{spanish ? 'Una selección privada' : 'A private collection'}</p><h2 id={`rental-preview-${locale}`}>{spanish ? 'Una muestra de las villas disponibles.' : 'A glimpse of what is available.'}</h2></div>
      <a className="under" href={collectionHref}>{spanish ? 'Ver la selección completa en PF EuroAsia →' : 'View the full selection on PF EuroAsia →'}</a>
    </div>

    <div className="wrap rentalPreviewCard">
      <a className="rentalPreviewImage" href={enquiryHref} aria-label={`${spanish ? 'Consultar' : 'Enquire about'} ${villa.name}`}>
        <Image key={villa.image} src={villa.image} alt={`${villa.name}, ${villa.location}`} fill sizes="(max-width: 850px) 100vw, 58vw" />
        <span>{String(index + 1).padStart(2, '0')} / {String(villas.length).padStart(2, '0')}</span>
      </a>
      <div className="rentalPreviewDetails">
        <p className="rentalPreviewCode">{villa.code}</p>
        <p className="rentalPreviewLocation">{villa.location}</p>
        <h3>{villa.name}</h3>
        <p className="rentalPreviewPrice">{villa.price}</p>
        <dl><div><dt>{spanish ? 'Dormitorios' : 'Bedrooms'}</dt><dd>{villa.bedrooms}</dd></div><div><dt>{spanish ? 'Baños' : 'Bathrooms'}</dt><dd>{villa.bathrooms}</dd></div><div><dt>{spanish ? 'Huéspedes' : 'Sleeps'}</dt><dd>{villa.sleeps}</dd></div></dl>
        <p className="rentalPreviewNote">{spanish ? 'Disponibilidad y precio sujetos a confirmación. La selección completa incluye más de 100 villas.' : 'Availability and price are subject to confirmation. The complete collection includes more than 100 villas.'}</p>
        <a className="btn gold" href={enquiryHref}>{spanish ? 'Consultar esta villa' : 'Request this villa'}</a>
      </div>
    </div>

    <div className="wrap rentalPreviewControls">
      <button type="button" onClick={() => move(-1)} aria-label={spanish ? 'Villa anterior' : 'Previous villa'}>←</button>
      <div role="tablist" aria-label={spanish ? 'Elegir villa' : 'Choose villa'}>{villas.map((item, itemIndex) => <button key={item.code} type="button" role="tab" aria-selected={itemIndex === index} aria-label={`${spanish ? 'Mostrar' : 'Show'} ${item.name}`} onClick={() => setIndex(itemIndex)} />)}</div>
      <button type="button" onClick={() => move(1)} aria-label={spanish ? 'Villa siguiente' : 'Next villa'}>→</button>
    </div>
  </section>;
}
