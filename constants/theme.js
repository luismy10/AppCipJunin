import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#EB2F2F', // Green
  secondary: '#020203', // Gray

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#eff2f5',
  gray: '#6c757d',
  grayDark: '#343a40',
  blue: '#01a0e0',
  yellow: '#E09B07',
  green: "#61ab5e"
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 50,
  h1: 27,
  h2: 19,
  h3: 17,
  h4: 15,
  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 30 },
  h2: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 26 },
  h3: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22 },
  p: { fontFamily: 'Roboto-Regular', fontSize: SIZES.h4, lineHeight: 22 },
  italic: { fontFamily: 'Roboto-Italic', fontSize: SIZES.h4, lineHeight: 22 },
  italicBold: { fontFamily: 'Roboto-BoldItalic', fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  text_splash: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.h1,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowOffset: { width: -1, height: 3 },
    textShadowRadius: 10,
    borderColor: 'black',
  },
  text_tittle: {
    textAlign: 'center',
    fontFamily: 'Roboto-Black',
    fontWeight: 'bold',
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
