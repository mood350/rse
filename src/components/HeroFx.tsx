import type { CSSProperties } from 'react';

/** Décor animé des bandeaux : halos lumineux, tracé et feuilles. Purement décoratif. */
export function HeroFx() {
  return (
    <>
      <div className="hero-orbs" aria-hidden="true"><i /><i /><i /></div>
      <svg className="hero-leaves" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path className="hero-trace" d="M-20 640C180 560 260 700 460 620S760 380 920 430 1140 300 1240 240" />
        {[[180, 160, 0], [1010, 140, 1], [880, 640, 2], [90, 520, 3]].map(([x, y, k]) => (
          <g key={k} className="leaf" style={{ '--k': k } as CSSProperties} transform={`translate(${x} ${y})`}>
            <path d="M0 0C18-30 52-34 70-30 66-10 46 22 0 0Z" />
            <path d="M0 0 52-24" />
          </g>
        ))}
      </svg>
    </>
  );
}

/** Titre dont les mots montent un à un ; `accent` = dernier mot souligné en jaune. */
export function SplitTitle({ text, accent }: { text: string; accent?: string }) {
  const words = text.split(' ');
  return (
    <h1 className="words">
      {words.map((w, i) => (
        <span key={i}>
          <span className="w" style={{ '--i': i } as CSSProperties}><span>{w}</span></span>{' '}
        </span>
      ))}
      {accent && (
        <span className="w" style={{ '--i': words.length } as CSSProperties}>
          <span className="u">
            {accent}
            <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true"><path d="M4 14C80 4 200 2 296 10" /></svg>
          </span>
        </span>
      )}
    </h1>
  );
}
