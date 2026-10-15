import Link from 'next/link';
import type { ReactNode } from 'react';
import Photo from './Photo';
import type { PhotoKey } from '@/data/photos';

export default function PageHero({
  eyebrow,
  title,
  lead,
  photo,
  crumb,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  photo: PhotoKey;
  crumb: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="bg">
        <Photo name={photo} width={1800} priority />
      </div>
      <div className="container">
        <div className="crumbs">
          <Link href="/">Accueil</Link> / {crumb}
        </div>
        <span className="eyebrow" style={{ color: '#f4b400' }}>{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
        {children}
      </div>
    </section>
  );
}
