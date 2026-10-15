// Photos libres de droits (Unsplash). Les identifiants ont été vérifiés visuellement.
// Pour les télécharger en local : `npm run photos` (elles seront alors servies depuis /public/photos).
// Vous pouvez aussi remplacer n'importe quelle photo en déposant public/photos/<clé>.jpg.

export type PhotoDef = { id: string; alt: string; credit: string };

export const PHOTOS = {
  hero: {
    id: '1584012961487-006d0c5c3c99',
    alt: 'Trois jeunes professionnels africains souriants, debout dans un cadre verdoyant',
    credit: 'Dr Josiah Sarpong',
  },
  team: {
    id: '1573167627769-e201a7ddf409',
    alt: 'Équipe de femmes africaines en réunion autour d’une table',
    credit: 'Christina @ wocintechchat.com',
  },
  team2: {
    id: '1653566031486-dc4ead13a35d',
    alt: 'Collègues noirs travaillant ensemble sur des ordinateurs',
    credit: 'UK Black Tech',
  },
  group: {
    id: '1739298061757-7a3339cee982',
    alt: 'Groupe de quatre collègues africains souriants',
    credit: 'Ninthgrid',
  },
  solar: {
    id: '1680355065203-43ad84bb6e69',
    alt: 'Grande centrale solaire avec des rangées de panneaux',
    credit: 'Harisankar',
  },
  solarRural: {
    id: '1753881110611-00755160afd2',
    alt: 'Panneaux solaires installés sur un bâtiment en milieu rural',
    credit: 'Nathan Wong',
  },
  farmer: {
    id: '1741874299706-2b8e16839aaa',
    alt: 'Agriculteur africain s’occupant de ses cultures dans un champ vert',
    credit: 'Richard Nyoni',
  },
  irrigation: {
    id: '1567497063796-7952e455a2a6',
    alt: 'Hommes réparant un tuyau d’irrigation dans une bananeraie',
    credit: 'Daniel Kawed',
  },
  womenFarm: {
    id: '1473605768212-7e1f2c756179',
    alt: 'Femme africaine portant son enfant dans le dos en cultivant la terre',
    credit: 'Annie Spratt',
  },
  planting: {
    id: '1651838677683-f642527059c6',
    alt: 'Mains plantant un jeune plant dans la terre',
    credit: 'E. Diop',
  },
  tea: {
    id: '1552645388-31461619e5e3',
    alt: 'Cueilleuse récoltant des feuilles dans une plantation',
    credit: 'Nel Ranoko',
  },
  tailor: {
    id: '1687422808289-e721259c9eb4',
    alt: 'Couturier africain travaillant à sa machine à coudre',
    credit: 'Ali Mkumbwa',
  },
  market: {
    id: '1687422809654-579d81c29d32',
    alt: 'Commerçante africaine devant son étal de fruits',
    credit: 'Ali Mkumbwa',
  },
  waste: {
    id: '1666804855649-77057e76281c',
    alt: 'Grand tas de déchets plastiques à valoriser',
    credit: 'Calvin Sihongo',
  },
  village: {
    id: '1680200023508-5289ae3de157',
    alt: 'Vue aérienne d’un village africain au bord de l’eau',
    credit: 'Kay Boadi',
  },
  women: {
    id: '1553775927-a071d5a6a39a',
    alt: 'Trois femmes portant des bassines sur la tête sur un chemin de terre',
    credit: 'Ninno JackJr',
  },
  portrait: {
    id: '1573496799515-eebbb63814f2',
    alt: 'Femme africaine souriante, bras croisés',
    credit: 'Christina @ wocintechchat.com',
  },
  portrait2: {
    id: '1666867540898-aaa1993ffabc',
    alt: 'Femme africaine souriante en chemisier bleu',
    credit: 'Raymond Owusu-Afriyie',
  },
} satisfies Record<string, PhotoDef>;

export type PhotoKey = keyof typeof PHOTOS;

export function remoteUrl(key: PhotoKey, width = 1200): string {
  return `https://images.unsplash.com/photo-${PHOTOS[key].id}?auto=format&fit=crop&w=${width}&q=75`;
}
