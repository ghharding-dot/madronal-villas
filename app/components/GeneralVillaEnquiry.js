const enquiryLinks = {
  en: 'https://www.pfeuroasia.com/luxury-villa-rentals?utm_source=madronalvillas&utm_medium=referral&utm_campaign=general_villa_enquiry#villa-enquiry',
  es: 'https://www.pfeuroasia.com/luxury-villa-rentals?utm_source=madronalvillas&utm_medium=referral&utm_campaign=general_villa_enquiry_es#villa-enquiry'
};

export default function GeneralVillaEnquiry({ locale = 'en' }) {
  const spanish = locale === 'es';
  return (
    <section className="generalVillaEnquiry" aria-labelledby={`general-villa-enquiry-${locale}`}>
      <div className="wrap generalVillaEnquiryInner">
        <div className="generalVillaEnquiryCopy">
          <p className="eyebrow darkEye">{spanish ? 'Consulta general de alquiler' : 'General rental enquiry'}</p>
          <h2 id={`general-villa-enquiry-${locale}`}>
            {spanish ? '¿Aún no ha elegido villa?' : 'Haven’t chosen a villa?'}
            <em>{spanish ? 'Le ayudamos a encontrarla.' : 'Let us find the right one.'}</em>
          </h2>
          <p>{spanish
            ? 'Indíquenos las fechas de entrada y salida, número de huéspedes, dormitorios necesarios, zona preferida y presupuesto. También puede indicar fechas flexibles. Le prepararemos una selección de villas adecuadas.'
            : 'Tell us your arrival and departure dates, number of guests, bedrooms required, preferred area and budget. Flexible dates are welcome. We’ll prepare a suitable shortlist from the wider collection.'}</p>
        </div>
        <div className="generalVillaEnquiryAction">
          <a className="btn gold" href={enquiryLinks[spanish ? 'es' : 'en']}>
            {spanish ? 'Enviar consulta general de villas →' : 'Make a general villa enquiry →'}
          </a>
          <small>{spanish
            ? 'Se abrirá el formulario de PF EuroAsia. No necesita seleccionar una villa.'
            : 'Opens the existing PF EuroAsia form. No villa selection needed.'}</small>
        </div>
      </div>
    </section>
  );
}
