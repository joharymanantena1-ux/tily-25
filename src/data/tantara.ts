import type { LoharanoKey } from './loharano';

// Tsipi-potoana.
// lehibe:     true = aseho avy hatrany; false = ao ambadiky ny « Hijery bebe kokoa »
// hamarinina: true = avy amin'ny loharano tsy ofisialy; andrasana ny fanamarinan'ny Fivondronana
// fohy:       fehezanteny iray hita avy hatrany
// antsipiriany: fanazavana fanampiny, miseho rehefa sokafana

export type Zava = {
  daty: string;
  sokajy: 'Fivondronana' | 'Tily' | 'Mpanazava' | 'SAMPATI';
  lohateny: string;
  fohy: string;
  antsipiriany?: string;
  lehibe: boolean;
  hamarinina?: boolean;
  loharano: LoharanoKey[];
};

export const frise: Zava[] = [
  {
    daty: '1922',
    sokajy: 'Tily',
    lohateny: 'Ny skoto malagasy voalohany',
    fohy: 'Niseho voalohany nanao fanamiana skoto ny zatovolahy malagasy, teo Antaninarenina.',
    antsipiriany:
      'Tamin’ny Alahadin’ny Sampan-drofia, 9 Aprily 1922: zatovolahy notarihin’i Michael Rajohnson, teo anatrehan’ny Rev. Joseph Fuhler Radley.',
    lehibe: true,
    loharano: ['tilyTantara'],
  },
  {
    daty: '1941',
    sokajy: 'Mpanazava',
    lohateny: 'Fiorenan’ny Mpanazava',
    fohy: 'Niorina ny skotisma zazavavy « unioniste », izay lasa Mpanazava eto Madagasikara.',
    antsipiriany:
      'Mey 1941: « Éclaireuses Unionistes de Madagascar » no anarany tany am-piandohana.',
    lehibe: true,
    loharano: ['mpanazavaTantara', 'wagggs'],
  },
  {
    daty: '1946',
    sokajy: 'Mpanazava',
    lohateny: 'Sampana Mena Mpanazava',
    fohy: 'Niforona ny Sampana Mena eo anivon’ny Mpanazava.',
    lehibe: false,
    loharano: ['mpanazavaTantara', 'wagggs'],
  },
  {
    daty: '1953',
    sokajy: 'Fivondronana',
    lohateny: 'Fiorenan’ny Fivondronana faha-25',
    fohy: 'Niorina tao amin’ny FJKM Ambohimanoa Alasora Betesda ny Fivondronana.',
    antsipiriany:
      'Skoto avy any Antsahamanitra no tonga namporisika ny Fiangonana hanangana sampana skoto. Rasolomanana sy Randriahonintsoa Seth no voalaza fa mpanorina.',
    lehibe: true,
    hamarinina: true,
    loharano: ['scoutopedia'],
  },
  {
    daty: '1954',
    sokajy: 'Fivondronana',
    lohateny: 'Fitokanana ofisialy',
    fohy: 'Notokanana tamin’ny fomba ofisialy ny Fivondronana, ny 3 Aogositra 1954.',
    antsipiriany: 'Chef Rajoelisolo Jean Lequer no voalaza fa mpiahy tamin’izany.',
    lehibe: true,
    hamarinina: true,
    loharano: ['scoutopedia'],
  },
  {
    daty: '1955',
    sokajy: 'Tily',
    lohateny: 'Ny marika Ravinala',
    fohy: 'Nanomboka nampiasa ny marika Ravinala ny Tily eto Madagasikara.',
    antsipiriany: 'Martin Razafindrakoto, géographe ary diakona tao amin’ny Tranovato Faravohitra, no namorona azy.',
    lehibe: false,
    loharano: ['tilyRavinala', 'fiziantsika'],
  },
  {
    daty: '1957',
    sokajy: 'Tily',
    lohateny: 'Fahaleovantenan’ny Tily',
    fohy: 'Nahazo ny fahaleovantenany ny Tily eto Madagasikara.',
    antsipiriany:
      'Ny Ravinala no marika tokana mampiray ny Tily rehetra manerana ny Nosy sy any ampitan-dranomasina.',
    lehibe: false,
    loharano: ['fiziantsika'],
  },
  {
    daty: '1960',
    sokajy: 'Mpanazava',
    lohateny: 'Anarana « Mpanazava eto Madagasikara »',
    fohy: 'Noraisina ny anarana hoe Mpanazava eto Madagasikara.',
    lehibe: false,
    loharano: ['mpanazavaTantara'],
  },
  {
    daty: '1993',
    sokajy: 'SAMPATI',
    lohateny: 'SAMPATI, sampana ao amin’ny FJKM',
    fohy: 'Nekena ho sampana velona eo anivon’ny FJKM ny Sampana Mpanazava sy Tily.',
    antsipiriany: 'Ny 14 Aogositra 1993 no voalaza fa daty nanekena azy.',
    lehibe: true,
    hamarinina: true,
    loharano: ['fjkmBetela'],
  },
  {
    daty: '1998',
    sokajy: 'SAMPATI',
    lohateny: 'Rafitra iombonana MTEM',
    fohy: 'Napetraka ny rafitra iombonana « Mpanazava sy Tily eto Madagasikara ».',
    lehibe: false,
    loharano: ['mpanazavaTantara'],
  },
  {
    daty: '2002',
    sokajy: 'Tily',
    lohateny: 'Menafify, sampana fahaefatra',
    fohy: 'Lasa sampana fahaefatra amin’ny fanabeazana Tily ny Menafify.',
    antsipiriany:
      'Tapaka tamin’ny fihaonan’ny Filoha tany Ankadikely Ilafy, Aogositra 2002; nohamafisin’ny Fitsipika nivoaka tamin’ny 2007.',
    lehibe: false,
    loharano: ['tilyMenafify'],
  },
  {
    daty: '2018',
    sokajy: 'SAMPATI',
    lohateny: 'Jobily faha-25 taonan’ny SAMPATI',
    fohy: 'Nankalazaina ny jobily faha-25 taonan’ny SAMPATI FJKM.',
    antsipiriany: 'Nosokafana tamin’ny fomba ofisialy tany Mahajanga, ny 14 sy 15 Jolay 2018.',
    lehibe: false,
    loharano: ['fjkmJobily'],
  },
  {
    daty: '2022',
    sokajy: 'Tily',
    lohateny: 'Loko Menafify ao amin’ny Ravinala',
    fohy: 'Nampidirina tao amin’ny marika Ravinala ny lokon’ny Sampana Menafify.',
    antsipiriany: 'Tontosa ny 22 Febroary 2022, ho fanampin’ny Mavo, Maitso ary Mena.',
    lehibe: false,
    loharano: ['tilyRavinala'],
  },
];

// Fahatsiarovana tsy azon'iza na iza soratana afa-tsy ny Fivondronana.
export const banga: string[] = [
  'ireo Toniam-pivondronana nifandimby hatramin’ny 1953',
  'ireo lasy lehibe sy toerana nilasiana',
  'ny fankalazana ny tsingerintaona',
  'ireo fahatsiarovana tantarain’ny tranainy',
];
