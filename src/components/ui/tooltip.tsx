'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';
import { cn } from '@/lib/utils';

export function TooltipProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      {children}
    </TooltipPrimitive.Provider>
  );
}

export function Tooltip({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>;
}

export function TooltipTrigger({
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return (
    <TooltipPrimitive.Trigger asChild {...props}>
      {children}
    </TooltipPrimitive.Trigger>
  );
}

export function TooltipContent({
  className,
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          'z-50 rounded-md bg-zinc-900 px-2 py-1 text-xs text-white shadow-md border border-zinc-800',
          'animate-in fade-in zoom-in-95',
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
}