'use client';

import { useEffect, useState } from 'react';
import MeowlCat from './MeowlCat';

declare global {
  interface Window {
    meowl?: any;
    meowlEnabled?: boolean;
  }
}

export default function Meowl() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.matchMedia('(min-width: 768px)').matches);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const saved = localStorage.getItem('meowl-enabled');

    if (saved !== null) {
      setIsEnabled(saved === 'true');
      window.meowlEnabled = saved === 'true';
    } else {
      window.meowlEnabled = true;
    }

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    const handleToggle = (event: CustomEvent) => {
      const newEnabled = event.detail.enabled;
      setIsEnabled(newEnabled);
      window.meowlEnabled = newEnabled;
    };

    window.addEventListener('meowl-toggle', handleToggle as EventListener);

    return () =>
      window.removeEventListener('meowl-toggle', handleToggle as EventListener);
  }, []);

  if (!isDesktop) return null;

  return <MeowlCat enabled={isEnabled} catImage="/meowl/meowl.gif" />;
}