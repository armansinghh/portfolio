"use client";

import { lazy, Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeData } from "@/data/home";
import { CopyCommandButton } from "@/components/home/CopyCommandButton";

// Dynamic imports
const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
  loading: () => (
    <span className="text-xl sm:text-2xl text-muted-foreground font-medium">
      AI & Data Science Student
    </span>
  ),
});

// Lazy sections
const Activities = lazy(() => import("@/components/activities/Activities"));
const DiscordMessageBox = dynamic(
  () => import("@/components/shared/contact/MessageBox"),
  { ssr: false }
);

export default function HomeContent() {
  return (
    <div className="flex flex-col">
      <section className="grow px-2 max-w-3xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">
          Arman Singh
          <span className="sr-only">
            — AI & Data Science Student, Machine Learning Developer, B.Tech
            AI&DS
          </span>
        </h1>

        <div className="text-xl sm:text-2xl text-muted-foreground font-medium h-8 flex items-center mb-4">
          <span className="mr-2 text-foreground/50">{">"}</span>
          <Typewriter
            options={{
              strings: homeData.typewriter,
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              cursor: "_",
            }}
          />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
          {homeData.description}
        </p>

        <div className="mb-3">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span className="relative pb-0.5">
              read more about me
              <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-300 ease-out group-hover:w-full"></span>
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* 🆕 Clean, extracted component! */}
          <CopyCommandButton />

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {homeData.socials.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Arman Singh on ${social.name}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ACTIVITIES ================= */}
      <Suspense
        fallback={
          <div className="h-40 animate-pulse bg-muted rounded-lg mx-4" />
        }
      >
        <Activities />
      </Suspense>

      {/* ================= CONTACT ================= */}
      <section className="mt-24 space-y-6 px-2 max-w-3xl">
        <SectionHeading title="Send me a message" />

        {/* Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/5 pointer-events-none" />
          <div className="p-6 rounded-2xl border transition-all duration-300 backdrop-blur-sm bg-white border-zinc-200 dark:bg-zinc-900/30 dark:border-zinc-800/50">
            <p className="text-sm text-muted-foreground mb-4">
              Got something to say? Drop a message! I’ll probably respond faster
              than you expect.
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
  );
}