import { nftTypes } from 'src/components/NFTCards/constants/constants';

export const SET_USER_NFTS = 'SET_USER_NFTS';

export interface NftState {
  userNfts: UserNftType[] | null;
}

export interface UserNftType {
  nftId: number;
  nftName: string;
  nftType: keyof typeof nftTypes;
  nftImage: string;
  resalePrice: number | null;
  isSellable: boolean;
  isWithdrawable: boolean;
}

export interface SetUserNftsAction {
  type: typeof SET_USER_NFTS;
  payload: UserNftType[];
}

export type NftsActionTypes = SetUserNftsAction;
