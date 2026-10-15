import type { Metadata } from 'next';
import Link from 'next/link';
import LearnHead from '@/components/LearnHead';

export const metadata: Metadata = {
  title: 'Comprendre',
  description: 'Les notions de base : développement durable, RSE, normes et glossaire.',
};

const ITEMS = [
  { href: '/developpement-durable', n: '1', t: 'Le développement durable', d: 'C’est quoi ? Répondre aux besoins d’aujourd’hui sans priver les générations futures.' },
  { href: '/rse', n: '2', t: 'La RSE', d: 'La responsabilité sociétale des entreprises : ce qu’une entreprise fait pour la société et l’environnement.' },
  { href: '/normes', n: '3', t: 'Les normes et labels', d: 'Les règles et certifications qui prouvent qu’une entreprise est sérieuse (ISO, B Corp…).' },
  { href: '/glossaire', n: '', t: 'Le glossaire', d: 'Un sigle vous échappe ? Retrouvez sa signification en une recherche.' },
];

export default function Comprendre() {
  return (
    <>
      <LearnHead
        title="Comprendre"
        lead="Commencez par ici. Suivez l’ordre 1, 2, 3 : chaque page prend quelques minutes à lire."
      />
      <section className="section tight">
        <div className="container narrow">
          <ul className="topic-list">
            {ITEMS.map((it) => (
              <li key={it.href} className="topic">
                <span className="topic-num">{it.n}</span>
                <div className="topic-main">
                  <Link href={it.href} className="topic-title">{it.t}</Link>
                  <p className="muted">{it.d}</p>
                </div>
                <div className="topic-actions">
                  <Link className="btn sm" href={it.href}>Lire</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
