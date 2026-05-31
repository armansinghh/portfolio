import { getBlogPosts, getBlogPost, getPageRecordMap } from "@/lib/notion";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NotionContent from "@/components/blog/NotionContent";

export const revalidate = 86400;

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

  const ogUrl = `https://armansingh.me/api/og?title=${encodeURIComponent(post.title)}&type=blog&tags=${encodeURIComponent(post.tags.join(","))}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Arman Singh"],
      images: [{ url: ogUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl],
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

  /* --- dynamic breadcrumb schema --- */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://armansingh.me",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://armansingh.me/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://armansingh.me/blog/${slug}`,
      },
    ],
  };

  /* --- dynamic article schema --- */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date).toISOString(),
    url: `https://armansingh.me/blog/${slug}`,
    image: `https://armansingh.me/api/og?title=${encodeURIComponent(post.title)}&type=blog&tags=${encodeURIComponent(post.tags.join(","))}`,
    author: {
      "@type": "Person",
      name: "Arman Singh",
      url: "https://armansingh.me",
    },
    keywords: post.tags.join(", "),
  };

  return (
    <div className="space-y-8 pb-16 px-4">
      {/* SEO Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>

          {post.tags.length > 0 && (
            <>
              <span className="text-muted-foreground/30 text-xs">·</span>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-muted-foreground border border-white/6 px-2 py-0.5 rounded-md"
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

      <hr className="border-white/6" />

      {/* Notion Content */}
      <div className="notion-content">
        <NotionContent recordMap={recordMap} />
      </div>
    </div>
  );
}
