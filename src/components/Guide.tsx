'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { STEPS, isStepPage, stepIndex } from '@/data/parcours';
import { markVisited, useVisited } from '@/lib/visited';

/** Enregistre la visite et affiche « Étape X sur 5 » sous le menu. */
export function StepBar() {
  const pathname = usePathname() || '/';
  const i = stepIndex(pathname);
  const { visited } = useVisited();

  useEffect(() => {
    if (i >= 0) markVisited(STEPS[i].href);
  }, [i]);

  if (i < 0 || !isStepPage(pathname)) return null;

  return (
    <div className="stepbar" role="navigation" aria-label="Votre parcours">
      <div className="container">
        <p className="stepbar-mobile">
          Étape {i + 1} sur {STEPS.length} · <b>{STEPS[i].title}</b>
        </p>
        <ol className="stepbar-list">
          {STEPS.map((s, k) => {
            const done = visited.includes(s.href) && k !== i;
            return (
              <li key={s.href} className={k === i ? 'current' : done ? 'done' : ''}>
                <Link href={s.href} aria-current={k === i ? 'step' : undefined}>
                  <span className="dot">{done ? '✓' : k + 1}</span>
                  <span className="lbl">{s.title}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="stepbar-track" aria-hidden="true">
        <i style={{ width: `${((i + 1) / STEPS.length) * 100}%` }} />
      </div>
    </div>
  );
}

/** En bas de page : où aller ensuite. */
export function NextStep() {
  const pathname = usePathname() || '/';
  const i = stepIndex(pathname);
  if (i < 0 || !isStepPage(pathname)) return null;
  const prev = i > 0 ? STEPS[i - 1] : null;
  const next = i < STEPS.length - 1 ? STEPS[i + 1] : null;

  return (
    <section className="nextstep">
      <div className="container">
        {next ? (
          <div className="nextstep-card">
            <div>
              <span className="nextstep-kicker">Étape suivante</span>
              <h2>{next.title}</h2>
              <p>{next.text}</p>
            </div>
            <Link className="btn sun" href={next.href}>
              Continuer
            </Link>
          </div>
        ) : (
          <div className="nextstep-card">
            <div>
              <span className="nextstep-kicker">Dernière étape</span>
              <h2>Choisissez un thème et lancez-vous</h2>
              <p>Lisez le cours, puis répondez aux questions. Vos résultats sont gardés sur cet appareil.</p>
            </div>
          </div>
        )}
        {prev && (
          <Link className="nextstep-prev" href={prev.href}>
            ← Revenir : {prev.title}
          </Link>
        )}
      </div>
    </section>
  );
}
