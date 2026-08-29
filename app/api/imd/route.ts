import { NextResponse } from 'next/server';

const IMD_NOWCAST = 'https://api.imd.gov.in/api/v1/districtnowcast';

export async function GET() {
  try {
    const response = await fetch(IMD_NOWCAST, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Raj-Krishi-Drone-Grid/0.1'
      }
    });

    if (!response.ok) throw new Error(`IMD upstream ${response.status}`);
    const payload = await response.json();

    return NextResponse.json({
      live: true,
      source: 'India Meteorological Department public district nowcast API',
      sourceUrl: IMD_NOWCAST,
      checkedAt: new Date().toISOString(),
      records: Array.isArray(payload) ? payload : payload?.data ?? payload
    }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    return NextResponse.json({
      live: false,
      source: 'India Meteorological Department public district nowcast API',
      sourceUrl: IMD_NOWCAST,
      checkedAt: new Date().toISOString(),
      mode: 'graceful-fallback',
      message: error instanceof Error ? error.message : 'IMD gateway unavailable'
    }, { status: 200, headers: { 'Cache-Control': 'no-store' } });
  }
}
