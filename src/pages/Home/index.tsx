import React from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonText, Container, Logo } from './index.styles';
import SafeAreaView from '@styles/SafeAreaView';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  // const pokemon = useSelector(state => state.pokemon);
  // console.log('pokemon', pokemon);
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
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
