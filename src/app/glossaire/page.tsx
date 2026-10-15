import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import GlossaireSearch from '@/components/GlossaireSearch';
import { CHIFFRES } from '@/data/memo';

export const metadata: Metadata = {
  title: 'Glossaire et chiffres clés',
  description: 'Les sigles de la RSE et du développement durable, et les chiffres à ne pas confondre.',
};

export default function GlossairePage() {
  return (
    <>
      <PageHero
        eyebrow="Référence"
        crumb="Glossaire"
        photo="portrait2"
        title="Glossaire et chiffres clés"
        lead="Les sigles du développement durable et de la RSE, et les chiffres à ne surtout pas confondre."
      />
      <section className="section">
        <div className="container">
          <GlossaireSearch />
        </div>
      </section>
      <section className="section sand">
        <div className="container">
          <div className="head">
            <span className="eyebrow">À ne pas confondre</span>
            <h2>Les chiffres clés</h2>
          </div>
          <div className="table-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Sujet</th>
                  <th>Chiffre</th>
                </tr>
              </thead>
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
        </div>
      </section>
    </>
  );
}
