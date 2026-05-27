export default function Loading() {
  return (
    <div className="flex flex-col animate-pulse">
      <section className="grow px-4 max-w-3xl mx-auto py-8 w-full space-y-10">
        
        {/* Header Skeleton */}
        <div className="text-left space-y-3">
          <div className="h-10 w-40 bg-muted rounded-md" />
          <div className="h-5 w-72 bg-muted rounded-md" />
        </div>

        {/* Featured Project Skeleton */}
        <div className="hidden sm:block rounded-2xl border border-white/6 bg-card overflow-hidden">
          <div className="h-72 w-full bg-muted/80" /> {/* Image Block */}
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="h-8 w-1/3 bg-muted rounded-md" />
              <div className="h-4 w-16 bg-muted rounded-md" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted rounded-md" />
              <div className="h-4 w-5/6 bg-muted rounded-md" />
            </div>
            <div className="flex gap-2 pt-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 w-16 bg-muted rounded-md" />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Featured Skeleton */}
        <div className="sm:hidden h-80 w-full rounded-xl bg-muted" />

        {/* 2-Column Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="h-80 w-full rounded-xl bg-card border border-white/6 p-5 flex flex-col justify-end space-y-3">
              <div className="h-6 w-3/4 bg-muted rounded-md" />
              <div className="h-4 w-full bg-muted rounded-md" />
              <div className="flex gap-2 pt-2">
                <div className="h-5 w-12 bg-muted rounded-md" />
                <div className="h-5 w-12 bg-muted rounded-md" />
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}