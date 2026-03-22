import { NextResponse } from 'next/server';
import { z } from 'zod';

/* -------------------- VALIDATION -------------------- */
const messageSchema = z.object({
  content: z
    .string()
    .min(10, 'Message too short')
    .max(2000, 'Message too long')
    .trim(),

  // honeypot field (bots will fill this)
  company: z.string().optional(),
});

/* -------------------- RATE LIMIT -------------------- */
const rateLimit = new Map<string, { count: number; last: number }>();

const WINDOW = 60 * 1000; // 1 min
const MAX_REQUESTS = 3;

/* -------------------- HANDLER -------------------- */
export async function POST(req: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: 'Webhook not configured' },
      { status: 500 }
    );
  }

  try {
    /* ---------- RATE LIMIT ---------- */
    const ip =
      req.headers.get('x-forwarded-for') ||
      req.headers.get('x-real-ip') ||
      'unknown';

    const now = Date.now();
    const user = rateLimit.get(ip) || { count: 0, last: now };

    if (now - user.last > WINDOW) {
      user.count = 0;
      user.last = now;
    }

    user.count++;
    rateLimit.set(ip, user);

    if (user.count > MAX_REQUESTS) {
      return NextResponse.json(
        { error: 'Too many requests. Try again later.' },
        { status: 429 }
      );
    }

    /* ---------- BODY ---------- */
    const body = await req.json();

    /* ---------- HONEYPOT ---------- */
    if (body.company) {
      return NextResponse.json(
        { error: 'Bot detected' },
        { status: 400 }
      );
    }

    /* ---------- VALIDATION ---------- */
    const validation = messageSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const { content } = validation.data;

    /* ---------- BASIC SPAM FILTER ---------- */
    if (content.includes('http') || content.includes('www')) {
      return NextResponse.json(
        { error: 'Links are not allowed' },
        { status: 400 }
      );
    }

    /* ---------- SEND TO DISCORD ---------- */
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });

    if (!res.ok) {
      throw new Error('Failed to send message');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal error' },
      { status: 500 }
    );
  }
}