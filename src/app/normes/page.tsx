import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import NormesExplorer from '@/components/NormesExplorer';

export const metadata: Metadata = {
  title: 'Normes, labels et cadres en vigueur',
  description:
    'ISO 26000, ISO 14001, ISO 50001, SA8000, GRI, Global Compact, Accord de Paris, FSC, B Corp : les repères de la RSE.',
};

export default function NormesPage() {
  return (
    <>
      <PageHero
        eyebrow="Normes en vigueur"
        crumb="Normes"
        photo="solarRural"
        title="Normes, labels et cadres : les repères de la RSE"
        lead="Lignes directrices, certifications, standards de reporting et accords internationaux : à quoi servent-ils et comment les retenir ?"
      />

      <section className="section">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">À quoi servent les normes ?</span>
            <h2>Structurer, valider, crédibiliser</h2>
            <p className="lead">
              Les labels et normes structurent la démarche, valident les engagements et crédibilisent l’entreprise auprès des
              parties prenantes. Intégrer la normalisation permet aussi d’anticiper les exigences du marché, d’améliorer la
              performance et de gagner la confiance et des parts de marché.
            </p>
          </Reveal>
          <NormesExplorer />
        </div>
      </section>

      {/* ISO 26000 */}
      <section className="section sand">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">Focus ISO 26000</span>
            <h2>7 questions centrales, 7 principes</h2>
            <p className="lead">
              Les <b>questions centrales</b> définissent le périmètre d’action, le contenu technique. Les <b>principes</b>{' '}
              définissent l’attitude à adopter, la posture éthique, le cadre de pensée.
            </p>
          </Reveal>
          <div className="grid c2">
            <Reveal>
              <div className="card" style={{ height: '100%' }}>
                <h3>Les 7 questions centrales</h3>
                <ol style={{ paddingLeft: '1.2em', margin: 0 }}>
                  {['Gouvernance de l’organisation', 'Droits de l’homme', 'Relations et conditions de travail', 'Environnement', 'Loyauté des pratiques', 'Questions relatives aux consommateurs', 'Communautés et développement local'].map((t) => (
                    <li key={t} style={{ marginBottom: 6 }}>{t}</li>
                  ))}
                </ol>
                <p className="muted" style={{ marginTop: 14, fontSize: '0.92rem' }}>
                  « Gérer Des Travailleurs Est Le Cœur de la Communauté ».
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card" style={{ height: '100%' }}>
                <h3>Les 7 principes</h3>
                <ol style={{ paddingLeft: '1.2em', margin: 0 }}>
                  {['Redevabilité', 'Transparence', 'Comportement éthique', 'Prise en compte des intérêts des parties prenantes', 'Respect du principe de légalité', 'Respect des normes internationales de comportement', 'Respect des droits de l’Homme'].map((t) => (
                    <li key={t} style={{ marginBottom: 6 }}>{t}</li>
                  ))}
                </ol>
                <p className="muted" style={{ marginTop: 14, fontSize: '0.92rem' }}>
                  Dans votre cours, seuls les deux premiers et les deux derniers sont détaillés.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SA8000 */}
      <section className="section">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">Focus SA8000</span>
            <h2>Neuf domaines pour des conditions de travail dignes</h2>
          </Reveal>
          <Reveal>
            <div className="table-wrap">
              <table className="tbl">
                <thead>
                  <tr><th>Domaine</th><th>Exigence</th></tr>
                </thead>
                <tbody>
                  <tr><td>Travail des enfants</td><td>Interdit ; programmes de réhabilitation si nécessaire.</td></tr>
                  <tr><td>Travail forcé</td><td>Interdit (forcé ou obligatoire).</td></tr>
                  <tr><td>Santé et sécurité</td><td>Environnement de travail sûr et sain.</td></tr>
                  <tr><td>Liberté d’association</td><td>Droit de s’organiser et de négocier collectivement.</td></tr>
                  <tr><td>Discrimination</td><td>Toute forme interdite (sexe, race, religion, orientation).</td></tr>
                  <tr><td>Pratiques disciplinaires</td><td>Traitement respectueux, sans abus physique ou verbal.</td></tr>
                  <tr><td>Temps de travail</td><td>Horaires légaux, heures supplémentaires limitées.</td></tr>
                  <tr><td>Rémunération</td><td>Salaire décent, au moins égal au minimum légal.</td></tr>
                  <tr><td>Système de gestion</td><td>Système garantissant la norme : audits et mécanismes de plainte.</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* climat */}
      <section className="section forest">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">Cadre climatique</span>
            <h2>Accord de Paris, COP et GIEC</h2>
          </Reveal>
          <div className="grid c3">
            {[
              ['12 décembre 2015', 'Adoption de l’Accord de Paris, à la COP21 : limiter le réchauffement bien en dessous de 2 °C, idéalement 1,5 °C.'],
              ['COP', 'Conférence des Parties : réunion annuelle des pays signataires de la Convention-cadre des Nations Unies sur les changements climatiques.'],
              ['GIEC · 6ᵉ rapport', '1,5 °C ; −43 % de CO₂ d’ici 2030 par rapport à 2019 ; neutralité carbone vers 2050.'],
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

      <section className="section tight sand">
        <div className="container">
          <div className="callout">
            <div>
              <b>Retenir les numéros</b>
              9001 = qualité · 14001 = environnement · 26000 = RSE · 50001 = énergie · 22000 = aliments · 20400 = achats
              responsables · SA8000 = conditions de travail.
              <div className="mt-s" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link className="btn sm" href="/apprentissage/normes">Quiz normes &amp; labels →</Link>
                <Link className="btn sm ghost" href="/apprentissage/memo">Fiches mémo</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
