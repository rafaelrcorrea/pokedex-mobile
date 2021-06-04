import { gql } from '@apollo/client';

export default gql`
  # Write your query or mutation here
  query getPokemon($id: ID!) {
    getPokemon(id: $id) {
      id
      name
      height
      weight
      species {
        color
        description
      }
      types {
        slot
        type {
          name
        }
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
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
