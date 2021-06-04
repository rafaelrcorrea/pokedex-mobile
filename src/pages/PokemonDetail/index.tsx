/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Animated } from 'react-native';
import { useQuery } from '@apollo/client';
import { SvgUri } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { TabView, SceneMap } from 'react-native-tab-view';
import { PokemonTypes } from '@store/pokemon/actions';
import getPokemon from '@graphql/getPokemon';
import { getPokemonType, Pokemon, RootState } from '@store/types';
import SafeAreaView from '@styles/SafeAreaView';
import { PokemonColor } from '@store/types';
import { capitalize } from '@config/utils';
import Loading from '@components/Loading';
import About from './components/AboutComponent';
import Stats from './components/StatsComponent';
import { metrics } from '@config/metrics';
import {
  CatchButton,
  ButtonText,
  HeaderText,
  Container,
  HeaderView,
  HeaderInfoView,
  InfoView,
  PokemonName,
  PokemonTypeViewContainer,
  PokemonTypeView,
  PokemonType,
  PokemonDescription,
  ReturnButton,
  TabBar,
  TabBarItem,
} from './index.styles';

interface RouteType {
  pokemon: Pokemon;
}

const PokemonDetail: React.FC = () => {
  const [indexTab, setIndexTab] = useState(0);

  const { goBack } = useNavigation();
  const params = useRoute().params as RouteType;

  const pokemonState = useSelector((state: RootState) => state.pokemon);
  const dispatch = useDispatch();

  const { data, loading } = useQuery<getPokemonType>(getPokemon, {
    fetchPolicy: 'network-only',
    variables: {
      id: params.pokemon?.id,
    },
  });

  const pokemon = data?.getPokemon;
  const pokemonCatched = pokemonState.catched.includes(params.pokemon?.id);
  const pokemonColor =
    pokemonState.colors.find(
      (item: PokemonColor) => item.name === params.pokemon?.name,
    )?.color || 'white';

  const routesTabs = [
    { key: 'about', title: 'About' },
    { key: 'stats', title: 'Stats' },
  ];

  const catchRelease = () => {
    dispatch({
      type: pokemonCatched ? PokemonTypes.RELEASE : PokemonTypes.CATCH,
      payload: params.pokemon?.id,
    });
  };

  const AboutRoute: React.FunctionComponent<unknown> = () =>
    pokemon ? <About pokemon={pokemon} /> : null;
  const StatsRoute: React.FunctionComponent<unknown> = () =>
    pokemon ? <Stats pokemon={pokemon} /> : null;

  const renderScene = SceneMap({
    about: AboutRoute,
    stats: StatsRoute,
  });

  const renderTabBar = ({
    navigationState,
    position,
  }: {
    navigationState: any;
    position: any;
  }) => {
    const inputRange = navigationState.routes.map(
      (_: any, index: number) => index,
    );

    return (
      <TabBar>
        {navigationState.routes.map(
          (
            route: {
              title:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            },
            index: any,
          ) => {
            const opacity = position.interpolate({
              inputRange,
              outputRange: inputRange.map((inputIndex: number) =>
                inputIndex === index ? 1 : 0,
              ),
            });

            return (
              <TabBarItem key={index} onPress={() => setIndexTab(index)}>
                <Animated.Text style={{ padding: 5 }}>
                  {route.title}
                </Animated.Text>
                <Animated.View
                  style={{
                    opacity,
                    backgroundColor:
                      pokemonColor === 'white' ? 'black' : pokemonColor,
                    width: '100%',
                    height: 2,
                    borderRadius: 2,
                  }}
                />
              </TabBarItem>
            );
          },
        )}
      </TabBar>
    );
  };

  if (loading) {
    return <Loading />;
  }

  return pokemon ? (
    <LinearGradient
      colors={['white', pokemonColor!, 'white']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <Container>
          <HeaderView>
            <ReturnButton onPress={() => goBack()}>
              <HeaderText>{'<'}</HeaderText>
            </ReturnButton>
            <CatchButton catched={pokemonCatched} onPress={catchRelease}>
              <ButtonText>{pokemonCatched ? 'Release' : 'Catch!'}</ButtonText>
            </CatchButton>
          </HeaderView>
          <HeaderInfoView />
          <SvgUri
            uri={pokemon.sprites?.other?.dream_world?.front_default}
            width="80%"
            style={{
              zIndex: 1,
              elevation: 1,
              maxHeight: metrics.screenHeight / 3,
            }}
          />
          <InfoView>
            <PokemonName>{capitalize(pokemon.name)}</PokemonName>
            <PokemonTypeViewContainer>
              <PokemonTypeView bgColor={pokemonColor}>
                <PokemonType bgColor={pokemonColor}>
                  {capitalize(pokemon.types[0]?.type?.name)}
                </PokemonType>
              </PokemonTypeView>
            </PokemonTypeViewContainer>
            <PokemonDescription>
              {pokemon.species.description}
            </PokemonDescription>
            <TabView
              navigationState={{ index: indexTab, routes: routesTabs }}
              renderScene={renderScene}
              renderTabBar={renderTabBar}
              onIndexChange={setIndexTab}
              style={{ paddingHorizontal: 30, paddingBottom: 30 }}
            />
          </InfoView>
        </Container>
      </SafeAreaView>
    </LinearGradient>
  ) : null;
};

export default PokemonDetail;
