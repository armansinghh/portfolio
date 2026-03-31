import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    absolute: "Arman Singh - Frontend Developer",
  },
  description:
    "Frontend developer building modern web applications with a focus on performance, clean design, and usability.",
  alternates: {
    canonical: "/",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arman Singh",
  url: "https://armansingh.me",
  jobTitle: "Frontend Developer",
  description:
    "Frontend developer building modern web applications with a focus on performance, clean design, and usability.",
  sameAs: [
    "https://github.com/armansinghh",
    "https://instagram.com/armansinghz",
    "https://discord.com/users/1010197490823340184",
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HomeContent />
    </>
  );
}