// Fampahalalana ankapobeny momba ny tranokala.

export const site = {
  anarana: 'SAMPATI FJKM – Fivondronana faha-25 Alasora',
  anaranaFohy: 'SAMPATI Alasora 25',
  fiangonana: 'FJKM Ambohimanoa Alasora Betesda',
  // Teny eo amin'ny mariky ny SAMPATI FJKM
  teny: 'Aoka hirehitra ny jironareo',
  andininy: 'Lio. 12:35',
  famaritana:
    'Tranokalan’ny Mpanazava sy Tily ao amin’ny Fivondronana faha-25 Alasora, FJKM Ambohimanoa Alasora Betesda.',
};

export type Rubrika = {
  href: string;
  fohy: string; // anarana ao amin'ny menio
  lohateny: string; // anaran'ny pejy (soratra kely eo ambonin'ny lohateny)
  lehibe: string; // lohateny lehibe
};

export const rubrika: Rubrika[] = [
  { href: '/', fohy: 'Fandraisana', lohateny: 'Fandraisana', lehibe: 'Fivondronana faha-25 Alasora' },
  { href: '/tantara/', fohy: 'Tantara', lohateny: 'Tantara', lehibe: 'Ny lalana nodiavina' },
  { href: '/sampana/', fohy: 'Sampana', lohateny: 'Sampana sy sokajy', lehibe: 'Loko efatra, dingana efatra' },
  { href: '/lalana-sy-fanekena/', fohy: 'Lalàna', lohateny: 'Lalàna sy fanekena', lehibe: 'Ny fototra ijoroana' },
  { href: '/asa-sy-hetsika/', fohy: 'Hetsika', lohateny: 'Asa sy hetsika', lehibe: 'Mianatra amin’ny fanaovana' },
  { href: '/tahirin-tsary/', fohy: 'Sary', lohateny: 'Tahirin-tsary', lehibe: 'Fahatsiarovana' },
  { href: '/marika-sy-fanamiana/', fohy: 'Marika', lohateny: 'Marika sy fanamiana', lehibe: 'Izay ahafantarana anay' },
  {
    href: '/mpiandraikitra-sy-namana/',
    fohy: 'Mpiandraikitra',
    lohateny: 'Mpiandraikitra sy namana',
    lehibe: 'Ireo manabe sy manohana',
  },
  { href: '/fifandraisana/', fohy: 'Fifandraisana', lohateny: 'Fifandraisana', lehibe: 'Manorata aminay' },
];

// Fifandraisana — nalaina tao amin'ny Scoutopedia (pejy nohavaozina farany ny 11 desambra 2021).
// Tsy maintsy hamarinin'ny Fivondronana alohan'ny hamoahana ny tranokala.
export const fifandraisana = {
  adiresy: ['FJKM Ambohimanoa Alasora Betesda', 'Alasora, Antananarivo 103'],
  mailaka: 'sampatialasora25@gmail.com',
  facebook: 'Fivondronana Alasora 25',
};
