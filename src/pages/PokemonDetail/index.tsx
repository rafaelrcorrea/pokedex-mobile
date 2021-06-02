import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import {
  CatchButton,
  ButtonText,
  Container,
  ViewInfo,
  PokemonName,
} from './index.styles';
import { PokemonTypes } from '@store/pokemon/actions';
import SafeAreaView from '@styles/SafeAreaView';
// import Loading from '@components/Loading';
import { capitalize } from '@config/utils';

const PokemonDetail: React.FC = ({ route }) => {
  const pokemonState = useSelector(state => state.pokemon);
  const dispatch = useDispatch();
  const {
    params: { pokemon },
  } = route;
  const pokemonCatched = pokemonState.catched.includes(pokemon.id);

  const { navigate } = useNavigation();

  const catchRelease = () => {
    dispatch({
      type: pokemonCatched ? PokemonTypes.RELEASE : PokemonTypes.CATCH,
      payload: pokemon.id,
    });
  };

  return (
    <SafeAreaView>
      <Container>
        <SvgUri uri={pokemon.sprites?.other?.dream_world?.front_default} />
        <ViewInfo>
          <PokemonName>{capitalize(pokemon.name)}</PokemonName>
          {/* <PokemonName>{JSON.stringify(pokemonState)}</PokemonName> */}
        </ViewInfo>
        <CatchButton catched={pokemonCatched} onPress={catchRelease}>
          <ButtonText>{pokemonCatched ? 'Release' : 'Catch!'}</ButtonText>
        </CatchButton>
      </Container>
    </SafeAreaView>
  );
};

export default PokemonDetail;
