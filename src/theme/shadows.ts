import type { ColorValue } from 'react-native';

export type TShadowSize = 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';

type TShadow = {
  shadowColor?: ColorValue;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
};

export type TShadows = Record<TShadowSize, TShadow>;

export type TFnGetShadow = (
  size?: TShadowSize,
  color?: ColorValue,
  shadow?: {
    width?: number;
    height?: number;
    opacity?: number;
    radius?: number;
    elevation?: number;
  }
) => TShadow;

const shadows: TShadows = {
  'sm': {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  'base': {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  'md': {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.07,
    shadowRadius: 3,
    elevation: 4,
  },
  'lg': {
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  'xl': {
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.13,
    shadowRadius: 13,
    elevation: 20,
  },
  '2xl': {
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowOpacity: 0.15,
    shadowRadius: 25,
    elevation: 25,
  },
};

export const getShadow: TFnGetShadow = (
  size = 'base',
  color = '#000',
  customShadow = {}
) => {
  const shadow = shadows[size];
  return {
    shadowColor: color,
    shadowOffset: {
      height: customShadow.height ?? shadow.shadowOffset.height,
      width: customShadow.width ?? shadow.shadowOffset.width,
    },
    shadowOpacity: customShadow.opacity ?? shadow.shadowOpacity,
    shadowRadius: customShadow.radius ?? shadow.shadowRadius,
    elevation: customShadow.elevation ?? shadow.elevation,
  };
};

export default shadows;
