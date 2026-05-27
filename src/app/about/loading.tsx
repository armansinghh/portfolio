export default function Loading() {
  return (
    <div className="flex flex-col px-2 animate-pulse">
      {/* ================= INTRO SKELETON ================= */}
      <section className="max-w-3xl py-8 space-y-6">
        <div className="h-10 w-48 bg-muted rounded-md" /> {/* "About Me" */}

        <div className="space-y-10">
          {/* Section 1: Introduction */}
          <div className="space-y-4">
            <div className="h-8 w-72 bg-muted rounded-md" />
            <div className="space-y-2">
              <div className="h-5 w-full bg-muted rounded-md" />
              <div className="h-5 w-11/12 bg-muted rounded-md" />
              <div className="h-5 w-4/5 bg-muted rounded-md" />
            </div>
            <div className="space-y-2 pt-2">
              <div className="h-5 w-full bg-muted rounded-md" />
              <div className="h-5 w-3/4 bg-muted rounded-md" />
            </div>
          </div>

          {/* Section 2: Technical Focus */}
          <div className="space-y-5">
            <div className="h-8 w-56 bg-muted rounded-md" />
            <div className="grid gap-6 sm:grid-cols-2">
              {[1, 2].map((i) => (
                <div key={i} className="space-y-3">
                  <div className="h-5 w-40 bg-muted rounded-md" />
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((j) => (
                      <div key={j} className="h-7 w-20 bg-secondary rounded-md" />
                    ))}
                  </div>
                </div>
              ))}
              <div className="space-y-3 sm:col-span-2">
                <div className="h-5 w-40 bg-muted rounded-md" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6].map((j) => (
                    <div key={j} className="h-7 w-24 bg-muted rounded-md border border-dashed border-border/50" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Call to Action */}
          <div className="h-40 w-full rounded-2xl bg-secondary/20 border border-border/50" />
        </div>
      </section>

      {/* ================= EDUCATION SKELETON ================= */}
      <section className="max-w-3xl space-y-6 mt-8">
        <SkeletonHeading />
        <div className="h-32 w-full rounded-2xl bg-secondary/10 border border-border/50" />
      </section>

      {/* ================= TECH STACK SKELETON ================= */}
      <section className="max-w-3xl space-y-8 mt-16">
        <SkeletonHeading />
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-muted rounded-sm" />
              <div className="h-4 w-24 bg-muted rounded-md" />
            </div>
            <div className="flex flex-wrap gap-2">
               {[1, 2, 3, 4, 5].map((j) => (
                 <div key={j} className="h-10 w-28 bg-muted/50 rounded-xl" />
               ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

// Reusable mini-skeleton for your section headings
function SkeletonHeading() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-5 w-5 rounded-md bg-muted" />
      <div className="h-7 w-48 bg-muted rounded-md" />
      <div className="h-px bg-border/40 flex-1" />
    </div>
  );
}