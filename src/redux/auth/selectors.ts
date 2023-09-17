import { RootStateType } from '../rootStateType';

export const selectAuth = (state: RootStateType) => state.auth;

export const selectAuthToken = (state: RootStateType) => selectAuth(state).token;
