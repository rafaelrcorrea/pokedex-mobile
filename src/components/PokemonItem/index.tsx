import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Pokemon, PokemonColor } from '@store/types';
import { Container, Button, Label, Sprite, CatchedImage } from './index.styles';
import { RootState } from '@store/types';

interface PokemonItemProps {
  pokemon: Pokemon;
}

const PokemonItem = ({ pokemon }: PokemonItemProps) => {
  const { navigate } = useNavigation();
  const pokemonState = useSelector((state: RootState) => state.pokemon);
  const pokemonCatched = pokemonState.catched.includes(pokemon.id);
  const pokemonColor =
    pokemonState.colors.find((item: PokemonColor) => item.name === pokemon.name)
      ?.color || 'white';

  return (
    <Button onPress={() => navigate('PokemonDetail', { pokemon })}>
      <Container bgColor={pokemonColor}>
        {pokemonCatched && (
          <CatchedImage source={require('../../assets/pokeball.png')} />
        )}
        <Sprite source={{ uri: pokemon.sprites.front_default }} />
        <Label bgColor={pokemonColor}>{pokemon.name}</Label>
      </Container>
    </Button>
  );
};

export default PokemonItem;
