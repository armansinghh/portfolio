import type { Metadata } from 'next';
import {
  languages,
  coreweb,
  frontend,
  cloud,
  tools,
  design,
} from '@/data/techstack';

import TechStack from '@/components/stats/TechStack';
import LatestCommitActivity from '@/components/Activities/LatestCommitActivity';

export const metadata: Metadata = {
  title: 'About - Arman Singh',
  description:
    'Learn more about Arman Singh — full stack developer building modern web applications and exploring AI.',
};

export default function AboutPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://armansingh.me',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://armansingh.me/about',
      },
    ],
  };

  return (
    <>
      {/* SEO Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex flex-col">
        <main className="grow px-4 max-w-3xl mx-auto py-8 space-y-10">

          {/* Heading */}
          <h1 className="text-4xl font-bold">About Me</h1>

          {/* Intro */}
          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I’m Arman Singh — a developer focused on building scalable web
              applications and exploring machine learning.
            </p>

            <p>
              I work with modern technologies like Next.js, TypeScript, and backend
              systems to create clean and efficient user experiences.
            </p>

            <p>
              I enjoy turning ideas into real products and care about both how
              things work and how they feel.
            </p>
          </section>

          <div className="border-t border-border/40" />

          {/* Tech Stack */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">🛠 Technologies & Tools</h2>

            <div className="space-y-8">

              <div>
                <p className="text-sm text-muted-foreground mono mb-3">
                  Languages 🧠
                </p>
                <TechStack techStack={languages} />
              </div>

              <div>
                <p className="text-sm text-muted-foreground mono mb-3">
                  Core Web 🌐
                </p>
                <TechStack techStack={coreweb} />
              </div>

              <div>
                <p className="text-sm text-muted-foreground mono mb-3">
                  Frontend 🎨
                </p>
                <TechStack techStack={frontend} />
              </div>

              <div>
                <p className="text-sm text-muted-foreground mono mb-3">
                  Cloud & Deployment ☁️
                </p>
                <TechStack techStack={cloud} />
              </div>

              <div>
                <p className="text-sm text-muted-foreground mono mb-3">
                  Developer Tools 🛠
                </p>
                <TechStack techStack={tools} />
              </div>

              <div>
                <p className="text-sm text-muted-foreground mono mb-3">
                  Design 🎭
                </p>
                <TechStack techStack={design} />
              </div>

            </div>
          </section>

          <div className="border-t border-border/40" />

          {/* GitHub Activity */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">GitHub Activity</h2>

            <div className="p-4 rounded-xl border bg-card">
              <LatestCommitActivity />
            </div>
          </section>

          <div className="border-t border-border/40" />

          {/* Interests */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Interests</h2>

            <p className="text-muted-foreground leading-relaxed">
              In my free time, I explore new technologies, build side projects,
              and experiment with UI/UX and AI. I enjoy improving performance,
              design, and overall user experience.
            </p>
          </section>

        </main>
      </div>
    </>
  );
}