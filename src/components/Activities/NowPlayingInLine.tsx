'use client';

import { useNowPlaying } from './useNowPlaying';

export default function NowPlayingInLine() {
  const { isPlaying, title, artist } = useNowPlaying(3000);

  if (!isPlaying || !title || !artist) {
    return <span>not listening to anything rn</span>;
  }

  return (
    <span>
      {title} – {artist}
    </span>
  );
}
