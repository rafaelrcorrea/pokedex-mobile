import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  ApolloProvider,
  ApolloClient,
  NormalizedCacheObject,
} from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import store from './store';
import buildClient from './services/GraphQL';

const App: React.FC = () => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    buildClient().then(_client => setClient(_client));
  }, []);

  return client ? (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  ) : null;
};

export default App;
