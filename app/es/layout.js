export const metadata = {
  title: { default: 'Madroñal Villas | Villas privadas de lujo en Marbella', template: '%s | Madroñal Villas' },
  description: 'Villa Candela y Villa Lámpara: dos villas privadas de lujo en la urbanización cerrada El Madroñal, cerca de Marbella y Puerto Banús.',
  openGraph: { locale: 'es_ES' }
};

export default function SpanishLayout({ children }) {
  return <div lang="es">{children}</div>;
}
