'use client';

import { X, Play, Pause, ExternalLink, Music, Radio } from 'lucide-react';
import { useNowPlaying } from '../activities/useNowPlaying';

interface NowPlayingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NowPlayingModal({ isOpen, onClose }: NowPlayingModalProps) {
  const { isPlaying, title, artist, imageUrl, spotifyUrl } = useNowPlaying(3000);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-background border border-border rounded-xl shadow-2xl max-w-lg w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50 bg-muted/20">
          <div className="flex items-center gap-2">
            <Radio
              size={18}
              className={
                isPlaying
                  ? 'text-foreground animate-pulse'
                  : 'text-muted-foreground'
              }
            />
            <h3 className="text-lg font-semibold">Now Playing</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
            title="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {isPlaying && title && artist ? (
            <div className="flex items-start gap-6 mb-6">
              {/* Album Art */}
              <div className="relative shrink-0">
                <div className="w-32 h-32 rounded-lg shadow-lg overflow-hidden border border-border ring-2 ring-muted-foreground/20">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={`${title} cover`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}

                  {/* Fallback */}
                  <div
                    className={`w-full h-full bg-muted flex items-center justify-center text-muted-foreground ${
                      imageUrl ? 'hidden' : ''
                    }`}
                  >
                    <Music size={40} />
                  </div>
                </div>

                {/* Status Icon
                <div className="absolute -bottom-3 -right-3 bg-background rounded-full p-1.5 shadow-md border border-border">
                  {isPlaying ? (
                    <div className="bg-foreground text-background p-1 rounded-full">
                      <Play size={16} className="fill-current" />
                    </div>
                  ) : (
                    <div className="bg-muted text-muted-foreground p-1 rounded-full">
                      <Pause size={16} className="fill-current" />
                    </div>
                  )}
                </div> */}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 flex flex-col justify-center h-32">
                {/* Source badge */}
                <div className="mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground border border-border">
                    Spotify
                  </span>
                </div>

                <div className="space-y-1">
                  <h4
                    className="font-bold text-xl leading-tight truncate"
                    title={title}
                  >
                    {title}
                  </h4>
                  <p
                    className="text-base font-medium text-foreground/80 truncate"
                    title={artist}
                  >
                    {artist}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-24 h-24 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Music size={32} className="text-muted-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-2">-</h4>
              <p className="text-muted-foreground">
                not listening to anything rn
              </p>
            </div>
          )}

          {/* Footer Action */}
          {isPlaying && (
            <div className="pt-2">
              <a
                href={spotifyUrl ?? undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-medium shadow-sm transition-all active:scale-[0.99]"
              >
                <ExternalLink size={18} />
                <span>Play on Spotify</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
