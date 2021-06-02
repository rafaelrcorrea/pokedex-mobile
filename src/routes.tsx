import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';

type RootStackParamList = {
  Home: undefined;
  PokemonList: undefined;
  PokemonDetail: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const src: React.FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="PokemonList" component={PokemonList} />
      <RootStack.Screen name="PokemonDetail" component={PokemonDetail} />
    </RootStack.Navigator>
  );
};

export default src;
