'use client';

import useSWR from 'swr';

type DiscordStatus = 'online' | 'idle' | 'dnd' | 'offline';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DiscordStatusInline() {
  const { data, isLoading } = useSWR('/api/get-discord-status', fetcher, {
    refreshInterval: 5000,
  });

  const status = data?.data?.discord_status as DiscordStatus | undefined;

  const styles: Record<DiscordStatus, string> = {
    online: 'text-green-500',
    idle: 'text-yellow-500',
    dnd: 'text-red-500',
    offline: 'text-zinc-500',
  };

  // Loading state
  if (isLoading) {
    return <span className="text-muted-foreground">Loading...</span>;
  }

  // Fallback
  const safeStatus: DiscordStatus = status ?? 'offline';

  return (
    <span className={`font-medium ${styles[safeStatus]}`}>
      {safeStatus === 'dnd'
        ? 'Do Not Disturb'
        : safeStatus.charAt(0).toUpperCase() + safeStatus.slice(1)}
    </span>
  );
}