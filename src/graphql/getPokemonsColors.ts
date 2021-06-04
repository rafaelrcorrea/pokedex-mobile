import { gql } from '@apollo/client';

export default gql`
  query getPokemonsColors {
    getPokemonsColors {
      name
      color
    }
  }
`;
