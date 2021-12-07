import styled from 'styled-components/native';

import theme from 'src/styles/theme';

type DividerProps = {
  isFocused?: boolean;
};

export const Divider = styled.View<DividerProps>`
  width: 100%;
  height: 0px;
  opacity: ${(props: DividerProps) => (props.isFocused ? 0.7 : 0.1)};
  border: 1px solid ${theme.colors.irisDark};
  margin: 26px 0px;
`;
