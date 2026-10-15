import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import Checklist from '@/components/Checklist';

export const metadata: Metadata = {
  title: 'Passer à l’action',
  description: 'Comment mettre en place une démarche RSE dans votre entreprise : étapes, outils, financements, conditions de succès.',
};

export default function ActionPage() {
  return (
    <>
      <PageHero
        eyebrow="Mise en œuvre"
        crumb="Passer à l’action"
        photo="hero"
        title="Comment intégrer le développement durable dans votre entreprise"
        lead="Une démarche en 6 étapes, des outils accessibles aux PME, des financements responsables et une checklist pour avancer."
      />

      {/* 6 étapes */}
      <section className="section">
        <div className="container split" style={{ alignItems: 'start' }}>
          <Reveal>
            <span className="eyebrow">La méthode</span>
            <h2>Les 6 étapes d’une démarche RSE</h2>
            <p className="lead">
              Une fois les priorités identifiées, on fixe des objectifs, des actions et des indicateurs simples, puis on rédige
              une charte RSE ou un plan d’action.
            </p>
            <div className="frame-wrap" style={{ marginTop: 32 }}>
              <figure className="frame wide" style={{ margin: 0 }}>
                <Photo name="tea" width={1000} />
                <figcaption>Commencer par l’existant</figcaption>
              </figure>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ol className="steps">
              <li>
                <div>
                  <h3>Comprendre le contexte</h3>
                  <p>Attentes des clients et investisseurs, réglementations, risques et opportunités de votre secteur.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Faire l’état des lieux</h3>
                  <p>Enjeux prioritaires, parties prenantes, indicateurs, actions déjà en place, opportunités économiques.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Définir la stratégie</h3>
                  <p>Objectifs, actions et indicateurs simples, puis charte RSE ou plan d’action.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Motiver et former</h3>
                  <p>Impliquer les collaborateurs et former tout le personnel.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Communiquer</h3>
                  <p>De manière sincère et transparente, pour éviter le greenwashing.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Mesurer et partager</h3>
                  <p>Indicateurs de pilotage, bilans et audits périodiques, rapport RSE transparent.</p>
                </div>
              </li>
            </ol>
          </Reveal>
        </div>
      </section>

      {/* PME */}
      <section className="section sand">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">PME, TPE et start-up</span>
            <h2>Trois conditions de succès dans une petite structure</h2>
          </Reveal>
          <div className="grid c3">
            {[
              ['Simplicité', 'Peu d’actions, mais concrètes : s’appuyer sur l’existant et choisir des priorités réalistes.'],
              ['Pertinence locale', 'Répondre à des besoins du territoire et s’engager auprès des habitants : un avantage commercial, managérial et relationnel.'],
              ['Authenticité', 'Impliquer les collaborateurs et communiquer sans exagérer : la sincérité est indispensable.'],
            ].map(([t, d], k) => (
              <Reveal key={t} delay={k * 80}>
                <div className="card" style={{ height: '100%' }}>
                  <h3>{t}</h3>
                  <p className="muted" style={{ margin: 0 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="section">
        <div className="container split" style={{ alignItems: 'start' }}>
          <Reveal>
            <span className="eyebrow">Votre feuille de route</span>
            <h2>Cochez vos avancées</h2>
            <p className="lead">
              Une checklist interactive pour suivre votre démarche. Elle se souvient de votre progression sur cet appareil.
            </p>
            <div className="callout">
              <div>
                <b>Combien ça coûte ?</b>
                Le coût dépend de la taille, du secteur, de l’ambition et de la maturité de l’entreprise. Il faut l’aborder
                comme un investissement stratégique à moyen et long terme, compensé par les gains futurs.
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Checklist />
          </Reveal>
        </div>
      </section>

      {/* Outils */}
      <section className="section forest">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">Les bons outils</span>
            <h2>Piloter, mesurer, évaluer</h2>
            <p className="muted" style={{ fontSize: '1.1rem' }}>
              Logiciels de pilotage, outils de reporting, mesure d’empreinte, veille réglementaire, évaluation des
              fournisseurs : le numérique facilite la démarche.
            </p>
          </Reveal>
          <div className="grid c3">
            {[
              ['Zei', 'Plateforme d’autoévaluation et de progression RSE pour PME, avec une interface transparente pour les parties prenantes.'],
              ['Greenly', 'Comptabilité carbone automatisée pour mesurer, réduire et piloter son empreinte carbone.'],
              ['Datamaran', 'Logiciel de veille réglementaire et de matérialité RSE.'],
              ['EcoVadis', 'Plateforme mondiale d’évaluation de la performance RSE des entreprises.'],
              ['GRI', 'Standards de reporting pour structurer et comparer les rapports de durabilité.'],
              ['SROI', 'Méthode qui mesure et monétise le retour social sur investissement.'],
            ].map(([t, d], k) => (
              <Reveal key={t} delay={(k % 3) * 70}>
                <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 20, padding: 26, height: '100%' }}>
                  <h3 style={{ color: '#f4b400' }}>{t}</h3>
                  <p style={{ margin: 0, color: '#d6ebdf', fontSize: '0.97rem' }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Financement & freins */}
      <section className="section">
        <div className="container split" style={{ alignItems: 'start' }}>
          <Reveal>
            <span className="eyebrow">Financements responsables</span>
            <h2>Une démarche RSE ouvre des portes</h2>
            <ul className="checks">
              <li><span>Les banques proposent des <b>financements avantageux</b> pour les projets RSE.</span></li>
              <li><span>Une RSE solide attire les <b>fonds éthiques et ESG</b> et les investisseurs institutionnels.</span></li>
              <li><span>La RSE aide à <b>décrocher des contrats et appels d’offres</b>, y compris à l’international.</span></li>
              <li><span>Les <b>actionnaires</b> peuvent pousser des objectifs durables, notamment en assemblée générale.</span></li>
              <li><span>Une certification comme l’<b>ISO 14001</b> est un « passeport commercial » à l’export.</span></li>
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">Les freins fréquents</span>
            <h2>Ce qui bloque, et comment le lever</h2>
            <div className="table-wrap">
              <table className="tbl">
                <thead>
                  <tr><th>Frein</th><th>Piste</th></tr>
                </thead>
                <tbody>
                  <tr><td>Manque de pression réglementaire claire</td><td>Anticiper : la réglementation se renforce.</td></tr>
                  <tr><td>Culture centrée sur le profit à court terme</td><td>Montrer les gains : coûts, réputation, talents.</td></tr>
                  <tr><td>Peu de moyens humains ou financiers dédiés</td><td>Commencer petit, s’appuyer sur l’existant.</td></tr>
                  <tr><td>RSE confiée au seul service com ou RH</td><td>Comité de direction, gouvernance claire, KPI.</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight sand">
        <div className="container">
          <div className="callout">
            <div>
              <b>Entraînez-vous sur la mise en œuvre</b>
              Avantages par contexte (PME, start-up, expansion), parties prenantes, outils et indicateurs.
              <div className="mt-s" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link className="btn sm" href="/apprentissage/avantages">Avantages de la RSE →</Link>
                <Link className="btn sm ghost" href="/apprentissage/parties">Parties prenantes →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
