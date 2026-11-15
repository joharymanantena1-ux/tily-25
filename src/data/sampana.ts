import type { LoharanoKey } from './loharano';

// Lokon'ny sampana: kaody ofisialy avy amin'ny « Fiziantsika » (Tily eto Madagasikara, edisiona 2025).
export const loko = {
  mavo: { anarana: 'Mavo', hex: '#EFC100', soratra: '#3d3000' },
  maitso: { anarana: 'Maitso', hex: '#00911B', soratra: '#ffffff' },
  mena: { anarana: 'Mena', hex: '#EF0013', soratra: '#ffffff' },
  menafify: { anarana: 'Menafify', hex: '#6D071A', soratra: '#ffffff' },
} as const;

export type LokoKey = keyof typeof loko;

export type Sampana = {
  loko: LokoKey;
  anarana: string; // anaran'ny sampana
  sokajy: string | null; // anarana iantsoana ny beazina
  taona: string | null;
  famaritana: string | null; // nalaina avy amin'ny loharano ofisialy
  rafitra?: string[];
  hamarinina?: string; // izay mbola tokony hohamarinina
  loharano: LoharanoKey[];
};

// ————— TILY (zazalahy) — loharano ofisialy: scout.mg —————
export const tily: Sampana[] = [
  {
    loko: 'mavo',
    anarana: 'Sampana Mavo Tily',
    sokajy: 'Lovitao',
    taona: '6 – 11 taona',
    famaritana:
      'Sampana zandriny indrindra. Tanterahina amin’ny alalan’ny lalao ny hetsika rehetra atao. Na dia mbola kely aza ny Lovitao dia miaina sahady ny soatoavina skoto, ary manamarika izany ny Fanekena Lovitao.',
    rafitra: [
      '« Enina »: vondrona kely misy Lovitao 6 eo ho eo, tarihin’ny « Zokin’ny Enina ».',
      '« Andiany »: Enina maromaro mitambatra, tantanin’ny Mpiandraikitra.',
    ],
    loharano: ['tilyMavo', 'fiziantsika'],
  },
  {
    loko: 'maitso',
    anarana: 'Sampana Maitso Tily',
    sokajy: 'Tily',
    taona: '12 – 16 taona',
    famaritana:
      'Miankina amin’ny Lalàna sy Fanekena Tily avokoa ny zavatra atao rehetra. Tanterahina amin’ny alalan’ny asa avy hatrany, eny anivon’ny zavaboahary, ny fanabeazana.',
    rafitra: [
      '« Sokajy »: Tily 4 ka hatramin’ny 8, tarihin’ny Lohan-tsokajy (LS).',
      '« Antoko »: Sokajy 2 hatramin’ny 4, tarihin’ny Mpiandraikitra.',
    ],
    loharano: ['tilyMaitso', 'fiziantsika'],
  },
  {
    loko: 'mena',
    anarana: 'Sampana Mena',
    sokajy: 'Mpiandalana',
    taona: '17 – 19 taona',
    famaritana:
      'Sampana fahatelo. Efa misongadina ny fahamatorana amin’io sokajin-taona io, ka ny fahatsapana sy ny fandraisana andraikitra no hanompanana ny fanabeazana.',
    rafitra: ['« Fokonolona »: Mpiandalana 3 ka hatramin’ny 6 miara-miaina.'],
    loharano: ['tilyMena', 'fiziantsika'],
  },
  {
    loko: 'menafify',
    anarana: 'Sampana Menafify',
    sokajy: 'Menafify',
    taona: 'Aorian’ny faha-19 taona ka hatramin’ny faha-25 taona',
    famaritana:
      'Sampana zokiny indrindra amin’ny salan-taonam-panabeazana Tily. « Fandaharana handraisan’ireo tanora anjara tanteraka » no iainana ao: fanomanana amin’ny asa fivelomana, fampivelarana ny fahaiza-mamorona, ary firotsahana eo amin’ny fiaraha-monina.',
    rafitra: ['« Fokonolona Menafify »: zatovolahy 4 hatramin’ny 8 miara-miaina sy mifanabe.'],
    loharano: ['tilyMenafify', 'fiziantsika'],
  },
];

// ————— MPANAZAVA (zazavavy) —————
// Tsy hita tao amin'ny tranokala ofisialin'ny Mpanazava eto Madagasikara ny antsipirian'ny sampana
// (taona, loko, fanamiana). Izay voamarina ihany no soratana; ny ambiny andrasana.
export const mpanazava: Sampana[] = [
  {
    loko: 'mavo',
    anarana: 'Sampana Mavo Mpanazava',
    sokajy: 'Voronkely',
    taona: null,
    famaritana: null,
    hamarinina:
      'Voalaza ao amin’ny Scoutopedia fa misy Voronkely ao amin’ny Fivondronana. Ny taona sy ny fanazavana ofisialy dia andrasana.',
    loharano: ['scoutopedia', 'wagggs'],
  },
  {
    loko: 'maitso',
    anarana: 'Sampana Maitso Mpanazava',
    sokajy: 'Mpanazava',
    taona: null,
    famaritana: null,
    hamarinina:
      'Voalaza ao amin’ny Scoutopedia fa misy Mpanazava ao amin’ny Fivondronana. Ny taona sy ny fanazavana ofisialy dia andrasana.',
    loharano: ['scoutopedia'],
  },
  {
    loko: 'mena',
    anarana: 'Sampana Mena Mpanazava',
    sokajy: 'Afo',
    taona: null,
    famaritana: null,
    hamarinina:
      'Niforona tamin’ny 1946 ny Sampana Mena Mpanazava; « Afo » no anarana omen’ny AMGE azy. Hamarinina raha misy ao amin’ny Fivondronana, sy ny taona voafaritra.',
    loharano: ['mpanazavaTantara', 'wagggs'],
  },
  {
    loko: 'menafify',
    anarana: 'Sampana Menafify Mpanazava',
    sokajy: null,
    taona: null,
    famaritana: null,
    hamarinina:
      'Tsy nahitana loharano ofisialy momba ny Sampana Menafify eo anivon’ny Mpanazava. Andrasana ny fanazavan’ny Fivondronana.',
    loharano: [],
  },
];

// Ireo vondrona ao amin'ny Fivondronana faha-25 — araka ny Scoutopedia (2021). Hohamarinina.
export const vondronaFivondronana = {
  mpanazava: ['Voronkely', 'Mpanazava'],
  tily: ['Lovitao', 'Tily', 'Mpiandalana', 'Menafify'],
  isa: '120 eo ho eo',
};
