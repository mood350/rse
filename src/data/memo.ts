export type Memo = {
  title: string;
  tag: string;
  lines: string[];
  trick?: string;
};

export const MEMOS: Memo[] = [
  {
    tag: 'Avantages',
    title: 'CRITIC — les avantages de la RSE',
    lines: ['C — Coûts réduits', 'R — Réputation / image', 'I — Investisseurs et financements', 'T — Talents (attirer et fidéliser)', 'I — Innovation', 'C — Clients fidèles'],
    trick: 'Pour une question sur un secteur ou une taille d’entreprise donnés, adaptez 2 ou 3 lettres de CRITIC.',
  },
  {
    tag: 'Risques',
    title: 'Les 3 pertes d’une RSE mal faite',
    lines: ['Confiance', 'Argent', 'Légalité'],
    trick: 'Boycott, amendes, tribunaux, turnover : greenwashing, incohérence et RSE symbolique se résument à ces trois pertes.',
  },
  {
    tag: 'ISO 26000',
    title: 'Les 7 questions centrales',
    lines: ['Gouvernance', 'Droits de l’homme', 'Relations de travail', 'Environnement', 'Loyauté des pratiques', 'Consommateurs', 'Communautés'],
    trick: '« Gérer Des Travailleurs Est Le Cœur de la Communauté ». Le jury demande surtout les 2 premières et les 2 dernières.',
  },
  {
    tag: 'ISO 26000',
    title: 'Les 7 principes',
    lines: ['1 Redevabilité', '2 Transparence', '3 Comportement éthique', '4 Intérêts des parties prenantes', '5 Légalité', '6 Normes internationales de comportement', '7 Droits de l’Homme'],
    trick: 'Seuls les 2 premiers et les 2 derniers figurent dans le document de cours : les principes 3, 4 et 5 sont à vérifier.',
  },
  {
    tag: 'Économie circulaire',
    title: 'Les 9R : schéma 3-4-2',
    lines: ['Boucles courtes (3) : Refuser, Réduire, Réutiliser', 'Boucles moyennes (4) : Réparer, Rénover, Remanufacturer, Réaffecter', 'Boucles longues (2) : Recycler, Récupérer'],
    trick: 'Plus le numéro est petit, mieux c’est : on évite d’abord, on recycle en dernier. Règle des 4R : Réduire, Réutiliser, Réparer, Recycler.',
  },
  {
    tag: 'DD',
    title: 'Les 3P et les 5P',
    lines: ['3P : Personnes, Planète, Prospérité', '5P : 3P + Paix + Partenariats'],
    trick: '« 3P + Paix + Partenariats = 5P ».',
  },
  {
    tag: 'ESG',
    title: 'ESG : 3 lettres × 4 critères',
    lines: ['E : Émissions, Ressources, Pollution/déchets, Biodiversité', 'S : Conditions de travail, Parties prenantes, Diversité, Impact social', 'G : Conseil d’administration, Transparence, Responsabilité/éthique, Contrôle interne'],
    trick: 'E = ce que je consomme et pollue ; S = les gens ; G = qui décide et contrôle.',
  },
  {
    tag: 'Climat',
    title: 'Neutralité carbone : M-R-C',
    lines: ['Mesurer ses émissions de GES', 'Réduire au maximum', 'Compenser le résiduel incompressible'],
    trick: 'On ne compense que ce qu’on n’a pas pu réduire.',
  },
  {
    tag: 'Reporting',
    title: 'GRI (U-S-T) et KPI (SMCRC)',
    lines: ['GRI — 3 types de standards : Universels, Sectoriels, Thématiques', 'KPI : Spécifiques, Mesurables, Comparables, Révisables, Communiqués'],
  },
  {
    tag: 'Normes',
    title: 'Les numéros ISO et SA8000',
    lines: ['9001 = Qualité', '14001 = Environnement', '26000 = RSE (lignes directrices, non certifiable)', '50001 = Énergie', '22000 = Aliments', '20400 = Achats responsables', 'SA8000 = Conditions de travail'],
    trick: '14001 : « le 14 juillet, on est dehors, dans la nature ». SA8000 : « 8 heures de travail ».',
  },
  {
    tag: 'Labels',
    title: 'Labels et outils : un mot-clé chacun',
    lines: ['FSC = Forêts / bois', 'MSC = Mer / pêche durable', 'HQE (France), LEED (États-Unis), WELL (bien-être) = bâtiments', 'GOTS = textile bio', 'LUCIE = RSE français', 'B Corp = entreprise à but lucratif exemplaire', 'EcoVadis = notation RSE', 'GRI = reporting', 'Greenly = bilan carbone'],
  },
  {
    tag: 'ODD',
    title: 'ODD à retenir par thème',
    lines: ['Cuisson propre : 3, 5, 7, 13', 'Tourisme : 8, 11, 12, 13, 15', 'Bâtiments écologiques : 3, 7, 11, 12, 13', 'Sécurité hydrique : 6, 11, 12, 13, 15'],
    trick: 'Le 13 (climat) et le 12 (consommation responsable) apparaissent presque partout : en cas de doute, citez-les en premier.',
  },
];

export const CHIFFRES: [string, string][] = [
  ['Principes ISO 26000', '7 principes / 7 questions centrales'],
  ['Principes fondamentaux du DD', '7'],
  ['Finalités (5P)', '5'],
  ['Due diligence RSE', '5 étapes clés, mais « repose sur 4 grandes actions » (piège)'],
  ['Étapes d’une démarche RSE', '6'],
  ['Agenda 21', '4 thèmes'],
  ['SA8000', '9 domaines'],
  ['Standards GRI', '3 types'],
  ['Économie verte', '3 piliers'],
  ['9R', '3 courtes + 4 moyennes + 2 longues'],
  ['Global Compact', 'Lancé en 2000, 10 principes'],
  ['Accord de Paris', '12 décembre 2015, COP21, bien en dessous de 2 °C, idéalement 1,5 °C'],
  ['Clean Cooking Alliance', 'Créée en 2010 ; 3,2 millions de décès par an (OMS)'],
  ['Pollution de l’air', '7 millions de morts prématurées par an'],
  ['GIEC (6ᵉ rapport)', '1,5 °C ; −43 % de CO₂ d’ici 2030 ; neutralité vers 2050'],
  ['APD', '0,7 % du PIB'],
  ['Loi AGEC', 'Février 2020'],
  ['Marché intermédiaire inférieur', 'CA de 10 à 500 millions de dollars'],
];

export const ASTUCES_VF = [
  'Une négation (« ne pas », « n’ont pas d’impact », « n’est pas ») signale souvent une affirmation fausse.',
  'Un mot absolu (« uniquement », « seul », « totalement ») est un signal d’alerte.',
  'Un terme négatif ou illogique (« inhibe », « entretenir le greenwashing », « circuits longs ») est presque toujours faux.',
  'Si l’idée est positive, durable et inclusive, elle est probablement vraie ; si elle est restrictive ou contradictoire avec la RSE, elle est probablement fausse.',
  'Pièges fréquents : les bonnes actions attribuées au mauvais ODD, ou un thème glissé dans la mauvaise liste.',
];
