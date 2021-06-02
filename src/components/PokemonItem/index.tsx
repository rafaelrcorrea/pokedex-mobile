import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Pokemon } from '@config/types';
import { Container, Button, Label, Sprite, CatchedImage } from './index.styles';

interface PokemonItemProps {
  pokemon: Pokemon;
}

const PokemonItem = ({ pokemon }: PokemonItemProps) => {
  const { navigate } = useNavigation();
  const pokemonState = useSelector(state => state.pokemon);
  const pokemonCatched = pokemonState.catched.includes(pokemon.id);

  return (
    <Button onPress={() => navigate('PokemonDetail', { pokemon })}>
      <Container>
        {pokemonCatched && (
          <CatchedImage source={require('../../assets/pokeball.png')} />
        )}
        <Sprite source={{ uri: pokemon.sprites.front_default }} />
        <Label>{pokemon.name}</Label>
      </Container>
    </Button>
  );
};

export default PokemonItem;
