"use client";

import { Project } from "@/data/projects";
import { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { statusConfig } from "@/lib/ProjectStatus";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    if (project) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  const status = project.status ? statusConfig[project.status] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-5xl h-[90vh] overflow-hidden rounded-3xl bg-background border border-white/8 shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70 transition"
        >
          <X size={18} />
        </button>

        {/* Scroll Container */}
        <div className="overflow-y-auto h-full">
          {/* HERO */}
          <div className="relative h-72 w-full">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

            {/* Title + Status */}
            <div className="absolute bottom-6 left-6 space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                {project.title}
              </h2>

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

          {/* CONTENT */}
          <div className="p-6 sm:p-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* LEFT */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <div>
                  <h3 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                    Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Features */}
                {project.features && (
                  <div className="pt-6 border-t border-white/6">
                    <h3 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-4">
                      Key Features
                    </h3>
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

              {/* RIGHT */}
              <div className="space-y-6 lg:border-l lg:border-white/6 lg:pl-8">
                {/* Actions */}
                <div className="flex flex-col gap-3">
{project.live && (
  <a
    href={project.live}
    target="_blank"
    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-foreground text-background font-mono text-xs hover:opacity-90 transition"
  >
    <ArrowUpRight size={13} />
    visit live site
  </a>
)}

{project.github && (
  <a
    href={project.github}
    target="_blank"
    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-border font-mono text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition"
  >
    {'>'} source code
  </a>
)}
                </div>

                {/* Tech */}
                <div>
                  <h3 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                    Technologies
                  </h3>
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
        </div>
      </div>
    </div>
  );
}
