import {
  AuthenticationActionTypes,
  AuthenticationState,
  SET_LOADING,
  DELETE_USER_TOKEN,
  SET_USER_TOKEN,
} from './types';

const initialState: AuthenticationState = {
  userToken: '',
  isLoading: true,
};

const login = (state = initialState, action: AuthenticationActionTypes) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_USER_TOKEN:
      return {
        ...state,
        userToken: action.payload,
      };
    case DELETE_USER_TOKEN:
      return {
        ...state,
        userToken: '',
      };
    default:
      return state;
  }
};

export default login;
