// Karazan'asa sy hetsika: anarana + fehezanteny fohy iray.
// Ny daty sy ny tantara manokan'ny Fivondronana dia hofenoina ao amin'ny `fandaharana`.

export type Hetsika = { kisary: string; anarana: string; fanazavana: string };

export const karazany: Hetsika[] = [
  { kisary: 'lasy', anarana: 'Lasy', fanazavana: 'Fiainana an-kalamanjana sy afon-dasy.' },
  { kisary: 'fivoriana', anarana: 'Fivoriana', fanazavana: 'Fihaonana tsy tapaka isan-tsampana.' },
  { kisary: 'lanonana', anarana: 'Lanonana', fanazavana: 'Fanekena sy tsingerintaona.' },
  { kisary: 'fiofanana', anarana: 'Fiofanana', fanazavana: 'Ho an’ny beazina sy ny mpiandraikitra.' },
  { kisary: 'fitsangatsanganana', anarana: 'Fitsangatsanganana', fanazavana: 'Dia an-tongotra sy fitsidihana.' },
  { kisary: 'lalao', anarana: 'Lalao', fanazavana: 'Lalao manabe.' },
  { kisary: 'asasoa', anarana: 'Asa soa', fanazavana: 'Fanampiana ny hafa sy ny tanàna.' },
  { kisary: 'aimpanahy', anarana: 'Aim-panahy', fanazavana: 'Vavaka sy fiainam-piangonana.' },
];

// Fandaharam-potoana — homen'ny Fivondronana. Ohatra ny endriny:
// { daty: '2026-12-20', anarana: '…', toerana: '…', sampana: 'Rehetra' }
export const fandaharana: { daty: string; anarana: string; toerana: string; sampana: string }[] = [];
