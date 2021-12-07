import styled from 'styled-components/native';
import { bodyTextLarge, bodyTextRegular, bodyTextSmall, BodyTextSmall } from 'src/components';

const textTypeResolver = (props: TextInputProps) => {
  switch (props.textType) {
    case 'small':
      return bodyTextSmall({ color: props.error ? 'candyRed' : 'metallicPearlWhite', bold: true });
    case 'regular':
      return bodyTextRegular({
        color: props.error ? 'candyRed' : 'metallicPearlWhite',
        bold: true,
      });
    case 'large':
      return bodyTextLarge({ color: props.error ? 'candyRed' : 'metallicPearlWhite', bold: true });
  }
};

export const TextFieldContainer = styled.View`
  width: 100%;
`;

export const TextFieldWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  height: 21px;
`;

export const TextFieldRightComponentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

type TextInputProps = {
  error?: boolean;
  textType: 'small' | 'regular' | 'large';
};

export const StyledTextInput = styled.TextInput<TextInputProps>`
  ${(props: TextInputProps) => textTypeResolver(props)}
  min-width: 111.81px;
  padding: 0px;
`;

export const ErrorText = styled(BodyTextSmall)`
  margin-top: 17px;
`;
