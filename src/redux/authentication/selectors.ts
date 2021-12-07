import { RootState } from '../index';

export const __REDUX_STATE_KEY__ = 'authentication';
export const getReduxStateSlice = (state: RootState) => state[__REDUX_STATE_KEY__];
export const getIsLoading = (state: RootState) => getReduxStateSlice(state).isLoading;
export const getUserToken = (state: RootState) => getReduxStateSlice(state).userToken;
