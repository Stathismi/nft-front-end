import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

import { bodyTextRegular } from 'src/components';

export const InputWrapper = styled.View`
  margin-top: 70.49px;
  margin-bottom: 16px;
  width: 100%;
`;

export const EmailInput = styled(TextInput)`
  ${bodyTextRegular({ center: true })};
  height: 48px;
`;
