import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const distances = [['Marbella','Aprox. 15 minutos'],['Puerto Banús','Aprox. 15 minutos'],['Playas','Aprox. 15 minutos'],['Campos de golf','Aprox. 10–20 minutos'],['Aeropuerto de Málaga','Aprox. 45 minutos']];
const qualities = [['Privacidad','Grandes parcelas, arbolado maduro y una discreta ubicación en la ladera crean una extraordinaria sensación de intimidad.'],['Seguridad','Accesos controlados y seguridad profesional 24 horas ofrecen absoluta tranquilidad.'],['Naturaleza','Aire de montaña, árboles consolidados y carreteras privadas aportan calma frente a la costa.'],['Accesibilidad','Marbella, Puerto Banús, playas, restaurantes y golf quedan a poca distancia.']];

export const metadata = {
  title: 'El Madroñal, Marbella',
  description: 'Descubra El Madroñal, una urbanización privada y segura en las colinas de Benahavís, sobre Marbella.',
  alternates: { canonical: '/es/el-madronal', languages: { en: '/el-madronal', es: '/es/el-madronal', 'x-default': '/el-madronal' } }
};

export default function ElMadronal() { return <>
  <SiteHeader locale="es" languageHref="/el-madronal" />
  <main>
    <section className="villaHero estateHero"><div className="shade" /><div className="wrap heroCopy"><p className="eyebrow">El Madroñal · Benahavís</p><h1>Sobre Marbella.<em>Un mundo aparte.</em></h1><p>Una urbanización privada de carreteras de montaña, bosque maduro y residencias excepcionales, a pocos minutos del Mediterráneo.</p></div></section>
    <section className="intro pad"><div className="wrap split"><p className="eyebrow darkEye">La urbanización</p><div><h2>Calma sin aislamiento.<em>Privacidad sin renuncias.</em></h2><p className="lead">El Madroñal ocupa una posición privilegiada en las colinas de Benahavís, sobre Marbella. Su entorno natural, amplias parcelas y accesos controlados lo han convertido en una de las direcciones residenciales más discretas de la Costa del Sol.</p></div></div></section>
    <section className="pad estateQualities"><div className="wrap qualityGrid">{qualities.map(([title,copy],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="featureSplit darkFeature"><div className="featureImage estateNatureFeature" /><div className="featureCopy"><p className="eyebrow">Un refugio natural</p><h2>Calma de montaña.<em>Luz mediterránea.</em></h2><p>Carreteras privadas serpentean entre alcornoques, pinos y jardines maduros. La altura aporta aire más fresco en verano, vistas abiertas y auténtica tranquilidad.</p><p>A diferencia de las zonas costeras más densas, El Madroñal mantiene una estrecha relación con el paisaje andaluz.</p></div></section>
    <section className="pad estateLocation"><div className="wrap locationPanel"><div><p className="eyebrow darkEye">Ubicación privilegiada</p><h2>Cerca de todo.<em>Lejos del ruido.</em></h2><p className="lead locationLead">La calma de la villa convive con un acceso cómodo a playas, restaurantes, puertos deportivos, golf y conexiones internacionales.</p></div><dl>{distances.map(([place,time])=><div key={place}><dt>{place}</dt><dd>{time}</dd></div>)}</dl></div></section>
    <section className="featureSplit reverseFeature"><div className="featureImage estateSecurityFeature" /><div className="featureCopy lightCopy"><p className="eyebrow darkEye">Seguridad y discreción</p><h2>Confianza desde la llegada.<em>Privacidad durante su estancia.</em></h2><p>Entradas controladas, seguridad profesional y tranquilas vías privadas permiten relajarse desde el primer momento.</p><div className="serviceList compactList"><span>Seguridad 24 horas</span><span>Acceso de vehículos controlado</span><span>Gestión profesional</span><span>Carreteras privadas tranquilas</span><span>Baja densidad residencial</span><span>Máxima discreción</span></div></div></section>
    <section className="pad collectionCta"><div className="wrap collectionInner"><p className="eyebrow darkEye">La colección privada</p><h2>Dos villas excepcionales.<em>Una urbanización extraordinaria.</em></h2><p>Descubra Villa Candela y Villa Lámpara, dos interpretaciones de la privacidad, el lujo y la vida mediterránea.</p><div className="actions"><Link className="btn gold" href="/es/villa-candela">Descubrir Villa Candela</Link><Link className="under" href="/es/villa-lampara">Descubrir Villa Lámpara</Link></div></div></section>
  </main><SiteFooter locale="es" />
</>; }
