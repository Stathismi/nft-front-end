import { simpleAction, ThunkDispatchType } from '../utils';
import { SET_USER_NFTS, SetUserNftsAction, UserNftType } from 'src/redux/nft/types';
import UserNftsBuilder from 'src/redux/nft/userNfts';

//TODO remove dummy data
const nfts: UserNftType[] = UserNftsBuilder({
  numberOfNfts: 5,
  nftType: 'gif',
  isWithdrawable: true,
  isSellable: true,
});

export const getUserNftsAction = () => {
  return async (dispatch: ThunkDispatchType): Promise<void> => {
    // const { request: nftsRequest } = nftsAPI.single.getUserNfts();
    // await nftsRequest()
    //   .then((res: UserNftType[]) => {
    //     setUserNftsAction(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     //TODO sentry as well as ticketing
    //     //TODO add error modal with localized response from server
    //   });
    dispatch(setUserNftsAction(nfts));
  };
};

export const setUserNftsAction = (params: UserNftType[]): SetUserNftsAction =>
  simpleAction(SET_USER_NFTS, params);
