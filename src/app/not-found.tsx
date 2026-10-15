import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container center" style={{ maxWidth: 640 }}>
        <span className="eyebrow">Erreur 404</span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)' }}>Cette page a poussé ailleurs</h1>
        <p className="lead" style={{ marginInline: 'auto' }}>
          La page que vous cherchez n’existe pas ou a été déplacée.
        </p>
        <Link className="btn" href="/">
          Retour à l’accueil
        </Link>
      </div>
    </section>
  );
}
