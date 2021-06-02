import { gql } from '@apollo/client';

export default gql`
  query getPokemons($limit: Int, $offset: Int) {
    getPokemons(limit: $limit, offset: $offset) {
      id
      name
      height
      sprites {
        front_default
        front_shiny
        other {
          dream_world {
            front_default
          }
        }
      }
    }
  }
`;
