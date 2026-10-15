'use client';

import { useCallback, useEffect, useState } from 'react';

export type Result = 'ok' | 'ko';
export type ProgressMap = Record<string, Result>;

const KEY = 'miabo:progress:v1';
const EVT = 'miabo:progress';

function read(): ProgressMap {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    return {};
  }
}

function write(map: ProgressMap) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(map));
  } catch {
    /* stockage indisponible : on continue sans sauvegarde */
  }
  try {
    window.dispatchEvent(new Event(EVT));
  } catch {
    /* ignore */
  }
}

export function record(id: string, result: Result) {
  const map = read();
  map[id] = result;
  write(map);
}

export function resetProgress() {
  write({});
}

/** Progression de l'utilisateur, stockée uniquement dans son navigateur. */
export function useProgress() {
  const [map, setMap] = useState<ProgressMap>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => setMap(read());
    sync();
    setReady(true);
    window.addEventListener(EVT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(EVT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const reset = useCallback(() => resetProgress(), []);
  return { map, ready, reset };
}
