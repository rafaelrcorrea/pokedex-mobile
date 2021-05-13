import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';

type RootStackParamList = {
  Home: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const src: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};

export default src;
