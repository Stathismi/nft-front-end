import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

import { getUserToken, setUserTokenAction } from 'src/redux/authentication';
import { setAxiosToken } from 'src/providers/axiosInstances';
import { logoutUser } from 'src/redux/authentication';

export const useAuthentication = (): {
  login: (jwtToken: string) => void;
  logout: () => void;
  eosId: number;
  firstName: string;
  lastName: string;
  language: 'en' | 'el';
  email: string;
} => {
  const dispatch = useDispatch();
  const userToken = useSelector(getUserToken);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { eosId, firstName, lastName, language, email } = userToken && jwt_decode(userToken);
  const login = (jwtToken: string) => {
    dispatch(setUserTokenAction(jwtToken));
    setAxiosToken(jwtToken);
  };

  const logout = async () => {
    await AsyncStorage.clear();
    dispatch(logoutUser());
    setAxiosToken('');
  };
  return {
    login,
    logout,
    eosId,
    firstName,
    lastName,
    language,
    email,
  };
};
