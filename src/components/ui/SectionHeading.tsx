import React from "react";

export interface SectionHeadingProps {
  title: string;
  icon?: React.ReactNode;
}

export function SectionHeading({ title, icon }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {icon}

      <h2 className="text-xl font-semibold tracking-tight text-foreground/90">
        {title}
      </h2>

      <div className="h-px bg-border/40 flex-1" />
    </div>
  );
}