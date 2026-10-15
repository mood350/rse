'use client';

import { useCallback, useEffect, useState } from 'react';

const KEY = 'miabo:visited:v1';
const EVT = 'miabo:visited';

function read(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

export function markVisited(href: string) {
  try {
    const cur = read();
    if (cur.includes(href)) return;
    localStorage.setItem(KEY, JSON.stringify([...cur, href]));
    window.dispatchEvent(new Event(EVT));
  } catch {
    /* stockage indisponible : on ignore */
  }
}

export function useVisited() {
  const [visited, setVisited] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const sync = useCallback(() => setVisited(read()), []);
  useEffect(() => {
    sync();
    setReady(true);
    window.addEventListener(EVT, sync);
    return () => window.removeEventListener(EVT, sync);
  }, [sync]);
  return { visited, ready };
}
