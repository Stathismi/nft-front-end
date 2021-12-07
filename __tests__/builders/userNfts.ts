import { build, fake } from '@jackfranklin/test-data-bot';

import { UserNftType } from 'src/redux/nft';
import { nftTypes } from 'src/components/NFTCards/constants/constants';

export interface NftBuilderProps {
  numberOfNfts?: number;
  nftType?: keyof typeof nftTypes;
  resalePrice?: number | null;
  isSellable?: boolean;
  isWithdrawable?: boolean;
}

const UserNftsBuilder = ({
  numberOfNfts = 1,
  nftType = 'image',
  resalePrice = null,
  isSellable = false,
  isWithdrawable = false,
}: NftBuilderProps): UserNftType[] => {
  const builder = build<UserNftType>('UserNfts', {
    fields: {
      nftId: fake((f) => f.random.number()),
      nftName: fake((f) => f.lorem.word()),
      nftType,
      nftImage: fake((f) => f.random.image()),
      resalePrice,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      isSellable: isSellable,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      isWithdrawable: isWithdrawable,
    },
  });
  return Array.from(Array(numberOfNfts), () => builder());
};

export default UserNftsBuilder;
