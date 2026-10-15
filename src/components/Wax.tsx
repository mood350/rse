/** Motifs inspirés des pagnes « wax » d'Afrique de l'Ouest — purement décoratifs. */

export function WaxStrip({ id = 'wax', height = 22 }: { id?: string; height?: number }) {
  return (
    <svg className="wax-strip" style={{ height }} aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <pattern id={id} width="44" height="22" patternUnits="userSpaceOnUse">
          <rect width="44" height="22" fill="#0b3b2e" />
          <circle cx="11" cy="11" r="8" fill="#f4b400" />
          <circle cx="11" cy="11" r="5" fill="#0b3b2e" />
          <circle cx="11" cy="11" r="2.4" fill="#d21034" />
          <path d="M33 0a11 11 0 0 1 11 11 11 11 0 0 1-11 11 11 11 0 0 1-11-11A11 11 0 0 1 33 0z" fill="#1f8a5b" />
          <path d="M33 4a7 7 0 0 1 7 7H26a7 7 0 0 1 7-7z" fill="#fbf6ea" />
          <circle cx="33" cy="15" r="2" fill="#c8512b" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function WaxBackground({ id = 'waxbg' }: { id?: string }) {
  return (
    <svg className="bgpat" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={id} width="120" height="120" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="30" cy="30" r="26" />
            <circle cx="30" cy="30" r="17" />
            <circle cx="30" cy="30" r="8" />
            <circle cx="90" cy="90" r="26" />
            <circle cx="90" cy="90" r="17" />
            <circle cx="90" cy="90" r="8" />
            <path d="M60 0c0 33 27 60 60 60M0 60c33 0 60 27 60 60" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="12" r="6.2" fill="#f4b400" />
      <path d="M5 27c0-8 5-13 11-13s11 5 11 13c-6 0-9-2-11-5-2 3-5 5-11 5z" fill="#3fbf85" />
      <path d="M16 27V16" stroke="#0b3b2e" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Wave() {
  return (
    <div className="hero-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none">
        <path d="M0 64V28c120 22 240 30 360 22C540 38 660 4 840 6c180 2 300 36 600 20v38z" fill="currentColor" />
      </svg>
    </div>
  );
}
