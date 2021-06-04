import styled from 'styled-components/native';
import { colors, metrics } from '@config/metrics';

interface StylesProps {
  bgColor?: string;
  catched?: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 0 ${metrics.basePadding}px;
`;

export const Image = styled.Image`
  width: ${metrics.screenWidth / 2}px;
  height: ${metrics.screenWidth / 2}px;
  resize-mode: contain;
`;

export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const HeaderInfoView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const InfoView = styled.View`
  flex: 1
  background-color: white;
  width: 100%;
  border-radius: ${metrics.baseRadiusHeavy}px;
  top: -35px;
  padding-top: ${metrics.basePadding * 2}px;
`;

export const CatchButton = styled.TouchableOpacity<StylesProps>`
  background-color: ${props =>
    props.catched ? colors.primaryColor : colors.secundaryColor};
  border: 2px solid
    ${props => (props.catched ? colors.primaryColor : colors.secundaryColor)};
  border-radius: 5px;
  padding: 10px;
`;

export const ReturnButton = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  width: ${metrics.title * 2}px;
  height: ${metrics.title * 2}px;
  border-radius: ${metrics.title}px;
`;

export const PokemonName = styled.Text`
  color: black;
  text-align: center;
  font-size: ${metrics.titlePage * 1.5}px;
`;

export const PokemonTypeViewContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${metrics.baseMargin}px 0;
`;

export const PokemonTypeView = styled.View<StylesProps>`
  background-color: ${props => props.bgColor};
  border-radius: ${metrics.baseRadiusSuperHeavy}px;
  padding: 0 ${metrics.basePadding}px;
  align-items: center;
  justify-content: center;
`;
export const PokemonType = styled.Text<StylesProps>`
  color: ${props => colors.constrastColor(props.bgColor || 'white')}
  font-size: ${metrics.title}px;
`;

export const PokemonDescription = styled.Text`
  color: gray;
  text-align: center;
  font-size: ${metrics.title}px;
`;

export const ButtonText = styled.Text`
  color: white;
`;

export const HeaderText = styled.Text`
  font-size: ${metrics.title}px;
  color: white;
`;

export const TabBar = styled.View`
  flex-direction: row;
  padding-top: 30px;
`;

export const TabBarItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding: 16px;
`;
