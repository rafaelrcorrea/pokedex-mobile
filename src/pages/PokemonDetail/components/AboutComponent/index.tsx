import React from 'react';
import {
  capitalize,
  formatNumberPosition,
  formatHeight,
  formatWeight,
} from '@config/utils';
import { Pokemon } from '@store/types';
import {
  Container,
  AboutItemView,
  AboutItemLabel,
  AboutItemValue,
} from './index.styles';

interface AboutProps {
  pokemon: Pokemon;
}

const About: React.FC<AboutProps> = ({ pokemon }) => {
  return (
    <Container>
      <AboutItemView>
        <AboutItemLabel>Number</AboutItemLabel>
        <AboutItemValue>{formatNumberPosition(pokemon.id)}</AboutItemValue>
      </AboutItemView>
      <AboutItemView>
        <AboutItemLabel>Color</AboutItemLabel>
        <AboutItemValue>{capitalize(pokemon.species.color)}</AboutItemValue>
      </AboutItemView>
      <AboutItemView>
        <AboutItemLabel>Type</AboutItemLabel>
        <AboutItemValue>
          {capitalize(pokemon.types[0]?.type.name)}
        </AboutItemValue>
      </AboutItemView>
      <AboutItemView>
        <AboutItemLabel>Height</AboutItemLabel>
        <AboutItemValue>{formatHeight(pokemon.height)}</AboutItemValue>
      </AboutItemView>
      <AboutItemView>
        <AboutItemLabel>Weight</AboutItemLabel>
        <AboutItemValue>{formatWeight(pokemon.weight)}</AboutItemValue>
      </AboutItemView>
    </Container>
  );
};

export default About;
