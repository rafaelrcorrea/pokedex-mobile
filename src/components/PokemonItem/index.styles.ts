import styled from 'styled-components/native';
import { metrics } from '@config/metrics';

export const Container = styled.View`
  width: ${metrics.screenWidth / 3.2}px;
  height: ${metrics.screenWidth / 3.2}px;
  align-items: center;
`;

export const Button = styled.TouchableWithoutFeedback``;

export const Sprite = styled.Image`
  width: ${metrics.screenWidth / 4}px;
  height: ${metrics.screenWidth / 4}px;
  resize-mode: cover;
`;

export const CatchedImage = styled.Image`
  width: ${metrics.screenWidth / 15}px;
  height: ${metrics.screenWidth / 15}px;
  position: absolute;
  left: 0;
  top: 0;
  resize-mode: cover;
`;

export const Label = styled.Text`
  text-align: center;
  font-weight: bold;
`;
