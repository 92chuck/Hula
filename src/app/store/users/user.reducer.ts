import { createReducer, INITIAL_STATE, on } from '@ngrx/store';
import { UserAction } from './user.actions';

export const initialState = {
  isLoggedIn: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserAction.getUser, (state, { user }) => {
    if (!user) return { ...state };
    return { ...user, isLoggedIn: true };
  }),
  on(UserAction.createUser, (state, { user }) => {
    return { ...user.user, isLoggedIn: true };
  }),
  on(UserAction.authenticateUser, (state, { user }) => {
    return { ...user.user, isLoggedIn: true };
  }),
  on(UserAction.logOut, (state, { user }) => {
    return { ...user, isLoggedIn: false };
  }),
  on(UserAction.updateUser, (state, { user }) => {
    return { ...user, isLoggedIn: true };
  })
);
