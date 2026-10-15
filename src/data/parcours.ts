export type Step = { href: string; title: string; text: string };

/** Le parcours conseillé, dans l'ordre. */
export const STEPS: Step[] = [
  { href: '/developpement-durable', title: 'Le développement durable', text: 'Comprendre l’idée de base, simplement.' },
  { href: '/rse', title: 'La RSE', text: 'Ce que les entreprises peuvent faire concrètement.' },
  { href: '/normes', title: 'Les normes et labels', text: 'Les règles et certifications à connaître.' },
  { href: '/mise-en-oeuvre', title: 'Passer à l’action', text: 'Les étapes pour s’y mettre dans son entreprise.' },
  { href: '/apprentissage', title: 'S’entraîner', text: 'Lire les cours puis tester vos connaissances.' },
];

/** Position d'une page dans le parcours (-1 si hors parcours). */
export function stepIndex(pathname: string): number {
  return STEPS.findIndex((s) => pathname === s.href || (s.href === '/apprentissage' && pathname.startsWith('/apprentissage')));
}

export function isStepPage(pathname: string): boolean {
  return STEPS.some((s) => pathname === s.href);
}
