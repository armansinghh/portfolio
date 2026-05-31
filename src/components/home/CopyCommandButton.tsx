"use client";

import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { homeData } from "@/data/home";

export function CopyCommandButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(homeData.npxCommand);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = homeData.npxCommand;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="relative group/cmd">
      <button
        onClick={handleCopy}
        className="group cursor-pointer flex items-center gap-3 px-4 py-2.5 rounded-lg border border-border bg-muted/30 hover:bg-muted/60 transition-colors focus:outline-none"
        aria-label="Copy npx command"
      >
        <Terminal className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        <code className="font-mono text-sm text-foreground">
          {homeData.npxCommand}
        </code>
        <div className="pl-3 border-l border-border/50 ml-1">
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-500 animate-in zoom-in" />
          ) : (
            <Copy className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
          )}
        </div>
      </button>

      <div className="hidden sm:block absolute -bottom-8 left-[0%] whitespace-nowrap text-xs text-muted-foreground bg-background border border-border px-2 py-1 rounded-md opacity-0 group-hover/cmd:opacity-100 transition-opacity duration-200 pointer-events-none">
        run in terminal to explore without a browser
      </div>
    </div>
  );
}