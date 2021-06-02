import AsyncStorage from '@react-native-community/async-storage';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { persistCache } from 'apollo3-cache-persist';
import { concatPagination } from '@apollo/client/utilities';

export default async function buildClient() {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getPokemons: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,
            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = [], incoming, { args }) {
              if (args && args.offset === 0) {
                return incoming;
              }
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  });

  try {
    await persistCache({
      cache,
      storage: AsyncStorage,
    });
  } catch (err) {
    console.log('Error in apollo persist cache:', err.message);
  }

  return new ApolloClient({
    uri: 'https://sheltered-headland-35752.herokuapp.com/graphql',
    cache,
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  });
}
