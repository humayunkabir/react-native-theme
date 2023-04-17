import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@humayunkabir/react-native-theme' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Theme = NativeModules.Theme
  ? NativeModules.Theme
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return Theme.multiply(a, b);
}

export {
  ThemeProvider,
  ICustomTheme,
  default as useThemeContext,
} from './providers/ThemeProvider';

// Colors
export { TPallet, TShade, default as pallets } from './theme/pallets';
export { TIntend } from './theme/colors';

// Typography
export { TFonts, TFontSizes, TFontWeights } from './theme/typography';

// Shadow
export { TShadowSize } from './theme/shadows';
