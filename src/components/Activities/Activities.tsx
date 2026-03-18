'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  Music,
  MessageSquare,
  MapPin,
  BookOpen,
  Monitor,
  Zap,
  Cat,
  GitCommit,
  Github,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// TEMP: comment missing components
// import NowPlayingInline from './NowPlayingInLine';
// import DiscordStatusInline from './Discord';
// import LocationTime from './LocationTime';
// import LatestCommitActivity from './LatestCommitActivity';

const ActivityCard = ({
  className,
  icon: Icon,
  label,
  children,
}: any) => {
  return (
    <div
      className={cn(
        'group flex flex-col p-4 rounded-xl border transition-all duration-300',
        'bg-white border-zinc-200 hover:border-zinc-300 hover:-translate-y-1',
        'dark:bg-zinc-900/30 dark:border-zinc-800'
      )}
    >
      <div className="flex items-center gap-2 text-muted-foreground mb-2">
        <Icon size={13} />
        <span className="text-[10px] font-semibold uppercase tracking-widest">
          {label}
        </span>
      </div>

      <div className="text-sm">{children}</div>
    </div>
  );
};

export default function Activities() {
  const { resolvedTheme } = useTheme();

  const light_url = '/github-contributions-light.svg';
  const dark_url = '/github-contributions-dark.svg';

  const [mounted, setMounted] = useState(false);
  const [graphUrl, setGraphUrl] = useState(dark_url);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    setGraphUrl(resolvedTheme === 'dark' ? dark_url : light_url);
  }, [resolvedTheme, mounted]);

  return (
    <section className="mt-24 space-y-6">
      <h2 className="text-xl font-semibold">Activity Feed</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

        {/* Now Playing */}
        <ActivityCard icon={Music} label="Now Playing">
          {/* <NowPlayingInline /> */}
          Spotify coming soon 🎧
        </ActivityCard>

        {/* Discord */}
        <ActivityCard icon={MessageSquare} label="Discord">
          {/* <DiscordStatusInline /> */}
          Discord integration soon 💬
        </ActivityCard>

        {/* Location */}
        <ActivityCard icon={MapPin} label="Location">
          {/* <LocationTime /> */}
          India 🇮🇳
        </ActivityCard>

        {/* Reading */}
        <ActivityCard icon={BookOpen} label="Reading">
          LOTM {'>.<'}
        </ActivityCard>

        {/* Watching */}
        <ActivityCard icon={Monitor} label="Watching">
          Open Source 👒
        </ActivityCard>

        {/* Status */}
        <ActivityCard icon={Zap} label="Status">
          Building portfolio 🚀
        </ActivityCard>

        {/* Latest Commit */}
        <ActivityCard icon={GitCommit} label="Latest Commit">
          {/* <LatestCommitActivity /> */}
          GitHub integration soon 🔧
        </ActivityCard>

        {/* Meowl toggle (simplified) */}
        <ActivityCard icon={Cat} label="Meowl">
          Toggle via navbar (later)
        </ActivityCard>

        {/* Contributions */}
        <div className="col-span-2 lg:col-span-4 p-4 border rounded-xl">
          {!mounted ? (
            <div className="h-[120px] bg-zinc-200 animate-pulse" />
          ) : (
            <img src={graphUrl} className="w-full" />
          )}
        </div>
      </div>
    </section>
  );
}