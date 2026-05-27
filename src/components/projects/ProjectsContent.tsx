import ProjectGrid from './ProjectGrid';

export default function ProjectsContent() {
  return (
    <div className="flex flex-col">
      <section className="grow px-2 max-w-3xl mx-auto py-8 w-full">
        <ProjectGrid />
      </section>
    </div>
  );
}