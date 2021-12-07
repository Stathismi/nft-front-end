import styled, { css } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {
  IconDirectionType,
  SizesType,
} from 'src/components/Buttons/GradientButton/CTGradientButton';
import { SVGType } from 'src/components/SVG/SVG';
import { ColorsType } from 'src/styles/types';
import theme from 'src/styles/theme';

type StyledLinearGradientType = {
  backgroundColor: ColorsType | undefined;
  size: SizesType;
  textColor: ColorsType;
  borderRadius: number;
  icon: SVGType | undefined;
  iconOnly: boolean;
  iconDirection: IconDirectionType;
};

const titleStyle = () => css`
  color: ${(props: StyledLinearGradientType) => theme.colors[props.textColor]};
  font-family: Compagnon;
  font-size: ${(props: StyledLinearGradientType) =>
    props.iconDirection === 'column' ? '10px' : '16px'};
  font-weight: 600;
  line-height: ${(props: StyledLinearGradientType) =>
    props.iconDirection === 'column' ? '12px' : '19px'};
  font-style: normal;
  text-transform: capitalize;
  padding-left: ${(props: StyledLinearGradientType) =>
    props.iconDirection === 'row' && props.icon ? '10px' : '0px'};
  padding-top: ${(props: StyledLinearGradientType) =>
    props.iconDirection === 'column' ? '3.86px' : '0px'};
`;

export const CTGradientButtonWidthResolver = (size: SizesType) => {
  switch (size) {
    case 'small':
      return '70px';
    case 'medium':
      return '152px';
    case 'stretch':
      return 'auto';
    case 'stretch-small':
      return 'auto';
    case 'stretchHeight':
      return 'auto';
    case 'notice':
      return '37px';
  }
};

export const CTGradientButtonHeightResolver = (size: SizesType) => {
  switch (size) {
    case 'small':
    case 'stretch-small':
      return '40px';
    case 'medium':
    case 'stretch':
      return '48px';
    case 'stretchHeight':
      return '56px';
    case 'notice':
      return '24px';
  }
};

export const StyledLinearGradient = styled(LinearGradient)<StyledLinearGradientType>`
  border-radius: ${(props: StyledLinearGradientType) => `${props.borderRadius}px`};
  height: ${(props: StyledLinearGradientType) => CTGradientButtonHeightResolver(props.size)};
  width: auto;
  min-width: ${(props: StyledLinearGradientType) => CTGradientButtonWidthResolver(props.size)};
  align-items: center;
  flex-direction: ${(props: StyledLinearGradientType) => `${props.iconDirection}`};
  justify-content: center;
  background-color: ${(props: StyledLinearGradientType) =>
    props.backgroundColor ? theme.colors[props.backgroundColor] : 'transparent'};
`;

export const ButtonTitle = styled.Text<StyledLinearGradientType>`
  ${() => titleStyle()}
`;
