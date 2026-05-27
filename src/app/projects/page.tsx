import type { Metadata } from 'next';
import Script from 'next/script';
import ProjectsContent from '@/components/projects/ProjectsContent';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A collection of projects built with modern web technologies including Next.js, TypeScript, and more.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
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
        name: "Projects",
        item: "https://armansingh.me/projects",
      },
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <ProjectsContent />
    </>
  );
}