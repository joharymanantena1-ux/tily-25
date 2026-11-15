# SAMPATI – Fivondronana faha-25 Alasora

Site statique (Astro 5), entièrement en malagasy, conçu comme un album.

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Où modifier le contenu

Tout le contenu est dans `src/data/` ; les pages (`src/pages/`) ne font que l'afficher.

| Fichier | Contenu |
| --- | --- |
| `site.ts` | Nom du site, menu, coordonnées |
| `tantara.ts` | Frise historique et souvenirs attendus |
| `sampana.ts` | Branches Tily / Mpanazava, couleurs officielles |
| `lalana.ts` | Lois et engagements (textes officiels : ne pas reformuler) |
| `hetsika.ts` | Types d'activités, calendrier |
| `sary.ts` + `tahiry.ts` | Photos, crédits, classement de la galerie |
| `olona.ts` | Responsables, fondateurs, anciens (FMT2S) |
| `loharano.ts` | Sources citées |

## Principes de présentation

- Un seul logo : l'emblème SAMPATI FJKM (`src/assets/marika/sampati.png`), dans le menu, la couverture, la page « Marika » et l'icône d'onglet. La rangée officielle des quatre logos (AMGE, Mpanazava, Tily, OMMS) n'apparaît qu'une fois, comme illustration, sur la page « Marika ».
- Pas de cartes, d'ombres ni de décor : titres forts, filets fins, photos réelles montrées entières.
- Chaque section tient en une idée ; les détails et les sources sont dans un bloc « Bebe kokoa » (composant `Bebe.astro`).
- Une action principale par page : le bouton « Manaraka » en bas, ou le bouton propre à la page (accueil, contact).

## Contenu à confirmer

- Un astérisque `*` (composant `Sata.astro`) marque ce qui vient d'une source non officielle ; la note `Kintana.astro` l'explique une fois par page.
- Les emplacements vides sont écrits en italique (« Andrasana… »).
- Le reste vient de sources officielles, listées sur la page `/loharano/`.

## Photos et logos

- Les photos actuelles sont des images libres de Wikimedia Commons (sans personne identifiable), à remplacer par celles du groupe.
- Aucune photo de mineur ne doit être publiée sans autorisation écrite des parents.
- Les logos sont affichés entiers et non modifiés ; les règles d'usage du logo Ravinala sont sur <https://fiziantsika.scout.mg/>.
- Uniformes : seule la description officielle est affichée, sans image, en attendant de vraies photos du groupe.
