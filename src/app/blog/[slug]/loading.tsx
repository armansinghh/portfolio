import { ArrowLeft } from 'lucide-react';

export default function BlogPostLoading() {
  return (
    <div className="space-y-8 pb-16 px-4 animate-pulse">
      {/* Back button skeleton */}
      <div className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground/50">
        <ArrowLeft size={12} />
        back to blog
      </div>

      {/* Header Skeleton */}
      <div className="space-y-3">
        {/* Title */}
        <div className="h-10 w-3/4 bg-white/10 rounded-md" />
        <div className="h-10 w-1/2 bg-white/10 rounded-md" />

        {/* Date and Tags */}
        <div className="flex items-center gap-3 pt-2">
          <div className="h-4 w-24 bg-white/10 rounded-md" />
          <span className="text-muted-foreground/30 text-xs">·</span>
          <div className="h-4 w-12 bg-white/10 rounded-md" />
          <div className="h-4 w-16 bg-white/10 rounded-md" />
        </div>

        {/* Description */}
        <div className="space-y-2 pt-4">
          <div className="h-4 w-full max-w-xl bg-white/10 rounded-md" />
          <div className="h-4 w-4/5 max-w-xl bg-white/10 rounded-md" />
        </div>
      </div>

      <hr className="border-white/6" />

      {/* Notion Content Skeleton */}
      <div className="space-y-4 pt-4">
        <div className="h-4 w-full bg-white/10 rounded-md" />
        <div className="h-4 w-[95%] bg-white/10 rounded-md" />
        <div className="h-4 w-[90%] bg-white/10 rounded-md" />
        <div className="h-4 w-3/4 bg-white/10 rounded-md" />
        <br />
        <div className="h-32 w-full bg-white/10 rounded-md" />
      </div>
    </div>
  );
}