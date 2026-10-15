import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Practice from '@/components/Practice';
import LearnHead from '@/components/LearnHead';
import { itemsOfSection } from '@/lib/quiz';
import { SECTIONS, SECTION_BY_KEY } from '@/data/sections';

type Params = { section: string };

export function generateStaticParams() {
  return SECTIONS.map((s) => ({ section: s.key }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { section } = await params;
  const s = SECTION_BY_KEY[section];
  return { title: s ? `Exercices : ${s.title}` : 'Exercices' };
}

export default async function ExercisesPage({ params }: { params: Promise<Params> }) {
  const { section } = await params;
  const s = SECTION_BY_KEY[section];
  if (!s) notFound();

  return (
    <>
      <LearnHead
        crumbs={[
          { href: '/apprentissage', label: 'Apprendre' },
          { href: `/apprentissage/${s.key}`, label: s.short },
          { label: 'Exercices' },
        ]}
        title={s.title}
      />
      <section className="section tight">
        <div className="container">
          <Practice
            key={section}
            items={itemsOfSection(section)}
            backHref={`/apprentissage/${s.key}`}
            backLabel="Retour au cours"
          />
        </div>
      </section>
    </>
  );
}
