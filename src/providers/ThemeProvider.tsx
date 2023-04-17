import React, { createContext, useContext } from 'react';
import merge from 'lodash.merge';
import colors, { getColor } from '../theme/colors';
import typography, {
  getFont,
  getFontSize,
  getFontWeight,
  getTypo,
} from '../theme/typography';
import shadows, { getShadow } from '../theme/shadows';

import type { PropsWithChildren } from 'react';
import type { ColorValue } from 'react-native';
import type { TShade } from '../theme/pallets';
import type { TColors, TFnGetColor, TIntend } from '../theme/colors';
import type {
  TFont,
  TFonts,
  TFnGetFont,
  TFnGetFontSize,
  TFnGetFontWeight,
  TFnGetTypo,
  TFontSize,
  TFontSizes,
  TFontWeights,
  TTypography,
} from '../theme/typography';
import type { TFnGetShadow, TShadows } from '../theme/shadows';

export type TTheme = {
  colors: TColors;
  getColor: TFnGetColor;
  typography: TTypography;
  getFont: TFnGetFont;
  getFontSize: TFnGetFontSize;
  getFontWeight: TFnGetFontWeight;
  getTypo: TFnGetTypo;
  shadows: TShadows;
  getShadow: TFnGetShadow;
};

export interface ICustomTheme {
  colors?: Partial<
    Record<Partial<TIntend>, Partial<Record<Partial<TShade>, ColorValue>>>
  >;
  typography?: {
    fonts?: Partial<Record<TFonts, string>>;
    fontSizes?: Partial<Record<TFontSizes, TFontSize>>;
    fontWeights?: Partial<Record<TFontWeights, TFont>>;
  };
}

const defaultTheme = {
  colors,
  getColor,
  typography,
  getFont,
  getFontSize,
  getFontWeight,
  getTypo,
  shadows,
  getShadow,
};

const ThemeContext = createContext<TTheme | null>(null);

interface IThemeProvider {
  theme?: ICustomTheme;
}

export function ThemeProvider({
  theme = {},
  children,
}: PropsWithChildren<IThemeProvider>) {
  const customizedTheme = merge(defaultTheme, theme);

  return (
    <ThemeContext.Provider value={customizedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      `'ThemeProvider' is not found as the wrapper of this component tree, please wrap your component with 'ThemeProvider'.`
    );
  }

  return context;
}

export default useThemeContext;
