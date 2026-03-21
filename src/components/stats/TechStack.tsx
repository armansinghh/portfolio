'use client';

import { motion } from 'framer-motion';

type Tech = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

export default function TechStack({ techStack }: { techStack: Tech[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {techStack.map((tech, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-4 rounded-lg border bg-neutral-100 dark:bg-neutral-900 p-4 transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {/* Icon */}
          <div className="shrink-0">
            {tech.icon}
          </div>

          {/* Text */}
          <div>
            <h4 className="font-semibold">{tech.name}</h4>
            <p className="text-sm text-muted-foreground">
              {tech.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}