import type { Metadata } from 'next';

import ProjectGrid from '@/components/projects/ProjectGrid';

export const metadata: Metadata = {
  title: 'Projects - Arman Singh',
  description:
    'A collection of projects built with modern web technologies including Next.js, TypeScript, and more.',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <section className="grow px-4 max-w-3xl mx-auto py-8">
        <ProjectGrid />
      </section>
    </div>
  );
}