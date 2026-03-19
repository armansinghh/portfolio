'use client';

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
// import { NowPlayingModal, DiscordModal, CommitDiffModal } from '../modals';
import { NowPlayingModal } from '../modals/NowPlayingModal';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface GlobalModalProviderProps {
  children: React.ReactNode;
}

export function GlobalModalProvider({ children }: GlobalModalProviderProps) {
  // Modal states
  const [nowPlayingModalOpen, setNowPlayingModalOpen] = useState(false);
  const [discordModalOpen, setDiscordModalOpen] = useState(false);
  const [commitModalOpen, setCommitModalOpen] = useState(false);

  // Commit modal data
  const [commitDiff, setCommitDiff] = useState<string | null>(null);
  const [commitFiles, setCommitFiles] = useState<Array<{
    filename: string;
    status: string;
    additions: number;
    deletions: number;
  }> | null>(null);
  const [diffLoading, setDiffLoading] = useState(false);
  const [diffError, setDiffError] = useState<string | null>(null);

  // Fetch data for OTHER modals (Spotify removed)
  const { data: discordData } = useSWR('/api/get-discord-status', fetcher, {
    refreshInterval: 5000,
  });

  const { data: commitData } = useSWR('/api/latest-commit', fetcher, {
    refreshInterval: 1000 * 60 * 5,
  });

  // Event listeners for opening modals
  useEffect(() => {
    const handleOpenDiscordModal = () => setDiscordModalOpen(true);
    const handleOpenNowPlayingModal = () => setNowPlayingModalOpen(true);

    const handleOpenCommitModal = async () => {
      setCommitModalOpen(true);

      if (!commitDiff && !diffLoading && commitData?.sha) {
        setDiffLoading(true);
        setDiffError(null);

        try {
          const response = await fetch(`/api/commit-diff?sha=${commitData.sha}`);
          if (response.ok) {
            const diffData = await response.json();
            setCommitDiff(diffData.diff);
            setCommitFiles(diffData.files || []);
          } else if (response.status === 429) {
            const errorData = await response.json();
            setDiffError(
              `Rate limit exceeded. ${
                errorData.resetTime
                  ? `Resets at ${new Date(errorData.resetTime).toLocaleTimeString()}`
                  : 'Try again later.'
              }`
            );
          } else {
            setDiffError('Failed to load diff');
          }
        } catch {
          setDiffError('Network error');
        } finally {
          setDiffLoading(false);
        }
      }
    };

    window.addEventListener('open-discord-modal', handleOpenDiscordModal);
    window.addEventListener('open-now-playing-modal', handleOpenNowPlayingModal);
    window.addEventListener('open-commit-modal', handleOpenCommitModal);

    return () => {
      window.removeEventListener('open-discord-modal', handleOpenDiscordModal);
      window.removeEventListener('open-now-playing-modal', handleOpenNowPlayingModal);
      window.removeEventListener('open-commit-modal', handleOpenCommitModal);
    };
  }, [commitDiff, diffLoading, commitData?.sha]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'q') {
        if (nowPlayingModalOpen || discordModalOpen || commitModalOpen) {
          event.preventDefault();
          setNowPlayingModalOpen(false);
          setDiscordModalOpen(false);
          handleCloseCommitModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nowPlayingModalOpen, discordModalOpen, commitModalOpen]);

  const handleCloseCommitModal = () => {
    setCommitModalOpen(false);
    setCommitDiff(null);
    setCommitFiles(null);
    setDiffError(null);
  };

  return (
    <>
      {children}

      {/* Global Modals */}
      <NowPlayingModal
        isOpen={nowPlayingModalOpen}
        onClose={() => setNowPlayingModalOpen(false)}
      />

      {/* <DiscordModal
        isOpen={discordModalOpen}
        onClose={() => setDiscordModalOpen(false)}
        data={discordData}
      />

      <CommitDiffModal
        isOpen={commitModalOpen}
        onClose={handleCloseCommitModal}
        diff={commitDiff}
        loading={diffLoading}
        error={diffError}
        commitSha={commitData?.sha || ''}
        commitMessage={commitData?.message || ''}
        files={commitFiles || []}
        commitUrl={commitData?.html_url}
      /> */}
    </>
  );
}
