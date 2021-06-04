//State Types
export interface RootState {
  pokemon: PokemonState;
}
export interface PokemonState {
  catched: string[];
  colors: PokemonColor[];
}

// GraphQL Types
export interface getPokemonsType {
  getPokemons: Pokemon[];
}
export interface getPokemonType {
  getPokemon: Pokemon;
}

export interface getPokemonsColorsType {
  getPokemonsColors: PokemonColor[];
}

export interface PokemonColor {
  name: string;
  color: string;
}
export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
export interface PokemonSpecies {
  color: string;
  description: string;
}

export interface PokemonSpriteOtherType {
  front_default: string;
}

export interface PokemonSpriteOther {
  dream_world: PokemonSpriteOtherType;
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  backend_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
  other: PokemonSpriteOther;
}

export interface Pokemon {
  id: string;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: [PokemonType];
  sprites: PokemonSprites;
  stats: [PokemonStats];
  species: PokemonSpecies;
}
