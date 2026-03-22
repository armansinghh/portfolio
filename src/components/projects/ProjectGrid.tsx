'use client';

import { useState } from 'react';
import { projects, Project } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="text-left space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-lg">
          A collection of things I've built. Click to explore more.
        </p>
      </div>

      {/* Featured */}
      {featured && (
        <div
          onClick={() => setSelected(featured)}
          className="group cursor-pointer overflow-hidden rounded-2xl border bg-card"
        >
          <div className="h-72 w-full overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">{featured.title}</h2>
            <p className="text-muted-foreground">{featured.description}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {featured.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md border text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {others.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}