'use client';

import { useState } from 'react';
import { projects, Project } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';
import { statusConfig } from '@/lib/ProjectStatus';

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
      {featured && (() => {
        const status = featured.status ? statusConfig[featured.status] : null;
        return (
          <div
            onClick={() => setSelected(featured)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06] bg-card transition-all duration-300 hover:border-white/[0.12] hover:shadow-md"
          >
            {/* Image */}
            <div className="relative h-72 w-full overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Arrow */}
              <div className="absolute top-3 right-3 flex items-center justify-center h-8 w-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={1.5} />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-2xl font-semibold">{featured.title}</h2>

                {status && (
                  <span className="flex items-center gap-1.5 mt-2 shrink-0">
                    <span className={`h-1.5 w-1.5 rounded-full ${status.dotClass} ${status.pulse ? 'animate-pulse' : ''}`} />
                    <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                      {status.label}
                    </span>
                  </span>
                )}
              </div>

              <p className="text-muted-foreground">{featured.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {featured.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md border border-white/[0.06] text-muted-foreground font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

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