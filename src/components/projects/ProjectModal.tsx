'use client';

import { Project } from '@/data/projects';
import { useEffect } from 'react';
import { X } from 'lucide-react';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  // ESC close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Scroll lock
  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-5xl h-[90vh] overflow-hidden rounded-3xl bg-background border shadow-2xl flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70 transition"
        >
          <X size={18} />
        </button>

        {/* Scroll Container */}
        <div className="overflow-y-auto h-full">

          {/* ================= HERO ================= */}
          <div className="relative h-[350px] w-full">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Title */}
            <div className="absolute bottom-6 left-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="p-6 sm:p-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* -------- LEFT SIDE -------- */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Overview */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">
                    Overview
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Features */}
                {project.features && (
                  <div className="pt-6 border-t">
                    <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                      Key Features
                    </h3>

                    <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* -------- RIGHT SIDE -------- */}
              <div className="space-y-6 lg:border-l lg:pl-8">

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="w-full text-center py-3 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
                    >
                      Visit Live Site
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="w-full text-center py-3 rounded-lg border text-sm font-medium hover:bg-muted transition"
                    >
                      Source Code
                    </a>
                  )}
                </div>

                {/* Tech */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                    Technologies
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-md border text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}