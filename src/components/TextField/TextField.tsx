import React, { useState } from 'react';
import { LayoutChangeEvent, TextInputProps, View } from 'react-native';

import theme from 'src/styles/theme';
import { ColorsType } from 'src/styles/types';
import { BodyTextLarge } from 'src/components';
import SVG, { SVGType } from '../SVG/SVG';
import {
  TextFieldContainer,
  TextFieldWrapper,
  TextFieldRightComponentWrapper,
  StyledTextInput,
  ErrorText,
} from './TextField.style';

const MARGIN_BETWEEN_TEXTINPUT_AND_RIGHT_COMPONENT = 20;
type Props = {
  icon?: SVGType;
  prefix?: string;
  selectionColor?: ColorsType;
  error?: string;
  rightComponent?: JSX.Element;
  textType: 'regular' | 'small' | 'large';
  containerWidth?: number;
} & TextInputProps;

const TextField: React.FC<Props> = ({
  icon,
  prefix,
  selectionColor = 'secondary',
  error,
  rightComponent,
  containerWidth,
  textType,
  ...rest
}) => {
  const [rightComponentWidth, setRightComponentWidth] = useState<number>();

  const getRightComponentSize = (event: LayoutChangeEvent) => {
    setRightComponentWidth(event.nativeEvent.layout.width);
  };

  const textInputWidth =
    containerWidth && rightComponentWidth
      ? containerWidth - rightComponentWidth - MARGIN_BETWEEN_TEXTINPUT_AND_RIGHT_COMPONENT
      : undefined;

  return (
    <TextFieldContainer>
      <TextFieldRightComponentWrapper>
        <TextFieldWrapper
          style={{
            width: textInputWidth,
          }}
        >
          {icon && <SVG icon={icon} />}
          {prefix && (
            <BodyTextLarge
              color={error ? 'candyRed' : 'metallicPearlWhite'}
              style={{ marginRight: 5 }}
            >
              {prefix}
            </BodyTextLarge>
          )}

          <StyledTextInput
            textType={textType}
            selectionColor={theme.colors[selectionColor]}
            error={Boolean(error)}
            {...rest}
          />
        </TextFieldWrapper>
        {rightComponent && <View onLayout={getRightComponentSize}>{rightComponent}</View>}
      </TextFieldRightComponentWrapper>
      {error && (
        <View style={{ width: textInputWidth }}>
          <ErrorText color="candyRed">{error}</ErrorText>
        </View>
      )}
    </TextFieldContainer>
  );
};

export default TextField;
