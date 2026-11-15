// MPIANDRAIKITRA SY NAMANA
// Tsy misy anarana noforonina eto. Ny anarana rehetra dia homen'ny Fivondronana.
// Aza asiana sarin'olona raha tsy nahazoana alalana.

export type Andraikitra = { andraikitra: string; anarana: string | null; fanamarihana?: string };

// Anaran'andraikitra: araka ny « Fiziantsika » (Tily eto Madagasikara, 2025), pejy « Ireo marika andraikitra ».
export const mpiandraikitra: { vondrona: string; lisitra: Andraikitra[] }[] = [
  {
    vondrona: 'Fitantanana ny Fivondronana',
    lisitra: [
      { andraikitra: 'Mpitandrina', anarana: null },
      { andraikitra: 'Filohan’ny Komitim-pivondronana', anarana: null },
      { andraikitra: 'Toniam-pivondronana', anarana: null },
    ],
  },
  {
    vondrona: 'Tily',
    lisitra: [
      { andraikitra: 'Akela — Sampana Mavo (Lovitao)', anarana: null },
      { andraikitra: 'Tompon-toerana — Sampana Maitso', anarana: null },
      { andraikitra: 'Zokiolona Mena — Mpiandalana', anarana: null },
      { andraikitra: 'Zokiolona Menafify', anarana: null },
    ],
  },
  {
    vondrona: 'Mpanazava',
    lisitra: [
      {
        andraikitra: 'Mpiandraikitra ny Voronkely',
        anarana: null,
        fanamarihana: 'Hamarinina ny anaran’andraikitra ofisialy eo anivon’ny Mpanazava.',
      },
      {
        andraikitra: 'Mpiandraikitra ny Mpanazava',
        anarana: null,
        fanamarihana: 'Hamarinina ny anaran’andraikitra ofisialy eo anivon’ny Mpanazava.',
      },
    ],
  },
];

// Mpanorina — araka ny Scoutopedia (2021). Hohamarinina amin'ny tahirin'ny Fivondronana.
export const mpanorina = [
  { anarana: 'Rasolomanana', anjara: 'Mpanorina' },
  { anarana: 'Randriahonintsoa Seth', anjara: 'Mpanorina' },
  { anarana: 'Chef Rajoelisolo Jean Lequer', anjara: 'Mpiahy tamin’ny fitokanana (1954)' },
];

// Fikambanan'ny tranainy.
// ⚠ Tsy mitovy ny anarana feno ao amin'ny loharano roa — ny Fivondronana no hanapaka:
//   • « Fiziantsika » (Tily eto Madagasikara, 2025): « Firaisan'ny Mpanazava sy Tily Tranainy ary Sakaiza (FMT2S) »
//   • Scoutopedia (2021): « Fikambanan'ny Mpanazava sy Tily Tranainy ary Sakaiza (FMT2S) »
export const tranainy = {
  fanafohezana: 'FMT2S',
  anaranaOfisialy: 'Firaisan’ny Mpanazava sy Tily Tranainy ary Sakaiza',
  anaranaHafa: 'Fikambanan’ny Mpanazava sy Tily Tranainy ary Sakaiza',
  anjara:
    'Voalaza fa manampy ny Fivondronana ara-bola sy ara-teknika ny FMT2S.',
  fehitenda:
    'Miloko maitso manontolo ny fehitendan’ny FMT2S ary ahitana ny marika FMT2S eo amin’ny tendrony.',
};
