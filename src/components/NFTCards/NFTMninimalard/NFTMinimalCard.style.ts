import styled from 'styled-components/native';

export const NFTMinimalCardWrapper = styled.View`
  flex: 0.5;
  max-width: 48%;
  height: 161px;
  min-width: 161px;
  margin-bottom: 16px;
`;

export const NFTMinimalCardBGImage = styled.ImageBackground`
  width: 100%;
  height: 161px;
`;

export const NFTInfoWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 10px;
`;

export const NFTMinimalCardBGImageBorderStyle = {
  borderTopLeftRadius: 33,
  borderTopRightRadius: 33,
  borderBottomRightRadius: 33,
  borderBottomLeftRadius: 33,
};
