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

const NOT_PLAYING: NowPlayingData = {
  isPlaying: false,
  title: null,
  artist: null,
  imageUrl: null,
  spotifyUrl: null,
};

export function useNowPlaying(pollInterval = 3000): NowPlayingData {
  const [data, setData] = useState<NowPlayingData>(NOT_PLAYING);
  const lastTextRef = useRef<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchNowPlaying() {
      try {
        const res = await fetch('/api/spotify-status', { cache: 'no-store' });

        if (!res.ok) {
          if (!isMounted) return;
          lastTextRef.current = null;
          setData(NOT_PLAYING);
          return;
        }

        const json: NowPlayingApiResponse = await res.json();

        if (!isMounted) return;

        if (!json.playing || !json.text || json.text === 'Unavailable') {
          lastTextRef.current = null;
          setData(NOT_PLAYING);
          return;
        }

        // avoid re-render if song hasn't changed
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
        // silent fail
        if (!isMounted) return;
        lastTextRef.current = null;
        setData(NOT_PLAYING);
      }
    }

    fetchNowPlaying();

    const interval = setInterval(fetchNowPlaying, pollInterval);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [pollInterval]);

  return data;
}