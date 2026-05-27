import { getBlogPosts } from '@/lib/notion';
import type { Metadata } from 'next';
import Script from 'next/script';
import BlogListContent from '@/components/blog/BlogListContent';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, devlogs and things I find interesting.',
  alternates: {
    canonical: '/blog',
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  // 1. Server fetches the data
  const posts = await getBlogPosts();

  // 2. Setup the SEO Schema
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
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <BlogListContent posts={posts} />
    </>
  );
}