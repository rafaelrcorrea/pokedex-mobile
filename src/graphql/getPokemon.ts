import { gql } from '@apollo/client';

export default gql`
  query getPokemon($id: ID!) {
    getPokemon(id: $id) {
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
