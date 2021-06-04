import styled from 'styled-components/native';
import { Pokemon } from '@store/types';
import { metrics } from '@config/metrics';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const List = styled(FlatList as new () => FlatList<Pokemon>)`
  width: ${metrics.screenWidth / 1.1}px;
`;
