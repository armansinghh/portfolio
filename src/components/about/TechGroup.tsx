import React from "react";
import TechStack from "@/components/about/TechStack";

// This extracts the exact 'Tech[]' type directly from your TechStack component!
type TechData = React.ComponentProps<typeof TechStack>["techStack"];

export interface TechGroupProps {
  title: string;
  icon?: React.ReactNode;
  data: TechData; 
}

export function TechGroup({ title, icon, data }: TechGroupProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">{icon}</span>
        <p className="text-sm text-muted-foreground mono">{title}</p>
      </div>

      <TechStack techStack={data} />
    </div>
  );
}