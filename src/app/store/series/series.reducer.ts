import { createReducer, INITIAL_STATE, on } from '@ngrx/store';
import { SeriesAction } from './series.actions';

export const initialState: any[] = [];

export const seriesReducer = createReducer(
  initialState,
  on(SeriesAction.getSeries, (state, { series }) => series)
);
