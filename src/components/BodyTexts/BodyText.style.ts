import styled, { css } from 'styled-components/native';
import theme from 'src/styles/theme';
import { ColorsType } from 'src/styles/types';

type TextProps = {
  color?: ColorsType;
  bold?: boolean;
  center?: boolean;
};

export const bodyTextLarge = ({ color, bold, center }: TextProps) => css`
  font-style: normal;
  font-weight: ${bold ? 'bold' : 'normal'};
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.32px;
  color: ${color ? `${theme.colors[color]}` : `${theme.colors.metallicDark}`};
  ${center && `text-align: center;`}
`;

export const bodyTextRegular = ({ color, bold, center }: TextProps) => css`
  font-style: normal;
  font-weight: ${bold ? 'bold' : 'normal'};
  font-size: 14px;
  line-height: ${bold ? '19px' : '21px'};
  letter-spacing: ${bold ? '0' : '-0.32px'};
  color: ${color ? `${theme.colors[color]}` : `${theme.colors.metallicDark}`};
  ${center && `text-align: center;`}
`;

export const bodyTextSmall = ({ color, bold, center }: TextProps) => css`
  font-style: normal;
  font-weight: ${bold ? 'bold' : 'normal'};
  font-size: 12px;
  line-height: ${bold ? '18px' : '14px'};
  letter-spacing: ${bold ? '0' : '-0.32px'};
  color: ${color ? `${theme.colors[color]}` : `${theme.colors.metallicDark}`};
  ${center && `text-align: center;`}
`;

export const BodyTextLarge = styled.Text<TextProps>`
  ${(props: TextProps) =>
    bodyTextLarge({ color: props.color, bold: props.bold, center: props.center })}
`;

export const BodyTextRegular = styled.Text<TextProps>`
  ${(props: TextProps) =>
    bodyTextRegular({ color: props.color, bold: props.bold, center: props.center })}
`;

export const BodyTextSmall = styled.Text<TextProps>`
  ${(props: TextProps) =>
    bodyTextSmall({ color: props.color, bold: props.bold, center: props.center })}
`;

/* Helpers and Tooltips/Helper */
export const HelperText = styled.Text<TextProps>`
  font-style: normal;
  font-weight: ${(props: TextProps) => (props.bold ? 'bold' : 'normal')};
  font-size: 10px;
  line-height: 13px;
  color: ${(props: TextProps) =>
    props.color ? `${theme.colors[props.color]}` : `${theme.colors.metallicDark}`};
`;
