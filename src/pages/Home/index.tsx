import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import getPokemonsColors from '@graphql/getPokemonsColors';
import SafeAreaView from '@styles/SafeAreaView';
import { getPokemonsColorsType } from '@store/types';
import { Button, ButtonText, Container, Logo } from './index.styles';

const Home: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>('white');
  const { navigate } = useNavigation();
  // const { data } = useQuery<getPokemonsColorsType>(getPokemonsColors, {
  //   fetchPolicy: 'cache-first',
  // });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (data) {
  //       setBgColor(
  //         data.getPokemonsColors[
  //           Math.floor(Math.random() * data.getPokemonsColors.length)
  //         ].color,
  //       );
  //     }
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [data]);

  return (
    <SafeAreaView bgColor={bgColor}>
      <Container>
        <Logo source={require('../../assets/pokemon-logo.png')} />
        <Button onPress={() => navigate('PokemonList')}>
          <ButtonText>Open Pokédex</ButtonText>
        </Button>
      </Container>
    </SafeAreaView>
  );
};

export default Home;
