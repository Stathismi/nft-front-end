import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import config from 'src/config';
import Reactotron from '../../ReactrotonConfig';

import user, {
  LOGOUT_USER,
  AuthenticationActionTypes,
  __REDUX_STATE_KEY__ as __AUTHENTICATION_REDUX_STATE_KEY__,
} from './authentication';

import nfts, { NftsActionTypes, __REDUX_STATE_KEY__ as __NFTS_REDUX_STATE_KEY__ } from './nft';

import genericModal, {
  GenericModalActionTypes,
  __REDUX_STATE_KEY__ as __GENERIC_MODAL_REDUX_STATE_KEY__,
} from './genericModal';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [__AUTHENTICATION_REDUX_STATE_KEY__],
};

const authenticationPersistConfig = {
  key: __AUTHENTICATION_REDUX_STATE_KEY__,
  storage: AsyncStorage,
  whitelist: ['userToken'],
};

const appReducer = combineReducers({
  [__GENERIC_MODAL_REDUX_STATE_KEY__]: genericModal,
  [__AUTHENTICATION_REDUX_STATE_KEY__]: persistReducer(authenticationPersistConfig, user),
  [__NFTS_REDUX_STATE_KEY__]: nfts,
});

const appReducerPersist = persistReducer(rootPersistConfig, appReducer);

export const rootReducer = (state: RootState | undefined, action: ActionTypes) => {
  // Clear all data in redux store to initial.
  if (action.type === LOGOUT_USER) state = undefined;

  return appReducerPersist(state, action);
};

// test param for testing purposes only
export default (test = false) => {
  let store;
  if (test) {
    store = createStore(rootReducer, applyMiddleware(thunk));
  } else {
    store =
      config.ENVIRONMENT === 'development'
        ? createStore(rootReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()))
        : createStore(rootReducer, applyMiddleware(thunk));
  }
  const persistor = persistStore(store);
  return { store, persistor };
};

export type RootState = ReturnType<typeof appReducerPersist>;

type ActionTypes = AuthenticationActionTypes | GenericModalActionTypes | NftsActionTypes;
