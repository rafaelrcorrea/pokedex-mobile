import React from 'react';
import { useQuery } from '@apollo/client';
import SafeAreaView from '@styles/SafeAreaView';
import Loading from '@components/Loading';
import PokemonList from '@components/PokemonList';
import getPokemons from '@graphql/getPokemons';
import { getPokemonsType } from '@store/types';
import { HeaderView, HeaderInfoView, HeaderText } from './index.styles';

const Home: React.FC = () => {
  const { data, loading, fetchMore } = useQuery<getPokemonsType>(getPokemons, {
    fetchPolicy: 'cache-first',
    variables: { limit: 12, offset: 0 },
  });

  const handleLoadMore = (): void => {
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
      <HeaderView>
        <HeaderInfoView>
          <HeaderText>Pokedex</HeaderText>
        </HeaderInfoView>
      </HeaderView>
      {data?.getPokemons && (
        <PokemonList pokemons={data.getPokemons} loadMore={handleLoadMore} />
      )}
    </SafeAreaView>
  );
};

export default Home;
