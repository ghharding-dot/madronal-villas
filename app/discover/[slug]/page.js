import { notFound } from 'next/navigation';
import DiscoverTemplate from '../DiscoverTemplate';
import { destinationBySlug, destinations } from '../data';
export function generateStaticParams() { return destinations.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) { const page = destinationBySlug[(await params).slug]; return page ? { title: `${page.title} · Discover`, description: page.intro, alternates: { canonical: `/discover/${page.slug}`, languages: { en: `/discover/${page.slug}`, es: `/es/descubrir/${page.spanishSlug}`, 'x-default': `/discover/${page.slug}` } } } : {}; }
export default async function Page({ params }) { const page = destinationBySlug[(await params).slug]; if (!page) notFound(); return <DiscoverTemplate page={page} />; }
