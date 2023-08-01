# @humayunkabir/react-native-theme

A customizable theme for React Native apps

## Installation

```sh
npm install @humayunkabir/react-native-theme
```

or

```sh
yarn add @humayunkabir/react-native-theme
```

## Usage

```js
import { View, Text } from 'react-native';
import { ICustomTheme, ThemeProvider, pallets, useThemeContext } from '@humayunkabir/react-native-theme';

const theme: ICustomTheme = {
  colors: {
    primary: pallets.indigo,
  },
  typography: {
    fonts: {
      heading: 'Montserrat-Regular',
      body: 'Poppins-Regular',
      mono: 'FiraCode-Regular',
    },
    fontWeights: {
      Thin: {
        fontFamily: 'Poppins-Thin',
      },
      ExtraLight: {
        fontFamily: 'Poppins-ExtraLight',
      },
      Light: {
        fontFamily: 'Poppins-Light',
      },
      Regular: {
        fontFamily: 'Poppins-Regular',
      },
      Medium: {
        fontFamily: 'Poppins-Medium',
      },
      SemiBold: {
        fontFamily: 'Poppins-SemiBold',
      },
      Bold: {
        fontFamily: 'Poppins-Bold',
      },
      ExtraBold: {
        fontFamily: 'Poppins-ExtraBold',
      },
      Black: {
        fontFamily: 'Poppins-Black',
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

function App() {
  const {
    colors,
    getColor,
    typography,
    getFont,
    getFontSize,
    getFontWeight,
    getTypo,
    shadows,
    getShadow,
  } = useThemeContext();

  return (
    <View 
      style={[
        {backgroundColor: getColor('secondary', '800')},
        getShadow('lg')
      ]}
    >
      <Text
        style={[
          {color: getColor('primary', '600')},
          getFontWeight('SemiBold'),
        ]}>
        React Native Theme
      </Text>
    </View>
  );
}
```

## Methods
Exported methods from `useThemeContext` are following: 

- `getColor`: `getColor(color, shade)`
  - color: `primary`*, `secondary`, `success`, `danger`, `warning`, `info`
  - shade: `50`, `100`, `200`, `300`, `400`, `500`*, `600`, `700`, `800`, `900`, `950`
- `getFont`: `getFont(font)`
  - font: `heading`, `body`*, `mono`
- `getFontSize`: `getFontSize(size)`
  - size: `xs`, `sm`, `base`*, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl`
- `getFontWeight`: `getFontWeight(weight)`
  - weight: `Thin`, `ExtraLight`, `Light`, `Regular`*, `Medium`, `SemiBold`, `Bold`, `ExtraBold`, `Black`
- `getTypo`: `getTypo(size, weight, font)`
  - size: `xs`, `sm`, `base`*, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl`
  - weight: `Thin`, `ExtraLight`, `Light`, `Regular`*, `Medium`, `SemiBold`, `Bold`, `ExtraBold`, `Black`
  - font: `heading`, `body`*, `mono`
- `getShadow`: `getShadow(size, color, customShadow)`
  - size: `sm`, `base`*, `md`, `lg`, `xl`, `2xl`;
  - color: any valid color (default: `#000`)
  - customShadow: 
    ```ts
    {
      width?: number;
      height?: number;
      opacity?: number;
      radius?: number;
      elevation?: number;
    }
    ```

**Note:** `*` mark is used to denote default value.

## Values

Exported values from `useThemeContext` are followings: 

- colors: `primary`, `secondary`, `success`, `danger`, `warning`, `info`
  ```js
  {
    primary: {
      50: 'colorValue',
      100: 'colorValue',
      200: 'colorValue',
      300: 'colorValue',
      400: 'colorValue',
      500: 'colorValue',
      600: 'colorValue',
      700: 'colorValue',
      800: 'colorValue',
      900: 'colorValue',
      950: 'colorValue',
    }
    ...
  }
  ```
- typography: `fonts`, `fontSizes`, `fontWeights`
  - fonts: `heading`, `body`*, `mono`
  - fontSizes: `xs`, `sm`, `base`*, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl`
  - fontWeights: `Thin`, `ExtraLight`, `Light`, `Regular`*, `Medium`, `SemiBold`, `Bold`, `ExtraBold`, `Black`
  
  ```js
  {
    fonts: {
      heading: 'Font Name',
      ...
    },
    fontSizes: {
      'xs': {
        fontSize: 12,
        lineHeight: 16,
      },
      ...
    },
    fontWeights: {
      Thin: {
        fontWeight: '100',
      },
      ...
    },
  }
  ```
- shadows: `sm`, `base`, `md`, `lg`, `xl`, `2xl`
  ```js
  {
    'sm': {
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.05,
      shadowRadius: 1,
      elevation: 1,
    },
    ...
  }
  ```

## Pallets
This Includes an expertly-crafted default color palette out-of-the-box that is a great starting point if you don’t have your own specific branding in mind. They are following: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`
```js
{
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  }
  ...
}
 ```
PalletsCredit: [TailwindCSS](https://tailwindcss.com/docs/customizing-colors)


## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
