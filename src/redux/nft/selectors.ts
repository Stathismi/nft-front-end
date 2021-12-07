import { RootState } from '../index';

export const __REDUX_STATE_KEY__ = 'nfts';
export const getReduxStateSlice = (state: RootState) => state[__REDUX_STATE_KEY__];
export const getUserNfts = (state: RootState) => getReduxStateSlice(state).userNfts;
