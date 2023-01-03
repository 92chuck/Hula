import { createReducer, INITIAL_STATE, on } from '@ngrx/store';
import { ContentsAction } from './contents.actions';

export const initialState = {};

export const contentsReducer = createReducer(
  initialState,
  on(ContentsAction.getContents, (state, { contents }) => contents)
);
