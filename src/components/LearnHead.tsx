import Link from 'next/link';
import type { ReactNode } from 'react';

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
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </header>
  );
}
