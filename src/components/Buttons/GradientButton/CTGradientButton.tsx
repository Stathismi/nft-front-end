/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

import SVG, { SVGType } from 'src/components/SVG/SVG';
import { ColorsType } from 'src/styles/types';
import { StyledLinearGradient, ButtonTitle } from './CTGradientButton.style';
import theme from 'src/styles/theme';

export type Positions = {
  x: number;
  y: number;
};

export type SizesType =
  | 'small'
  | 'medium'
  | 'stretch'
  | 'stretch-small'
  | 'stretchHeight'
  | 'notice';

export type IconDirectionType = 'row' | 'column';

interface Props {
  icon?: SVGType;
  size: SizesType;
  outsetColorShadow?: ColorsType;
  textColor?: ColorsType;
  backgroundColor?: ColorsType;
  title?: string;
  iconDirection?: IconDirectionType;
  disabled?: boolean;
  onPress?: () => void;
  iconOnly?: boolean;
  borderRadius?: number;
  linearColors: ColorsType[];
  angle?: number;
  locations?: number[];
  linearStartPositions?: Positions;
  linearEndPositions?: Positions;
  accessibilityLabel?: string; // Accessibility label for the button. This is read by the screen reader when the user taps the button.
  style?: StyleProp<ViewStyle>;
}

/**
 * Component that renders a button with linear gradient according to arguments
 * This button only supports "contained" mode buttons
 */
const CTGradientButton: React.FC<Props> = ({
  size,
  disabled = false,
  textColor = 'white',
  linearStartPositions = undefined,
  backgroundColor,
  outsetColorShadow,
  linearEndPositions = undefined,
  linearColors,
  iconDirection = 'row',
  borderRadius = 10,
  iconOnly = false,
  icon,
  angle,
  title,
  locations,
  style,
  children,
  ...rest
}) => {
  const { t } = useTranslation();
  return (
    <>
      <TouchableOpacity disabled={disabled} {...rest} activeOpacity={0.9} style={style}>
        <StyledLinearGradient
          iconDirection={iconDirection}
          backgroundColor={backgroundColor}
          colors={linearColors.map((color) => theme.colors[color])}
          locations={locations ? locations : undefined}
          useAngle={angle ? true : false}
          angle={angle ? angle : undefined}
          start={linearStartPositions}
          end={linearEndPositions}
          size={size}
          borderRadius={borderRadius}
          icon={icon}
          iconOnly={iconOnly}
          textColor={textColor}
          style={
            outsetColorShadow && {
              shadowOffset: { width: 0, height: -2 },
              shadowRadius: 9, // @ts-ignore
              shadowColor: theme.colors[outsetColorShadow],
              shadowOpacity: 0.5,
              elevation: 6,
            }
          }
        >
          {icon && <SVG icon={icon} color={textColor} />}
          {iconOnly ? null : (
            <ButtonTitle
              iconDirection={iconDirection}
              textColor={textColor}
              size={size}
              iconOnly={iconOnly}
              icon={icon}
              borderRadius={borderRadius}
              backgroundColor={backgroundColor}
            >
              {title ? t(title) : null}
            </ButtonTitle>
          )}
        </StyledLinearGradient>
      </TouchableOpacity>
    </>
  );
};

export default CTGradientButton;
