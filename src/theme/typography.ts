import type { TextProps } from 'react-native';

export type TFonts = 'heading' | 'body' | 'mono';

export type TFontSizes =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export type TFontWeights =
  | 'Thin'
  | 'ExtraLight'
  | 'Light'
  | 'Regular'
  | 'Medium'
  | 'SemiBold'
  | 'Bold'
  | 'ExtraBold'
  | 'Black';

export type TFont = {
  fontFamily?: string;
};

export type TFontSize = {
  fontSize: number;
  lineHeight: number;
};

export type TFontWeight = TFont & {
  fontWeight:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
};

export interface ITypo extends TextProps, TFontSize, TFontWeight {}

export type TTypography = {
  fonts: Record<TFonts, string | undefined>;
  fontSizes: Record<TFontSizes, TFontSize>;
  fontWeights: Record<TFontWeights, TFontWeight>;
};

export type TFnGetFont = (font?: TFonts) => TFont;
export type TFnGetFontSize = (size?: TFontSizes) => TFontSize;
export type TFnGetFontWeight = (weight?: TFontWeights) => TFontWeight;
export type TFnGetTypo = (
  size?: TFontSizes,
  weight?: TFontWeights,
  font?: TFonts
) => ITypo;

const typography: TTypography = {
  fonts: {
    heading: undefined,
    body: undefined,
    mono: undefined,
  },
  fontSizes: {
    'xs': {
      fontSize: 12,
      lineHeight: 16,
    },
    'sm': {
      fontSize: 14,
      lineHeight: 20,
    },
    'base': {
      fontSize: 16,
      lineHeight: 24,
    },
    'lg': {
      fontSize: 18,
      lineHeight: 28,
    },
    'xl': {
      fontSize: 20,
      lineHeight: 28,
    },
    '2xl': {
      fontSize: 24,
      lineHeight: 32,
    },
    '3xl': {
      fontSize: 30,
      lineHeight: 36,
    },
    '4xl': {
      fontSize: 36,
      lineHeight: 40,
    },
    '5xl': {
      fontSize: 48,
      lineHeight: 48,
    },
    '6xl': {
      fontSize: 60,
      lineHeight: 60,
    },
    '7xl': {
      fontSize: 72,
      lineHeight: 72,
    },
    '8xl': {
      fontSize: 96,
      lineHeight: 96,
    },
    '9xl': {
      fontSize: 128,
      lineHeight: 128,
    },
  },
  fontWeights: {
    Thin: {
      fontWeight: '100',
    },
    ExtraLight: {
      fontWeight: '200',
    },
    Light: {
      fontWeight: '300',
    },
    Regular: {
      fontWeight: '400',
    },
    Medium: {
      fontWeight: '500',
    },
    SemiBold: {
      fontWeight: '600',
    },
    Bold: {
      fontWeight: '700',
    },
    ExtraBold: {
      fontWeight: '800',
    },
    Black: {
      fontWeight: '900',
    },
  },
};

export const getFont: TFnGetFont = (font = 'body') => {
  return { fontFamily: typography.fonts[font] };
};

export const getFontSize: TFnGetFontSize = (size = 'base') => {
  return typography.fontSizes[size];
};

export const getFontWeight: TFnGetFontWeight = (weight = 'Regular') => {
  return typography.fontWeights[weight];
};

export const getTypo: TFnGetTypo = (size, weight, font) => {
  return {
    ...getFontSize(size),
    ...getFontWeight(weight),
    ...getFont(font),
  };
};

export default typography;
