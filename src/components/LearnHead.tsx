import Link from 'next/link';
import type { ReactNode } from 'react';
import { HeroFx, SplitTitle } from './HeroFx';

export default function LearnHead({
  crumbs,
  title,
  lead,
  children,
}: {
  crumbs?: { href?: string; label: string }[];
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="simple-head">
      <HeroFx />
      <div className="container narrow">
        {crumbs && (
          <nav className="crumbs" aria-label="Fil d’Ariane">
            {crumbs.map((c, i) => (
              <span key={c.label}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
                {i < crumbs.length - 1 && ' / '}
              </span>
            ))}
          </nav>
        )}
        <SplitTitle text={title} />
        {lead && <p className="lead hero-lead">{lead}</p>}
        {children}
      </div>
    </header>
  );
}
