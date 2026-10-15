import Link from 'next/link';
import { PHOTOS } from '@/data/photos';

export default function Footer() {
  const credits = Array.from(new Set(Object.values(PHOTOS).map((p) => p.credit)));
  const links = [
    ['Accueil', '/'],
    ['Comprendre', '/comprendre'],
    ['Passer à l’action', '/mise-en-oeuvre'],
    ['S’entraîner', '/apprentissage'],
    ['Glossaire', '/glossaire'],
  ];
  return (
    <footer className="site-footer">
      <div className="foot-panel">
        <div className="foot-top">
          <p className="foot-claim">Saisissez l’opportunité de bâtir une entreprise durable et d’en faire une force pour tous.</p>
          <div>
            <h4>Liens utiles</h4>
            <div className="foot-pills">
              {links.map(([l, h]) => (
                <Link key={h} href={h}>{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4>Localisation</h4>
            <p className="foot-addr">Lomé, Togo</p>
            <p className="foot-small">Contenu pédagogique issu du cours « MiRDa RSE Quiz ».</p>
          </div>
        </div>
        <div className="foot-word" aria-hidden="true">Miabôh</div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Tous droits réservés.</span>
          <span className="foot-small">
            Photos libres de droits via <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a> : {credits.join(', ')}.
          </span>
        </div>
      </div>
    </footer>
  );
}
