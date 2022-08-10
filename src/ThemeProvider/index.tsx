import React from 'react';
import { ThemeProvider as CmThemeProvider, useTheme as useCmTheme } from '@emotion/react';
import {
  IColorPalette,
  Blue,
  IColorScale,
  Slate,
  Grass,
  Indigo,
  Sky,
  Red,
  Yellow,
  Mint,
} from '@/index';
import { defaults } from 'lodash';

export interface IThemeSchema {
  isDarkMode: boolean;
  primary: IColorPalette;
  secondary: IColorPalette;
  teriary: IColorPalette;
  neutral: IColorPalette;
  error: IColorPalette;
  warning: IColorPalette;
  success: IColorPalette;
  info: IColorPalette;
  // Alpha
  primaryA: IColorPalette;
  secondaryA: IColorPalette;
  teriaryA: IColorPalette;
  neutralA: IColorPalette;
  errorA: IColorPalette;
  warningA: IColorPalette;
  successA: IColorPalette;
  infoA: IColorPalette;
  // Inverse
  inversePrimary: IColorPalette;
  inverseSecondary: IColorPalette;
  inverseTeriary: IColorPalette;
  inverseNeutral: IColorPalette;
  inverseError: IColorPalette;
  inverseWarning: IColorPalette;
  inverseSuccess: IColorPalette;
  inverseInfo: IColorPalette;
  // Invers Alpha
  inversePrimaryA: IColorPalette;
  inverseSecondaryA: IColorPalette;
  inverseTeriaryA: IColorPalette;
  inverseNeutralA: IColorPalette;
  inverseErrorA: IColorPalette;
  inverseWarningA: IColorPalette;
  inverseSuccessA: IColorPalette;
  inverseInfoA: IColorPalette;
}

export function useTheme() {
  return useCmTheme() as IThemeSchema;
}

interface IThemeConfig {
  css: boolean;
  cssUrl: {
    light: string;
    dark: string;
  };
  theme: {
    primary: IColorScale;
    secondary: IColorScale;
    teriary: IColorScale;
    neutral: IColorScale;
    error: IColorScale;
    warning: IColorScale;
    success: IColorScale;
    info: IColorScale;
  };
}

interface IThemeProviderProps {
  children?: any;
  config?: {
    css?: boolean;
    cssUrl?: {
      light?: string;
      dark?: string;
    };
    theme?: {
      primary?: IColorScale;
      secondary?: IColorScale;
      teriary?: IColorScale;
      neutral?: IColorScale;
      error?: IColorScale;
      warning?: IColorScale;
      success?: IColorScale;
      info?: IColorScale;
    };
  };
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children, config, ...props }) => {
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark'>(window?.themeMode ?? 'light');
  const isDarkMode = themeMode === 'dark';
  const defaultConfig: IThemeConfig = {
    css: true,
    cssUrl: {
      light: 'https://cdn.bootcdn.net/ajax/libs/antd/4.20.0-alpha.0/antd.min.css',
      dark: 'https://cdn.bootcdn.net/ajax/libs/antd/4.20.0-alpha.0/antd.dark.min.css',
    },
    theme: {
      primary: Indigo,
      secondary: Sky,
      teriary: Mint,
      neutral: Slate,
      error: Red,
      warning: Yellow,
      success: Grass,
      info: Blue,
    },
  };

  const themeConfig: IThemeConfig = defaults(config, defaultConfig);

  React.useEffect(() => {
    const updateCssTheme = (type: 'light' | 'dark') => {
      const cssLightTheme = themeConfig.cssUrl?.light;
      const cssDarkTheme = themeConfig.cssUrl?.dark;
      const id = 'css-theme';
      const elem: any = document.getElementById(id) || document.createElement('link');
      elem.id = id;
      elem.rel = 'stylesheet';
      elem.type = 'text/css';
      elem.href = type === 'light' ? cssLightTheme : cssDarkTheme;
      const links = document.head.getElementsByTagName('link');
      if (links.length > 0) {
        document.head.insertBefore(elem, links[links.length - 1]);
      } else {
        document.head.appendChild(elem);
      }
    };
    const updateTheme = (type: 'light' | 'dark') => {
      setThemeMode(type);
      window.themeMode = type;
      if (themeConfig?.css) updateCssTheme(type);
    };
    window.updateTheme = (type) => {
      updateTheme(type);
    };
  }, []);

  const themeSchema: IThemeSchema = {
    isDarkMode,
    primary: themeConfig.theme.primary.palettes(isDarkMode),
    secondary: themeConfig.theme.secondary.palettes(isDarkMode),
    teriary: themeConfig.theme.teriary.palettes(isDarkMode),
    neutral: themeConfig.theme.neutral.palettes(isDarkMode),
    error: themeConfig.theme.error.palettes(isDarkMode),
    warning: themeConfig.theme.warning.palettes(isDarkMode),
    success: themeConfig.theme.success.palettes(isDarkMode),
    info: themeConfig.theme.info.palettes(isDarkMode),
    // Alpha
    primaryA: themeConfig.theme.primary.palettes(isDarkMode, true),
    secondaryA: themeConfig.theme.secondary.palettes(isDarkMode, true),
    teriaryA: themeConfig.theme.teriary.palettes(isDarkMode, true),
    neutralA: themeConfig.theme.neutral.palettes(isDarkMode, true),
    errorA: themeConfig.theme.error.palettes(isDarkMode, true),
    warningA: themeConfig.theme.warning.palettes(isDarkMode, true),
    successA: themeConfig.theme.success.palettes(isDarkMode, true),
    infoA: themeConfig.theme.info.palettes(isDarkMode, true),
    // Inverse
    inversePrimary: themeConfig.theme.primary.palettes(!isDarkMode),
    inverseSecondary: themeConfig.theme.secondary.palettes(!isDarkMode),
    inverseTeriary: themeConfig.theme.teriary.palettes(!isDarkMode),
    inverseNeutral: themeConfig.theme.neutral.palettes(!isDarkMode),
    inverseError: themeConfig.theme.error.palettes(!isDarkMode),
    inverseWarning: themeConfig.theme.warning.palettes(!isDarkMode),
    inverseSuccess: themeConfig.theme.success.palettes(!isDarkMode),
    inverseInfo: themeConfig.theme.info.palettes(!isDarkMode),
    // Inverse Alpha
    inversePrimaryA: themeConfig.theme.primary.palettes(!isDarkMode, true),
    inverseSecondaryA: themeConfig.theme.secondary.palettes(!isDarkMode, true),
    inverseTeriaryA: themeConfig.theme.teriary.palettes(!isDarkMode, true),
    inverseNeutralA: themeConfig.theme.neutral.palettes(!isDarkMode, true),
    inverseErrorA: themeConfig.theme.error.palettes(!isDarkMode, true),
    inverseWarningA: themeConfig.theme.warning.palettes(!isDarkMode, true),
    inverseSuccessA: themeConfig.theme.success.palettes(!isDarkMode, true),
    inverseInfoA: themeConfig.theme.info.palettes(!isDarkMode, true),
  };

  return (
    <CmThemeProvider {...props} theme={themeSchema}>
      {children}
    </CmThemeProvider>
  );
};
