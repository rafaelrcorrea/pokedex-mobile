import { Pokemon } from '../types';

//Action types
export const PokemonTypes = {
  REQUEST: '@pokemon/REQUEST',
  SUCCESS: '@pokemon/SUCCESS',
  FAILURE: '@pokemon/FAILURE',
};

//Payload types
export type ActionTypes =
  | { type: typeof PokemonTypes.REQUEST }
  | { type: typeof PokemonTypes.SUCCESS; payload: Pokemon[] }
  | { type: typeof PokemonTypes.FAILURE };

export const pokemonRequest = (): ActionTypes => ({
  type: PokemonTypes.REQUEST,
});

export const pokemonSuccess = (): ActionTypes => ({
  type: PokemonTypes.REQUEST,
});

export const pokemonFailure = (): ActionTypes => ({
  type: PokemonTypes.REQUEST,
});
