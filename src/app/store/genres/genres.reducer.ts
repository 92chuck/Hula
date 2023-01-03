import { createReducer, INITIAL_STATE, on } from '@ngrx/store';
import { GenresAction } from './genres.actions';

export const initialState: any[] = [];

export const genresReducer = createReducer(
  initialState,
  on(GenresAction.getGenres, (state, { genres }) => genres)
);
