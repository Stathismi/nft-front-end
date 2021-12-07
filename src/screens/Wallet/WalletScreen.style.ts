import styled from 'styled-components/native';

import theme from 'src/styles/theme';

export const WalletScreenScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.onixDeep};
`;

export const WalletNftContainer = styled.View`
  margin-top: 38px;
`;

export const NFTMinimalCardContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
`;
