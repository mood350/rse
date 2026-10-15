'use client';

import { useProgress } from '@/lib/progress';

/** Barre de progression personnelle pour une liste d'identifiants de questions. */
export function SectionProgress({ ids, compact }: { ids: string[]; compact?: boolean }) {
  const { map, ready } = useProgress();
  const ok = ids.filter((id) => map[id] === 'ok').length;
  const ko = ids.filter((id) => map[id] === 'ko').length;
  const pct = ids.length ? Math.round((ok / ids.length) * 100) : 0;
  if (compact) {
    return (
      <p className="mini-progress">
        {ready && ok > 0 ? `${ok} sur ${ids.length} maîtrisées` : '\u00a0'}
      </p>
    );
  }
  return (
    <div>
      <div className="meter" aria-hidden="true">
        <i style={{ width: ready ? `${pct}%` : '0%' }} />
      </div>
      <div className="legend" style={{ marginTop: 8, justifyContent: 'space-between' }}>
        <span style={{ ['--c' as string]: '#3aa66f' }}>{ready ? ok : 0} maîtrisées</span>
        <span style={{ ['--c' as string]: '#d2402e' }}>{ready ? ko : 0} à revoir</span>
      </div>
    </div>
  );
}

export function ResetProgress() {
  const { reset, map, ready } = useProgress();
  const n = Object.keys(map).length;
  return (
    <div className="center" style={{ marginTop: 40 }}>
      <p className="muted" style={{ fontSize: '0.92rem' }}>
        {ready ? `${n} question${n > 1 ? 's' : ''} déjà travaillée${n > 1 ? 's' : ''} sur cet appareil.` : ' '}
      </p>
      {n > 0 && (
        <button
          className="btn ghost sm"
          onClick={() => {
            if (window.confirm('Effacer toute votre progression sur cet appareil ?')) reset();
          }}
        >
          Réinitialiser ma progression
        </button>
      )}
    </div>
  );
}

export function GlobalProgress({ total }: { total: number }) {
  const { map, ready } = useProgress();
  const ok = Object.values(map).filter((v) => v === 'ok').length;
  const pct = total ? Math.round((ok / total) * 100) : 0;
  return (
    <div style={{ maxWidth: 420, marginTop: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#cfe6d9', marginBottom: 8 }}>
        <span>Ma progression</span>
        <span>{ready ? ok : 0} / {total} maîtrisées</span>
      </div>
      <div className="meter" style={{ background: 'rgba(255,255,255,0.2)' }}>
        <i style={{ width: ready ? `${pct}%` : '0%' }} />
      </div>
    </div>
  );
}
