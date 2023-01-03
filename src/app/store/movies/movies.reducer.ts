import { createReducer, INITIAL_STATE, on } from '@ngrx/store';
import { MoviesAction } from './movies.actions';

export const initialState: any[] = [];

export const moviesReducer = createReducer(
  initialState,
  on(MoviesAction.getMovies, (state, { movies }) => movies)
);
