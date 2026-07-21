import './globals.css';
export const metadata = {
  title: 'Madroñal Villas | Private Luxury Villas in Marbella',
  description: 'Villa Candela and Villa Lámpara, two privately operated luxury villas in El Madroñal, Marbella.'
};
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
