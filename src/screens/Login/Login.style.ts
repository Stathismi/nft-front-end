import { Image } from 'react-native';
import styled from 'styled-components/native';

import theme from 'src/styles/theme';

export const ScreenContainer = styled.View`
  flex: 1;
`;

export const LoginBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const BrandContainer = styled.View`
  padding-top: 54px;
  align-self: center;
  align-items: center;
`;

export const AppTitleImage = styled(Image)`
  top: 33px;
`;

export const TagLineTitle = styled.Text`
  top: 42.8px;
  font-family: SignikaNegative-Regular;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.00642857px;
  color: ${theme.colors.cardinalTeal};
`;

export const DividerContainer = styled.View`
  margin: 48px 0px;
  flex-direction: row;
  align-items: center;
`;

export const DividerHalf = styled.View`
  flex: 1;
  height: 0px;
  border: 1px solid ${theme.colors.spaceDeep};
`;

export const SocialLoginWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 98px;
`;

export const AgreementWrapper = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: 68.1px;
`;

export const TermsWrapper = styled.View`
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
