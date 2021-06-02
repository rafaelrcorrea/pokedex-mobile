import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const metrics = {
  basePadding: 20,
  baseMargin: 10,
  baseRadiusLight: 3,
  baseRadiusNormal: 5,
  baseRadiusHeavy: 7,
  baseRadiusSuperHeavy: 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  iconHeaderHeight: 48,
  titlePage: 28,
  title: 18,
  title2: 10,
  headerHeight: 48,
};

export const colors = {
  primaryColor: '#e3350d',
  secundaryColor: '#2b75be',
};
