export default function Home() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">
        Hello, I'm Arman 👋
      </h1>

      <p className="text-neutral-400 text-lg leading-relaxed">
        I’m a developer building projects in machine learning, web development,
        and system design. This portfolio showcases my work, experiments, and
        things I’m currently building.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="/projects"
          className="px-5 py-3 bg-white text-black rounded-md font-medium"
        >
          View Projects
        </a>

        <a
          href="/about"
          className="px-5 py-3 border border-neutral-700 rounded-md"
        >
          About Me
        </a>
      </div>
    </section>
  );
}