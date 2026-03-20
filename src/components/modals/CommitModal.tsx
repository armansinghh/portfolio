'use client';

import { X, Github, GitCommit } from 'lucide-react';

export function CommitModal({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: () => void;
  data: any[];
}) {
  if (!isOpen) return null;

  const commits = Array.isArray(data) ? data.slice(0, 5) : [];

  if (commits.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-background border border-border rounded-xl p-6 text-center text-muted-foreground">
          No commits found
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-background border border-border rounded-xl w-full max-w-lg overflow-hidden shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2 text-foreground">
            <GitCommit size={16} />
            <span className="text-sm font-semibold">Recent Commits</span>
          </div>

          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* List */}
        <div className="p-4 space-y-3 max-h-105 overflow-y-auto">
          {commits.map((commit, i) => {
            const sha = commit?.sha?.slice(0, 7) || '???????';
            const message =
              commit?.message?.split('\n')[0] || 'No message';
            const repo = commit?.repo || 'unknown/repo';

            return (
              <a
                key={i}
                href={commit.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-3 rounded-lg border border-border bg-card hover:bg-muted transition active:scale-[0.98]"
              >
                {/* Top row */}
                <div className="flex justify-between text-[11px] text-muted-foreground mb-1 font-mono">
                  <span className="truncate max-w-[60%] group-hover:text-foreground transition">
                    {repo}
                  </span>
                  <span>
                    {commit?.date
                      ? new Date(commit.date).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                        })
                      : '--'}
                  </span>
                </div>

                {/* Message */}
                <p className="text-sm text-foreground/80 font-medium line-clamp-2 leading-snug group-hover:text-foreground transition">
                  {message}
                </p>

                {/* Bottom row */}
                <div className="mt-2 flex justify-between items-center text-[11px] text-muted-foreground font-mono">
                  <span>#{sha}</span>

                  <span className="opacity-0 group-hover:opacity-100 transition">
                    Open →
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-border">
          <a
            href="https://github.com/armansinghh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition active:scale-[0.98]"
          >
            <Github size={14} />
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}