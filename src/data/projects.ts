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

  status?: "in-progress" | "completed" | "mvp"; // optional status field
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Handwritten Text Recognition (CRNN)",
    description:
      "End-to-end handwritten text recognition system using CRNN architecture with PyTorch.",
    longDescription:
      "An ongoing machine learning project focused on building a complete handwritten text recognition pipeline. It combines CNN-based feature extraction with RNN sequence modeling (CRNN) to interpret handwritten text. The system includes image preprocessing with OpenCV and is being designed for potential deployment via Streamlit.",
    image: "/projects/project-1.png",
    tech: ["Python", "PyTorch", "OpenCV", "CRNN"],
    featured: true,
    github: "https://github.com/armansinghh/handwriting-crnn",
    features: [
      "Image preprocessing pipeline",
      "CRNN-based architecture",
      "Sequence prediction and decoding",
      "End-to-end ML workflow",
    ],
    status: "in-progress",
  },

  {
    id: 2,
    title: "Buzz — Social Platform",
    description:
      "A scalable social platform with structured posts and modern UI architecture.",
    longDescription:
      "Buzz is a social platform built with React and TypeScript, focusing on clean architecture and scalable UI patterns. It features structured media posts, modal-driven interactions, and a content-first state management approach. The project emphasizes maintainability and frontend system design.",
    image: "/projects/project-2.png",
    tech: ["React", "TypeScript", "Next.js", "UI Architecture"],
    github: "https://github.com/armansinghh/buzz-social",
    features: [
      "Structured media posts",
      "Modal-based UX system",
      "Feature-based architecture",
      "Scalable frontend patterns",
    ],
    status: "in-progress",
  },

  {
    id: 3,
    title: "FreshStart AI — Academic Assistant",
    description:
      "AI-powered academic assistant built to support students with study workflows.",
    longDescription:
      "Built during a hackathon, FreshStart AI is an MVP designed to assist students with academic workflows, including syllabus tracking, study guidance, and exam preparation. It integrates Gemini API to provide intelligent responses and structured assistance.",
    image: "/projects/project-3.png",
    tech: ["React", "TypeScript", "Gemini API", "AI"],
    github: "https://github.com/armansinghh/freshstart-ai",
    live: "https://freshstart-ai.vercel.app",
    features: [
      "AI-powered responses",
      "Academic workflow assistance",
      "Syllabus and study guidance",
      "Rapid MVP architecture",
    ],
    status: "mvp",
  },

  {
    id: 4,
    title: "Arman CLI — Terminal Portfolio",
    description:
      "A CLI-based portfolio accessible via npx, bringing portfolio experience to the terminal.",
    longDescription:
      "A unique take on personal branding, Arman CLI allows users to explore my portfolio directly from their terminal using a single command. Built with Node.js, it simulates an interactive CLI environment to showcase projects, links, and developer information in a native terminal experience.",
    image: "/projects/project-4.png",
    tech: ["Node.js", "JavaScript", "CLI"],
    github: "https://github.com/armansinghh/arman-cli",
    features: [
      "No install — runs via npx",
      "Interactive command menu",
      "Projects, links & contact info",
      "Cross-platform support",
    ],
    status: "completed",
  },

  {
    id: 5,
    title: "Spotify Now Playing Integration",
    description:
      "Displays real-time Spotify listening activity using Spotify API.",
    longDescription:
      "A lightweight project integrating Spotify API to display real-time currently playing music. Built using vanilla JavaScript, it focuses on API integration and dynamic UI updates.",
    image: "/projects/project-5.png",
    tech: ["JavaScript", "Spotify API", "HTML", "CSS"],
    github: "https://github.com/armansinghh/my-spotify-activity",
    live: "https://my-spotify-activity.vercel.app",
    features: [
      "Live now-playing with album art",
      "Spotify OAuth 2.0 flow",
      "Real-time UI updates",
    ],
    status: "completed",
  },

  {
    id: 6,
    title: "Personal Portfolio",
    description:
      "Modern developer portfolio built with Next.js and TypeScript.",
    longDescription:
      "A modern portfolio showcasing projects, activity, and contact features. Built with Next.js and TypeScript, it focuses on performance, clean UI, and interactive user experience, along with proper SEO and structured architecture.",
    image: "/projects/project-6.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "SEO"],
    github: "https://github.com/armansinghh/portfolio",
    live: "https://armansingh.vercel.app",
    features: [
      "Next.js App Router & TypeScript",
      "Live Spotify & Discord activity",
      "SEO with Open Graph metadata",
      "Fully responsive dark/light theme",
    ],
    status: "completed",
  },
  {
  id: 7,
  title: "Ravindra IAS",
  description:
    "High-conversion UPSC coaching website built with React, Vite, and Tailwind CSS v4. Built for a frontend design competition.",
  longDescription:
    "A fully responsive coaching platform for Ravindra IAS, built as a submission for a frontend design competition (PS 3 Build). Features a live batch countdown timer, scroll-reveal animations on scroll, active section navigation highlighting, topper testimonial carousel, tab-filtered course listings, validated enquiry form with success states, and a floating sticky CTA pill. Designed with a navy and gold palette using Playfair Display for editorial authority, with strong focus on UI/UX hierarchy, conversion optimization, and mobile responsiveness.",
  image: "/projects/project-7.png",
  tech: ["React", "Vite", "Tailwind CSS v4"],
  github: "https://github.com/armansinghh/ravindra-ias",
  live: "https://ravindraias.vercel.app",
  features: [
    "Live batch countdown timer",
    "Scroll-reveal animations with IntersectionObserver",
    "Active section highlight in sticky navbar",
    "Topper testimonial carousel with dot navigation",
    "Tab-filtered course listings (Prelims/Mains/Interview)",
    "Validated form with success state feedback",
  ],
  status: "mvp",
},
];