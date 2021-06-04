import styled from 'styled-components/native';
import { colors } from '@config/metrics';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Logo = styled.Image`
  height: 20%;
  resize-mode: contain;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.secundaryColor};
  border: 2px solid ${colors.secundaryColor};
  border-radius: 5px;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  color: white;
`;
