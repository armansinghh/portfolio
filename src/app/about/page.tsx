import type { Metadata } from "next";
import Script from "next/script";

import {
  languages,
  coreweb,
  frontend,
  cloud,
  tools,
  design,
} from "@/data/TechStack";

import TechStack from "@/components/stats/TechStack";
import LatestCommitActivity from "@/components/activities/LatestCommitActivity";

/* ================= METADATA ================= */
export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Arman Singh, a frontend developer building modern web applications with a focus on performance, clean design, and usability.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
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

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex flex-col px-4">
        {/* ================= INTRO ================= */}
        <section className="max-w-3xl py-8 space-y-6">
          <h1 className="text-4xl font-bold">About Me</h1>

          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I’m Arman Singh — a developer focused on building scalable web
              applications and exploring machine learning.
            </p>

            <p>
              I work with modern technologies like Next.js, TypeScript, and
              backend systems to create clean and efficient user experiences.
            </p>

            <p>
              I enjoy turning ideas into real products and care about both how
              things work and how they feel.
            </p>
          </div>
        </section>

        {/* ================= TECH STACK ================= */}
        <section className="max-w-3xl space-y-8 mt-16">
          <SectionHeading title="🛠 Technologies & Tools" />

          <TechGroup title="Languages 🧠" data={languages} />
          <TechGroup title="Core Web 🌐" data={coreweb} />
          <TechGroup title="Frontend 🎨" data={frontend} />
          <TechGroup title="Cloud ☁️" data={cloud} />
          <TechGroup title="Tools ⚒️" data={tools} />
          <TechGroup title="Design ✏️" data={design} />
        </section>

        {/* ================= GITHUB ================= */}
        <section className="max-w-3xl space-y-6 mt-16">
          <SectionHeading title="GitHub Activity" />

          <div className="p-4 rounded-xl border bg-card">
            <LatestCommitActivity />
          </div>
        </section>

        {/* ================= INTERESTS ================= */}
        <section className="max-w-3xl space-y-6 mt-16">
          <SectionHeading title="Interests" />

          <p className="text-lg leading-relaxed text-muted-foreground">
            In my free time, I explore new technologies, build side projects,
            and experiment with UI/UX and AI. I enjoy improving performance,
            design, and overall user experience.
          </p>
        </section>
      </div>
    </>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-xl font-semibold tracking-tight text-foreground/90">
        {title}
      </h2>
      <div className="h-px bg-border/40 flex-1" />
    </div>
  );
}

function TechGroup({
  title,
  data,
}: {
  title: string;
  data: any[];
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground mono">{title}</p>
      <TechStack techStack={data} />
    </div>
  );
}