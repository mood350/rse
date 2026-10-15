export type SectionKey =
  | 'rse'
  | 'dd'
  | 'esg'
  | 'normes'
  | 'climat'
  | 'circulaire'
  | 'cuisson'
  | 'ess'
  | 'avantages'
  | 'parties'
  | 'crise'
  | 'secteurs';

export type Section = {
  key: SectionKey;
  title: string;
  short: string;
  desc: string;
  color: string;
};

// Ordre pédagogique : du plus fondamental au plus spécialisé.
export const SECTIONS: Section[] = [
  { key: 'rse', title: 'RSE : fondamentaux', short: 'RSE', desc: 'Définition, piliers, gouvernance, démarche, audits et due diligence.', color: '#1F8A5B' },
  { key: 'dd', title: 'Développement durable & ODD', short: 'DD & ODD', desc: 'Finalités, Agenda 2030, 17 ODD et financement du développement.', color: '#0A97D9' },
  { key: 'esg', title: 'ESG, ISR & reporting', short: 'ESG', desc: 'Critères ESG, investissement responsable, GRI, KPI et outils de pilotage.', color: '#19486A' },
  { key: 'normes', title: 'Normes & labels', short: 'Normes', desc: 'ISO 26000, 14001, 50001, SA8000, FSC, B Corp, Global Compact…', color: '#C8512B' },
  { key: 'climat', title: 'Climat, carbone & énergie', short: 'Climat', desc: 'Accord de Paris, GIEC, neutralité carbone, empreinte, énergies renouvelables.', color: '#E0A100' },
  { key: 'circulaire', title: 'Économie circulaire & déchets', short: 'Circulaire', desc: 'Les 9R, économie verte, déchets, eau et ressources.', color: '#3F7E44' },
  { key: 'cuisson', title: 'Cuisson propre', short: 'Cuisson', desc: 'Clean Cooking Alliance, santé, égalité des sexes et climat.', color: '#D2691E' },
  { key: 'ess', title: 'Économie Sociale & Solidaire', short: 'ESS', desc: 'Coopératives, mutuelles, ancrage territorial et inclusion.', color: '#A21942' },
  { key: 'avantages', title: 'Avantages de la RSE par contexte', short: 'Avantages', desc: 'PME, start-up, expansion, compétitivité, talents, prix, données.', color: '#00689D' },
  { key: 'parties', title: 'Parties prenantes', short: 'Parties prenantes', desc: 'Actionnaires, secteur public, ONG, partenaires, fournisseurs, employés.', color: '#7A4EAB' },
  { key: 'crise', title: 'Crise, médias & risques', short: 'Crise', desc: 'Communication, greenwashing, risques juridiques, réputation et résilience.', color: '#D21034' },
  { key: 'secteurs', title: "Secteurs d'activité", short: 'Secteurs', desc: 'Tech, mines, mode, transport, services et industries.', color: '#5B6B62' },
];

export const SECTION_BY_KEY: Record<string, Section> = Object.fromEntries(
  SECTIONS.map((s) => [s.key, s]),
);

export const LEVELS = [
  { level: 1, label: 'Facile', hint: 'Définitions, sigles, chiffres simples' },
  { level: 2, label: 'Intermédiaire', hint: 'Explications et listes courtes' },
  { level: 3, label: 'Difficile', hint: 'Réponses détaillées et pièges' },
] as const;
