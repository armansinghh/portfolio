import { getBlogPosts } from "@/lib/notion";
import type { Metadata } from "next";
import Script from "next/script";
import BlogListContent from "@/components/blog/BlogListContent";

/* ================= METADATA ================= */
export const metadata: Metadata = {
  title: "Blog",
  description:
    "Documenting my journey in AI and Data Science. Technical articles, devlogs, and code breakdowns covering PyTorch, Machine Learning, and Next.js web development.",
  alternates: {
    canonical: "/blog",
  },
};

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  /* --- breadcrumb schema --- */
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

  /* --- blog index schema --- */
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Arman Singh's Blog",
    description:
      "Documenting my journey in AI and Data Science. Technical articles, devlogs, and code breakdowns covering PyTorch, Machine Learning, and Next.js web development.",
    url: "https://armansingh.me/blog",
    publisher: {
      "@type": "Person",
      name: "Arman Singh",
    },
  };

  return (
    <>
      {/* SEO Scripts */}
      <Script
        id="breadcrumb-schema-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="blog-index-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <BlogListContent posts={posts} />
    </>
  );
}
