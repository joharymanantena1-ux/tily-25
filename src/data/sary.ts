import type { ImageMetadata } from 'astro';
import alasora from '../assets/sary/alasora-havoana.jpg';
import tanimbary from '../assets/sary/tanimbary-antananarivo.jpg';
import ravinalaIaboakoho from '../assets/sary/ravinala-iaboakoho.jpg';
import ravinalaManantenina from '../assets/sary/ravinala-manantenina.jpg';
import ravinalaVohimana from '../assets/sary/ravinala-vohimana.jpg';
import afonDasy from '../assets/sary/afon-dasy.jpg';

// Ny sary rehetra eto dia sary malalaka (Wikimedia Commons), tsy misy olona azo fantarina.
// Soloina sarin'ny Fivondronana rehefa azo — miaraka amin'ny fanomezan-dalana, indrindra ho an'ny zaza tsy ampy taona.

export type Sary = {
  src: ImageMetadata;
  alt: string;
  lohateny: string; // soratra eo ambanin'ny sary
  mpaka: string;
  lisansa: string;
  lisansaUrl: string;
  loharano: string;
};

const commons = (rakitra: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(rakitra.replace(/ /g, '_'))}`;

export const sary = {
  alasora: {
    src: alasora,
    alt: 'Tanàna eny an-tendrombohitra, tanimbary sy rano eo anoloany, ao Alasora',
    lohateny: 'Alasora, ny tanimbary sy ny havoana',
    mpaka: 'Lemurbaby',
    lisansa: 'CC BY-SA 3.0',
    lisansaUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    loharano: commons('Alasora sacred hill Madagascar.JPG'),
  },
  tanimbary: {
    src: tanimbary,
    alt: 'Havoana sy tanimbary manodidina an’Antananarivo, andro manjombona',
    lohateny: 'Havoana sy tanimbary, Antananarivo',
    mpaka: 'Hopeandlink',
    lisansa: 'CC BY-SA 4.0',
    lisansaUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    loharano: commons('Paysage Antananarivo.jpg'),
  },
  ravinalaIaboakoho: {
    src: ravinalaIaboakoho,
    alt: 'Ravinala maromaro eo amin’ny tanety maitso',
    lohateny: 'Ravinala, Iaboakoho (Anosy)',
    mpaka: 'vorontsovams',
    lisansa: 'CC0',
    lisansaUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    loharano: commons('Ravenala madagascariensis, Iaboakoho, Anosy, Madagascar 1.jpg'),
  },
  ravinalaManantenina: {
    src: ravinalaManantenina,
    alt: 'Ravinala milahatra eo amin’ny havoana maitso, ny ranomasina eny lavitra',
    lohateny: 'Ravinala, Manantenina (Anosy)',
    mpaka: 'vorontsovams',
    lisansa: 'CC0',
    lisansaUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    loharano: commons('Ravenala madagascariensis, Manantenina, Anosy, Madagascar 1.jpg'),
  },
  ravinalaVohimana: {
    src: ravinalaVohimana,
    alt: 'Ravinala ao anaty ala',
    lohateny: 'Ravinala, alan’i Vohimana',
    mpaka: 'TinahLuce23',
    lisansa: 'CC0',
    lisansaUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    loharano: commons('Ravenala madagascariensis, forêt Vohimana RN2 Madagascar.jpg'),
  },
  afonDasy: {
    src: afonDasy,
    alt: 'Afo mirehitra amin’ny alina, pitik’afo manidina',
    lohateny: 'Afon-dasy',
    mpaka: 'kallerna',
    lisansa: 'CC BY-SA 3.0',
    lisansaUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    loharano: commons('Campfire and sparks in Anttoora 1.jpg'),
  },
} satisfies Record<string, Sary>;

export type SaryKey = keyof typeof sary;
