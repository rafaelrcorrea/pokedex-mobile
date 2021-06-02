import styled from 'styled-components/native';
import { colors } from '@config/metrics';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Logo = styled.Image`
  height: 20%;
  resize-mode: contain;
`;

export const InfoText = styled.Text`
  text-align: center;
  color: ${colors.secundaryColor};
`;
