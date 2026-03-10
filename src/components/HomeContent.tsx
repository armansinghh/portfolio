'use client';

import { lazy, Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import { Copy, Check, Github, Instagram, Terminal } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

// Dynamically import heavy animation libraries
const Typewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false,
  loading: () => <span className="text-2xl">Full Stack Developer, India</span>,
});

// Lazy load components below the fold (temporarily disabled)
// const Activities = lazy(() => import('@/components/myComponents/Activities/Activities'));
// const DiscordMessageBox = lazy(() => import('@/components/myComponents/Contact/MessageBox'));

export default function HomeContent() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('npx hello arman');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // FAQ Schema (temporarily disabled)
  /*
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Arman Singh?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Arman Singh is a developer from India working on web applications and machine learning projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies does Arman Singh work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Arman Singh works with React, Next.js, TypeScript, Python, machine learning frameworks and modern web technologies.',
        },
      },
    ],
  };
  */

  return (
    <>
      {/* SEO schema temporarily disabled */}
      {/*
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      */}

      <div className="flex flex-col">
        <main className="grow px-4 max-w-3xl mx-auto py-8">
          <h1 className="text-4xl font-bold mb-4">Arman Singh</h1>

          <div className="text-xl sm:text-2xl text-muted-foreground font-medium h-8 flex items-center mb-8">
            <span className="mr-2 text-foreground/50">{'>'}</span>

            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'Tech Enthusiast',
                  'Open For Internships'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                cursor: '_',
              }}
            />
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I build scalable web applications and experiment with machine learning
            and modern technologies. This portfolio showcases my projects and
            things I'm currently building.
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
                npx hello arman
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
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
                asChild
              >
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
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
                  href="https://discord.com/users/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Discord"
                >
                  <FaDiscord className="h-5 w-5" />
                </a>
              </Button>

            </div>
          </div>
        </main>

        {/* Activities section temporarily disabled */}
        {/*
        <Suspense fallback={<div className="h-40 animate-pulse bg-muted rounded-lg" />}>
          <Activities />
        </Suspense>
        */}

        {/* Message section temporarily disabled */}
        {/*
        <section className="mt-16 border-t pt-8">
          <h2 className="text-xl mb-4 font-semibold tracking-tight text-foreground/90">
            Send me a message
          </h2>

          <Suspense fallback={<div className="h-32 animate-pulse bg-muted rounded-lg" />}>
            <DiscordMessageBox />
          </Suspense>
        </section>
        */}
      </div>
    </>
  );
}