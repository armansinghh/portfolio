'use client';

import { useEffect, useRef, useState } from 'react';

interface NowPlayingApiResponse {
  playing: boolean;
  text?: string;
  imageUrl?: string;
  spotifyUrl?: string;
}

export interface NowPlayingData {
  isPlaying: boolean;
  title: string | null;
  artist: string | null;
  imageUrl: string | null;
  spotifyUrl: string | null;
}

/**
 * Single source of truth for Spotify "Now Playing"
 * - Polls the public endpoint
 * - Shared between inline + modal
 * - No UI logic
 */
export function useNowPlaying(pollInterval = 3000): NowPlayingData {
  const [data, setData] = useState<NowPlayingData>({
    isPlaying: false,
    title: null,
    artist: null,
    imageUrl: null,
    spotifyUrl: null,
  });

  // Prevent unnecessary state updates
  const lastTextRef = useRef<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchNowPlaying() {
      try {
        const res = await fetch(
          'https://my-spotify-activity.vercel.app/api/status',
          { cache: 'no-store' }
        );

        const json: NowPlayingApiResponse = await res.json();

        if (!isMounted) return;

        if (!json.playing || !json.text) {
          lastTextRef.current = null;
          setData({
            isPlaying: false,
            title: null,
            artist: null,
            imageUrl: null,
            spotifyUrl: null,
          });
          return;
        }

        // Avoid re-render if song hasn't changed
        if (json.text === lastTextRef.current) return;

        lastTextRef.current = json.text;

        const [title, artist] = json.text.split(' – ');

        setData({
          isPlaying: true,
          title: title ?? null,
          artist: artist ?? null,
          imageUrl: json.imageUrl ?? null,
          spotifyUrl: json.spotifyUrl ?? null,
        });
      } catch {
        if (!isMounted) return;

        setData({
          isPlaying: false,
          title: null,
          artist: null,
          imageUrl: null,
          spotifyUrl: null,
        });
      }
    }

    // Initial fetch
    fetchNowPlaying();

    // Polling
    const interval = setInterval(fetchNowPlaying, pollInterval);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [pollInterval]);

  return data;
}
