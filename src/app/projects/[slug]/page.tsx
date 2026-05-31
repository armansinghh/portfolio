import { projects, Project } from "@/data/projects";
import { notFound } from "next/navigation";
import { statusConfig } from "@/lib/ProjectStatus";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const ogUrl = `https://armansingh.me/api/og?title=${encodeURIComponent(project.title)}&type=project&tags=${encodeURIComponent(project.tech.join(","))}`;

  return {
    title: project.title,
    description: project.longDescription,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title} — Arman Singh`,
      description: project.longDescription,
      type: "website",
      images: [{ url: ogUrl, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Arman Singh`,
      description: project.longDescription,
      images: [ogUrl],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const status = project.status ? statusConfig[project.status] : null;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.longDescription,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      programmingLanguage: project.tech,
      featureList: project.features ?? [],
      url: project.live ?? undefined,
      downloadUrl: project.live ?? undefined,
      codeRepository: project.github ?? undefined,
      screenshot: `https://armansingh.me${project.image}`,
      author: {
        "@type": "Person",
        name: "Arman Singh",
        url: "https://armansingh.me",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
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
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: `https://armansingh.me/projects/${project.slug}`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="space-y-8 pb-16 px-2 max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={12} />
          back to projects
        </Link>

        {/* Hero image */}
        <div className="relative h-72 w-full overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.tech.slice(0, 2).join(" and ")} project by Arman Singh`}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          {/* Title overlay */}
          <div className="absolute bottom-6 left-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {project.title}
            </h1>
            {status && (
              <span className="flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${status.dotClass} ${status.pulse ? "animate-pulse" : ""}`}
                />
                <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
                  {status.label}
                </span>
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {project.features && (
              <div className="pt-6 border-t border-white/6">
                <h2 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-4">
                  Key Features
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right */}
          <div className="space-y-6 lg:border-l lg:border-white/6 lg:pl-8">
            <div className="flex flex-col gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-foreground text-background font-mono text-xs hover:opacity-90 transition"
                >
                  <ArrowUpRight size={13} />
                  live site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-border font-mono text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition"
                >
                  {">"} source code
                </a>
              )}
            </div>

            <div>
              <h2 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-md border border-white/6 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
