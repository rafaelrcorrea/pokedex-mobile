import { PokemonTypes, ActionTypes } from './actions';
import { Pokemon } from '../types';

const INITIAL_STATE = {
  data: [
    { id: 1, name: 'BULBASAUR' },
    { id: 2, name: 'CHARMANDER' },
  ],
  loading: false,
  error: null,
};

export default function pokemon(
  state: Pokemon = INITIAL_STATE,
  action: ActionTypes,
) {
  switch (action.type) {
    case PokemonTypes.REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PokemonTypes.SUCCESS:
      return {
        loading: false,
        error: null,
        pokemon: action.payload,
      };
    case PokemonTypes.FAILURE:
      return {
        loading: false,
        error: action.payload,
        ...state,
      };
    default:
      return state;
  }
}
