'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogoMark } from './Wax';

const LINKS = [
  { href: '/', label: 'Accueil', match: [] as string[] },
  { href: '/comprendre', label: 'Comprendre', match: ['/comprendre', '/developpement-durable', '/rse', '/normes', '/glossaire', '/mise-en-oeuvre'] },
  { href: '/apprentissage', label: 'S’entraîner', match: ['/apprentissage'] },
  { href: '/contact', label: 'Contact', match: [] as string[] },
];

export function Logo() {
  return (
    <span className="logo">
      <LogoMark size={30} />
      <span className="logo-text">MIABÔH</span>
      <span className="logo-tag">RSE</span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const isActive = (href: string, match: string[]) =>
    href === '/' ? pathname === '/' : [href, ...match].some((m) => pathname === m || pathname.startsWith(m + '/'));

  const onHero = !scrolled && !open && pathname === '/';

  return (
    <>
    <div className="gov-strip">
      <div className="container gov-in">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="gov-flag" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/drapeau-togo.svg`} alt="Drapeau du Togo" width={24} height={15} />
        <span className="gov-name">République Togolaise</span>
        <span className="gov-motto">Travail · Liberté · Patrie</span>
      </div>
    </div>
    <header className={`site-header${onHero ? ' on-hero' : ''}`}>
      <div className="container bar">
        <Link href="/" className="brand" aria-label="Miabôh, accueil" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <button
          type="button"
          className="menu-btn"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>

        <nav className={`nav${open ? ' open' : ''}`} aria-label="Navigation principale">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href, l.match) ? 'page' : undefined} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/comprendre" className="cta" onClick={() => setOpen(false)}>
            COMMENCER <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
      <span className="scroll-progress" aria-hidden="true" />
    </header>
    </>
  );
}
