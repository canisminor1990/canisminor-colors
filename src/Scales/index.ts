export interface IColorScale {
  light: string[];
  lightA: string[];
  dark: string[];
  darkA: string[];
  palettes: (isDark?: boolean, isAlpha?: boolean) => IColorPalette;
}

export interface IColorPalette {
  appBackground: string;
  subtleBackground: string;
  elementBackground: string;
  hoveredElementBackground: string;
  activeElementBackground: string;
  subtleBorder: string;
  elementBorder: string;
  hoveredElementBorder: string;
  solidBackground: string;
  hoveredSolidBackground: string;
  lowContrastText: string;
  highContrastText: string;
}

export const genPalette = (scale: string[]): IColorPalette => {
  const [
    appBackground,
    subtleBackground,
    elementBackground,
    hoveredElementBackground,
    activeElementBackground,
    subtleBorder,
    elementBorder,
    hoveredElementBorder,
    solidBackground,
    hoveredSolidBackground,
    lowContrastText,
    highContrastText,
  ] = scale;
  return {
    appBackground,
    subtleBackground,
    elementBackground,
    hoveredElementBackground,
    activeElementBackground,
    subtleBorder,
    elementBorder,
    hoveredElementBorder,
    solidBackground,
    hoveredSolidBackground,
    lowContrastText,
    highContrastText,
  };
};

export const palettes = (that: IColorScale, isDark?: boolean, isAlpha?: boolean): IColorPalette => {
  if (!isDark && !isAlpha) return genPalette(that.light);
  if (!isDark && isAlpha) return genPalette(that.lightA);
  if (isDark && !isAlpha) return genPalette(that.dark);
  return genPalette(that.darkA);
};

export * from './Colors';
export * from './BrightColors';
export * from './Grays';
export * from './Metals';
