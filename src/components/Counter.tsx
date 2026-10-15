'use client';

import { useEffect, useRef, useState } from 'react';

/** Chiffre clé qui compte jusqu'à `to` et trace son anneau à l'apparition. Sans JS, la valeur finale s'affiche. */
export default function Counter({ to, label, color = 'var(--leaf)' }: { to: number; label: string; color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.classList.add('armed');
    setN(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        el.classList.add('in');
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / 1400, 1);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <div ref={ref} className="kpi" style={{ ['--c' as string]: color }}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="52" className="kpi-track" />
        <circle cx="60" cy="60" r="52" className="kpi-ring" pathLength={100} />
      </svg>
      <b aria-hidden="true">{n}</b>
      <span className="sr-only">{to}</span>
      <span className="kpi-label">{label}</span>
    </div>
  );
}
