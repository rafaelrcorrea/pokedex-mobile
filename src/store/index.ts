import { createStore, combineReducers } from 'redux';
import pokemonReducer from './pokemon';

const reducers = combineReducers({
  pokemon: pokemonReducer,
});

const store = createStore(reducers);

export default store;
