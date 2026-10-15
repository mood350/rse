# Miabôh — Entreprises durables

Site Next.js (App Router, TypeScript) sur le développement durable, la RSE et les normes,
avec un espace d'entraînement construit à partir des cours du dossier Miabôh.

## Lancer le site

Prérequis : Node.js 18.18 ou plus récent (https://nodejs.org).

```bash
npm install
npm run dev        # http://localhost:3000
```

Version de production : `npm run build` puis `npm start`.

## Photos

Les photos (personnes noires, agriculture, solaire, déchets, équipes…) viennent d'Unsplash
(libres de droits) et sont chargées depuis leur CDN. Pour les avoir en local :

```bash
npm run photos     # télécharge dans public/photos/<clé>.jpg
```

Vous pouvez aussi remplacer une photo en déposant `public/photos/<clé>.jpg`
(clés : hero, team, team2, group, solar, solarRural, farmer, irrigation, womenFarm,
planting, tea, tailor, market, waste, village, women, portrait, portrait2).
La liste et les crédits sont dans `src/data/photos.ts`.

## Contenu

- `src/data/questions.json` : 642 questions extraites des fiches « Compil Questions concours Jet 1 et 2 »
  (classées par section et niveau automatiquement).
- `src/data/qcm.ts` : 110 QCM rédigés à partir du guide de révision.
- `src/data/memo.ts`, `glossaire.ts`, `normes.ts` : fiches mémo, sigles et normes.
- Niveau de difficulté : 1 facile, 2 intermédiaire, 3 difficile (selon le type de question et la longueur/complexité de la réponse).

## Pages

`/` · `/developpement-durable` · `/rse` · `/normes` · `/mise-en-oeuvre` · `/glossaire` ·
`/apprentissage` (12 sections, parcours complet) · `/apprentissage/examen` · `/apprentissage/memo`

La progression de l'apprenant est stockée dans son navigateur (localStorage).
