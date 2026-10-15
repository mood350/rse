'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const CARDS = [
  { tag: 'Parcours gratuit', title: 'Comprendre', href: '/comprendre' },
  { tag: 'Testez-vous', title: 'S’entraîner', href: '/apprentissage' },
];

/** Carte du hero : une à la fois, avec deux points de navigation. */
export default function HeroCards() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % CARDS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const c = CARDS[i];
  return (
    <div className="hc">
      <span className="hc-line" aria-hidden="true" />
      <Link href={c.href} className="hc-card" key={c.href}>
        <span className="hc-tag">{c.tag}</span>
        <b>{c.title}</b>
        <span className="hc-btn">PLUS</span>
      </Link>
      <div className="hc-dots" role="tablist" aria-label="Choisir une carte">
        {CARDS.map((x, k) => (
          <button key={x.href} type="button" role="tab" aria-selected={k === i} aria-label={x.title} className={k === i ? 'on' : ''} onClick={() => setI(k)} />
        ))}
      </div>
    </div>
  );
}
