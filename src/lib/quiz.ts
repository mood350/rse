import raw from '@/data/questions.json';
import { QCM_LIST } from '@/data/qcm';
import type { QCM } from '@/data/qcm';
import { SECTIONS } from '@/data/sections';
import type { SectionKey } from '@/data/sections';

export type VF = {
  id: string;
  type: 'vf';
  section: SectionKey;
  level: 1 | 2 | 3;
  q: string;
  truth: boolean;
  score: number;
};

export type Card = {
  id: string;
  type: 'open';
  section: SectionKey;
  level: 1 | 2 | 3;
  q: string;
  a: string;
  score: number;
};

export type Item = QCM | VF | Card;
export type ItemType = Item['type'];

type RawQ = {
  id: number;
  type: 'vf' | 'open';
  section: string;
  level: number;
  score: number;
  q: string;
  a: string;
};

const validSections = new Set<string>(SECTIONS.map((s) => s.key));

const fromRaw: (VF | Card)[] = (raw as RawQ[])
  .filter((r) => validSections.has(r.section))
  .map((r) => {
    const level = (r.level === 1 || r.level === 2 || r.level === 3 ? r.level : 2) as 1 | 2 | 3;
    if (r.type === 'vf') {
      return {
        id: `vf-${r.id}`,
        type: 'vf' as const,
        section: r.section as SectionKey,
        level,
        q: r.q,
        truth: r.a.trim().toLowerCase().startsWith('vrai'),
        score: r.score,
      };
    }
    return {
      id: `ca-${r.id}`,
      type: 'open' as const,
      section: r.section as SectionKey,
      level,
      q: r.q,
      a: r.a,
      score: r.score,
    };
  });

const TYPE_ORDER: Record<ItemType, number> = { qcm: 0, vf: 1, open: 2 };

function scoreOf(i: Item): number {
  return i.type === 'qcm' ? i.q.length + i.options.join('').length / 6 : i.score;
}

/** Tri pédagogique : niveau (facile → difficile), puis type, puis longueur/complexité. */
export function progressive(items: Item[]): Item[] {
  return [...items].sort(
    (a, b) =>
      a.level - b.level ||
      TYPE_ORDER[a.type] - TYPE_ORDER[b.type] ||
      scoreOf(a) - scoreOf(b),
  );
}

export const ALL_ITEMS: Item[] = progressive([...QCM_LIST, ...fromRaw]);

export function itemsOfSection(key: string): Item[] {
  return ALL_ITEMS.filter((i) => i.section === key);
}

export function countsBySection() {
  const out: Record<string, { total: number; l1: number; l2: number; l3: number; qcm: number; vf: number; open: number }> = {};
  for (const s of SECTIONS) {
    out[s.key] = { total: 0, l1: 0, l2: 0, l3: 0, qcm: 0, vf: 0, open: 0 };
  }
  for (const i of ALL_ITEMS) {
    const c = out[i.section];
    if (!c) continue;
    c.total++;
    if (i.level === 1) c.l1++;
    else if (i.level === 2) c.l2++;
    else c.l3++;
    c[i.type]++;
  }
  return out;
}

/** Mélange déterministe (graine) pour l'examen blanc. */
export function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed >>> 0 || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Points de cours d'une section (cartes), du plus simple au plus avancé. */
export function courseOfSection(section: string) {
  return ALL_ITEMS.filter((i): i is Card => i.type === 'open' && i.section === section);
}
