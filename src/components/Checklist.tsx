'use client';

import { useEffect, useState } from 'react';

const ITEMS: { id: string; t: string; d: string }[] = [
  { id: 'enjeux', t: 'Identifier mes enjeux prioritaires', d: 'Quels sont les 3 à 5 sujets sociaux et environnementaux qui comptent vraiment pour mon activité ?' },
  { id: 'parties', t: 'Cartographier mes parties prenantes', d: 'Salariés, clients, fournisseurs, banques, collectivités, voisins : qui est concerné ?' },
  { id: 'existant', t: 'Lister ce qui existe déjà', d: 'Tri des déchets, économies d’énergie, formation, dialogue avec les équipes : on part de l’existant.' },
  { id: 'opportunites', t: 'Repérer les opportunités économiques', d: 'Où la RSE peut-elle réduire un coût, ouvrir un marché ou fidéliser un client ?' },
  { id: 'indicateurs', t: 'Choisir quelques indicateurs simples (KPI)', d: 'Spécifiques, mesurables, comparables, révisables, communiqués.' },
  { id: 'charte', t: 'Rédiger une charte ou un plan d’action', d: 'Objectifs, actions, responsables et échéances, validés par la direction.' },
  { id: 'equipe', t: 'Désigner un référent et impliquer les équipes', d: 'Un responsable RSE (ou un comité) qui coordonne avec les managers.' },
  { id: 'former', t: 'Former et motiver', d: 'Sensibiliser tout le personnel : les employés sont des ambassadeurs de la démarche.' },
  { id: 'fournisseurs', t: 'Intégrer les fournisseurs', d: 'Fournisseurs éthiques, clauses éthiques dans les contrats, audits, matériaux durables.' },
  { id: 'communiquer', t: 'Communiquer avec sincérité', d: 'Dire ce qu’on fait vraiment, avec transparence : zéro greenwashing.' },
  { id: 'mesurer', t: 'Mesurer, auditer, publier un rapport', d: 'Bilan périodique et rapport RSE pour ajuster et rendre compte.' },
];

const KEY = 'miabo:checklist:v1';

export default function Checklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        window.localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const count = ITEMS.filter((i) => done[i.id]).length;
  const pct = Math.round((count / ITEMS.length) * 100);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
        <strong>
          {count} / {ITEMS.length} étapes
        </strong>
        <span className="muted">{pct} %</span>
      </div>
      <div className="meter" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <i style={{ width: `${pct}%` }} />
      </div>
      <div style={{ display: 'grid', gap: 12, marginTop: 24 }}>
        {ITEMS.map((i) => (
          <button key={i.id} type="button" className="check-item" aria-pressed={!!done[i.id]} onClick={() => toggle(i.id)}>
            <span className="box" aria-hidden="true">
              {done[i.id] && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              )}
            </span>
            <span>
              <b>{i.t}</b>
              <small>{i.d}</small>
            </span>
          </button>
        ))}
      </div>
      <p className="muted" style={{ fontSize: '0.88rem', marginTop: 16 }}>
        Votre progression est conservée dans ce navigateur uniquement.
      </p>
    </div>
  );
}
