import { PokemonTypes, ActionTypes } from './actions';
import { PokemonState } from '../types';
import colors from '@assets/pokemon-colors.json';

const INITIAL_STATE = {
  catched: [],
  colors,
  loading: false,
  error: null,
};

export default function pokemon(
  state: PokemonState = INITIAL_STATE,
  action: ActionTypes,
) {
  switch (action.type) {
    case PokemonTypes.CATCH:
      return {
        ...state,
        catched: [...state.catched, action.payload],
      };
    case PokemonTypes.RELEASE:
      return {
        ...state,
        catched: state.catched.filter(
          pokemonId => pokemonId !== action.payload,
        ),
      };
    default:
      return state;
  }
}
