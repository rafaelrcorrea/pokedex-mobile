import React from 'react';
import { Pokemon } from '@config/types';
import { Container, List } from './index.styles';
import PokemonItem from '@components/PokemonItem';

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList = ({ pokemons, loadMore }: PokemonListProps) => {
  return (
    <Container>
      <List
        data={pokemons}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PokemonItem pokemon={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        numColumns={3}
      />
    </Container>
  );
};

export default PokemonList;
