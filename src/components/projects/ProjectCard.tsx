'use client';

import { Project } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import { statusConfig } from '@/lib/ProjectStatus';

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  const status = project.status ? statusConfig[project.status] : null;

  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer rounded-xl border border-white/[0.06] bg-card transition-all duration-300 hover:border-white/[0.12] hover:shadow-md"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Arrow — fades + slides in on hover */}
        <div className="absolute top-3 right-3 flex items-center justify-center h-8 w-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        {/* Title row with status inline */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold">{project.title}</h3>

          {status && (
            <span className="flex items-center gap-1.5 mt-1.5 shrink-0">
              <span className={`h-1.5 w-1.5 rounded-full ${status.dotClass} ${status.dotClass === 'bg-orange-400' ? 'animate-pulse' : ''}`} />
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                {status.label}
              </span>
            </span>
          )}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-1 rounded-md border border-white/[0.06] text-muted-foreground font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}