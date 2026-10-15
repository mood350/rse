import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import LearnHead from '@/components/LearnHead';
import { ASTUCES_VF, CHIFFRES, MEMOS } from '@/data/memo';

export const metadata: Metadata = {
  title: 'Fiches mémo',
  description: 'Mnémoniques, chiffres pièges et astuces pour retenir l’essentiel de la RSE et du développement durable.',
};

export default function MemoPage() {
  return (
    <>
      <LearnHead
        crumbs={[{ href: '/apprentissage', label: 'Apprendre' }, { label: 'Fiches mémo' }]}
        title="Fiches mémo"
        lead="Les listes, mots-clés et chiffres à connaître par cœur."
      />

      <section className="section tight">
        <div className="container">
          <div className="grid c3">
            {MEMOS.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 70}>
                <article className="memo" style={{ height: '100%' }}>
                  <span className="pill">{m.tag}</span>
                  <h3 style={{ margin: 0 }}>{m.title}</h3>
                  <ul>
                    {m.lines.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                  {m.trick && <div className="trick">{m.trick}</div>}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section sand">
        <div className="container split" style={{ alignItems: 'start' }}>
          <Reveal>
            <span className="eyebrow">Astuce Vrai ou faux</span>
            <h2>Repérer les affirmations fausses</h2>
            <ul className="checks">
              {ASTUCES_VF.map((a) => (
                <li key={a}><span>{a}</span></li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h3>Chiffres pièges</h3>
            <div className="table-wrap">
              <table className="tbl">
                <tbody>
                  {CHIFFRES.map(([a, b]) => (
                    <tr key={a}>
                      <td>{a}</td>
                      <td>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="callout">
            <div>
              <b>Points à vérifier avec les organisateurs</b>
              Quelques réponses du document de cours semblent douteuses : « Limiter les émissions de GES… » noté Faux
              (énoncé probablement tronqué), « Les critères ESG sont un sous-ensemble des ODD » (formulation discutable),
              « ISO 2 600 » (coquille de 26000), « Économie Sociale Solidaire » (au lieu de « et Solidaire »). Apprenez les
              réponses du cours telles quelles pour le concours, mais gardez ces points en tête.
              <div className="mt-s">
                <Link className="btn sm" href="/apprentissage">Retour à l’entraînement →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
