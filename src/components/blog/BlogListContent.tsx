import Link from "next/link";
import type { BlogPost } from "@/lib/notion";

interface BlogListContentProps {
  posts: BlogPost[];
}

export default function BlogListContent({ posts }: BlogListContentProps) {
  return (
    <div className="space-y-10 px-2 max-w-3xl mx-auto">
      {/* Header */}
      <div className="space-y-2 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-lg">
          Technical articles, guides, and devlogs on ML, web development, and
          things I find interesting (with a bit of brain rot)
        </p>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <p className="font-mono text-sm text-muted-foreground">
          {">"} no posts yet. check back soon.
        </p>
      ) : (
        <div className="divide-y divide-border">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 py-5 transition-colors hover:text-foreground"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium group-hover:text-foreground text-foreground/80 transition-colors">
                  {post.title}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-1 max-w-sm">
                  {post.description}
                </p>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-muted-foreground border border-white/6 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <span className="font-mono text-[11px] text-muted-foreground shrink-0 sm:mt-0.5">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
