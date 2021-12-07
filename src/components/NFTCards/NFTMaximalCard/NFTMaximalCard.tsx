import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';

import CTGradientButton from 'src/components/Buttons/GradientButton/CTGradientButton';
import { NFTTypeResolver } from 'src/components/NFTCards/utils/NFTTypeResolver';
import { H2 } from 'src/components';
import { UserNftType } from 'src/redux/nft';
import {
  NFTBackgroundImageBorderStyle,
  NFTMaximalCardContainer,
  NFTImageBackground,
  NFTCardBottomBGImage,
  NFTCardButtonsWrapper,
  NFTTitleInfo,
  NFTMaskedView,
} from './NFTMaximalCard.style';

type Props = {
  nft: UserNftType;
};

const NFTMaximalCard: React.FC<Props> = ({ nft }) => {
  const { nftId, nftName, nftType, nftImage, resalePrice, isSellable, isWithdrawable } = nft;
  return (
    <TouchableOpacity onPress={() => console.log('add func')} activeOpacity={0.5}>
      <NFTMaskedView maskElement={<NFTMaximalCardContainer />}>
        <NFTImageBackground
          source={{ uri: `${nft.nftImage}` }}
          resizeMode="cover"
          imageStyle={NFTBackgroundImageBorderStyle}
        >
          <LinearGradient
            colors={['#0F111E', 'rgba(15, 17, 30, 0)']}
            locations={[0, 0.44]}
            angle={180}
            useAngle={true}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />
          <NFTTitleInfo style={{ paddingHorizontal: 57 }}>
            {NFTTypeResolver()[nftType]}
            <H2 color={'white'} style={{ marginLeft: 12 }}>
              {nftName}
            </H2>
          </NFTTitleInfo>
        </NFTImageBackground>

        <NFTCardBottomBGImage
          source={require('src/assets/images/Subtract.png')}
          resizeMode={'cover'}
        >
          <NFTCardButtonsWrapper
            style={{
              paddingHorizontal: 22.7,
            }}
          >
            {isWithdrawable && (
              <CTGradientButton
                size="stretchHeight"
                linearColors={['cardinalTeal', 'cardinalPurple']}
                angle={91.85}
                borderRadius={21}
                icon="withdraw"
                iconDirection="column"
                outsetColorShadow="cardinalTealShadow"
                title={'wallet:withdraw'}
                textColor="spacePure"
                style={{ flex: 1, paddingRight: 6 }}
              />
            )}
            {isSellable && (
              <CTGradientButton
                size="stretchHeight"
                linearColors={
                  resalePrice ? ['buttonNotice', 'buttonDelete'] : ['buttonDelete', 'linearPink']
                }
                angle={91}
                icon={resalePrice ? 'unsellNftSvg' : 'sellNFT'}
                iconDirection="column"
                borderRadius={21}
                outsetColorShadow="shadowPurple"
                title={resalePrice ? 'wallet:unSell' : 'wallet:sell'}
                textColor="spacePure"
                style={{ flex: 1 }}
              />
            )}
          </NFTCardButtonsWrapper>
        </NFTCardBottomBGImage>
      </NFTMaskedView>
    </TouchableOpacity>
  );
};

export default NFTMaximalCard;
