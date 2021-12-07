import styled from 'styled-components/native';

import theme from 'src/styles/theme';

export const ProfileScreenContainer = styled.View`
  background-color: ${theme.colors.irisDark};
  flex: 1;
`;

export const ProfileScreenContent = styled.View`
  background-color: ${theme.colors.background};
  width: 100%;
  margin-top: 25.73px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;
