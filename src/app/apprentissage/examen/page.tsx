import type { Metadata } from 'next';
import Practice from '@/components/Practice';
import LearnHead from '@/components/LearnHead';
import { ALL_ITEMS } from '@/lib/quiz';

export const metadata: Metadata = {
  title: 'Examen blanc',
  description: '30 questions chronométrées mêlant les trois niveaux, avec correction à la fin.',
};

export default function ExamPage() {
  const items = ALL_ITEMS.filter((i) => i.type !== 'open');
  return (
    <>
      <LearnHead
        crumbs={[{ href: '/apprentissage', label: 'Apprendre' }, { label: 'Examen blanc' }]}
        title="Examen blanc"
      />
      <section className="section tight">
        <div className="container">
          <Practice items={items} exam={{ minutes: 20, count: 30 }} backHref="/apprentissage" backLabel="Retour" />
        </div>
      </section>
    </>
  );
}
