import { Metadata } from "next";
import Script from "next/script";
import HomeContent from "@/components/home/HomeContent";

export const metadata: Metadata = {
  title: {
    absolute: "Arman Singh - AI & DS Student | ML + Web Development",
  },
  description:
    "B.Tech AI & DS student at MITS Gwalior. Building ML models, web apps with Next.js and React. Open for AI/ML and web development internships.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
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
        "https://instagram.com/armansinghz",
        "https://discord.com/users/1010197490823340184",
        "https://www.linkedin.com/in/armansinghh/",
      ],
    },
    hasPart: [
      {
        "@type": "WebPage",
        name: "About",
        url: "https://armansingh.me/about",
      },
      {
        "@type": "WebPage",
        name: "Projects",
        url: "https://armansingh.me/projects",
      },
      {
        "@type": "WebPage",
        name: "Blog",
        url: "https://armansingh.me/blog",
      },
    ],
  };

  return (
    <>
      <Script
        id="person-schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <HomeContent />
    </>
  );
}
