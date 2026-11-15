import type { SaryKey } from './sary';

// TAHIRIN-TSARY
// Ireto ambany ireto dia OHATRA fotsiny (sary malalaka, tsy an'ny Fivondronana), hanehoana ny fomba fiasan'ny rakitsary.
// Rehefa azo ny sarin'ny Fivondronana:
//   1. apetraho ao amin'ny src/assets/sary/ ny rakitra, ary ampio ao amin'ny src/data/sary.ts;
//   2. ampio andalana iray eto, miaraka amin'ny taona, sampana, hetsika ary lohateny;
//   3. esory ireo ohatra (ohatra: true).

export const sampanaSafidy = ['Mavo', 'Maitso', 'Mena', 'Menafify', 'Iombonana'] as const;

export type Singa = {
  sary: SaryKey;
  taona: number | null; // null = tsy fantatra ny taona
  sampana: (typeof sampanaSafidy)[number];
  hetsika: string;
  ohatra?: boolean;
};

export const tahiry: Singa[] = [
  { sary: 'alasora', taona: null, sampana: 'Iombonana', hetsika: 'Toerana', ohatra: true },
  { sary: 'ravinalaIaboakoho', taona: null, sampana: 'Iombonana', hetsika: 'Zavaboahary', ohatra: true },
  { sary: 'afonDasy', taona: null, sampana: 'Iombonana', hetsika: 'Lasy', ohatra: true },
  { sary: 'ravinalaManantenina', taona: null, sampana: 'Iombonana', hetsika: 'Zavaboahary', ohatra: true },
  { sary: 'tanimbary', taona: null, sampana: 'Iombonana', hetsika: 'Toerana', ohatra: true },
  { sary: 'ravinalaVohimana', taona: null, sampana: 'Iombonana', hetsika: 'Zavaboahary', ohatra: true },
];
