import { NextResponse } from 'next/server';

export async function GET() {
  const DISCORD_USER_ID = '1010197490823340184';

  try {
    const res = await fetch(
      `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`,
      {
        // simple caching (important)
        next: { revalidate: 10 },
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch Discord status');
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        data: { discord_status: 'offline' }, // safe fallback
      },
      { status: 500 }
    );
  }
}