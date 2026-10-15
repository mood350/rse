import Link from 'next/link';
import type { ReactNode } from 'react';
import Photo from './Photo';
import { HeroFx, SplitTitle } from './HeroFx';
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
      <HeroFx />
      <div className="container">
        <div className="crumbs">
          <Link href="/">Accueil</Link> / {crumb}
        </div>
        <p className="hero-kicker">{eyebrow}</p>
        <SplitTitle text={title} />
        <p className="lead hero-lead">{lead}</p>
        {children}
      </div>
    </section>
  );
}
