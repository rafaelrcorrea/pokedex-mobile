import AsyncStorage from '@react-native-community/async-storage';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist';

export default async function buildClient() {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getPokemons: {
            keyArgs: ['id'],
            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = [], incoming, { args }) {
              if (args && args?.offset === 0) {
                return incoming;
              }
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  });

  // {
  //   typePolicies: {
  //     Query: {
  //       fields: {
  //         getPokemons: {
  //           // Don't cache separate results based on
  //           // any of this field's arguments.
  //           keyArgs: false,
  //           // Concatenate the incoming list items with
  //           // the existing list items.
  //           merge(existing = [], incoming, { args }) {
  //             if (args && args.offset === 0) {
  //               return incoming;
  //             }
  //             return [...existing, ...incoming];
  //           },
  //         },
  //       },
  //     },
  //   },
  // }

  try {
    await persistCache({
      cache,
      storage: new AsyncStorageWrapper(AsyncStorage),
      trigger: 'background',
      maxSize: false,
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
