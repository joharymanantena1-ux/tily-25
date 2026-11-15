// Loharanom-baovao nampiasaina. Ny fanalahidy (key) no ampiasaina any amin'ny rakitra hafa.

export type Loharano = { anarana: string; url: string; karazany: 'ofisialy' | 'fanampiny' };

export const loharano = {
  tilyApropos: {
    anarana: 'Tily eto Madagasikara — « Inona ny Tily ? »',
    url: 'https://www.scout.mg/a-propos/',
    karazany: 'ofisialy',
  },
  tilyLalana: {
    anarana: 'Tily eto Madagasikara — « Lalàna folo Tily »',
    url: 'https://www.scout.mg/soatoavina/lalana-folo-tily/',
    karazany: 'ofisialy',
  },
  tilyFanekena: {
    anarana: 'Tily eto Madagasikara — « Fanekena Tily »',
    url: 'https://www.scout.mg/fanabeazana/fanekena-tily/',
    karazany: 'ofisialy',
  },
  tilyFanekenaLalana: {
    anarana: 'Tily eto Madagasikara — « Fanekena : Hanoa ny lalàna tily »',
    url: 'https://www.scout.mg/soatoavina/fanekena-hanoa-lalana/',
    karazany: 'ofisialy',
  },
  tilyMavo: {
    anarana: 'Tily eto Madagasikara — « Sampana Mavo Tily (Lovitao) »',
    url: 'https://www.scout.mg/fanabeazana/sampana-mavo-lovitao/',
    karazany: 'ofisialy',
  },
  tilyMaitso: {
    anarana: 'Tily eto Madagasikara — « Sampana Maitso Tily »',
    url: 'https://www.scout.mg/fanabeazana/sampana-maitso-tily/',
    karazany: 'ofisialy',
  },
  tilyMena: {
    anarana: 'Tily eto Madagasikara — « Sampana Mena (Mpiandalana) »',
    url: 'https://www.scout.mg/fanabeazana/sampana-mena-mpiandalana/',
    karazany: 'ofisialy',
  },
  tilyMenafify: {
    anarana: 'Tily eto Madagasikara — « Sampana Menafify »',
    url: 'https://www.scout.mg/fanabeazana/sampana-menafify/',
    karazany: 'ofisialy',
  },
  tilyRavinala: {
    anarana: 'Tily eto Madagasikara — « Ny marika Ravinala »',
    url: 'https://www.scout.mg/symbole/logo-ravinala/',
    karazany: 'ofisialy',
  },
  tilyTantara: {
    anarana: 'Tily eto Madagasikara — « Tantaran’ny skoto malagasy voalohany »',
    url: 'https://www.scout.mg/vakoka-sy-tantara/tantaranny-skoto-malagasy-voalohany/',
    karazany: 'ofisialy',
  },
  fiziantsika: {
    anarana: 'Tily eto Madagasikara — « Fiziantsika », torolalana momba ny aromarika (edisiona 2025)',
    url: 'https://fiziantsika.scout.mg/',
    karazany: 'ofisialy',
  },
  mpanazavaTantara: {
    anarana: 'Mpanazava eto Madagasikara — « Notre histoire »',
    url: 'https://www.mpanazava.org/histoire/',
    karazany: 'ofisialy',
  },
  wagggs: {
    anarana: 'AMGE / WAGGGS — Madagasikara',
    url: 'https://www.wagggs.org/fr/our-world/africa/member-organisations/madagascar',
    karazany: 'ofisialy',
  },
  fjkmJobily: {
    anarana: 'FJKM — « SAMPATI / 25 taona » (3 jolay 2018)',
    url: 'https://www.fjkm.mg/synodamparitany/vaovao-farany/sampati-25-taona/',
    karazany: 'ofisialy',
  },
  fjkmBetela: {
    anarana: 'FJKM Betela Tanambao V — « SAMPATI »',
    url: 'https://fjkm-betelatanambaov.mg/sampati/',
    karazany: 'fanampiny',
  },
  scoutopedia: {
    anarana: 'Scoutopedia — « Groupe MTEM 25e Alasora » (nohavaozina ny 11 desambra 2021)',
    url: 'https://fr.scoutwiki.org/Groupe_MTEM_25e_Alasora',
    karazany: 'fanampiny',
  },
} satisfies Record<string, Loharano>;

export type LoharanoKey = keyof typeof loharano;
