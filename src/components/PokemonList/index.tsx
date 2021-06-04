import React from 'react';
import { Pokemon } from '@store/types';
import { Container, List } from './index.styles';
import PokemonItem from '@components/PokemonItem';

interface PokemonListProps {
  pokemons: Pokemon[];
  loadMore: any;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, loadMore }) => {
  return (
    <Container>
      <List
        data={pokemons}
        keyExtractor={(item): string => item.id}
        renderItem={({ item }) => <PokemonItem pokemon={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        numColumns={3}
      />
    </Container>
  );
};

export default PokemonList;
