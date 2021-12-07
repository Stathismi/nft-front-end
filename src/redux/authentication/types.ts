export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const DELETE_USER_TOKEN = 'DELETE_USER_TOKEN';
export const LOGOUT_USER = 'DESTROY_SESSION';
export const SET_LOADING = 'SET_LOADING';

export interface AuthenticationState {
  userToken: string;
  isLoading: boolean;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface SetUserTokenAction {
  type: typeof SET_USER_TOKEN;
  payload: string;
}

export interface DeleteUserTokenAction {
  type: typeof DELETE_USER_TOKEN;
}

export interface LogoutUser {
  type: typeof LOGOUT_USER;
}

export type AuthenticationActionTypes =
  | SetUserTokenAction
  | DeleteUserTokenAction
  | LogoutUser
  | SetLoadingAction;
