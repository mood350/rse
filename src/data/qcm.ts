import type { SectionKey } from './sections';

export type QCM = {
  id: string;
  type: 'qcm';
  section: SectionKey;
  level: 1 | 2 | 3;
  q: string;
  options: string[];
  answer: number; // index de la bonne réponse
  explain: string;
};

type Raw = [SectionKey, 1 | 2 | 3, string, string, string, string, string, string];
// [section, niveau, question, bonne réponse, faux1, faux2, faux3, explication]

const RAW: Raw[] = [
  // ───────── RSE : fondamentaux
  ['rse', 1, 'Que signifie RSE ?', 'Responsabilité Sociétale des Entreprises', 'Rentabilité Sociale des Entreprises', 'Règlement Social et Environnemental', 'Réseau de Solidarité Économique', 'La RSE est la contribution volontaire des entreprises aux enjeux du développement durable (RSO pour les organisations).'],
  ['rse', 1, 'Quels sont les 3 piliers de la RSE ?', 'Économique, social, environnemental', 'Juridique, fiscal, commercial', 'Production, vente, distribution', 'Local, national, international', 'Les trois piliers sont les mêmes que ceux du développement durable : économique, social et environnemental.'],
  ['rse', 1, 'La RSE est-elle obligatoire ?', 'Non : c’est une intégration volontaire des enjeux sociaux et environnementaux', 'Oui, pour toutes les entreprises', 'Oui, mais seulement pour les multinationales', 'Non, elle est réservée aux ONG', 'La RSE est une démarche volontaire, même si les réglementations se renforcent.'],
  ['rse', 1, 'À qui s’applique la RSE ?', 'À toutes les entreprises, PME comprises, quels que soient taille, secteur et statut', 'Uniquement aux grandes entreprises cotées', 'Aux seules industries polluantes', 'Uniquement aux entreprises exportatrices', 'Piège classique : « uniquement » et « seules » signalent souvent une affirmation fausse.'],
  ['rse', 2, 'Quelle est la première étape d’une démarche RSE en 6 étapes ?', 'Comprendre le contexte', 'Communiquer', 'Mesurer et partager', 'Former les équipes', 'Les 6 étapes : 1 Contexte ; 2 État des lieux ; 3 Stratégie ; 4 Motiver/former ; 5 Communiquer ; 6 Mesurer/partager.'],
  ['rse', 2, 'Dans une démarche RSE, quelle étape suit l’état des lieux ?', 'Définir la stratégie', 'Communiquer les résultats', 'Mesurer et partager', 'Motiver et former', 'Ordre : Contexte → État des lieux → Stratégie → Motiver/former → Communiquer → Mesurer/partager.'],
  ['rse', 2, 'Pourquoi confier la RSE au seul service communication ou RH est-il voué à l’échec ?', 'Sans comité de direction, gouvernance claire ni KPI, la démarche reste décorrélée des vrais enjeux', 'Parce que ces services n’ont pas le droit de gérer la RSE', 'Parce que la RSE relève uniquement de la comptabilité', 'Parce que la RSE n’a pas besoin de pilotage', 'La RSE doit être un fil conducteur porté par la direction, pas un ajout périphérique.'],
  ['rse', 2, 'Quel est le rôle des comités RSE ?', 'Pilotage, concertation et contrôle de la politique RSE', 'Exécuter seuls tous les plans d’action', 'Définir les orientations de l’État', 'Remplacer le conseil d’administration', 'Le comité RSE est un point de convergence entre directions et garant de la performance extra-financière.'],
  ['rse', 2, 'Quel est le rôle d’un audit RSE ?', 'Mesurer, contrôler et améliorer la performance de responsabilité sociétale', 'Supprimer les indicateurs de suivi', 'Fixer le prix des produits', 'Remplacer le rapport RSE', 'Les audits orientent les décisions vers le durable, évaluent la conformité et renforcent la crédibilité.'],
  ['rse', 3, 'La due diligence RSE (devoir de vigilance) compte combien d’étapes clés et repose sur combien de grandes actions ?', '5 étapes clés, mais elle repose sur 4 grandes actions', '4 étapes clés et 5 grandes actions', '6 étapes clés et 6 grandes actions', '3 étapes clés et 4 grandes actions', 'Chiffre piège : 5 étapes (identifier → prévenir/atténuer → intégrer → suivre → communiquer) mais 4 actions.'],

  // ───────── Développement durable & ODD
  ['dd', 1, 'Quelle est la finalité du développement durable ?', 'Répondre aux besoins du présent sans compromettre ceux des générations futures', 'Maximiser la croissance à court terme', 'Remplacer l’industrie par l’agriculture', 'Réduire la population mondiale', 'C’est la définition du rapport Brundtland, reprise partout.'],
  ['dd', 1, 'Quels sont les 3 « P » du développement durable ?', 'Personnes, Planète, Prospérité', 'Profit, Production, Pouvoir', 'Paix, Progrès, Politique', 'Population, Pollution, Prix', 'Pensez « 3P + Paix + Partenariats = 5P ».'],
  ['dd', 1, 'Combien d’Objectifs de Développement Durable (ODD) compte l’Agenda 2030 ?', '17', '12', '15', '20', 'L’Agenda 2030 compte 17 ODD.'],
  ['dd', 2, 'Quels « P » s’ajoutent aux 3P pour former les 5P de l’Agenda 2030 ?', 'Paix et Partenariats', 'Profit et Progrès', 'Pollution et Prévention', 'Production et Propriété', '5P = Planète, Personnes, Prospérité, Paix, Partenariats.'],
  ['dd', 2, 'À quels pays s’applique l’Agenda 2030 ?', 'À tous : pays riches comme pays en développement', 'Uniquement aux pays en développement', 'Uniquement aux pays de l’OCDE', 'Uniquement aux pays africains', 'L’Agenda 2030 est universel : il transcende les frontières.'],
  ['dd', 2, 'Quel ODD correspond à « Consommation et production responsables » ?', 'ODD 12', 'ODD 8', 'ODD 15', 'ODD 9', 'Les ODD 12 (consommation responsable) et 13 (climat) reviennent presque partout : en cas de doute, citez-les.'],
  ['dd', 2, 'Quel ODD porte sur la lutte contre le changement climatique ?', 'ODD 13', 'ODD 7', 'ODD 11', 'ODD 14', 'ODD 13 = mesures relatives à la lutte contre les changements climatiques.'],
  ['dd', 3, 'Le développement durable repose sur combien de principes fondamentaux ?', '7', '3', '5', '17', 'Chiffre à retenir : 7 principes (ne pas confondre avec les 5 finalités ni les 3 piliers).'],
  ['dd', 3, 'Quelles sont les 3 priorités du développement durable ?', 'Intégrité de l’environnement, équité sociale, efficience économique', 'Croissance, profit, compétitivité', 'Production, consommation, exportation', 'Gouvernance, éthique, reporting', 'Approche globale, équilibrée et à long terme.'],
  ['dd', 3, 'Quel objectif de l’Aide Publique au Développement (APD) en % du PIB ?', '0,7 %', '0,1 %', '1,5 %', '3 %', 'L’objectif de l’APD est de 0,7 % du PIB.'],
  ['dd', 3, 'L’Agenda 21 est organisé en combien de thèmes ?', '4', '2', '3', '5', 'Agenda 21 : 4 thèmes (économie et société, écologie, composantes de la société, moyens de mise en œuvre).'],

  // ───────── ESG, ISR & reporting
  ['esg', 1, 'Que signifie ESG ?', 'Environnemental, Social, Gouvernance', 'Économique, Social, Géographique', 'Énergie, Sécurité, Gestion', 'Éthique, Solidarité, Gouvernement', 'ESG = cadre d’évaluation utilisé par les investisseurs.'],
  ['esg', 1, 'Lequel est un critère environnemental de l’ESG ?', 'Les émissions de gaz à effet de serre', 'La structure du conseil d’administration', 'La diversité et l’inclusion', 'Les systèmes de contrôle interne', 'Pilier E : émissions, ressources, pollution/déchets, biodiversité.'],
  ['esg', 1, 'Qu’est-ce que le greenwashing ?', 'Une communication trompeuse donnant une image écologique sans actions réelles', 'Un label officiel pour les produits bio', 'Une méthode de recyclage des déchets', 'Une taxe sur les entreprises polluantes', 'Greenwashing = image verte sans actions réelles.'],
  ['esg', 2, 'Lequel est un critère de gouvernance de l’ESG ?', 'Les systèmes de contrôle interne', 'Les conditions de travail', 'La biodiversité', 'L’impact social', 'Pilier G : conseil d’administration, transparence, responsabilité/éthique, contrôle interne.'],
  ['esg', 2, 'Quelle est la différence entre RSE et ESG ?', 'La RSE est une démarche volontaire de l’entreprise ; l’ESG est le cadre d’évaluation des investisseurs', 'La RSE est un cadre d’évaluation des investisseurs ; l’ESG est une démarche volontaire', 'Il n’y a aucune différence', 'L’ESG est une loi, la RSE un label', 'RSE = ce que fait l’entreprise ; ESG = comment les investisseurs l’évaluent.'],
  ['esg', 2, 'Que signifie ISR ?', 'Investissement Socialement Responsable', 'Indice de Sécurité Réglementaire', 'Impôt sur les Sociétés Responsables', 'Initiative de Solidarité Régionale', 'L’ISR sélectionne les sociétés aux bonnes pratiques environnementales, sociales et de gouvernance.'],
  ['esg', 2, 'À quoi sert la plateforme Greenly ?', 'À mesurer, réduire et piloter son empreinte carbone', 'À noter la RSE des fournisseurs', 'À certifier du bois', 'À auditer des comptes financiers', 'Greenly = comptabilité carbone automatisée (bilan carbone).'],
  ['esg', 2, 'Qu’est-ce qu’EcoVadis ?', 'Une plateforme d’évaluation de la performance RSE des entreprises', 'Un label pour les bâtiments', 'Une norme ISO', 'Un fonds d’investissement', 'EcoVadis = notation RSE, utilisée à l’échelle mondiale.'],
  ['esg', 2, 'Quels sont les 3 types de standards GRI ?', 'Universels, sectoriels, thématiques', 'Locaux, nationaux, mondiaux', 'Obligatoires, volontaires, facultatifs', 'Sociaux, financiers, fiscaux', 'Mnémonique U-S-T : les standards universels s’appliquent à toutes les organisations.'],
  ['esg', 3, 'Que mesure le SROI ?', 'Le retour social sur investissement, en monétisant les bénéfices sociaux', 'Le taux de rotation du personnel', 'La rentabilité financière annuelle', 'La quantité de CO₂ évitée', 'SROI = Social Return on Investment : coûts engagés croisés avec bénéfices sociaux générés.'],
  ['esg', 3, 'Quelles caractéristiques doivent avoir les KPI pour évaluer une RSE de manière structurée ?', 'Spécifiques, mesurables, comparables, révisables, communiqués', 'Simples, mensuels, confidentiels, rigides, internes', 'Rapides, rentables, régionaux, rares, réguliers', 'Légaux, locaux, lourds, longs, linéaires', 'Mnémonique SMCRC.'],
  ['esg', 3, 'Qu’est-ce que Datamaran ?', 'Un logiciel de veille réglementaire et de matérialité RSE', 'Un label de pêche durable', 'Une norme de sécurité alimentaire', 'Une plateforme de financement participatif', 'Parmi les outils numériques RSE : Zei (autoévaluation PME), Greenly (carbone), Datamaran (veille).'],

  // ───────── Normes & labels
  ['normes', 1, 'Quelle norme ISO concerne le management environnemental ?', 'ISO 14001', 'ISO 9001', 'ISO 26000', 'ISO 50001', '« Le 14 juillet, on est dehors, dans la nature » : 14001 = environnement.'],
  ['normes', 1, 'L’ISO 9001 porte sur…', 'La qualité', 'L’environnement', 'L’énergie', 'La sécurité alimentaire', '9001 = qualité ; 14001 = environnement ; 50001 = énergie ; 22000 = aliments.'],
  ['normes', 1, 'L’ISO 26000 est…', 'Une norme de lignes directrices pour la RSE, non certifiable', 'Une norme certifiable de management environnemental', 'Un label sur le bois', 'Une loi européenne', 'ISO 26000 = lignes directrices ; ISO 14001 et 9001 = normes de management certifiables.'],
  ['normes', 2, 'Que couvre l’ISO 50001 ?', 'Le système de management de l’énergie', 'Les achats responsables', 'La sécurité des aliments', 'Le bien-être des occupants', 'ISO 50001 = énergie.'],
  ['normes', 2, 'Que couvre l’ISO 22000 ?', 'La sécurité des aliments à toutes les étapes de la chaîne alimentaire', 'La qualité des services', 'La responsabilité sociétale', 'Le management de l’énergie', 'ISO 22000 = aliments.'],
  ['normes', 2, 'Que couvre l’ISO 20400 ?', 'Les achats responsables', 'La santé et la sécurité au travail', 'La gestion des déchets', 'Le reporting extra-financier', 'ISO 20400 = lignes directrices pour les achats responsables.'],
  ['normes', 2, 'Que couvre la norme SA8000 ?', 'Les conditions de travail et les droits des travailleurs', 'Les émissions de carbone', 'La traçabilité du bois', 'La gouvernance des fonds', '« 8 heures de travail » : SA8000 = conditions de travail.'],
  ['normes', 2, 'À quoi correspond le label FSC ?', 'Aux forêts : bois issu de forêts gérées de façon responsable', 'À la pêche durable', 'Aux textiles biologiques', 'Aux bâtiments à haute qualité environnementale', 'FSC = Forest Stewardship Council.'],
  ['normes', 2, 'À quoi correspond le label MSC ?', 'À la pêche durable (Marine Stewardship Council)', 'Au bois certifié', 'Aux bâtiments verts', 'À la notation RSE', 'MSC = mer / pêche durable.'],
  ['normes', 2, 'Combien de principes et de questions centrales comporte l’ISO 26000 ?', '7 principes et 7 questions centrales', '5 principes et 7 questions centrales', '7 principes et 9 questions centrales', '10 principes et 10 questions centrales', '« Gérer Des Travailleurs Est Le Cœur de la Communauté » pour retenir les 7 questions centrales.'],
  ['normes', 2, 'Quelle est la première question centrale de l’ISO 26000 ?', 'La gouvernance de l’organisation', 'L’environnement', 'Les relations et conditions de travail', 'Les questions relatives aux consommateurs', 'Les 2 premières : gouvernance, droits de l’homme. Les 2 dernières : consommateurs, communautés et développement local.'],
  ['normes', 3, 'Quels sont les deux premiers principes de l’ISO 26000 ?', 'Redevabilité et transparence', 'Éthique et légalité', 'Équité et précaution', 'Solidarité et participation', 'Les deux derniers : respect des normes internationales de comportement ; respect des droits de l’Homme.'],
  ['normes', 3, 'La norme SA8000 repose sur combien de domaines clés ?', '9', '5', '7', '12', 'Travail des enfants, travail forcé, santé et sécurité, liberté d’association, discrimination, pratiques disciplinaires, temps de travail, rémunération, système de gestion.'],
  ['normes', 3, 'Le Pacte mondial (Global Compact) des Nations Unies a été lancé en…', '2000, avec 10 principes', '1992, avec 7 principes', '2010, avec 5 principes', '2015, avec 17 principes', 'Initiative volontaire de l’ONU : droits de l’homme, travail, environnement, lutte contre la corruption.'],
  ['normes', 3, 'Quels sont les types de certification du label FSC ?', 'FSC 100 %, FSC Recyclé, FSC Mixte', 'FSC Bronze, Argent, Or', 'FSC Local, National, International', 'FSC Bois, Papier, Carton', 'FSC Mixte = mélange de bois certifié, recyclé et/ou contrôlé.'],
  ['normes', 3, 'La loi AGEC (anti-gaspillage) a été promulguée en…', 'Février 2020', 'Mars 2015', 'Janvier 2010', 'Juin 2024', 'Loi française : réduire les déchets, préserver les ressources, favoriser réemploi et recyclage.'],
  ['normes', 3, 'HQE, LEED et WELL sont des labels pour…', 'Les bâtiments', 'Les textiles', 'Les produits de la mer', 'Les services financiers', 'HQE (France), LEED (États-Unis), WELL (bien-être des occupants).'],

  // ───────── Climat, carbone & énergie
  ['climat', 1, 'Que signifie la neutralité carbone ?', 'Un équilibre entre les gaz à effet de serre émis et ceux retirés (zéro émission nette)', 'Ne plus produire aucun déchet', 'Supprimer toutes les industries', 'Planter un arbre par habitant', 'Émis = retiré (zéro net).'],
  ['climat', 1, 'Quand l’Accord de Paris a-t-il été adopté ?', 'Le 12 décembre 2015', 'Le 5 juin 1992', 'Le 11 décembre 1997', 'Le 1er janvier 2000', 'Adopté à la COP21, à Paris.'],
  ['climat', 1, 'Que vise l’Accord de Paris ?', 'Limiter le réchauffement bien en dessous de 2 °C, idéalement à 1,5 °C', 'Atteindre 3 °C maximum', 'Supprimer tous les combustibles fossiles en 2025', 'Limiter à 5 % les émissions mondiales', 'Chiffres : 2 °C / 1,5 °C.'],
  ['climat', 1, 'Que signifie COP ?', 'Conférence des Parties', 'Comité d’Organisation Planétaire', 'Convention Officielle du Pétrole', 'Coopération pour l’Océan et la Planète', 'Réunion annuelle des pays signataires de la CCNUCC.'],
  ['climat', 2, 'Quelles sont les étapes pour atteindre la neutralité carbone ?', 'Mesurer, réduire, puis compenser le résiduel', 'Compenser, puis ignorer, puis communiquer', 'Planter, vendre, déclarer', 'Interdire, taxer, supprimer', 'Mnémonique M-R-C : on ne compense que les émissions résiduelles incompressibles.'],
  ['climat', 2, 'Quel objectif de température fixe le 6ᵉ rapport du GIEC ?', '1,5 °C', '0,5 °C', '2,5 °C', '4 °C', 'Le GIEC réclame aussi −43 % de CO₂ d’ici 2030 et la neutralité carbone vers 2050.'],
  ['climat', 2, 'Quelle est l’unité de mesure de l’empreinte écologique ?', 'L’hectare global (hag) par personne', 'La tonne de CO₂ par an', 'Le kilowattheure', 'Le mètre carré par habitant', 'Un hectare global = un hectare à productivité moyenne mondiale.'],
  ['climat', 2, 'Qu’est-ce que l’empreinte carbone ?', 'La quantité totale de gaz à effet de serre émise, directement ou indirectement, par une activité, une personne, une entreprise ou un pays', 'La surface de terre nécessaire à une population', 'Le coût de l’énergie d’une usine', 'Le nombre d’arbres plantés par une entreprise', 'À distinguer de l’empreinte écologique (surface de terre et d’eau).'],
  ['climat', 2, 'Laquelle de ces sources n’est PAS une énergie renouvelable ?', 'Le charbon', 'L’éolien', 'La biomasse', 'La géothermie', 'ENR : solaire, éolien, hydroélectricité, biomasse, géothermie.'],
  ['climat', 3, 'Le 6ᵉ rapport du GIEC réclame une baisse des émissions mondiales de CO₂ de combien d’ici 2030 (par rapport à 2019) ?', '43 %', '10 %', '25 %', '65 %', '−43 % d’ici 2030, neutralité carbone vers 2050.'],
  ['climat', 3, 'Quelle est la différence entre neutralité carbone et neutralité écologique ?', 'La neutralité carbone ne concerne que le CO₂ et les GES ; la neutralité écologique est plus globale (biodiversité, eau, sols, ressources)', 'Il n’y en a aucune', 'La neutralité écologique ne concerne que les forêts', 'La neutralité carbone inclut la biodiversité, pas la neutralité écologique', 'Écologique = carbone + biodiversité + pollution + épuisement des ressources.'],
  ['climat', 3, 'Pour quelle année la décarbonation vise-t-elle la neutralité carbone (Accord de Paris) ?', '2050', '2025', '2030', '2100', 'La décarbonation = réduire voire éliminer les GES, surtout le CO₂.'],

  // ───────── Économie circulaire & déchets
  ['circulaire', 1, 'Quel est le but de l’économie circulaire ?', 'Garder produits et ressources en circulation le plus longtemps possible', 'Extraire davantage de matières premières', 'Jeter après usage unique', 'Exporter les déchets', 'Réduire, réemployer, réparer, recycler, écoconcevoir.'],
  ['circulaire', 1, 'Quel modèle le développement durable remet-il en cause pour les déchets ?', 'Le modèle linéaire : extraire → consommer → jeter', 'Le modèle circulaire', 'Le modèle coopératif', 'Le modèle local', 'Il privilégie prévention, recyclage, réutilisation et réduction.'],
  ['circulaire', 1, 'Que signifie le R1 du cadre des 9R ?', 'Refuser', 'Recycler', 'Réparer', 'Récupérer', 'R1 Refuser : éviter la consommation inutile et les produits à usage unique.'],
  ['circulaire', 2, 'Combien de « R » comporte le cadre de l’économie circulaire ?', '9', '4', '6', '12', 'Les 9R : Refuser, Réduire, Réutiliser, Réparer, Rénover, Remanufacturer, Réaffecter, Recycler, Récupérer.'],
  ['circulaire', 2, 'Comment se répartissent les 9R en boucles ?', '3 courtes, 4 moyennes, 2 longues', '2 courtes, 4 moyennes, 3 longues', '4 courtes, 3 moyennes, 2 longues', '3 courtes, 3 moyennes, 3 longues', 'Schéma 3-4-2. Plus le numéro est petit, mieux c’est.'],
  ['circulaire', 2, 'Quel « R » appartient aux longues boucles ?', 'Recycler', 'Réparer', 'Réutiliser', 'Refuser', 'Longues boucles : R8 Recycler et R9 Récupérer.'],
  ['circulaire', 2, 'Quels sont les R des boucles courtes ?', 'Refuser, Réduire, Réutiliser', 'Réparer, Rénover, Remanufacturer', 'Recycler, Récupérer, Réaffecter', 'Refuser, Recycler, Réparer', 'Boucles courtes (3) : R1 à R3.'],
  ['circulaire', 2, 'Quelle est la règle des 4R du développement durable ?', 'Réduire, Réutiliser, Réparer, Recycler', 'Refuser, Rénover, Récupérer, Réaffecter', 'Réduire, Remanufacturer, Récolter, Rembourser', 'Réfléchir, Réagir, Réformer, Répartir', 'À ne pas confondre avec les 9R.'],
  ['circulaire', 3, 'Que signifie « remanufacturer » (R6) ?', 'Fabriquer des produits neufs à partir de composants de produits usagés', 'Remettre à neuf un produit existant', 'Transformer les déchets en matières premières', 'Trouver une nouvelle utilisation à un produit', 'Rénover (R5) = remettre à neuf ; Réaffecter (R7) = nouvelle utilisation.'],
  ['circulaire', 3, 'Sur quels piliers repose l’économie verte ?', 'Efficacité écologique, croissance inclusive, innovation durable', 'Profit, vitesse, volume', 'Recyclage, taxation, interdiction', 'Énergie, eau, déchets', 'L’économie verte repose sur 3 piliers.'],

  // ───────── Cuisson propre
  ['cuisson', 1, 'En quelle année la Clean Cooking Alliance (CCA) a-t-elle été créée ?', '2010', '1992', '2000', '2015', 'Créée en 2010 (Fondation des Nations Unies).'],
  ['cuisson', 2, 'Quels ODD intègrent la cuisson propre ?', 'ODD 3, 5, 7 et 13', 'ODD 1, 2, 4 et 6', 'ODD 8, 9, 10 et 11', 'ODD 14, 15, 16 et 17', 'Santé (3), égalité des sexes (5), énergie (7), climat (13).'],
  ['cuisson', 2, 'Combien de décès par an la cuisson non propre provoque-t-elle selon l’OMS ?', '3,2 millions', '320 000', '32 millions', '700 000', 'La pollution de l’air cause 7 millions de morts prématurées par an.'],
  ['cuisson', 2, 'Quel est l’un des objectifs de la cuisson propre ?', 'Réduire les risques sanitaires liés à la fumée et lutter contre le changement climatique', 'Augmenter l’usage du bois de chauffe', 'Supprimer l’électricité', 'Réserver la cuisine aux pays développés', 'Elle autonomise aussi les femmes et réduit les émissions.'],
  ['cuisson', 3, 'Combien de morts prématurées par an la pollution de l’air provoque-t-elle ?', '7 millions', '700 000', '70 millions', '1,5 million', 'Chiffre à ne pas confondre avec les 3,2 millions de décès liés à la cuisson non propre.'],

  // ───────── ESS
  ['ess', 1, 'Que signifie ESS ?', 'Économie Sociale et Solidaire', 'Économie Standard des Services', 'Énergie Sociale Spécifique', 'Entreprise Solidaire Salariée', 'Attention : le document écrit parfois « Économie Sociale Solidaire ».'],
  ['ess', 1, 'Quelles valeurs partagent les organisations de l’ESS ?', 'Solidarité, utilité sociale, gouvernance démocratique', 'Profit, concurrence, secret', 'Vitesse, volume, rendement', 'Hiérarchie, confidentialité, exclusivité', 'Réflexe Vrai/Faux : idées positives et inclusives → souvent vraies.'],
  ['ess', 2, 'Quelles sont les principales organisations de l’ESS ?', 'Associations, coopératives, mutuelles, fondations', 'Banques d’affaires, holdings, fonds spéculatifs', 'Multinationales cotées', 'Administrations centrales', 'Plus certaines entreprises sociales.'],
  ['ess', 2, 'Qu’est-ce qu’une coopérative ?', 'Une entreprise détenue et gérée collectivement par ses membres, qui décident démocratiquement', 'Une entreprise détenue par un seul actionnaire', 'Un service de l’État', 'Une association de consommateurs sans activité', 'Les bénéfices sont partagés.'],
  ['ess', 2, 'Qu’est-ce qu’une mutuelle ?', 'Une organisation à but non lucratif fournissant assurance ou protection sociale fondée sur la solidarité', 'Une banque d’investissement', 'Un fonds de pension privé', 'Une société cotée en bourse', 'Basée sur la solidarité entre adhérents.'],
  ['ess', 2, 'Quel type d’emplois l’ESS crée-t-elle ?', 'Des emplois non délocalisables qui renforcent l’ancrage territorial', 'Des emplois exclusivement à l’étranger', 'Uniquement des emplois temporaires', 'Uniquement des emplois publics', 'L’ESS favorise l’emploi local et la mixité sociale.'],
  ['ess', 3, 'Quelle est la différence entre une entreprise classique et une entreprise de l’ESS ?', 'La classique vise surtout le profit ; l’ESS est tournée vers l’intérêt général avec des règles garantissant solidarité et équité', 'Aucune différence', 'La classique est toujours publique', 'L’ESS ne peut pas être rentable', 'Les structures ESS contribuent à un développement plus durable.'],

  // ───────── Avantages de la RSE par contexte
  ['avantages', 1, 'Lequel n’est PAS un avantage attendu de la RSE ?', 'Augmenter les risques juridiques', 'Attirer et fidéliser les talents', 'Réduire les coûts', 'Renforcer la réputation', 'Mnémonique CRITIC : Coûts, Réputation, Investisseurs, Talents, Innovation, Clients.'],
  ['avantages', 1, 'Comment la RSE réduit-elle les coûts opérationnels ?', 'Efficacité énergétique, éco-conception, réduction des déchets', 'En supprimant la formation', 'En augmentant les stocks', 'En multipliant les intermédiaires', 'Énergie, éco-conception, déchets.'],
  ['avantages', 2, 'Pourquoi la qualité de vie au travail (QVT) booste-t-elle la performance ?', 'Moins de turnover, d’absentéisme et d’accidents, plus d’engagement', 'Elle supprime la hiérarchie', 'Elle augmente les horaires', 'Elle réduit la formation', 'La RSE réduit aussi le taux de rotation du personnel.'],
  ['avantages', 2, 'Comment la taxe carbone agit-elle ?', 'Elle fait payer la pollution, ce qui réduit le CO₂ et stimule la transition', 'Elle subventionne les énergies fossiles', 'Elle interdit toute émission', 'Elle supprime la fiscalité des entreprises', 'Elle intègre le coût de la pollution et stimule l’efficacité.'],
  ['avantages', 2, 'Quels sont les avantages de la RSE pour une petite entreprise ?', 'Ancrage local, clients sensibles à l’éthique, coûts réduits à long terme, attractivité', 'Exemption totale d’impôts', 'Disparition de la concurrence', 'Interdiction de nouveaux concurrents', 'La RSE aide aussi les petites entreprises à se différencier des plus grandes.'],
  ['avantages', 2, 'Quelles sont les trois conditions de succès de la RSE dans une petite structure ?', 'Simplicité, pertinence locale, authenticité', 'Budget, publicité, rapidité', 'Hiérarchie, secret, volume', 'Exclusivité, prix, image', 'Simplicité, pertinence locale, authenticité.'],
  ['avantages', 3, 'Une entreprise du marché intermédiaire inférieur a un chiffre d’affaires annuel compris entre…', '10 et 500 millions de dollars', '1 et 10 millions de dollars', '500 millions et 1 milliard de dollars', '100 000 et 1 million de dollars', 'Chiffre du glossaire à connaître.'],

  // ───────── Parties prenantes
  ['parties', 1, 'Laquelle est une partie prenante interne ?', 'Les salariés', 'Les ONG', 'Les collectivités', 'Les investisseurs', 'Internes : salariés, syndicats, direction. Externes : clients, ONG, collectivités, investisseurs.'],
  ['parties', 1, 'Laquelle est une partie prenante externe ?', 'Une ONG', 'La direction', 'Les salariés', 'Les syndicats internes', 'Les parties prenantes externes : clients, ONG, collectivités, investisseurs.'],
  ['parties', 2, 'Quel est le rôle du conseil d’administration dans la RSE ?', 'Garant de la stratégie, de la gestion des risques et du contrôle de la performance', 'Exécuter seul toutes les actions terrain', 'Fixer les prix', 'Rédiger les contrats de travail', 'Mnémonique : Stratégie, risques, contrôle.'],
  ['parties', 2, 'Que signifie ITIE ?', 'Initiative pour la Transparence des Industries Extractives', 'Institut des Technologies Industrielles et Énergétiques', 'Indice de Transition des Industries Écologiques', 'Initiative Territoriale pour l’Innovation Économique', 'Outil de transparence pour les industries minières et extractives.'],
  ['parties', 2, 'Comment consulter et impliquer les personnes concernées par les décisions ?', 'Enquêtes, comités de parties prenantes, co-construction', 'Par une décision unilatérale', 'Par un affichage unique', 'En évitant toute discussion', 'Une entreprise responsable consulte et implique les personnes concernées.'],
  ['parties', 2, 'Quel est le rôle des RH dans la RSE ?', 'Traduire les engagements en actions sociales concrètes', 'Remplacer le comité RSE', 'Superviser les audits financiers', 'Fixer le prix des produits', 'Diversité, conditions de travail, formation, dialogue social, recrutement responsable.'],
  ['parties', 3, 'Pourquoi dit-on que le comité RSE est l’« ambassadeur » de la RSE ?', 'Il ancre la RSE en sensibilisant et en valorisant les bonnes pratiques', 'Il représente l’entreprise à l’étranger', 'Il signe les contrats commerciaux', 'Il vend les produits écoresponsables', 'Ambassadeur = sensibilisation et valorisation.'],

  // ───────── Crise, médias & risques
  ['crise', 1, 'Qu’est-ce que le social washing ?', 'L’équivalent du greenwashing, mais sur les enjeux sociaux', 'Un label de commerce équitable', 'Un audit de conditions de travail', 'Une méthode de recrutement', 'Image sociale affichée sans actions réelles.'],
  ['crise', 1, 'Quel risque court une entreprise dont la communication RSE est mensongère ?', 'Boycott, amendes et poursuites devant les tribunaux', 'Des subventions supplémentaires', 'Une meilleure notation', 'Aucun risque', 'Les risques d’une RSE mal faite se résument en 3 pertes : confiance, argent, légalité.'],
  ['crise', 2, 'Qu’est-ce que l’« effet boomerang » en communication RSE ?', 'Une entreprise qui surcommunique sur sa vertu sera jugée beaucoup plus durement en cas de scandale', 'Un retour de produits défectueux', 'Une hausse des ventes après une campagne', 'Un effet fiscal positif', 'La sincérité protège de cet effet.'],
  ['crise', 2, 'Pourquoi la RSE protège-t-elle face à une crise médiatique ?', 'Une réputation construite en amont donne le bénéfice du doute', 'Elle permet de cacher les informations', 'Elle supprime les journalistes', 'Elle garantit l’impunité juridique', 'Réputation construite avant → bénéfice du doute.'],
  ['crise', 2, 'Quel est le bénéfice d’une communication RSE sincère ?', 'Authenticité et transparence : pas de greenwashing', 'Plus de publicité gratuite', 'Moins d’audits', 'Suppression des indicateurs', 'Authenticité + transparence = pas de greenwashing.'],
  ['crise', 3, 'Comment la RSE permet-elle de prévenir les risques juridiques ?', 'Respect strict des normes de gouvernance et des lois environnementales, donc moins de litiges et d’amendes', 'Elle remplace les avocats', 'Elle exonère de toute loi', 'Elle supprime les contrôles', 'Normes + lois respectées → moins de litiges.'],

  // ───────── Secteurs d'activité
  ['secteurs', 1, 'Que signifie IoT ?', 'Internet of Things (objets connectés)', 'Index of Trade', 'Institut of Technology', 'Intelligence of Tools', 'Capteurs IoT : suivi en temps réel des anomalies et pics d’énergie.'],
  ['secteurs', 1, 'Quel levier permet de réduire les coûts logistiques grâce à la RSE ?', 'Optimiser les transports et éco-concevoir les emballages', 'Multiplier les trajets à vide', 'Éviter tout pilotage des flux', 'Importer systématiquement de plus loin', 'Pilotage des flux, logistique circulaire, partenaires responsables.'],
  ['secteurs', 2, 'Pourquoi encourager la RSE dans les entreprises de transport ?', 'Performance économique, confiance des clients, conformité aux attentes réglementaires', 'Pour supprimer la concurrence', 'Pour éviter toute formation', 'Pour augmenter les émissions', 'Réduire émissions et nuisances, améliorer les conditions de travail.'],
  ['secteurs', 2, 'Quel est le défi humain de la transition pour les industries à forte intensité carbone ?', 'Former et reconvertir vers les métiers de la transition', 'Réduire les salaires', 'Supprimer la formation', 'Recruter uniquement à l’étranger', 'Défi financier : investir massivement dans les technologies propres sans tuer les marges.'],
  ['secteurs', 3, 'Quel est le défi réglementaire d’un secteur très carboné ?', 'Harmoniser les taxes carbone mondiales pour éviter la concurrence déloyale', 'Supprimer toutes les taxes', 'Exempter les grandes entreprises', 'Interdire l’export', 'Équilibre compétitivité / transition.'],
  ['secteurs', 3, 'Pourquoi réduire les émissions de CO₂ est-il un défi structurel pour les industries à forte intensité carbone ?', 'Leur modèle est intrinsèquement polluant : investissements massifs et transition longue', 'Elles n’émettent presque rien', 'La réglementation l’interdit', 'Les technologies propres n’existent pas', 'On ne peut pas tout transformer sans casser l’outil industriel.'],
];

export const QCM_LIST: QCM[] = RAW.map((r, i) => {
  const [section, level, q, good, w1, w2, w3, explain] = r;
  const wrong = [w1, w2, w3];
  const pos = (i * 3 + 1) % 4; // position déterministe de la bonne réponse
  const options = [...wrong];
  options.splice(pos, 0, good);
  return {
    id: `qcm-${i + 1}`,
    type: 'qcm' as const,
    section,
    level,
    q,
    options,
    answer: pos,
    explain,
  };
});
