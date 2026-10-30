import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const SOURCE_URL = 'https://www.pfeuroasia.com/api/public/rental-villas';

export async function GET() {
  try {
    const response = await fetch(SOURCE_URL, {
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
      headers: { Accept: 'application/json' }
    });

    if (!response.ok) throw new Error('Source returned status ' + response.status);

    const data = await response.json();
    if (!data || !Array.isArray(data.villas)) {
      throw new Error('Invalid rental selection response');
    }

    const villas = data.villas.filter((villa) =>
      villa && villa.reference && villa.title && villa.image && villa.location
    ).slice(0, 15);

    return NextResponse.json(
      { villas, count: villas.length, maximum: 15 },
      { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } }
    );
  } catch (error) {
    console.error('madronal-rental-feed-unavailable', error);
    return NextResponse.json(
      { error: 'Rental villa selection is temporarily unavailable.' },
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
