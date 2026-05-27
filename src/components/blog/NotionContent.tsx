'use client';

import { NotionRenderer } from 'react-notion-x';
import type { ExtendedRecordMap } from 'notion-types';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import 'react-notion-x/src/styles.css';

const Collection = () => null;

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
);

type Props = {
  recordMap: ExtendedRecordMap;
};

export default function NotionContent({ recordMap }: Props) {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  useEffect(() => {
    // Remove existing prism theme
    const existing = document.getElementById('prism-theme');
    if (existing) existing.remove();

    const link = document.createElement('link');
    link.id = 'prism-theme';
    link.rel = 'stylesheet';
    link.href = isDark
      ? 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css'
      : 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css';
    document.head.appendChild(link);
  }, [isDark]);

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={false}
      darkMode={isDark}
      disableHeader={true}
      components={{ Collection, Code }}
    />
  );
}