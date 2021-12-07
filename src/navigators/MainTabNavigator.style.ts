import theme from 'src/styles/theme';
import styled from 'styled-components/native';
import { ColorsType } from 'src/styles/types';

type TabBarLabelTextProps = {
  color: ColorsType | undefined;
};

export const TabBarLabelText = styled.Text<TabBarLabelTextProps>`
  color: ${(props: TabBarLabelTextProps) =>
    props.color ? theme.colors[props.color] : 'transparent'};
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`;
