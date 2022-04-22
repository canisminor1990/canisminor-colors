import chroma from 'chroma-js';
import { IColorScale } from '@/Scales';

const formatNumber = (num: number): number => Math.round(num * 10) / 10;

const checkResult = (num: number, targetNum: number): 0 | 0.5 | 1 => {
  if (num >= targetNum) return 1;
  if (targetNum - num <= 1) return 0.5;
  return 0;
};

const genShield = (result: 0 | 0.5 | 1): string => {
  if (result === 1) return 'https://img.shields.io/badge/AA-pass-brightgreen';
  if (result === 0.5) return 'https://img.shields.io/badge/AA-warn-yellow';
  return 'https://img.shields.io/badge/AA-fail-red';
};

interface IScaleAATestResult {
  lowContrastTextLight: {
    num: number;
    targetNum: number;
    result: 0 | 0.5 | 1;
    shield: string;
  };
  lowContrastTextDark: {
    num: number;
    targetNum: number;
    result: 0 | 0.5 | 1;
    shield: string;
  };
  highContrastTextLight: {
    num: number;
    targetNum: number;
    result: 0 | 0.5 | 1;
    shield: string;
  };
  highContrastTextDark: {
    num: number;
    targetNum: number;
    result: 0 | 0.5 | 1;
    shield: string;
  };
  all: {
    result: boolean;
    shield: string;
  };
}

const scaleAATest = (scale: IColorScale): IScaleAATestResult => {
  const lowContrastTextLight = formatNumber(chroma.contrast(scale.light[10], scale.light[2]));
  const lowContrastTextDark = formatNumber(chroma.contrast(scale.dark[10], scale.dark[2]));
  const highContrastTextLight = formatNumber(chroma.contrast('#fff', scale.light[8]));
  const highContrastTextDark = formatNumber(chroma.contrast('#000', scale.dark[8]));
  const result = {
    lowContrastTextLight: {
      num: lowContrastTextLight,
      targetNum: 4.5,
      result: checkResult(lowContrastTextLight, 4.5),
    },
    lowContrastTextDark: {
      num: lowContrastTextDark,
      targetNum: 4.5,
      result: checkResult(lowContrastTextDark, 4.5),
    },
    highContrastTextLight: {
      num: highContrastTextLight,
      targetNum: 3,
      result: checkResult(highContrastTextLight, 3),
    },
    highContrastTextDark: {
      num: highContrastTextDark,
      targetNum: 3,
      result: checkResult(highContrastTextDark, 3),
    },
  };

  const allResult = Object.values(result).reduce((total, item) => total + item.result, 0) / 4;
  return {
    lowContrastTextLight: {
      ...result.lowContrastTextLight,
      shield: genShield(result.lowContrastTextLight.result),
    },
    lowContrastTextDark: {
      ...result.lowContrastTextDark,
      shield: genShield(result.lowContrastTextDark.result),
    },
    highContrastTextLight: {
      ...result.highContrastTextLight,
      shield: genShield(result.highContrastTextLight.result),
    },
    highContrastTextDark: {
      ...result.highContrastTextDark,
      shield: genShield(result.highContrastTextDark.result),
    },
    all: {
      result: allResult >= 0.75,
      shield:
        allResult >= 0.75
          ? `https://img.shields.io/badge/AA%20Test-${allResult * 100}%25-brightgreen`
          : 'https://img.shields.io/badge/AA%20Test-fail-red',
    },
  };
};

export default scaleAATest;
