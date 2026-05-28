import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get('title') ?? 'Arman Singh';
  const type = searchParams.get('type') ?? 'default';
  const tags = searchParams.get('tags')?.split(',') ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          fontFamily: 'monospace',
        }}
      >
        {/* Top — type label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: type === 'project' ? '#fb923c' : '#a78bfa',
            }}
          />
          <span
            style={{
              fontSize: '14px',
              color: '#525252',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            {type === 'project' ? 'Project' : 'Blog post'} · armansingh.me
          </span>
        </div>

        {/* Middle — title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <h1
            style={{
              fontSize: title.length > 40 ? '48px' : '60px',
              fontWeight: '700',
              color: '#fafafa',
              margin: '0',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              fontFamily: 'sans-serif',
            }}
          >
            {title}
          </h1>

          {/* Tags */}
          {tags.length > 0 && (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '14px',
                    color: '#737373',
                    border: '1px solid #262626',
                    borderRadius: '6px',
                    padding: '4px 12px',
                    fontFamily: 'monospace',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom — author */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#fb923c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: '700',
                color: '#0a0a0a',
                fontFamily: 'monospace',
              }}
            >
              AS
            </div>
            <span style={{ fontSize: '16px', color: '#a3a3a3', fontFamily: 'monospace' }}>
              Arman Singh
            </span>
          </div>

          <span style={{ fontSize: '14px', color: '#404040', fontFamily: 'monospace' }}>
            AI & DS · ML · Web
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}