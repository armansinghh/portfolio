export default function Loading() {
  return (
    <div className="space-y-8 pb-16 animate-pulse px-4">
      {/* Back */}
      <div className="h-3 w-24 rounded-full bg-muted" />

      {/* Header */}
      <div className="space-y-3">
        <div className="h-8 w-2/3 rounded-lg bg-muted" />

        <div className="flex items-center gap-3">
          <div className="h-2.5 w-20 rounded-full bg-muted" />
          <div className="h-2.5 w-12 rounded-full bg-muted" />
          <div className="h-2.5 w-12 rounded-full bg-muted" />
        </div>

        <div className="h-3 w-1/2 rounded-full bg-muted" />
      </div>

      <hr className="border-white/6" />

      {/* Content blocks */}
      <div className="space-y-4">
        <div className="h-3 w-full rounded-full bg-muted" />
        <div className="h-3 w-5/6 rounded-full bg-muted" />
        <div className="h-3 w-4/6 rounded-full bg-muted" />
      </div>

      <div className="space-y-4">
        <div className="h-3 w-full rounded-full bg-muted" />
        <div className="h-3 w-3/4 rounded-full bg-muted" />
        <div className="h-3 w-5/6 rounded-full bg-muted" />
        <div className="h-3 w-2/3 rounded-full bg-muted" />
      </div>

      {/* Code block */}
      <div className="h-28 w-full rounded-lg bg-muted" />

      <div className="space-y-4">
        <div className="h-3 w-full rounded-full bg-muted" />
        <div className="h-3 w-4/5 rounded-full bg-muted" />
      </div>
    </div>
  );
}