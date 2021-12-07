import styled from 'styled-components/native';
import MaskedView from '@react-native-community/masked-view';

import theme from 'src/styles/theme';

export const NFTMaskedView = styled(MaskedView)`
  height: 429.6px;
  width: auto;
  background-color: ${theme.colors.onixShade};
  margin-bottom: 17px;
`;

export const NFTMaximalCardContainer = styled.View`
  flex-direction: column;
  background-color: ${theme.colors.onixShade};
  width: 100%;
  height: 424.6px;
  border-radius: 42px;
  flex: 1;
`;

export const NFTImageBackground = styled.ImageBackground`
  width: 100%;
  height: 353.3px;
`;

export const NFTTitleInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 28px;
`;

export const NFTCardButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 11.58px;
`;

export const NFTCardBottomBGImage = styled.ImageBackground`
  background-color: transparent;
  height: 108px;
  width: 100%;
  margin-top: 322px;
  position: absolute;
`;

export const NFTBackgroundImageBorderStyle = {
  borderBottomLeftRadius: 31,
  borderBottomRightRadius: 31,
};

export const NFTImage = styled.Image`
  border-radius: 31px;
`;

export const NFTOptionsContainer = styled.View`
  height: 106.66px;
  width: 100%;
  margin-top: 318px;
  border-radius: 42px;
  background-color: green;
`;
