import { getBlogPosts } from '@/lib/notion';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, devlogs and things I find interesting.',
    alternates: {
    canonical: '/blog',
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="space-y-10 px-4">
      {/* Header */}
      <div className="space-y-2 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-lg">
          Thoughts, devlogs and things I find interesting.
        </p>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <p className="font-mono text-sm text-muted-foreground">
          {'>'} no posts yet. check back soon.
        </p>
      ) : (
        <div className="divide-y divide-border">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 py-5 transition-colors hover:text-foreground"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium group-hover:text-foreground text-foreground/80 transition-colors">
                  {post.title}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-1 max-w-sm">
                  {post.description}
                </p>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-muted-foreground border border-white/[0.06] px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <span className="font-mono text-[11px] text-muted-foreground shrink-0 sm:mt-0.5">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}