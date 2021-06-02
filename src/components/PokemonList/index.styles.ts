import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Pokemon } from '@config/types';
import { metrics } from '@config/metrics';
// padding: 0 ${metrics.basePadding}px;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const List = styled.FlatList`
  width: ${metrics.screenWidth / 1.1}px;
`;
