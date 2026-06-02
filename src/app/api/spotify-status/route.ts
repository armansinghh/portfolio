import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://my-spotify-activity.vercel.app/api/status', {
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      return NextResponse.json({ playing: false, text: 'Unavailable' });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ playing: false, text: 'Unavailable' });
  }
}