/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useThemeContext, pallets } from '@humayunkabir/react-native-theme';
import type {
  TIntend,
  TShade,
  TPallet,
} from '@humayunkabir/react-native-theme';

const intends: TIntend[] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
];

const palletList: TPallet[] = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

const shades: TShade[] = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
];

function Colors() {
  const { getTypo, getColor } = useThemeContext();

  return (
    <>
      <Text
        style={[
          getTypo('2xl', 'Bold'),
          { color: getColor('secondary'), paddingTop: 32 },
          styles.capitalize,
        ]}
      >
        Theme Colors
      </Text>
      {intends.map((intend) => (
        <View key={intend}>
          <Text
            style={[
              getTypo('lg', 'SemiBold'),
              { color: getColor(intend) },
              styles.capitalize,
            ]}
          >
            {intend}
          </Text>
          <View style={styles.row}>
            {shades.map((shade) => (
              <View
                style={[
                  styles.box,
                  { backgroundColor: getColor(intend, shade) },
                ]}
                key={shade}
              >
                <Text
                  style={[
                    styles[Number(shade) >= 500 ? 'white' : 'black'],
                    getTypo('sm', 'Medium'),
                  ]}
                >
                  {shade}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ))}

      <Text
        style={[
          getTypo('2xl', 'Bold'),
          { color: getColor('secondary'), paddingTop: 32 },
          styles.capitalize,
        ]}
      >
        Extra Pallets
      </Text>
      {palletList.map((pallet) => (
        <View key={pallet}>
          <Text
            style={[
              getTypo('lg', 'SemiBold'),
              { color: pallets[pallet]['500'] },
              styles.capitalize,
            ]}
          >
            {pallet}
          </Text>
          <View style={styles.row}>
            {shades.map((shade) => (
              <View
                style={[
                  styles.box,
                  { backgroundColor: pallets[pallet][shade] },
                ]}
                key={shade}
              >
                <Text
                  style={[
                    styles[Number(shade) >= 500 ? 'white' : 'black'],
                    getTypo('sm', 'Medium'),
                  ]}
                >
                  {shade}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </>
  );
}

export default Colors;

const styles = StyleSheet.create({
  white: {
    color: 'white',
  },
  black: {
    color: 'black',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
