import React from 'react';
import {
  ICustomTheme,
  ThemeProvider,
  pallets,
} from '@humayunkabir/react-native-theme';
import App from '../App';

const theme: ICustomTheme = {
  colors: {
    primary: pallets.indigo,
  },
  typography: {
    fonts: {
      heading: 'AbrilFatface-Regular',
      body: 'Jost-Regular',
      mono: 'PoiretOne-Regular',
    },
    fontWeights: {
      Thin: {
        fontFamily: 'Jost-Thin',
      },
      ExtraLight: {
        fontFamily: 'Jost-ExtraLight',
      },
      Light: {
        fontFamily: 'Jost-Light',
      },
      Regular: {
        fontFamily: 'Jost-Regular',
      },
      Medium: {
        fontFamily: 'Jost-Medium',
      },
      SemiBold: {
        fontFamily: 'Jost-SemiBold',
      },
      Bold: {
        fontFamily: 'Jost-Bold',
      },
      ExtraBold: {
        fontFamily: 'Jost-ExtraBold',
      },
      Black: {
        fontFamily: 'Jost-Black',
      },
    },
  },
};

function Providers() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

export default Providers;
