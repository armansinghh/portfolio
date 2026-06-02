export default function ProjectSkeleton() {
  return (
    <div className="space-y-8 pb-16 px-2 max-w-3xl mx-auto animate-pulse">
      {/* Back link skeleton */}
      <div className="h-4 w-28 bg-muted rounded flex items-center gap-2" />

      {/* Hero image skeleton */}
      <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-muted">
        {/* Title overlay skeleton */}
        <div className="absolute bottom-6 left-6 space-y-3 w-full">
          <div className="h-8 w-[60%] max-w-md bg-background/40 rounded-md" />
          <div className="h-3 w-24 bg-background/40 rounded-md" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <div>
            <div className="h-3 w-16 bg-muted rounded mb-4" />
            <div className="space-y-2.5">
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-4 w-[90%] bg-muted rounded" />
              <div className="h-4 w-[75%] bg-muted rounded" />
            </div>
          </div>

          {/* Features */}
          <div className="pt-6 border-t border-white/6">
            <div className="h-3 w-24 bg-muted rounded mb-5" />
            <div className="grid sm:grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                  <div className="h-4 w-full bg-muted rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 lg:border-l lg:border-white/6 lg:pl-8">
          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <div className="w-full h-11 rounded-lg bg-muted" />
            <div className="w-full h-11 rounded-lg bg-muted" />
          </div>

          {/* Technologies */}
          <div>
            <div className="h-3 w-24 bg-muted rounded mb-4" />
            <div className="flex flex-wrap gap-2">
              {/* Hardcoded widths to prevent SSR hydration mismatches */}
              {["w-16", "w-24", "w-20", "w-14", "w-28", "w-16"].map((width, i) => (
                <div
                  key={i}
                  className={`h-8 ${width} rounded-md border border-white/6 bg-muted`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}