import loginAPI from 'src/providers/loginAPI';
import { NATIVE_APP } from 'src/utils/constants';
import { simpleAction } from '../utils';
import {
  DeleteUserTokenAction,
  DELETE_USER_TOKEN,
  LogoutUser,
  LOGOUT_USER,
  SetLoadingAction,
  SetUserTokenAction,
  SET_LOADING,
  SET_USER_TOKEN,
} from './types';

export const logoutUser = (): LogoutUser => simpleAction(LOGOUT_USER);

export const setUserTokenAction = (params: string): SetUserTokenAction =>
  simpleAction(SET_USER_TOKEN, params);

export const deleteUserTokenAction = (): DeleteUserTokenAction => simpleAction(DELETE_USER_TOKEN);

export const setLoadingAction = (params: boolean): SetLoadingAction =>
  simpleAction(SET_LOADING, params);

export const sentLoginEmailAction = (
  email: string,
  openModal: () => void,
  stopLoading: () => void
) => {
  return async (): Promise<void> => {
    const { request } = loginAPI.single.sendLoginEmailToUser({
      email,
      app: NATIVE_APP,
    });
    await request()
      .then(openModal)
      .catch((error) => {
        console.warn(error);
      })
      .finally(stopLoading);
  };
};

export const verifyLoginEmailAction = (
  email: string,
  token: string,
  login: (jwtToken: string) => void,
  stopLoading: () => void
) => {
  return async (): Promise<void> => {
    const { request } = loginAPI.single.verifyLoginEmail({
      email,
      token,
    });
    await request()
      .then((res) => {
        login(res.jwtToken);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(stopLoading);
  };
};
