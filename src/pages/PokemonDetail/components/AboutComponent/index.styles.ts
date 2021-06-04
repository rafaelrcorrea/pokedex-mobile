import styled from 'styled-components/native';
import { metrics } from '@config/metrics';

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.basePadding}px;
`;

export const AboutItemView = styled.View`
  flex-direction: row;
`;

export const AboutItemLabel = styled.Text`
  color: gray;
  width: 40%;
`;

export const AboutItemValue = styled.Text`
  font-weight: bold;
`;
