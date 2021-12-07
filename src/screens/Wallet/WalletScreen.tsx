import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import theme from 'src/styles/theme';
import { NFTMaximalCard, NFTMinimalCard } from 'src/components/NFTCards';
import {
  WalletScreenScrollView,
  WalletNftContainer,
  NFTMinimalCardContainer,
} from './WalletScreen.style';
import { ExploreMore, PresentationButtons, WalletTitleInfo } from 'src/screens/Wallet/components';
import { getUserNfts, getUserNftsAction } from 'src/redux/nft';

/**
 * Wallet Screen
 */
const WalletScreen: React.FC = () => {
  const dispatch = useDispatch();
  const userNfts = useSelector(getUserNfts);
  const [gridPresentation, setGridPresentation] = useState<boolean>(false);
  const [cardPresentation, setCardPresentation] = useState<boolean>(true);

  //TODO REFACTOR useEffect according to skeleton
  useEffect(() => {
    dispatch(getUserNftsAction());
  }, [dispatch]);

  const setGrid = useCallback(() => {
    setGridPresentation(true);
    setCardPresentation(false);
  }, [setGridPresentation]);

  const setCard = useCallback(() => {
    setGridPresentation(false);
    setCardPresentation(true);
  }, [setCardPresentation]);

  return (
    <WalletScreenScrollView showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={theme.colors.onixDeep} barStyle="light-content" />
      <WalletTitleInfo />
      <PresentationButtons
        setCard={setCard}
        setGrid={setGrid}
        gridPresentation={gridPresentation}
      />
      <WalletNftContainer style={{ paddingHorizontal: 17 }}>
        {cardPresentation ? (
          userNfts && userNfts.map((nft) => <NFTMaximalCard nft={nft} key={nft.nftId} />)
        ) : (
          <NFTMinimalCardContainer>
            {userNfts && userNfts.map((nft) => <NFTMinimalCard nft={nft} key={nft.nftId} />)}
          </NFTMinimalCardContainer>
        )}
      </WalletNftContainer>
      <ExploreMore />
    </WalletScreenScrollView>
  );
};

export default WalletScreen;
