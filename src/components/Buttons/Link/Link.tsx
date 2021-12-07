import React from 'react';
import { View } from 'react-native';

import { BodyTextSmall, BodyTextRegular, BodyTextLarge } from 'src/components';
import SVG, { SVGType } from 'src/components/SVG/SVG';
import { ColorsType } from 'src/styles/types';
import { TouchableContainer } from './Link.style';

type TextSizesType = 'small' | 'regular' | 'large';

type Props = {
  color: ColorsType;
  icon?: SVGType;
  textSize?: TextSizesType;
  margin?: number; // the margin between icon and text
  width?: number;
  height?: number;
  onPress?: () => void;
  disabled?: boolean;
  accessibilityLabel?: string; // Accessibility label for the button. This is read by the screen reader when the user taps the button.
};
const Link: React.FC<Props> = ({
  color,
  margin: marginRight = 0,
  textSize = 'small',
  width = 22,
  height = 22,
  icon,
  onPress: handlePress,
  disabled = false,
  children,
  ...rest
}) => {
  const BodyTextResolver = {
    ['small']: (
      <BodyTextSmall color={color} bold>
        {children}
      </BodyTextSmall>
    ),
    ['regular']: (
      <BodyTextRegular color={color} bold>
        {children}
      </BodyTextRegular>
    ),
    ['large']: (
      <BodyTextLarge color={color} bold>
        {children}
      </BodyTextLarge>
    ),
  };
  return (
    <TouchableContainer
      onPress={handlePress}
      activeOpacity={handlePress ? 0.2 : 1}
      disabled={disabled}
      {...rest}
    >
      {icon && (
        <View style={{ marginRight }}>
          <SVG width={width} height={height} icon={icon} color={color} />
        </View>
      )}
      {BodyTextResolver[textSize]}
    </TouchableContainer>
  );
};

export default Link;
