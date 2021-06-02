import styled from 'styled-components/native';
import { colors, metrics } from '@config/metrics';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const Image = styled.Image`
  width: ${metrics.screenWidth / 2};
  height: ${metrics.screenWidth / 2};
  resize-mode: contain;
`;

export const ViewInfo = styled.View``;

export const CatchButton = styled.TouchableOpacity`
  background-color: ${props =>
    props.catched ? colors.primaryColor : colors.secundaryColor};
  border: 2px solid
    ${props => (props.catched ? colors.primaryColor : colors.secundaryColor)};
  border-radius: 5px;
  padding: 10px;
`;

export const PokemonName = styled.Text`
  color: black;
  padding: ${metrics.basePadding}px;
  font-size: ${metrics.titlePage}px;
`;

export const ButtonText = styled.Text`
  color: white;
`;
