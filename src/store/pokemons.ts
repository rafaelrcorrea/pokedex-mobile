export const Actions = {
  REQUEST: 'pokemons/REQUEST',
  SUCCESS: 'pokemons/SUCCESS',
  FAILURE: 'pokemons/FAILURE',
};

interface PokemonsState {
  pokemons: object[];
  loading: boolean;
  error: any;
}

type Action = {
  type: keyof typeof Actions;
  payload?: any;
};

const INITIAL_STATE = {
  pokemons: [],
  loading: false,
  error: null,
};

export default function pokemons(
  state: PokemonsState = INITIAL_STATE,
  action: Action,
) {
  switch (action.type) {
    case Actions.REQUEST:
      return {
        loading: true,
        ...state,
      };
    case Actions.SUCCESS:
      return {
        loading: false,
        error: null,
        pokemons: action.payload,
      };
    case Actions.FAILURE:
      return {
        loading: false,
        error: action.payload,
        ...state,
      };
    default:
      return state;
  }
}
