'use client';

import { useMemo, useState } from 'react';
import { GLOSSAIRE } from '@/data/glossaire';

export default function GlossaireSearch() {
  const [q, setQ] = useState('');
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return GLOSSAIRE.filter(([a, b]) => !s || `${a} ${b}`.toLowerCase().includes(s));
  }, [q]);

  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="Rechercher un sigle : ESG, GRI, ODD…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Rechercher dans le glossaire"
      />
      <div className="table-wrap mt-m">
        <table className="tbl">
          <thead>
            <tr>
              <th>Sigle</th>
              <th>Signification</th>
            </tr>
          </thead>
          <tbody>
            {list.map(([a, b]) => (
              <tr key={a}>
                <td>{a}</td>
                <td>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {list.length === 0 && <p className="empty">Aucun résultat.</p>}
      </div>
    </div>
  );
}
