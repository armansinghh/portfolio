"use client";

import Image from "next/image";
import { ExternalLink, Gamepad2, Trophy, Zap, Code2 } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export function DiscordModal({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}) {
  if (!isOpen || !data?.data) return null;

  const user = data.data.discord_user;
  const status = data.data.discord_status;
  const activities = data.data.activities || [];

  const activity = activities.find((a: any) => a.type !== 4); // ignore custom status

  const getAvatarUrl = () => {
    if (user.avatar) {
      const isAnimated = user.avatar.startsWith("a_");
      const format = isAnimated ? "gif" : "webp";

      return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${format}?size=128`;
    }

    const defaultAvatarIndex =
      (parseInt(user.discriminator || "0", 10) || 0) % 5;

    return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarIndex}.png`;
  };

  const getStatusColor = () => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "idle":
        return "bg-yellow-500";
      case "dnd":
        return "bg-red-500";
      default:
        return "bg-zinc-500";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
        {/* Top Banner */}
        <div className="h-24 bg-zinc-900 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 -mt-10">
          {/* Avatar */}
          <div className="flex items-end gap-4 mb-4">
            <div className="relative">
              <Image
                src={getAvatarUrl()}
                alt={user.username ?? "avatar"}
                width={72}
                height={72}
                unoptimized
                className="rounded-full border-4 border-zinc-950 object-cover"
              />
              <span
                className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-zinc-950 ${getStatusColor()}`}
              />
            </div>
          </div>

          {/* Profile Card */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 mb-6">
            <p className="text-lg font-semibold text-white">
              {user.global_name || user.username}
            </p>
            <p className="text-sm text-zinc-400">@{user.username}</p>

            {/* Optional icons row */}
            <div className="flex gap-2 mt-3 text-zinc-400">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="w-7 h-7 rounded-md bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition cursor-pointer">
                    <Trophy size={14} />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">HypeSquad Brilliance</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="w-7 h-7 rounded-md bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition cursor-pointer">
                    <Zap size={14} />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">Nitro Subscriber</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="w-7 h-7 rounded-md bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition cursor-pointer">
                    <Code2 size={14} />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">Active Developer</TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Activity Section */}
          {activity && (
            <>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">
                Current Activity
              </p>

              <div className="flex gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 mb-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-zinc-800 flex items-center justify-center">
                  <Gamepad2 size={28} className="text-zinc-400" />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-zinc-400">
                    Playing{" "}
                    <span className="text-white font-semibold">
                      {activity.name}
                    </span>
                  </p>

                  {activity.timestamps?.start && (
                    <p className="text-xs text-zinc-500 mt-2">
                      {(() => {
                        const start = new Date(activity.timestamps.start);
                        const diff = Math.floor(
                          (Date.now() - start.getTime()) / 60000,
                        );
                        const hrs = Math.floor(diff / 60);
                        const mins = diff % 60;
                        return `${hrs > 0 ? `${hrs}h ` : ""}${mins}m elapsed`;
                      })()}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Button */}
          <a
            href={`https://discord.com/users/${user.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-zinc-200 text-black font-medium hover:bg-zinc-300 transition active:scale-[0.98]"
          >
            <ExternalLink size={16} />
            View Full Profile
          </a>
        </div>
      </div>
    </div>
  );
}
