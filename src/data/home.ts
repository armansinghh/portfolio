import { Github, Instagram, Linkedin } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export const homeData = {
  name: "Arman Singh",
  typewriter: [
    "AI & Data Science Student",
    "Machine Learning Developer",
    "B.Tech AI&DS @MITS Gwl",
    "Building ML-Powered Web Apps",
    "Open For Internships",
  ],
  description:
    "I'm an AI & Data Science engineering student from Gwalior, India. Building machine learning models and deploying them as production web applications. Currently working on handwritten text recognition using CRNN architectures with PyTorch, and turning those models into real, usable interfaces with Next.js and React.",
  npxCommand: "npx armansingh",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/armansinghh/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/armansinghh",
      icon: Github,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/armansinghz",
      icon: Instagram,
    },
    {
      name: "Discord",
      url: "https://discord.com/users/1010197490823340184",
      icon: FaDiscord,
    },
  ],
};