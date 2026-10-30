'use client';

import { useEffect, useState } from 'react';

const MAX_VILLAS = 15;

function weeklyPrice(villa, spanish) {
  const currency = ['GBP', 'EUR', 'USD'].includes(villa.currency) ? villa.currency : 'GBP';
  const parse = (value) => {
    const number = Number(String(value || '').replace(/[^\d.]/g, ''));
    return Number.isFinite(number) && number > 0 ? number : null;
  };
  const low = parse(villa.priceFrom);
  const high = parse(villa.priceTo);
  if (low === null && high === null) return spanish ? 'Precio a consultar' : 'Price on request';
  const formatter = new Intl.NumberFormat(spanish ? 'es-ES' : 'en-GB', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  });
  const amount = low !== null && high !== null && high > low
    ? formatter.format(low) + ' – ' + formatter.format(high)
    : formatter.format(low ?? high);
  return (spanish ? 'Desde ' : 'From ') + amount + (spanish ? ' por semana' : ' per week');
}

export default function RentalVillaCarousel({ locale = 'en' }) {
  const [villas, setVillas] = useState([]);
  const [index, setIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);
  const spanish = locale === 'es';
  const campaign = spanish ? '100_plus_villas_es' : '100_plus_villas';
  const collectionHref = `https://www.pfeuroasia.com/luxury-villa-rentals?utm_source=madronalvillas&utm_medium=referral&utm_campaign=${campaign}#villa-rentals-collection`;

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch('/api/rental-villas', {
          cache: 'no-store',
          signal: controller.signal
        });
        if (!response.ok) throw new Error('Rental feed unavailable');
        const data = await response.json();
        if (!Array.isArray(data.villas)) throw new Error('Invalid rental feed');
        const approved = data.villas.filter((villa) =>
          villa && villa.reference && villa.title && villa.image && villa.location
        ).slice(0, MAX_VILLAS);
        setVillas(approved);
        setIndex(0);
        setUnavailable(false);
      } catch (error) {
        if (controller.signal.aborted) return;
        setUnavailable(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    load();
    return () => controller.abort();
  }, []);

  const villa = villas[index];
  const enquiryHref = villa
    ? `https://www.pfeuroasia.com/luxury-villa-rentals?villa=${encodeURIComponent(villa.reference)}&utm_source=madronalvillas&utm_medium=referral&utm_campaign=${campaign}#villa-enquiry`
    : collectionHref;
  const move = (direction) => { setIndex((current) => (current + direction + villas.length) % villas.length); setPhotoIndex(0); };
  const photos = Array.from(new Set([...(villa?.galleryImages || []), villa?.image].filter(Boolean)));
  const image = photos[photoIndex] || villa?.image;
  const amenities = String(villa?.amenities || '').split(/,|\n/).map((item) => item.trim()).filter(Boolean);

  return <section className="rentalPreview" aria-labelledby={`rental-preview-${locale}`}>
    <div className="wrap rentalPreviewHeading">
      <div><p className="eyebrow">{spanish ? 'Una selección privada' : 'A private collection'}</p><h2 id={`rental-preview-${locale}`}>{spanish ? 'Una muestra de las villas disponibles.' : 'A glimpse of what is available.'}</h2></div>
      <a className="under" href={collectionHref}>{spanish ? 'Ver la selección completa en PF EuroAsia →' : 'View the full selection on PF EuroAsia →'}</a>
    </div>

    {villa ? <>
      <div className="wrap rentalPreviewCard">
        <a className="rentalPreviewImage" href={enquiryHref} aria-label={`${spanish ? 'Consultar' : 'Enquire about'} ${villa.title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img key={image} src={image} alt={`${villa.title}, ${villa.location}`} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <span>{String(index + 1).padStart(2, '0')} / {String(villas.length).padStart(2, '0')}</span>
        </a>
        <div className="rentalPreviewDetails">
          <p className="rentalPreviewCode">{villa.reference}</p>
          <p className="rentalPreviewLocation">{villa.location}</p>
          <h3>{villa.title}</h3>
          <p className="rentalPreviewPrice">{weeklyPrice(villa, spanish)}</p>
          <dl><div><dt>{spanish ? 'Dormitorios' : 'Bedrooms'}</dt><dd>{villa.bedrooms || '—'}</dd></div><div><dt>{spanish ? 'Baños' : 'Bathrooms'}</dt><dd>{villa.bathrooms || '—'}</dd></div><div><dt>{spanish ? 'Huéspedes' : 'Sleeps'}</dt><dd>{villa.guests || '—'}</dd></div></dl>
          {villa.description && <p className="rentalPreviewDescription">{villa.description}</p>}
          {photos.length > 1 && <div className="rentalPreviewPhotoControls" aria-label={spanish ? 'Fotografías de la villa' : 'Villa photographs'}>
            <button type="button" onClick={() => setPhotoIndex((current) => (current - 1 + photos.length) % photos.length)} aria-label={spanish ? 'Foto anterior' : 'Previous photograph'}>←</button>
            <span>{spanish ? 'Fotos' : 'Photos'} {photoIndex + 1} / {photos.length}</span>
            <button type="button" onClick={() => setPhotoIndex((current) => (current + 1) % photos.length)} aria-label={spanish ? 'Foto siguiente' : 'Next photograph'}>→</button>
          </div>}
          {amenities.length > 0 && <details className="rentalPreviewAmenities"><summary>{spanish ? 'Características y servicios' : 'Amenities and features'}</summary><p>{amenities.join(' · ')}</p></details>}
          <p className="rentalPreviewNote">{spanish ? 'Disponibilidad y precio sujetos a confirmación. La selección completa incluye más de 100 villas.' : 'Availability and price are subject to confirmation. The complete collection includes more than 100 villas.'}</p>
          <a className="btn gold" href={enquiryHref}>{spanish ? 'Consultar esta villa' : 'Request this villa'}</a>
        </div>
      </div>

      {villas.length > 1 && <div className="wrap rentalPreviewControls">
        <button type="button" onClick={() => move(-1)} aria-label={spanish ? 'Villa anterior' : 'Previous villa'}>←</button>
        <div role="tablist" aria-label={spanish ? 'Elegir villa' : 'Choose villa'}>{villas.map((item, itemIndex) => <button key={item.reference} type="button" role="tab" aria-selected={itemIndex === index} aria-label={`${spanish ? 'Mostrar' : 'Show'} ${item.title}`} onClick={() => setIndex(itemIndex)} />)}</div>
        <button type="button" onClick={() => move(1)} aria-label={spanish ? 'Villa siguiente' : 'Next villa'}>→</button>
      </div>}
    </> : <div className="wrap rentalPreviewEmpty" role="status">
      <p>{loading
        ? (spanish ? 'Cargando la selección de villas…' : 'Loading the villa selection…')
        : unavailable
          ? (spanish ? 'La selección no está disponible temporalmente.' : 'The selection is temporarily unavailable.')
          : (spanish ? 'La selección de villas se está actualizando.' : 'The villa selection is being updated.')}</p>
      {!loading && <a className="btn gold" href={collectionHref}>{spanish ? 'Ver villas en PF EuroAsia' : 'Explore villas on PF EuroAsia'}</a>}
    </div>}
  </section>;
}
