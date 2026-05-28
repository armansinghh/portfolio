import {
  ml,
  languages,
  coreweb,
  frontend,
  cloud,
  tools,
  design,
} from "@/data/techstack";

import {
  LuBrain,
  LuGraduationCap,
  LuWrench,
  LuCode,
  LuGlobe,
  LuLayoutTemplate,
  LuCloud,
  LuTerminal,
  LuPalette,
  LuGithub,
  LuStar,
} from "react-icons/lu";

import LatestCommitActivity from "@/components/activities/LatestCommitActivity";
import { BentoCard } from "@/components/ui/BentoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechGroup } from "@/components/about/TechGroup";
import { aboutData } from "@/data/about";

export default function AboutContent() {
  return (
    <div className="flex flex-col px-2">
      {/* ================= INTRO ================= */}
      <section className="max-w-3xl py-8 space-y-6">
        <h1 className="text-4xl font-bold">About Me</h1>

        <div className="space-y-10 text-lg leading-relaxed text-muted-foreground">
          {/* Section 1: Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              What I'm Studying & Building
            </h2>
            {aboutData.introduction.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Section 2: Technical Focus */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              My Technical Focus
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* AI / ML Category */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">
                  Machine Learning & AI
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aboutData.technicalFocus.machineLearning.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-secondary/50 px-2.5 py-1 text-sm font-medium text-secondary-foreground ring-1 ring-inset ring-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Web Dev Category */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">
                  Web & Deployment
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aboutData.technicalFocus.webDevelopment.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-secondary/50 px-2.5 py-1 text-sm font-medium text-secondary-foreground ring-1 ring-inset ring-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Currently Learning Category */}
              <div className="space-y-3 sm:col-span-2">
                <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">
                  Currently Learning
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aboutData.technicalFocus.currentlyLearning.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-sm font-medium text-muted-foreground border border-dashed border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Call to Action */}
          <div className="space-y-4 rounded-2xl bg-secondary/20 p-6 border border-border/50">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              What I'm Looking For
            </h2>
            <p>{aboutData.lookingFor.description}</p>
            <p className="text-foreground font-medium border-l-2 border-primary pl-4 py-1 my-4 bg-primary/5">
              {aboutData.lookingFor.highlight}
            </p>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="max-w-3xl space-y-6 mt-16">
        <SectionHeading title="Education" icon={<LuGraduationCap />} />
        <div className="rounded-2xl border border-border/50 bg-secondary/10 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {aboutData.education.degree}
              </h3>
              <p className="text-muted-foreground">
                {aboutData.education.university}
              </p>
            </div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit">
              {aboutData.education.timeline}
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {aboutData.education.coursework}
          </p>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="max-w-3xl space-y-8 mt-16">
        <SectionHeading title="Technologies & Tools" icon={<LuWrench />} />

        <TechGroup title="Languages" icon={<LuCode />} data={languages} />

        <TechGroup
          title="Machine Learning & AI"
          icon={<LuBrain />}
          data={ml}
        />

        <TechGroup title="Core Web" icon={<LuGlobe />} data={coreweb} />

        <TechGroup
          title="Frontend"
          icon={<LuLayoutTemplate />}
          data={frontend}
        />

        <TechGroup title="Cloud" icon={<LuCloud />} data={cloud} />

        <TechGroup title="Tools" icon={<LuTerminal />} data={tools} />

        <TechGroup title="Design" icon={<LuPalette />} data={design} />
      </section>

      {/* ================= GITHUB ================= */}
      <section className="max-w-3xl space-y-6 mt-16">
        <SectionHeading title="GitHub Activity" icon={<LuGithub />} />
        <p className="text-sm text-muted-foreground -mt-4">
          Recent commit across my projects
        </p>
        <div className="p-4 rounded-xl border bg-card">
          <LatestCommitActivity />
        </div>
      </section>

      {/* ================= INTERESTS ================= */}
      <section className="max-w-3xl space-y-6 mt-16">
        <SectionHeading title="Beyond the Screen" icon={<LuStar />} />

        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          When I'm not training models or debugging React components, I like
          to step away from the keyboard and reset. Here is what keeps me
          busy:
        </p>

        <div className="grid grid-cols-2 gap-3">
          {aboutData.interests.map((interest) => (
            <BentoCard
              key={interest.label}
              icon={interest.icon}
              label={interest.label}
              actionIcon={false}
              className="min-h-27.5"
            >
              {interest.description}
            </BentoCard>
          ))}
        </div>
      </section>
    </div>
  );
}