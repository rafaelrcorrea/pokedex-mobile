//Action types
export const PokemonTypes = {
  CATCH: '@pokemon/CATCH',
  RELEASE: '@pokemon/RELEASE',
};

//Payload types
export type ActionTypes =
  | { type: typeof PokemonTypes.CATCH; payload: string }
  | { type: typeof PokemonTypes.RELEASE; payload: string };

export const pokemonCatch = (pokemonId: string): ActionTypes => ({
  type: PokemonTypes.CATCH,
  payload: pokemonId,
});

export const pokemonRelease = (pokemonId: string): ActionTypes => ({
  type: PokemonTypes.RELEASE,
  payload: pokemonId,
});
