import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Button } from './index.styles';
import SafeAreaView from '@styles/SafeAreaView';
import Loading from '@components/Loading';
import PokemonList from '@components/PokemonList';
import { getPokemonsType } from '@store/types';

import { useQuery } from '@apollo/client';
import getPokemons from '@graphql/getPokemons';

const Home: React.FC = () => {
  // const pokemon = useSelector(state => state.pokemon);
  // console.log('pokemon', pokemon);
  const { data, loading, fetchMore } = useQuery(getPokemons, {
    variables: { limit: 12, offset: 0 },
  });

  const handleLoadMore = (): void => {
    console.log('pokemonsData.length', data.getPokemons.length);
    if (!loading) {
      fetchMore({
        variables: { offset: data?.getPokemons?.length },
      });
    }
  };

  if (loading && data?.getPokemons.length === 0) {
    return <Loading />;
  }
  return (
    <SafeAreaView>
      {data?.getPokemons && (
        <PokemonList pokemons={data.getPokemons} loadMore={handleLoadMore} />
        // <PokemonList pokemons={data.getPokemons} />
      )}
      {/* <Button onPress={handleLoadMore}>
        <Text>LOAD MORE</Text>
      </Button> */}
    </SafeAreaView>
  );
};

export default Home;
