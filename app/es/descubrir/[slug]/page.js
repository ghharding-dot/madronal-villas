import { notFound } from 'next/navigation';
import DiscoverTemplate from '../DiscoverTemplate';
import { destinationBySlug, destinations } from '../data';

export function generateStaticParams() { return destinations.map(({slug})=>({slug})); }
export async function generateMetadata({params}) {
  const page = destinationBySlug[(await params).slug];
  return page ? { title:`${page.title} · Descubrir`, description:page.intro, alternates:{canonical:`/es/descubrir/${page.slug}`,languages:{en:`/discover/${page.englishSlug}`,es:`/es/descubrir/${page.slug}`,'x-default':`/discover/${page.englishSlug}`}} } : {};
}
export default async function Page({params}) { const page=destinationBySlug[(await params).slug]; if(!page) notFound(); return <DiscoverTemplate page={page} />; }
