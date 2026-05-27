import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BentoCardProps {
  className?: string;
  onClick?: () => void;
  href?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  children: React.ReactNode;
  actionIcon?: boolean;
}

export const BentoCard = ({
  className,
  onClick,
  href,
  icon: Icon,
  label,
  children,
  actionIcon = true,
}: BentoCardProps) => {
  const content = (
    <>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
          <Icon size={13} className="shrink-0" />
          <span className="text-[10px] font-semibold uppercase tracking-widest">
            {label}
          </span>
        </div>
        {actionIcon && (
          <ArrowUpRight
            size={14}
            className="text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
          />
        )}
      </div>
      <div className="font-medium text-xs sm:text-sm text-foreground/90 leading-relaxed wrap-break-word">
        {children}
      </div>
    </>
  );

  const baseStyles = cn(
    // Base Layout
    "group relative flex flex-col p-3 sm:p-4 rounded-xl border transition-all duration-300 overflow-hidden backdrop-blur-sm",
    // Light Mode Styles (Clean White)
    "bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-sm",
    // Dark Mode Styles (Glassmorphism Dark)
    "dark:bg-zinc-900/30 dark:border-zinc-800/50 dark:hover:bg-zinc-900/50 dark:hover:border-zinc-700",
    // Interactive states
    (onClick || href) && "cursor-pointer active:scale-[0.98]",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className={baseStyles}>
      {content}
    </div>
  );
};