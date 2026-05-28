import type { Metadata } from "next";
import Script from "next/script";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "B.Tech AI & Data Science student at MITS Gwalior. " +
    "Building handwritten text recognition systems with CRNN and PyTorch, " +
    "deploying them as Next.js web apps. Open for AI/ML & Web Development internships.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
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
        name: "About",
        item: "https://armansingh.me/about",
      },
    ],
  };

  /* --- person schema --- */
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arman Singh",
    image: "https://armansingh.me/arman-singh.jpg",
    url: "https://armansingh.me",
    jobTitle: "B.Tech AI & Data Science Student",
    description:
      "Machine Learning developer and B.Tech AI&DS student from Gwalior, India. " +
      "Building CRNN models with PyTorch and deploying them as web applications.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gwalior",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Madhav Institute of Technology and Science",
    },
    knowsAbout: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "CRNN Architecture",
      "Computer Vision",
      "Python",
      "Data Science",
      "Next.js",
      "React",
      "TypeScript",
    ],
    sameAs: [
      "https://github.com/armansinghh",
      "https://www.linkedin.com/in/armansinghh/",
    ],
  };

  return (
    <>
      {/* SEO Scripts */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="person-schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <AboutContent />
    </>
  );
}
