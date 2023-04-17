/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useThemeContext } from '@humayunkabir/react-native-theme';
import type {
  TFonts,
  TFontSizes,
  TFontWeights,
} from '@humayunkabir/react-native-theme';

const fonts: TFonts[] = ['heading', 'body', 'mono'];

const weights: TFontWeights[] = [
  'Thin',
  'ExtraLight',
  'Light',
  'Regular',
  'Medium',
  'SemiBold',
  'Bold',
  'ExtraBold',
  'Black',
];

const sizes: TFontSizes[] = [
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
];

const Typography = () => {
  const { getTypo, getColor } = useThemeContext();

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={[
          getTypo('lg', 'SemiBold'),
          { backgroundColor: getColor('secondary'), marginTop: 32 },
          styles.header,
        ]}
      >
        Fonts
      </Text>
      {fonts.map((font) => (
        <Text
          style={[
            getTypo('lg', 'Regular', font),
            { color: getColor('secondary'), textTransform: 'capitalize' },
          ]}
          key={font}
        >
          {font}
        </Text>
      ))}

      <Text
        style={[
          getTypo('lg', 'SemiBold'),
          { backgroundColor: getColor('secondary'), marginTop: 32 },
          styles.header,
        ]}
      >
        Font Weights
      </Text>
      {weights.map((weight) => (
        <Text
          style={[getTypo('lg', weight), { color: getColor('secondary') }]}
          key={weight}
        >
          {weight}
        </Text>
      ))}

      <Text
        style={[
          getTypo('lg', 'SemiBold'),
          { backgroundColor: getColor('secondary'), marginTop: 32 },
          styles.header,
        ]}
      >
        Font Sizes
      </Text>
      {sizes.map((size) => (
        <Text
          style={[getTypo(size), { color: getColor('secondary') }]}
          key={size}
        >
          {size}
        </Text>
      ))}
    </View>
  );
};

export default Typography;

const styles = StyleSheet.create({
  header: {
    color: 'white',
    marginBottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    textTransform: 'capitalize',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 32,
  },
  box: {
    height: 72,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
