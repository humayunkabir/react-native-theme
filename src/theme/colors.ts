import type { ColorValue } from 'react-native';
import pallets, { TColor, TShade } from './pallets';

export type TIntend =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

export type TColors = Record<TIntend, TColor>;

export type TProperty = string;

export type TFnGetColor = (color?: TIntend, shade?: TShade) => ColorValue;

export const colors: TColors = {
  primary: pallets.indigo,
  secondary: pallets.slate,
  success: pallets.emerald,
  danger: pallets.red,
  warning: pallets.amber,
  info: pallets.sky,
};

export const getColor: TFnGetColor = (color = 'primary', shade = '500') => {
  return colors[color][shade];
};

export default colors;
