import { NextResponse } from 'next/server';

const USERNAME = 'armansinghh';

export async function GET() {
  try {
    // ✅ Reusable headers (with token support)
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/events/public`,
      { headers }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error('GitHub events error:', text);
      throw new Error('Failed to fetch events');
    }

    const events = await res.json();

    // 🔥 filter ONLY PushEvents
    const pushEvents = events.filter(
      (event: any) => event.type === 'PushEvent'
    );

    // 🔥 take latest 5 commits
    const commits = await Promise.all(
      pushEvents.slice(0, 5).map(async (event: any) => {
        let sha = '';
        let message = 'Commit';

        // CASE 1: commits array exists
        if (event.payload?.commits?.length > 0) {
          const commit =
            event.payload.commits[event.payload.commits.length - 1];

          sha = commit.sha;
          message = commit.message;
        }

        // CASE 2: fallback → head
        else if (event.payload?.head) {
          sha = event.payload.head;

          try {
            const commitRes = await fetch(
              `https://api.github.com/repos/${event.repo.name}/commits/${sha}`,
              { headers } // ✅ IMPORTANT (uses token)
            );

            if (commitRes.ok) {
              const commitData = await commitRes.json();
              message = commitData.commit.message;
            }
          } catch (err) {
            console.error('Commit fetch error:', err);
          }
        }

        return {
          sha,
          message,
          repo: event.repo.name,
          date: event.created_at,
          html_url: `https://github.com/${event.repo.name}/commit/${sha}`,
        };
      })
    );

    return NextResponse.json(commits);
  } catch (error) {
    console.error('COMMITS API ERROR:', error);

    return NextResponse.json(
      { error: 'Failed to fetch commits' },
      { status: 500 }
    );
  }
}