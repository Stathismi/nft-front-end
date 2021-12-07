import React from 'react';

import { nftTypes } from 'src/components/NFTCards/constants/constants';
import SVG from 'src/components/SVG/SVG';
import { View } from 'react-native';

/**
 * Util function that takes as an argument the nftType of an nft and returns the appropriate tag
 * depending on the svg type. if the tag is not defined an empty view is returned. Same as the image
 * case, cause in images we dont have tags for nfts
 * {@see nftTypes}
 */
export const NFTTypeResolver = () => ({
  [nftTypes.gif]: <SVG icon={'gifNftTypeSvg'} width={32} height={24} color="spacePure" />,
  [nftTypes.image]: <View style={{ width: 32, height: 24 }} />,
  [nftTypes.sound]: <SVG icon={'audioNftTypeSvg'} width={32} height={24} color="spacePure" />,
  [nftTypes.video]: <SVG icon={'videoNFtTypeSvg'} width={32} height={24} color="spacePure" />,
  ['']: <View style={{ width: 32, height: 24 }} />,
});
