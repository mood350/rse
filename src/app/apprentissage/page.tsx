import type { Metadata } from 'next';
import Link from 'next/link';
import LearnHead from '@/components/LearnHead';
import { SectionProgress } from '@/components/SectionProgress';
import { ALL_ITEMS, countsBySection } from '@/lib/quiz';
import { SECTIONS } from '@/data/sections';

export const metadata: Metadata = {
  title: 'Apprendre et s’entraîner',
  description: 'Un cours par thème, puis des questions classées du plus facile au plus difficile.',
};

export default function LearnPage() {
  const counts = countsBySection();
  return (
    <>
      <LearnHead
        title="Apprendre et s’entraîner"
        lead="Pour chaque thème : lisez le cours, puis testez-vous. Les questions vont du plus facile au plus difficile."
      />
      <section className="section tight">
        <div className="container narrow">
          <ol className="topic-list">
            {SECTIONS.map((s, i) => {
              const ids = ALL_ITEMS.filter((it) => it.section === s.key).map((it) => it.id);
              return (
                <li key={s.key} className="topic">
                  <span className="topic-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="topic-main">
                    <Link href={`/apprentissage/${s.key}`} className="topic-title">
                      {s.title}
                    </Link>
                    <p className="muted">{s.desc}</p>
                    <SectionProgress ids={ids} compact />
                  </div>
                  <div className="topic-actions">
                    <Link className="btn sm" href={`/apprentissage/${s.key}`}>
                      Cours
                    </Link>
                    <Link className="btn sm ghost" href={`/apprentissage/${s.key}/exercices`}>
                      Exercices ({counts[s.key].total})
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="extra-links">
            <Link href="/apprentissage/examen">Examen blanc</Link>
            <Link href="/apprentissage/memo">Fiches mémo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
