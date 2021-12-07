import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { NFTTypeResolver } from 'src/components/NFTCards/utils/NFTTypeResolver';
import CTGradientButton from 'src/components/Buttons/GradientButton/CTGradientButton';
import {
  NFTMinimalCardBGImage,
  NFTMinimalCardBGImageBorderStyle,
  NFTInfoWrapper,
  NFTMinimalCardWrapper,
} from './NFTMinimalCard.style';
import { UserNftType } from 'src/redux/nft';

type Props = {
  nft: UserNftType;
};

const NFTMinimalCard: React.FC<Props> = ({ nft }) => {
  const { nftId, nftName, nftType, nftImage, resalePrice, isSellable, isWithdrawable } = nft;
  return (
    <NFTMinimalCardWrapper>
      <TouchableOpacity onPress={() => console.log('add functionality')}>
        <NFTMinimalCardBGImage
          source={{ uri: `${nft.nftImage}` }}
          resizeMode="cover"
          imageStyle={NFTMinimalCardBGImageBorderStyle}
        >
          <NFTInfoWrapper>
            {NFTTypeResolver()[nftType || '']}
            {resalePrice ? (
              <CTGradientButton
                size={'notice'}
                linearColors={['buttonNotice', 'buttonDelete']}
                angle={91}
                iconOnly
                icon={'sellNFT'}
                textColor="white"
                outsetColorShadow={'shadowYellow'}
                disabled
              />
            ) : (
              <View style={{ width: 37, height: 24 }} />
            )}
          </NFTInfoWrapper>
        </NFTMinimalCardBGImage>
      </TouchableOpacity>
    </NFTMinimalCardWrapper>
  );
};

export default NFTMinimalCard;
