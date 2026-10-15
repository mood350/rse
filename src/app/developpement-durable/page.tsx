import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import { ODD } from '@/data/odd';

export const metadata: Metadata = {
  title: 'Le développement durable',
  description: 'Définition, 3P et 5P, principes fondamentaux, Agenda 2030 et les 17 Objectifs de Développement Durable.',
};

const LIGHT_ODD = new Set([2, 7, 11, 12]);

export default function DDPage() {
  return (
    <>
      <PageHero
        eyebrow="Comprendre"
        crumb="Développement durable"
        photo="village"
        title="Le développement durable, expliqué simplement"
        lead="Répondre aux besoins du présent sans compromettre ceux des générations futures : une approche globale, équilibrée et à long terme."
      />

      {/* définition */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Définition</span>
            <h2>Un équilibre entre l’économie, le social et l’environnement</h2>
            <p className="lead">
              Le développement durable est un modèle de progrès qui concilie performance économique, équité sociale et
              préservation de l’environnement, pour un avenir viable.
            </p>
            <ul className="checks">
              <li><span><b>Globale</b> : il touche tous les secteurs et toutes les échelles, du local au mondial.</span></li>
              <li><span><b>Équilibrée</b> : aucun des trois piliers ne passe avant les autres.</span></li>
              <li><span><b>À long terme</b> : on pense aux générations futures et à l’usage raisonné des ressources.</span></li>
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="frame-wrap alt">
              <figure className="frame wide" style={{ margin: 0 }}>
                <Photo name="irrigation" width={1100} />
                <figcaption>Gérer l’eau et la terre avec sagesse</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 priorités et 3P / 5P */}
      <section className="section sand">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">Les repères à connaître</span>
            <h2>3 priorités, 3P, 5P, 7 principes</h2>
          </Reveal>
          <div className="grid c3">
            <Reveal>
              <div className="card" style={{ height: '100%' }}>
                <h3>3 priorités</h3>
                <ul className="checks">
                  <li><span>Intégrité de l’environnement</span></li>
                  <li><span>Équité sociale</span></li>
                  <li><span>Efficience économique</span></li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ height: '100%' }}>
                <h3>Les 3P puis les 5P</h3>
                <p className="muted"><b>3P :</b> Personnes, Planète, Prospérité.</p>
                <p className="muted">
                  <b>5P (Agenda 2030) :</b> Planète, Personnes, Prospérité, Paix, Partenariats.
                </p>
                <p className="muted" style={{ marginBottom: 0 }}>
                  Astuce : « 3P + Paix + Partenariats = 5P ».
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="card" style={{ height: '100%' }}>
                <h3>7 principes fondamentaux</h3>
                <p className="muted" style={{ marginBottom: 0 }}>
                  Équité sociale et intergénérationnelle, précaution, responsabilité, participation, solidarité, intégration,
                  durabilité.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* enjeux */}
      <section className="section">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">Les grands enjeux</span>
            <h2>Ce que le développement durable doit traiter</h2>
          </Reveal>
          <div className="grid c2">
            {[
              ['Environnement et climat', 'Réchauffement, biodiversité, océans, transitions énergétique, agricole et alimentaire, mobilité.'],
              ['Protection humaine et sociale', 'Santé, égalité des droits, dignité, bien-être, sensibilisation, diversité, accès à la culture.'],
              ['Fractures économiques et équité', 'Lutte contre la pauvreté, l’exclusion et les discriminations ; répartition plus juste des richesses.'],
              ['Production et consommation', 'Remise en cause du modèle linéaire « extraire → consommer → jeter » au profit de la prévention, du réemploi et du recyclage.'],
            ].map(([t, d], k) => (
              <Reveal key={t} delay={k * 60}>
                <div className="card" style={{ display: 'flex', gap: 20, height: '100%' }}>
                  <div>
                    <h3>{t}</h3>
                    <p className="muted" style={{ margin: 0 }}>{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ODD */}
      <section className="section forest">
        <div className="container">
          <Reveal className="head">
            <span className="eyebrow">Agenda 2030</span>
            <h2>Les 17 Objectifs de Développement Durable</h2>
            <p className="muted" style={{ fontSize: '1.1rem' }}>
              Adopté par l’ONU, l’Agenda 2030 est <b>universel</b> : il s’applique à tous les pays, riches comme en
              développement. Il associe la lutte contre l’extrême pauvreté et la réduction des inégalités à la préservation de
              la planète. Le 12 et le 13 reviennent presque partout : retenez-les !
            </p>
          </Reveal>
          <Reveal>
            <div className="odd-grid">
              {ODD.map((o) => (
                <div key={o.n} className={`odd${LIGHT_ODD.has(o.n) ? ' dark-text' : ''}`} style={{ background: o.color }}>
                  <b>{o.n}</b>
                  <span>{o.title}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="table-wrap mt-l" style={{ color: 'var(--ink)' }}>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Thème</th>
                    <th>ODD à citer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Cuisson propre</td><td>3, 5, 7, 13 (santé, égalité des sexes, énergie, climat)</td></tr>
                  <tr><td>Tourisme</td><td>8, 11, 12, 13, 15</td></tr>
                  <tr><td>Bâtiments écologiques</td><td>3, 7, 11, 12, 13</td></tr>
                  <tr><td>Sécurité hydrique</td><td>6, 11, 12, 13, 15</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ressources */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Innovation et technologies vertes</span>
            <h2>Réconcilier progrès et environnement</h2>
            <p className="lead">
              L’innovation technologique stimule la recherche et la création de solutions nouvelles pour répondre aux défis
              environnementaux, sociaux et économiques. Les technologies vertes soutiennent aussi la croissance et la justice
              sociale.
            </p>
            <ul className="checks">
              <li><span><b>Énergies renouvelables</b> : solaire, éolien, hydroélectricité, biomasse, géothermie.</span></li>
              <li><span><b>Économie circulaire</b> : garder produits et ressources en circulation le plus longtemps possible.</span></li>
              <li><span><b>Économie verte</b> : efficacité écologique, croissance inclusive, innovation durable.</span></li>
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="frame-wrap">
              <figure className="frame wide" style={{ margin: 0 }}>
                <Photo name="solar" width={1100} />
                <figcaption>Énergie solaire</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight sand">
        <div className="container">
          <div className="callout">
            <div>
              <b>Pour aller plus loin</b>
              Mettez ces notions en pratique : questions sur le développement durable et les ODD, du plus facile au plus
              difficile.
              <div className="mt-s">
                <Link className="btn sm" href="/apprentissage/dd">
                  S’entraîner sur les ODD →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
