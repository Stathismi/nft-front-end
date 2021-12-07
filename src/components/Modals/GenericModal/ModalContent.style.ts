import styled from 'styled-components/native';

import { H3, CTButton, Link } from 'src/components';

export const Title = styled(H3)`
  width: 250px;
  margin: 30px 0px;
  text-align: center;
`;

export const MessageWrapper = styled.View`
  margin-bottom: 30px;
`;

export const FormValidationWrapper = styled.View`
  margin-bottom: 30px;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 48px;
`;

export const NoticeMessageLink = styled(Link)`
  padding-left: 17px;
  padding-right: 17px;
`;

export const PrimaryButton = styled(CTButton)``;

export const SecondaryButton = styled(CTButton)`
  margin-right: 16px;
`;
