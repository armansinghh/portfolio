import type { Metadata } from "next";
import Script from "next/script";
import ProjectsContent from "@/components/projects/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of end-to-end Machine Learning and web development projects. " +
    "Taking PyTorch models and CRNN architectures from initial research to " +
    "production as fully deployed Next.js applications.",
  alternates: {
    canonical: "/projects",
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

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Arman Singh's Project Portfolio",
    description:
      "A collection of end-to-end Machine Learning and web development projects. " +
      "Taking PyTorch models and CRNN architectures from initial research to " +
      "production as fully deployed Next.js applications.",
    url: "https://armansingh.me/projects",
    isPartOf: {
      "@type": "WebSite",
      name: "Arman Singh Portfolio",
      url: "https://armansingh.me",
    },
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Script
        id="collection-schema-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <ProjectsContent />
    </>
  );
}
