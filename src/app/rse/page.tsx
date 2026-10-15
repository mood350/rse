import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'La RSE',
  description: 'Qu’est-ce que la RSE ? Définition, différences avec le développement durable et l’ESG, gouvernance, avantages et risques.',
};

export default function RSEPage() {
  return (
    <>
      <PageHero
        eyebrow="Responsabilité sociétale"
        crumb="RSE"
        photo="team"
        title="La RSE : la contribution des entreprises au développement durable"
        lead="Une démarche volontaire qui intègre les enjeux sociaux, environnementaux et économiques dans la stratégie et les relations avec les parties prenantes."
      />

      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Définition</span>
            <h2>C’est quoi, la RSE ?</h2>
            <p className="lead">
              La Responsabilité Sociétale des Entreprises (RSE) est la <b>contribution volontaire</b> des entreprises aux
              enjeux du développement durable. Son but : avoir un impact positif sur la société tout en restant
              économiquement viable.
            </p>
            <ul className="checks">
              <li><span>Elle n’est <b>pas obligatoire</b> : c’est une intégration volontaire, même si les réglementations se renforcent.</span></li>
              <li><span>Elle s’applique à <b>toutes les entreprises</b>, PME comprises, quels que soient la taille, le secteur et le statut.</span></li>
              <li><span>On parle de <b>RSO</b> quand elle s’étend à toutes les organisations (associations, administrations…).</span></li>
              <li><span>Elle est portée par la direction, avec une fonction rattachée à la DRH, à la communication ou à la direction générale.</span></li>
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="frame-wrap">
              <figure className="frame wide" style={{ margin: 0 }}>
                <Photo name="team2" width={1100} />
                <figcaption>La RSE se construit en équipe</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* comparaison */}
      <section className="section sand">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">Ne pas confondre</span>
            <h2>RSE, développement durable, ESG : qui fait quoi ?</h2>
          </Reveal>
          <Reveal>
            <div className="table-wrap">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Notion</th>
                    <th>Ce que c’est</th>
                    <th>À quelle échelle ?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Développement durable</td>
                    <td>La finalité globale : un avenir viable pour tous.</td>
                    <td>Société, États, planète</td>
                  </tr>
                  <tr>
                    <td>RSE</td>
                    <td>Le moyen des entreprises pour y contribuer : une démarche volontaire.</td>
                    <td>Actions de l’entreprise</td>
                  </tr>
                  <tr>
                    <td>ESG</td>
                    <td>Le cadre d’évaluation des investisseurs : critères Environnementaux, Sociaux et de Gouvernance.</td>
                    <td>Analyse financière et ISR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ESG */}
      <section className="section">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">Le prisme des investisseurs</span>
            <h2>L’ESG : trois lettres, quatre critères chacune</h2>
          </Reveal>
          <div className="grid c3">
            {[
              ['E', 'Environnement', '#1f8a5b', ['Émissions de gaz à effet de serre', 'Utilisation des ressources', 'Pollution et déchets', 'Biodiversité']],
              ['S', 'Social', '#c8512b', ['Conditions de travail', 'Relations avec les parties prenantes', 'Diversité et inclusion', 'Impact social']],
              ['G', 'Gouvernance', '#19486a', ['Structure du conseil d’administration', 'Transparence et divulgation', 'Responsabilité et éthique', 'Systèmes de contrôle interne']],
            ].map(([l, t, c, items], k) => (
              <Reveal key={t as string} delay={k * 80}>
                <div className="card" style={{ height: '100%' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.2rem', color: c as string, lineHeight: 1, fontWeight: 700 }}>{l}</div>
                  <h3>{t}</h3>
                  <ul className="checks" style={{ marginBottom: 0 }}>
                    {(items as string[]).map((i) => (
                      <li key={i}><span>{i}</span></li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* gouvernance */}
      <section className="section forest">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">Gouvernance</span>
            <h2>Qui pilote la RSE dans l’entreprise ?</h2>
            <p className="muted" style={{ fontSize: '1.1rem' }}>
              La gouvernance transforme les engagements en actions crédibles, cohérentes et durables. Confier la RSE au seul
              service communication ou RH est voué à l’échec : sans comité de direction, sans gouvernance claire ni KPI, la
              démarche reste décorrélée des vrais enjeux.
            </p>
          </Reveal>
          <div className="grid c3">
            {[
              ['Conseil d’administration', 'Garant de l’orientation stratégique, de la gestion des risques et du contrôle de la performance.'],
              ['Comité RSE', 'Pilotage, concertation et contrôle. Point de convergence entre directions, garant de la performance extra-financière, « ambassadeur » de la RSE.'],
              ['Ressources humaines', 'Traduisent les engagements en actions sociales : diversité, conditions de travail, formation, dialogue social, recrutement responsable.'],
            ].map(([t, d], k) => (
              <Reveal key={t} delay={k * 80}>
                <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 20, padding: 28, height: '100%' }}>
                  <h3 style={{ color: '#f4b400' }}>{t}</h3>
                  <p style={{ margin: 0, color: '#d6ebdf' }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* parties prenantes */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Parties prenantes</span>
            <h2>Écouter ceux que l’entreprise touche</h2>
            <p className="lead">
              Une entreprise responsable consulte et implique les personnes concernées par ses décisions : enquêtes,
              comités de parties prenantes, co-construction.
            </p>
            <div className="grid c2" style={{ gap: 16 }}>
              <div className="card">
                <h3>Internes</h3>
                <p className="muted" style={{ margin: 0 }}>Salariés, syndicats, direction.</p>
              </div>
              <div className="card">
                <h3>Externes</h3>
                <p className="muted" style={{ margin: 0 }}>Clients, ONG, collectivités, investisseurs, fournisseurs.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="frame-wrap alt">
              <figure className="frame wide" style={{ margin: 0 }}>
                <Photo name="group" width={1100} />
                <figcaption>Dialogue et coopération</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* avantages */}
      <section className="section sand">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">Les bénéfices</span>
            <h2>Pourquoi la RSE est un atout (CRITIC)</h2>
          </Reveal>
          <div className="grid c3">
            {[
              ['Coûts réduits', 'Efficacité énergétique, éco-conception, réduction des déchets et du gaspillage.'],
              ['Réputation', 'Image humaine et environnementale, différenciation, confiance, bénéfice du doute en cas de crise.'],
              ['Investisseurs', 'Accès facilité aux fonds éthiques et ESG, à des financements responsables avantageux.'],
              ['Talents', 'Attractivité sur le marché de l’emploi, moins de turnover et d’absentéisme, salariés engagés.'],
              ['Innovation', 'Les contraintes sociétales deviennent des opportunités : produits durables, processus efficaces.'],
              ['Clients fidèles', 'Confiance, fidélité, engagement, et comportements d’achat favorables.'],
            ].map(([t, d], k) => (
              <Reveal key={t} delay={(k % 3) * 70}>
                <div className="card" style={{ height: '100%' }}>
                  <h3>{t}</h3>
                  <p className="muted" style={{ margin: 0 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* risques */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="frame-wrap">
              <figure className="frame wide" style={{ margin: 0 }}>
                <Photo name="waste" width={1100} />
                <figcaption>Gérer les déchets, un enjeu concret</figcaption>
              </figure>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">Attention aux pièges</span>
            <h2>Greenwashing, social washing et RSE de façade</h2>
            <p className="lead">
              Une RSE mal faite fait perdre de la <b>confiance</b>, de l’<b>argent</b> et peut poser un problème de{' '}
              <b>légalité</b>.
            </p>
            <ul className="checks">
              <li><span><b>Greenwashing</b> : communication trompeuse pour se donner une image écologique sans actions réelles.</span></li>
              <li><span><b>Social washing</b> : l’équivalent sur les enjeux sociaux.</span></li>
              <li><span><b>Effet boomerang</b> : une entreprise qui a trop communiqué sur sa vertu est jugée plus durement en cas de scandale.</span></li>
              <li><span>La clé : <b>authenticité et transparence</b>, des actions réelles et mesurées.</span></li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section tight sand">
        <div className="container">
          <div className="callout">
            <div>
              <b>Testez vos connaissances</b>
              Questions sur les fondamentaux de la RSE, la gouvernance, l’ESG et les risques.
              <div className="mt-s" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link className="btn sm" href="/apprentissage/rse">RSE : fondamentaux →</Link>
                <Link className="btn sm ghost" href="/apprentissage/esg">ESG &amp; reporting →</Link>
                <Link className="btn sm ghost" href="/apprentissage/crise">Crise &amp; risques →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
