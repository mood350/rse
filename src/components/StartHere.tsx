'use client';

import Link from 'next/link';
import { STEPS } from '@/data/parcours';
import { useVisited } from '@/lib/visited';

export default function StartHere() {
  const { visited, ready } = useVisited();
  const nextIdx = ready ? STEPS.findIndex((s) => !visited.includes(s.href)) : 0;
  const started = ready && visited.length > 0;
  const allDone = ready && nextIdx === -1;

  return (
    <div>
      <ol className="start-list">
        {STEPS.map((s, k) => {
          const done = ready && visited.includes(s.href);
          const isNext = k === nextIdx;
          return (
            <li key={s.href} className={`start-item${done ? ' done' : ''}${isNext ? ' next' : ''}`}>
              <span className="dot">{done ? '✓' : k + 1}</span>
              <Link href={s.href} className="start-main">
                <b>{s.title}</b>
                <span>{s.text}</span>
              </Link>
              <span className="start-state">{done ? 'Déjà vu' : isNext ? (started ? 'Prochaine étape' : 'Commencez ici') : ''}</span>
            </li>
          );
        })}
      </ol>
      <div className="start-cta">
        <Link className="btn sun" href={allDone ? '/apprentissage' : STEPS[Math.max(nextIdx, 0)].href}>
          {allDone ? 'Aller aux exercices' : started ? 'Continuer mon parcours' : 'Commencer'}
        </Link>
      </div>
    </div>
  );
}
