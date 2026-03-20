"use client";

import { lazy, Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { Copy, Check, Github, Instagram, Terminal } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";

// Dynamic imports
const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
  loading: () => <span className="text-2xl">Full Stack Developer, India</span>,
});

// Lazy sections
const Activities = lazy(() => import("@/components/Activities/Activities"));
const DiscordMessageBox = lazy(() => import("@/components/Contact/MessageBox"));

export default function HomeContent() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npx armansingh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="flex flex-col">
        {/* ================= HERO ================= */}
        <main className="grow px-4 max-w-3xl mx-auto py-8">
          <h1 className="text-4xl font-bold mb-4">Arman Singh</h1>

          <div className="text-xl sm:text-2xl text-muted-foreground font-medium h-8 flex items-center mb-8">
            <span className="mr-2 text-foreground/50">{">"}</span>

            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Tech Enthusiast",
                  "Open For Internships",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                cursor: "_",
              }}
            />
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I build scalable web applications and experiment with machine
            learning and modern technologies. This portfolio showcases my
            projects and things I'm currently building.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* NPX Card */}
            <button
              onClick={handleCopy}
              className="group cursor-pointer flex items-center gap-3 px-4 py-2.5 rounded-lg border border-border bg-muted/30 hover:bg-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Copy npx command"
            >
              <Terminal className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />

              <code className="font-mono text-sm text-foreground">
                npx armansingh
              </code>

              <div className="pl-3 border-l border-border/50 ml-1">
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-green-500 animate-in zoom-in" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                )}
              </div>
            </button>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
                asChild
              >
                <a href="https://github.com/armansinghh" target="_blank">
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
                asChild
              >
                <a href="https://instagram.com/armansinghz" target="_blank">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
                asChild
              >
                <a
                  href="https://discord.com/users/1010197490823340184"
                  target="_blank"
                >
                  <FaDiscord className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </main>

        {/* ================= ACTIVITIES ================= */}
        <Suspense
          fallback={
            <div className="h-40 animate-pulse bg-muted rounded-lg mx-4" />
          }
        >
          <Activities />
        </Suspense>

        {/* ================= CONTACT ================= */}
        <section className="mt-24 space-y-6 px-1 max-w-3xl">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-semibold tracking-tight text-foreground/90">
              Send me a message
            </h2>
            <div className="h-px bg-border/40 flex-1" />
          </div>

          {/* Card */}
          <div className="relative group">
            {/* Gradient overlay (same as graph) */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/5 pointer-events-none" />

            <div
              className="
      p-6 rounded-2xl border transition-all duration-300 backdrop-blur-sm
      bg-white border-zinc-200
      dark:bg-zinc-900/30 dark:border-zinc-800/50
      hover:border-zinc-300 dark:hover:border-zinc-700
      hover:shadow-sm
    "
            >
              <p className="text-sm text-muted-foreground mb-4">
                Got something to say? Drop a message - I’ll probably respond
                faster than you expect.
              </p>

              <Suspense
                fallback={
                  <div className="h-32 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                }
              >
                <DiscordMessageBox />
              </Suspense>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
