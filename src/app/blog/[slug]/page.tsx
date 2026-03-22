import { getBlogPosts, getBlogPost, getPageRecordMap } from '@/lib/notion';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import NotionContent from '@/components/blog/NotionContent';

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const recordMap = await getPageRecordMap(post.id);

  return (
    <div className="space-y-8 pb-16 px-4">
      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft size={12} />
        back to blog
      </Link>

      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>

          {post.tags.length > 0 && (
            <>
              <span className="text-muted-foreground/30 text-xs">·</span>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-muted-foreground border border-white/[0.06] px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        <p className="text-muted-foreground text-sm max-w-xl">
          {post.description}
        </p>
      </div>

      <hr className="border-white/[0.06]" />

      {/* Notion Content */}
      <div className="notion-content">
        <NotionContent recordMap={recordMap} />
      </div>
    </div>
  );
}