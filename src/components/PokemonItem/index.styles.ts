import styled from 'styled-components/native';
import { metrics } from '@config/metrics';

interface StylesProps {
  bgColor?: string;
}

export const Container = styled.View<StylesProps>`
  width: ${metrics.screenWidth / 3.5}px;
  height: ${metrics.screenWidth / 3.5}px;
  background-color: ${props => props.bgColor}
  align-items: center;
  margin: 2.5px;
  border-radius: ${metrics.baseRadiusNormal}px;
  shadow-color: black;
  shadow-opacity: .2;
  shadow-radius: 5px;

`;

export const Button = styled.TouchableWithoutFeedback``;

export const Sprite = styled.Image`
  width: ${metrics.screenWidth / 4.5}px;
  height: ${metrics.screenWidth / 4.5}px;
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

export const Label = styled.Text<StylesProps>`
  text-align: center;
  font-weight: bold;
  color: ${props =>
    ['black', 'blue', 'red', 'brown', 'purple'].includes(
      props.bgColor || 'white',
    )
      ? 'white'
      : 'black'};
`;
