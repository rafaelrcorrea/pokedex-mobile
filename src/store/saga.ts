import { all, takeLatest } from 'redux-saga/effects';
import { PokemonTypes } from './pokemon/types';
import { getPokemon } from './pokemon/sagas';

export default function* saga(): any {
  return yield all([takeLatest(PokemonTypes.REQUEST, getPokemon)]);
}
