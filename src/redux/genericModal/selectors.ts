import { RootState } from '../index';

export const __REDUX_STATE_KEY__ = 'genericModal';
export const getReduxStateSlice = (state: RootState) => state[__REDUX_STATE_KEY__];
export const getGenericModal = (state: RootState) => getReduxStateSlice(state).genericModal;
