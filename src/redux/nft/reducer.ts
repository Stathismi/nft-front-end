import { NftsActionTypes, NftState, SET_USER_NFTS } from './types';

const initialState: NftState = {
  userNfts: null,
};

const nfts = (state = initialState, action: NftsActionTypes) => {
  switch (action.type) {
    case SET_USER_NFTS:
      return {
        ...state,
        userNfts: action.payload,
      };
    default:
      return state;
  }
};

export default nfts;
