'use client';

import { useMemo, useState } from 'react';
import { NORMES } from '@/data/normes';
import type { NormeCat } from '@/data/normes';

const CATS: ('Toutes' | NormeCat)[] = ['Toutes', 'ISO', 'Social', 'Reporting', 'International', 'Label', 'Loi'];

const CAT_LABEL: Record<string, string> = {
  Toutes: 'Toutes',
  ISO: 'Normes ISO',
  Social: 'Social',
  Reporting: 'Reporting',
  International: 'Cadres internationaux',
  Label: 'Labels',
  Loi: 'Lois',
};

const CAT_COLOR: Record<NormeCat, string> = {
  ISO: '#0f5a43',
  Social: '#a21942',
  Reporting: '#19486a',
  International: '#0a97d9',
  Label: '#c8512b',
  Loi: '#7a4eab',
};

export default function NormesExplorer() {
  const [cat, setCat] = useState<'Toutes' | NormeCat>('Toutes');
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return NORMES.filter((n) => {
      if (cat !== 'Toutes' && n.cat !== cat) return false;
      if (!s) return true;
      return `${n.code} ${n.nom} ${n.resume} ${n.retenir}`.toLowerCase().includes(s);
    });
  }, [cat, q]);

  return (
    <div>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 28 }}>
        <input
          className="search"
          type="search"
          placeholder="Rechercher : ISO, énergie, bois, 2000…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Rechercher une norme"
        />
        <div className="chips">
          {CATS.map((c) => (
            <button key={c} className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>
              {CAT_LABEL[c]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid c3">
        {list.map((n) => (
          <article key={n.code} className="card norme">
            <span className="nom">{n.nom}</span>
            <span className="code">{n.code}</span>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="pill">{CAT_LABEL[n.cat]}</span>
              {n.certifiable === true && <span className="pill l1">Certifiable</span>}
              {n.certifiable === false && <span className="pill l2">Non certifiable</span>}
            </div>
            <p className="muted" style={{ margin: '4px 0 0', fontSize: '0.95rem' }}>{n.resume}</p>
            <p className="retenir">{n.retenir}</p>
          </article>
        ))}
      </div>
      {list.length === 0 && <p className="empty">Aucune norme ne correspond à votre recherche.</p>}
    </div>
  );
}
