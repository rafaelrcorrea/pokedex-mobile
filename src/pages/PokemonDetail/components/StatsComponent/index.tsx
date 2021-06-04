import React from 'react';
import ProgressBar from 'react-native-progress/Bar';
import { Pokemon } from '@store/types';
import {
  Container,
  StatsItemView,
  StatsItemLabel,
  StatsItemValue,
  StatsItemProgressValue,
} from './index.styles';
import { capitalize } from '@config/utils';

interface StatsProps {
  pokemon: Pokemon;
}

const Stats: React.FC<StatsProps> = ({ pokemon }) => {
  return (
    <Container>
      {pokemon.stats.map((stats, index) => (
        <StatsItemView key={index}>
          <StatsItemLabel>{capitalize(stats.stat.name)}</StatsItemLabel>
          <StatsItemValue>
            <StatsItemProgressValue>{stats.base_stat}</StatsItemProgressValue>
            <ProgressBar
              color={
                pokemon.species.color === 'white'
                  ? 'black'
                  : pokemon.species.color
              }
              progress={stats.base_stat / 200}
              width={100}
            />
          </StatsItemValue>
        </StatsItemView>
      ))}
    </Container>
  );
};

export default Stats;
