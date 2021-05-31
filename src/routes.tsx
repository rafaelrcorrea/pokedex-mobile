import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';

type RootStackParamList = {
  Home: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const src: React.FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: { backgroundColor: '#E3350D' },
      }}
      initialRouteName="Home"
    >
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};

export default src;
