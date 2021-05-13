import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './index.styles';

const Home: React.FC = () => {
  return (
    <View>
      <Button onPress={() => {}}>
        <Text>TEXT SAMPLE</Text>
      </Button>
    </View>
  );
};

export default Home;
