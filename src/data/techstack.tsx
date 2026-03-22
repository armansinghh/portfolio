'use client';

import { FaJs, FaReact, FaGithub } from 'react-icons/fa';

import {
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss,
  SiReactrouter,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiGooglecloud,
  SiVercel,
  SiNpm,
  SiCanva,
} from 'react-icons/si';

import {
  TbBrandAdobe,
  TbBrandAdobeAfterEffect,
  TbBrandAdobePhotoshop,
} from 'react-icons/tb';


// 🧠 Languages
export const languages = [
  {
    name: 'C++',
    description: 'Programming Language',
    icon: <SiCplusplus className="text-blue-500 text-4xl" />,
  },
  {
    name: 'Python',
    description: 'Programming Language',
    icon: <SiPython className="text-yellow-400 text-4xl" />,
  },
  {
    name: 'JavaScript',
    description: 'Language of the web',
    icon: <FaJs className="text-yellow-400 text-4xl" />,
  },
  {
    name: 'TypeScript',
    description: 'Typed JavaScript',
    icon: <SiTypescript className="text-blue-400 text-4xl" />,
  },
];


// 🌐 Core Web
export const coreweb = [
  {
    name: 'HTML5',
    description: 'Markup Language',
    icon: <SiHtml5 className="text-orange-500 text-4xl" />,
  },
  {
    name: 'CSS3',
    description: 'Styling Language',
    icon: <SiCss className="text-blue-500 text-4xl" />,
  },
];


// 🎨 Frontend
export const frontend = [
  {
    name: 'React',
    description: 'UI Library',
    icon: <FaReact className="text-sky-400 text-4xl" />,
  },
  {
    name: 'React Router',
    description: 'Routing',
    icon: <SiReactrouter className="text-red-500 text-4xl" />,
  },
  {
    name: 'Next.js',
    description: 'Framework',
    icon: <SiNextdotjs className="text-foreground text-4xl" />,
  },
  {
    name: 'Tailwind CSS',
    description: 'CSS Framework',
    icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
  },
];


// ☁️ Cloud & Deployment
export const cloud = [
  {
    name: 'Firebase',
    description: 'Backend',
    icon: <SiFirebase className="text-yellow-500 text-4xl" />,
  },
  {
    name: 'Google Cloud',
    description: 'Cloud',
    icon: <SiGooglecloud className="text-blue-400 text-4xl" />,
  },
  {
    name: 'Vercel',
    description: 'Deployment',
    icon: <SiVercel className="text-foreground text-4xl" />,
  },
];


// 🛠 Developer Tools
export const tools = [
  {
    name: 'GitHub',
    description: 'Code Hosting',
    icon: <FaGithub className="text-muted-foreground text-4xl" />,
  },
  {
    name: 'NPM',
    description: 'Package Manager',
    icon: <SiNpm className="text-red-500 text-4xl" />,
  },
];


// 🎭 Design
export const design = [
  {
    name: 'Adobe Suite',
    description: 'Creative Tools',
    icon: <TbBrandAdobe className="text-red-500 text-4xl" />,
  },
  {
    name: 'After Effects',
    description: 'Motion Graphics',
    icon: <TbBrandAdobeAfterEffect className="text-purple-500 text-4xl" />,
  },
  {
    name: 'Photoshop',
    description: 'Image Editing',
    icon: <TbBrandAdobePhotoshop className="text-blue-500 text-4xl" />,
  },
  {
    name: 'Canva',
    description: 'Design Tool',
    icon: <SiCanva className="text-cyan-500 text-4xl" />,
  },
];