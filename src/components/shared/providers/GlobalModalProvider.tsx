"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { NowPlayingModal, DiscordModal } from "@/components/shared/modals";
import { CommitModal } from "@/components/shared/modals/CommitModal";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface GlobalModalProviderProps {
  children: React.ReactNode;
}

export function GlobalModalProvider({ children }: GlobalModalProviderProps) {
  const [nowPlayingModalOpen, setNowPlayingModalOpen] = useState(false);
  const [discordModalOpen, setDiscordModalOpen] = useState(false);
  const [commitModalOpen, setCommitModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const { data: discordData } = useSWR("/api/get-discord-status", fetcher, {
    refreshInterval: 5000,
  });

  const { data: commitDataRaw } = useSWR("/api/commits", fetcher, {
    refreshInterval: 1000 * 60 * 5,
  });

  const commitData = Array.isArray(commitDataRaw) ? commitDataRaw : [];

  useEffect(() => {
    const handleOpenDiscordModal = () => setDiscordModalOpen(true);
    const handleOpenNowPlayingModal = () => setNowPlayingModalOpen(true);
    const handleOpenCommitModal = () => setCommitModalOpen(true);
    const handleOpenProjectModal = () => setProjectModalOpen(true);
    const handleCloseProjectModal = () => setProjectModalOpen(false);

    window.addEventListener("open-discord-modal", handleOpenDiscordModal);
    window.addEventListener(
      "open-now-playing-modal",
      handleOpenNowPlayingModal,
    );
    window.addEventListener("open-commit-modal", handleOpenCommitModal);
    window.addEventListener("open-project-modal", handleOpenProjectModal);
    window.addEventListener("close-project-modal", handleCloseProjectModal);

    return () => {
      window.removeEventListener("open-discord-modal", handleOpenDiscordModal);
      window.removeEventListener(
        "open-now-playing-modal",
        handleOpenNowPlayingModal,
      );
      window.removeEventListener("open-commit-modal", handleOpenCommitModal);
      window.removeEventListener("open-project-modal", handleOpenProjectModal);
      window.removeEventListener(
        "close-project-modal",
        handleCloseProjectModal,
      );
    };
  }, []);

  useEffect(() => {
    const isAnyModalOpen =
      nowPlayingModalOpen ||
      discordModalOpen ||
      commitModalOpen ||
      projectModalOpen;

    if (isAnyModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [
    nowPlayingModalOpen,
    discordModalOpen,
    commitModalOpen,
    projectModalOpen,
  ]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "q") {
        if (
          nowPlayingModalOpen ||
          discordModalOpen ||
          commitModalOpen ||
          projectModalOpen
        ) {
          event.preventDefault();
          setNowPlayingModalOpen(false);
          setDiscordModalOpen(false);
          setCommitModalOpen(false);
          setProjectModalOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    nowPlayingModalOpen,
    discordModalOpen,
    commitModalOpen,
    projectModalOpen,
  ]);

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
        data={commitData}
      />
    </>
  );
}
