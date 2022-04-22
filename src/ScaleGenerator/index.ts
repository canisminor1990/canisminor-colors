import chroma from 'chroma-js';
import { lightStepList, darkStepList, IStepItem } from './stepList';
import { argbFromHex, Hct, hexFromArgb } from '@material/material-color-utilities';
import { IColorScale, palettes } from '@/Scales';

class ColorScale {
  BALANCE = 24;

  gen(mainColor: string, strict = false): IColorScale {
    const lightStep = this.genLightStep(mainColor, strict);
    const darkStep = this.genDarkStep(mainColor, strict);
    return {
      light: lightStep,
      lightA: lightStep.map((color) => this.getAlphaColor(color, false)),
      dark: darkStep,
      darkA: darkStep.map((color) => this.getAlphaColor(color, true)),
      palettes: function (isDark, isAlpha) {
        return palettes(this, isDark, isAlpha);
      },
    };
  }

  private genLightStep(mainColor: string, strict: boolean): string[] {
    return this.genSolidColorStep(lightStepList, mainColor, strict);
  }

  private genDarkStep(mainColor: string, strict: boolean): string[] {
    return this.genSolidColorStep(darkStepList, mainColor, strict);
  }

  private genSolidColorStep(stepList: IStepItem[], mainColor: string, strict: boolean): string[] {
    const matchColor = stepList.sort(
      (a, b) => chroma.distance(a.color, mainColor) - chroma.distance(b.color, mainColor),
    )[0];
    const mianColor = this.hexToHct(mainColor);
    return matchColor.h.map((_, index) => {
      if (strict) return this.genStrictColor(mianColor, matchColor, index);
      if (index >= 8 && index <= 9) {
        return this.genColor(mianColor, matchColor, index);
      } else if (index < 8) {
        return this.genBalanceColor(mianColor, matchColor, index);
      } else {
        return this.genStrictColor(mianColor, matchColor, index);
      }
    });
  }

  private genStrictColor(mainColor: number[], matchColor: IStepItem, index: number): string {
    return this.hctToHex([
      this.hRotate(mainColor[0] + matchColor.h[index]),
      matchColor.cs[index],
      matchColor.ts[index],
    ]);
  }

  private genColor(mainColor: number[], matchColor: IStepItem, index: number): string {
    return this.hctToHex([
      this.hRotate(mainColor[0] + matchColor.h[index]),
      matchColor.c[index] * mainColor[1],
      matchColor.t[index] * mainColor[2],
    ]);
  }

  private genBalanceColor(mainColor: number[], matchColor: IStepItem, index: number): string {
    return this.hctToHex([
      this.hRotate(mainColor[0] + matchColor.h[index]),
      (matchColor.cs[index] * (this.BALANCE - index)) / this.BALANCE +
        (matchColor.c[index] * mainColor[1] * index) / this.BALANCE,
      (matchColor.ts[index] * (this.BALANCE - index)) / this.BALANCE +
        (matchColor.t[index] * mainColor[2] * index) / this.BALANCE,
    ]);
  }

  private hctToHex(hct: number[]): string {
    const hclColor = Hct.from(Math.round(hct[0]), Math.round(hct[1]), Math.round(hct[2]));
    return hexFromArgb(hclColor.toInt());
  }

  private hexToHct(hex: string): number[] {
    const hclColor = Hct.fromInt(argbFromHex(hex));
    return [Math.round(hclColor.hue), Math.round(hclColor.chroma), Math.round(hclColor.tone)];
  }

  private hRotate(hue: number): number {
    if (hue >= 0 && hue <= 360) return hue;
    if (hue < 0) return hue + 360;
    return hue - 360;
  }

  private getAlphaColor(colorString: string, dark: boolean): string {
    const [fR, fG, fB] = chroma(colorString).rgb();
    const bashColor = dark ? 0 : 255;

    for (let fA = 0.01; fA <= 1; fA += 0.01) {
      const r = Math.round((fR - bashColor * (1 - fA)) / fA);
      const g = Math.round((fG - bashColor * (1 - fA)) / fA);
      const b = Math.round((fB - bashColor * (1 - fA)) / fA);
      if (this.isStableColor(r) && this.isStableColor(g) && this.isStableColor(b))
        return chroma(this.arrayToRgb([r, g, b, Math.round(fA * 100) / 100])).hex();
    }
    return chroma(this.arrayToRgb([fR, fG, fB, 1])).hex();
  }

  private arrayToRgb(rgbArray: number[]): string {
    if (rgbArray.length < 4) {
      return `rgb(${rgbArray.join(',')})`;
    } else {
      return `rgba(${rgbArray.join(',')})`;
    }
  }

  private isStableColor(color: number): boolean {
    return color >= 0 && color <= 255;
  }
}

export default new ColorScale();
