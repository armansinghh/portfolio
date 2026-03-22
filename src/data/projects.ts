// /data/projects.ts

export type Project = {
  id: number;
  title: string;

  description: string; // short (card)
  longDescription: string; // modal

  image: string; // /public/projects/...

  tech: string[];

  github?: string;
  live?: string;

  featured?: boolean;

  features?: string[]; // optional (modal)
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A full-stack web app solving real-world problems.",
    longDescription:
      "This project is a scalable full-stack application with authentication, dashboards, and API integrations. Built to demonstrate real-world system design and performance.",

    image: "/projects/project-1.png",

    tech: ["Next.js", "TypeScript", "MongoDB", "OpenAI"],

    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",

    featured: true,

    features: [
      "Authentication system",
      "Dashboard UI",
      "API integration",
      "Responsive design",
    ],
  },
  {
    id: 2,
    title: "Project Beta",
    description: "A tool that improves productivity and workflow.",
    longDescription:
      "A lightweight application focused on clean UI, performance, and usability.",

    image: "/projects/project-2.png",

    tech: ["React", "Tailwind", "Node.js"],

    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "A CLI tool for automation and scripting.",
    longDescription:
      "A command-line utility designed to automate repetitive development tasks.",

    image: "/projects/project-3.png",

    tech: ["Node.js", "CLI", "APIs"],

    github: "https://github.com/your-repo",
  },
  {
    id: 4,
    title: "Project Delta",
    description: "Creative frontend experiment with animations.",
    longDescription:
      "An experimental project focused on UI/UX and interactive animations.",

    image: "/projects/project-4.png",

    tech: ["JavaScript", "CSS", "Animations"],

    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
];