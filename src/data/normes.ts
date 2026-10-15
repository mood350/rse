export type NormeCat = 'ISO' | 'Social' | 'Reporting' | 'International' | 'Label' | 'Loi';

export type Norme = {
  code: string;
  nom: string;
  cat: NormeCat;
  resume: string;
  retenir: string;
  certifiable?: boolean;
};

export const NORMES: Norme[] = [
  {
    code: 'ISO 26000',
    nom: 'Responsabilité sociétale',
    cat: 'ISO',
    resume: 'Lignes directrices internationales pour intégrer la RSE. Elle repose sur 7 principes et 7 questions centrales.',
    retenir: '26000 = RSE. Non certifiable : ce sont des lignes directrices.',
    certifiable: false,
  },
  {
    code: 'ISO 14001',
    nom: 'Management environnemental',
    cat: 'ISO',
    resume: 'Cadre pour intégrer les préoccupations environnementales et maîtriser ses impacts, via un Système de Management Environnemental (SME) en amélioration continue.',
    retenir: '14001 = environnement. Passeport commercial à l’export.',
    certifiable: true,
  },
  {
    code: 'ISO 9001',
    nom: 'Management de la qualité',
    cat: 'ISO',
    resume: 'Norme de management certifiable portant sur la qualité des produits et des services.',
    retenir: '9001 = qualité.',
    certifiable: true,
  },
  {
    code: 'ISO 50001',
    nom: 'Management de l’énergie',
    cat: 'ISO',
    resume: 'Système de management de l’énergie : réduction des coûts d’exploitation, meilleur rendement énergétique, moindre empreinte carbone.',
    retenir: '50001 = énergie.',
    certifiable: true,
  },
  {
    code: 'ISO 22000',
    nom: 'Sécurité des denrées alimentaires',
    cat: 'ISO',
    resume: 'Garantit la sécurité des aliments à toutes les étapes de la chaîne alimentaire grâce à un système rigoureux de management des risques.',
    retenir: '22000 = aliments.',
    certifiable: true,
  },
  {
    code: 'ISO 20400',
    nom: 'Achats responsables',
    cat: 'ISO',
    resume: 'Lignes directrices pour intégrer la durabilité dans les processus d’achats et la chaîne d’approvisionnement.',
    retenir: '20400 = achats responsables.',
  },
  {
    code: 'ISO 45001',
    nom: 'Santé et sécurité au travail',
    cat: 'ISO',
    resume: 'Cité parmi les certifications RSE reconnues : prévention des risques professionnels.',
    retenir: '45001 = santé-sécurité.',
    certifiable: true,
  },
  {
    code: 'SA8000',
    nom: 'Conditions de travail',
    cat: 'Social',
    resume: 'Norme internationale sur les conditions de travail et droits fondamentaux des travailleurs. 9 domaines : travail des enfants, travail forcé, santé et sécurité, liberté d’association, discrimination, pratiques disciplinaires, temps de travail, rémunération, système de gestion.',
    retenir: '« 8 heures de travail » ; 9 domaines.',
    certifiable: true,
  },
  {
    code: 'GRI',
    nom: 'Global Reporting Initiative',
    cat: 'Reporting',
    resume: 'Standards de reporting de durabilité : 3 types (universels, sectoriels, thématiques). Ils favorisent la comparabilité et la fiabilité des rapports extra-financiers.',
    retenir: 'GRI = reporting ; U-S-T.',
  },
  {
    code: 'CSRD',
    nom: 'Reporting de durabilité (UE)',
    cat: 'Reporting',
    resume: 'Directive européenne sur le reporting de durabilité. Une ISO 14001 sert de preuve de transparence face à la CSRD, à la taxonomie verte et aux investisseurs ESG. Les entreprises qui exportent vers l’Union européenne peuvent y être exposées indirectement par leurs clients.',
    retenir: 'CSRD = directive européenne sur le reporting de durabilité.',
  },
  {
    code: 'Global Compact',
    nom: 'Pacte mondial des Nations Unies',
    cat: 'International',
    resume: 'Initiative volontaire lancée en 2000 par l’ONU : 10 principes universels (droits de l’homme, travail, environnement, lutte contre la corruption).',
    retenir: '2000 ; 10 principes.',
  },
  {
    code: 'Agenda 2030',
    nom: '17 Objectifs de Développement Durable',
    cat: 'International',
    resume: 'Cadre universel adopté par l’ONU, applicable à tous les pays, fruit d’une consultation mondiale inédite (société civile, secteur privé, collectivités, recherche).',
    retenir: '17 ODD ; 5 P.',
  },
  {
    code: 'Accord de Paris',
    nom: 'Traité international sur le climat',
    cat: 'International',
    resume: 'Adopté le 12 décembre 2015 à la COP21 : limiter le réchauffement bien en dessous de 2 °C, idéalement à 1,5 °C.',
    retenir: '12/12/2015 ; 2 °C / 1,5 °C.',
  },
  {
    code: 'Loi AGEC',
    nom: 'Loi anti-gaspillage (France)',
    cat: 'Loi',
    resume: 'Loi promulguée en février 2020 : réduire les déchets, préserver les ressources, favoriser réemploi et recyclage. Elle s’appuie sur la Responsabilité Élargie du Producteur (REP).',
    retenir: 'AGEC = février 2020.',
  },
  {
    code: 'FSC',
    nom: 'Forest Stewardship Council',
    cat: 'Label',
    resume: 'Certification du bois et dérivés issus de forêts gérées de façon responsable. Types : FSC 100 %, FSC Recyclé, FSC Mixte.',
    retenir: 'FSC = forêts.',
  },
  {
    code: 'MSC',
    nom: 'Marine Stewardship Council',
    cat: 'Label',
    resume: 'Label de la pêche durable.',
    retenir: 'MSC = mer.',
  },
  {
    code: 'HQE · LEED · WELL',
    nom: 'Bâtiments durables',
    cat: 'Label',
    resume: 'HQE (Haute Qualité Environnementale, France), LEED (Leadership in Energy and Environmental Design, États-Unis) et WELL (santé et bien-être des occupants).',
    retenir: 'Trois labels de bâtiments.',
  },
  {
    code: 'GOTS',
    nom: 'Textile biologique',
    cat: 'Label',
    resume: 'Textiles bio avec normes sociales et environnementales sur toute la chaîne.',
    retenir: 'GOTS = textile bio.',
  },
  {
    code: 'LUCIE 26000',
    nom: 'Label RSE',
    cat: 'Label',
    resume: 'Label français de RSE, fondé sur l’ISO 26000 : engagement concret, crédible et vérifiable.',
    retenir: 'LUCIE = RSE.',
  },
  {
    code: 'B Corp',
    nom: 'Benefit Corporation',
    cat: 'Label',
    resume: 'Certification d’entreprises à but lucratif exemplaires : performance sociale et environnementale, transparence, gouvernance.',
    retenir: 'B Corp = but lucratif exemplaire.',
  },
  {
    code: 'EcoVadis',
    nom: 'Notation RSE',
    cat: 'Label',
    resume: 'Plateforme mondiale d’évaluation de la performance RSE des entreprises.',
    retenir: 'EcoVadis = notation RSE.',
  },
];
