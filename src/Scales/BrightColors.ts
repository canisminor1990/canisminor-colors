import { IColorScale, palettes } from './index';

//
// Bright Colors
//
export const Sky: IColorScale = {
  light: [
    '#f9feff',
    '#f1fcff',
    '#e4f9ff',
    '#d5f4fd',
    '#c1ecf9',
    '#a4dff1',
    '#79cfea',
    '#2ebde5',
    '#68ddfd',
    '#5fd4f4',
    '#0078a1',
    '#003242',
  ],
  lightA: [
    '#37deff08',
    '#16cdff0f',
    '#0ac8ff1c',
    '#08bef32b',
    '#07b3e740',
    '#02a6d85c',
    '#02a4d787',
    '#00afdfd1',
    '#03c6fc99',
    '#01bbeea1',
    '#0078a1',
    '#003242',
  ],
  dark: [
    '#0c1820',
    '#071d2a',
    '#082636',
    '#082d41',
    '#08354c',
    '#083e59',
    '#064b6b',
    '#005d85',
    '#68ddfd',
    '#8ae8ff',
    '#2ec8ee',
    '#eaf8ff',
  ],
  darkA: [
    '#5cb9f621',
    '#29abf72b',
    '#24adf538',
    '#1fadfa42',
    '#1bb1fd4d',
    '#17b1fe59',
    '#0eb3ff6b',
    '#00affb87',
    '#68ddfd',
    '#8ae8ff',
    '#31d5fdf0',
    '#eaf8ff',
  ],
  palettes: function (isDark, isAlpha) {
    return palettes(this, isDark, isAlpha);
  },
};
export const Mint: IColorScale = {
  light: [
    '#f9fefd',
    '#effefa',
    '#e1fbf4',
    '#d2f7ed',
    '#c0efe3',
    '#a5e4d4',
    '#7dd4c0',
    '#40c4aa',
    '#70e1c8',
    '#69d9c1',
    '#147d6f',
    '#09342e',
  ],
  lightA: [
    '#37debc08',
    '#1af1b812',
    '#05dea31f',
    '#05d39b2e',
    '#03bf8f40',
    '#05b4885c',
    '#00ab8382',
    '#00b08ebf',
    '#00c99d8f',
    '#01bf9696',
    '#007262eb',
    '#012e28f7',
  ],
  dark: [
    '#081917',
    '#05201e',
    '#052926',
    '#04312c',
    '#033a34',
    '#01453d',
    '#00564a',
    '#006d5b',
    '#70e1c8',
    '#95f3d9',
    '#25d0ab',
    '#e7fcf7',
  ],
  darkA: [
    '#50fae61a',
    '#26f6e721',
    '#1df1e02b',
    '#14f5dc33',
    '#0dfce23b',
    '#04f6da47',
    '#00fdda57',
    '#00fdd46e',
    '#7efde1e3',
    '#9bfde2f5',
    '#2dfed1d1',
    '#e9fff9fc',
  ],
  palettes: function (isDark, isAlpha) {
    return palettes(this, isDark, isAlpha);
  },
};
export const Lime: IColorScale = {
  light: [
    '#fcfdfa',
    '#f7fcf0',
    '#eefadc',
    '#e4f7c7',
    '#d7f2b0',
    '#c9e894',
    '#b1d16a',
    '#94ba2c',
    '#99d52a',
    '#93c926',
    '#5d770d',
    '#263209',
  ],
  lightA: [
    '#699b0505',
    '#7acd050f',
    '#86db0524',
    '#84db0038',
    '#7ed5004f',
    '#7ec8006b',
    '#7bb10296',
    '#7eac01d4',
    '#86cd01d6',
    '#80bf00d9',
    '#547000f2',
    '#1f2c01f7',
  ],
  dark: [
    '#141807',
    '#181d08',
    '#1e260d',
    '#252e0f',
    '#2b3711',
    '#344213',
    '#415215',
    '#536716',
    '#99d52a',
    '#c4f042',
    '#87be22',
    '#effbdd',
  ],
  darkA: [
    '#c8f0461a',
    '#c8f2431f',
    '#c8fd5726',
    '#c3f24f30',
    '#c3fa4d38',
    '#c8fe4942',
    '#c5f84054',
    '#cafb3669',
    '#b6fe32d6',
    '#d1ff46f0',
    '#b4fd2dbf',
    '#f1fedffc',
  ],
  palettes: function (isDark, isAlpha) {
    return palettes(this, isDark, isAlpha);
  },
};
export const Yellow: IColorScale = {
  light: [
    '#fdfdf9',
    '#fffce8',
    '#fffbd1',
    '#fff8bb',
    '#fef2a4',
    '#f9e68c',
    '#efd36c',
    '#ebbc00',
    '#f5d90a',
    '#f7ce00',
    '#946800',
    '#35290f',
  ],
  lightA: [
    '#bcbc3708',
    '#ffe1191a',
    '#ffea0d30',
    '#ffe50345',
    '#fcdb025c',
    '#f2c90575',
    '#e3b30294',
    '#ebbc00',
    '#f5d700f5',
    '#f7ce00',
    '#946800',
    '#281b00f0',
  ],
  dark: [
    '#1c1500',
    '#221a00',
    '#2c2100',
    '#352800',
    '#3e3000',
    '#493c00',
    '#594a05',
    '#705e00',
    '#f5d90a',
    '#ffef5c',
    '#f0c000',
    '#fffad1',
  ],
  darkA: [
    '#ffbf001c',
    '#f3ba0024',
    '#f4b7002e',
    '#fcbe0036',
    '#f8c00040',
    '#fccf004a',
    '#fed30e59',
    '#ffd60070',
    '#ffe20af5',
    '#ffef5c',
    '#ffcc00f0',
    '#fffad1',
  ],
  palettes: function (isDark, isAlpha) {
    return palettes(this, isDark, isAlpha);
  },
};
export const Amber: IColorScale = {
  light: [
    '#fefdfb',
    '#fff9ed',
    '#fff4d5',
    '#ffecbc',
    '#ffe3a2',
    '#ffd386',
    '#f3ba63',
    '#ee9d2b',
    '#ffb224',
    '#ffa01c',
    '#ad5700',
    '#4e2009',
  ],
  lightA: [
    '#cd9b3705',
    '#ffb41e14',
    '#ffbe082b',
    '#ffb90745',
    '#ffb3045e',
    '#ffa3037a',
    '#ec90039e',
    '#eb8900d4',
    '#ffa500db',
    '#ff9400e3',
    '#ad5700',
    '#491901f7',
  ],
  dark: [
    '#1f1300',
    '#271700',
    '#341c00',
    '#3f2200',
    '#4a2900',
    '#573300',
    '#693f05',
    '#824e00',
    '#ffb224',
    '#ffcb47',
    '#f1a10d',
    '#fef3dd',
  ],
  darkA: [
    '#ee920021',
    '#f4900029',
    '#f8850036',
    '#fc880040',
    '#ff8d004a',
    '#f9920059',
    '#fa960c6b',
    '#ff990082',
    '#ffb224',
    '#ffcb47',
    '#fea90ef2',
    '#fef3dd',
  ],
  palettes: function (isDark, isAlpha) {
    return palettes(this, isDark, isAlpha);
  },
};

// Export Group
export const BrightColors = {
  Sky,
  Mint,
  Lime,
  Yellow,
  Amber,
};
