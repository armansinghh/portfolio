'use client';

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { NowPlayingModal, DiscordModal } from '../modals';
import { CommitModal } from '../modals/CommitModal';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface GlobalModalProviderProps {
  children: React.ReactNode;
}

export function GlobalModalProvider({ children }: GlobalModalProviderProps) {
  const [nowPlayingModalOpen, setNowPlayingModalOpen] = useState(false);
  const [discordModalOpen, setDiscordModalOpen] = useState(false);
  const [commitModalOpen, setCommitModalOpen] = useState(false);

  // ✅ Discord
  const { data: discordData } = useSWR('/api/get-discord-status', fetcher, {
    refreshInterval: 5000,
  });

  // ✅ SINGLE SOURCE OF TRUTH (IMPORTANT)
  const { data: commitDataRaw } = useSWR('/api/commits', fetcher, {
    refreshInterval: 1000 * 60 * 5,
  });

  // ✅ normalize data → ALWAYS array
  const commitData = Array.isArray(commitDataRaw) ? commitDataRaw : [];

  useEffect(() => {
    const handleOpenDiscordModal = () => setDiscordModalOpen(true);
    const handleOpenNowPlayingModal = () => setNowPlayingModalOpen(true);
    const handleOpenCommitModal = () => setCommitModalOpen(true);

    window.addEventListener('open-discord-modal', handleOpenDiscordModal);
    window.addEventListener('open-now-playing-modal', handleOpenNowPlayingModal);
    window.addEventListener('open-commit-modal', handleOpenCommitModal);

    return () => {
      window.removeEventListener('open-discord-modal', handleOpenDiscordModal);
      window.removeEventListener('open-now-playing-modal', handleOpenNowPlayingModal);
      window.removeEventListener('open-commit-modal', handleOpenCommitModal);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'q') {
        if (nowPlayingModalOpen || discordModalOpen || commitModalOpen) {
          event.preventDefault();
          setNowPlayingModalOpen(false);
          setDiscordModalOpen(false);
          setCommitModalOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nowPlayingModalOpen, discordModalOpen, commitModalOpen]);

  return (
    <>
      {children}

      <NowPlayingModal
        isOpen={nowPlayingModalOpen}
        onClose={() => setNowPlayingModalOpen(false)}
      />

      <DiscordModal
        isOpen={discordModalOpen}
        onClose={() => setDiscordModalOpen(false)}
        data={discordData}
      />

      <CommitModal
        isOpen={commitModalOpen}
        onClose={() => setCommitModalOpen(false)}
        data={commitData} // ALWAYS SAFE
      />
    </>
  );
}