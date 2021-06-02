import { PokemonTypes, ActionTypes } from './actions';
import { PokemonState } from '../types';

const INITIAL_STATE = {
  catched: [],
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
