import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AnswerText from '@/components/AnswerText';
import LearnHead from '@/components/LearnHead';
import { courseOfSection, countsBySection } from '@/lib/quiz';
import { LEVELS, SECTIONS, SECTION_BY_KEY } from '@/data/sections';
import { MEMOS } from '@/data/memo';

type Params = { section: string };

const MEMO_SECTION: Record<string, string> = {
  Avantages: 'avantages',
  Risques: 'crise',
  'ISO 26000': 'normes',
  Normes: 'normes',
  Labels: 'normes',
  'Économie circulaire': 'circulaire',
  DD: 'dd',
  ODD: 'dd',
  ESG: 'esg',
  Reporting: 'esg',
  Climat: 'climat',
};

const PART_TITLE: Record<number, string> = {
  1: 'Les bases',
  2: 'Pour aller plus loin',
  3: 'Pour approfondir',
};

export function generateStaticParams() {
  return SECTIONS.map((s) => ({ section: s.key }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { section } = await params;
  const s = SECTION_BY_KEY[section];
  return { title: s ? `Cours : ${s.title}` : 'Cours' };
}

export default async function CoursePage({ params }: { params: Promise<Params> }) {
  const { section } = await params;
  const s = SECTION_BY_KEY[section];
  if (!s) notFound();

  const cards = courseOfSection(section);
  const memos = MEMOS.filter((m) => MEMO_SECTION[m.tag] === section);
  const total = countsBySection()[section].total;
  const idx = SECTIONS.findIndex((x) => x.key === section);
  const prev = idx > 0 ? SECTIONS[idx - 1] : null;
  const nextS = idx < SECTIONS.length - 1 ? SECTIONS[idx + 1] : null;
  const parts = [1, 2, 3]
    .map((l) => ({ level: l, items: cards.filter((c) => c.level === l) }))
    .filter((p) => p.items.length > 0);

  return (
    <>
      <LearnHead
        crumbs={[{ href: '/', label: 'Accueil' }, { href: '/apprentissage', label: 'Apprendre' }, { label: s.short }]}
        title={s.title}
        lead={s.desc}
      >
        <Link className="btn sun" href={`/apprentissage/${s.key}/exercices`}>
          S’entraîner ({total} questions)
        </Link>
      </LearnHead>

      <section className="section tight">
        <div className="container narrow prose">
          {memos.map((m) => (
            <aside key={m.title} className="note">
              <h3>{m.title}</h3>
              <ul>
                {m.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              {m.trick && <p className="muted">{m.trick}</p>}
            </aside>
          ))}

          {parts.map((p, i) => (
            <details key={p.level} className="part" open={i === 0}>
              <summary>
                <span>{PART_TITLE[p.level]}</span>
                <small>{p.items.length} points</small>
              </summary>
              <dl>
                {p.items.map((c) => (
                  <div key={c.id} className="point">
                    <dt>{c.q}</dt>
                    <dd>
                      <AnswerText text={c.a} />
                    </dd>
                  </div>
                ))}
              </dl>
            </details>
          ))}

          {parts.length === 0 && <p className="muted">Le cours de ce thème se trouve dans les exercices.</p>}

          <div className="end-cta">
            <Link className="btn sun" href={`/apprentissage/${s.key}/exercices`}>
              S’entraîner sur ce thème
            </Link>
          </div>

          <div className="pager">
            {prev ? <Link href={`/apprentissage/${prev.key}`}>← {prev.short}</Link> : <span />}
            {nextS && <Link href={`/apprentissage/${nextS.key}`}>{nextS.short} →</Link>}
          </div>
        </div>
      </section>
    </>
  );
}
