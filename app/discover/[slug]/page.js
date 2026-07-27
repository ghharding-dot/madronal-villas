import { notFound } from 'next/navigation';
import DiscoverTemplate from '../DiscoverTemplate';
import { destinationBySlug, destinations } from '../data';
export function generateStaticParams() { return destinations.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) { const page = destinationBySlug[(await params).slug]; return page ? { title: `${page.title} · Discover`, description: page.intro } : {}; }
export default async function Page({ params }) { const page = destinationBySlug[(await params).slug]; if (!page) notFound(); return <DiscoverTemplate page={page} />; }
