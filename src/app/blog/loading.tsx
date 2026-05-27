export default function Loading() {
  return (
    <div className="space-y-10 px-2 max-w-3xl mx-auto animate-pulse">
      {/* Header Skeleton */}
      <div className="space-y-3 py-8">
        <div className="h-10 w-24 bg-muted rounded-md" />
        <div className="h-5 w-64 bg-muted rounded-md" />
      </div>

      {/* Posts List Skeleton */}
      <div className="divide-y divide-border">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-1 py-5"
          >
            {/* Left Side: Title, Desc, Tags */}
            <div className="space-y-3 w-full">
              {/* Title */}
              <div className="h-5 w-3/4 sm:w-64 bg-muted/80 rounded-md" />
              
              {/* Description */}
              <div className="h-4 w-full max-w-sm bg-muted/50 rounded-md" />
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                <div className="h-5 w-12 bg-muted/60 rounded-md" />
                <div className="h-5 w-16 bg-muted/60 rounded-md" />
              </div>
            </div>

            {/* Right Side: Date */}
            <div className="h-4 w-20 bg-muted/60 rounded-md shrink-0 sm:mt-0.5" />
          </div>
        ))}
      </div>
    </div>
  );
}