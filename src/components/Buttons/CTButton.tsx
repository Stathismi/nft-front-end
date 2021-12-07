import React from 'react';

import { contentStyleResolver, StyledButton } from './CTButton.style';
import SVG, { SVGType } from 'src/components/SVG/SVG';
import { ColorsType } from 'src/styles/types';
import theme from 'src/styles/theme';

export type ModesType = 'contained' | 'outlined';
export type SizesType = 'small' | 'medium' | 'stretch' | 'stretch-small';
interface Props {
  mode?: ModesType;
  size: SizesType;
  backgroundColor?: ColorsType;
  color?: ColorsType;
  icon?: SVGType;
  borderRadius?: number;
  iconOnly?: boolean;
  disabled?: boolean;
  // native props, passed to component with ...rest
  onPress?: () => void;
  accessibilityLabel?: string; // Accessibility label for the button. This is read by the screen reader when the user taps the button.
}

/**
 * Component that renders button according to arguments
 * @param mode             | The mode of the button {outlined, contained, text}
 * @param size             | The size of button {small, medium}
 * @param backgroundColor  | The background color of the button if its contained mode
 * @param color            | The content color
 * @param children         | The content inside the button
 * @param icon             | The svg icon, if exists
 */
const CTButton: React.FC<Props> = ({
  mode = 'contained',
  size,
  color = 'metallicDark',
  backgroundColor = 'primary',
  children,
  icon,
  borderRadius = 10,
  iconOnly = false,
  disabled = false,
  ...rest
}) => {
  return (
    <>
      <StyledButton
        mode={mode}
        uppercase={false}
        size={size}
        colour={color}
        backgroundColor={backgroundColor}
        icon={icon ? () => <SVG icon={icon} color="metallicPearlWhite" /> : undefined}
        contentStyle={contentStyleResolver(mode, backgroundColor, size, iconOnly, borderRadius)}
        borderRadius={borderRadius}
        labelStyle={
          iconOnly
            ? { display: 'none' } // this style is only needed to align the icon in the center
            : {
                color: theme.colors[color],
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 18,
              }
        }
        disabled={disabled}
        {...rest}
      >
        {children}
      </StyledButton>
    </>
  );
};

export default CTButton;
