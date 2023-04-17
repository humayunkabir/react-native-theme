import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useThemeContext } from '@humayunkabir/react-native-theme';
import type { TIntend, TShadowSize } from '@humayunkabir/react-native-theme';

const sizes: TShadowSize[] = ['sm', 'base', 'md', 'lg', 'xl', '2xl'];
const intends: TIntend[] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
];

const Shadows = () => {
  const { getTypo, getShadow, getColor } = useThemeContext();

  const getTextStyle = (intend: TIntend) => ({
    ...getTypo('lg', 'Medium'),
    ...{ color: getColor(intend) },
  });

  return (
    <>
      {intends.map((intend) => (
        <View key={intend}>
          <Text
            style={[
              getTypo('lg', 'SemiBold'),
              getShadow('2xl', getColor(intend)),
              { backgroundColor: getColor(intend) },
              styles.header,
            ]}
          >
            {intend}
          </Text>
          <View style={styles.row}>
            {sizes.map((size) => (
              <View
                style={[styles.box, getShadow(size, getColor(intend))]}
                key={size}
              >
                <Text style={getTextStyle(intend)}>{size}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </>
  );
};

export default Shadows;

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
