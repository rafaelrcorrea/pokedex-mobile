import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Button } from './index.styles';
import SafeAreaView from '@styles/SafeAreaView';
import Loading from '@components/Loading';

const Home: React.FC = () => {
  const pokemon = useSelector(state => state.pokemon);
  console.log('pokemon', pokemon);
  if (true) {
    return <Loading />;
  }
  return (
    <SafeAreaView>
      <Button onPress={() => {}}>
        <Text>TEXT SAMPLE</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Home;
