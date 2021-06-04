import { metrics } from '@config/metrics';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  background-color: blue;
`;

export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: ${metrics.basePadding}px;
`;
export const HeaderInfoView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderText = styled.Text`
  font-size: ${metrics.titlePage}px;
  color: black;
`;
