import {createStore, combineReducers} from 'redux';
import pokemonsReducer from './pokemons';

const reducers = combineReducers({
  pokemons: pokemonsReducer,
});

const store = createStore(reducers);

export default store;
