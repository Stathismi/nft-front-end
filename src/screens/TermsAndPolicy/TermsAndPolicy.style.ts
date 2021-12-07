import styled from 'styled-components/native';

type StyleHeadingType = {
  fontSize?: number;
};

export const TermsAndPolicyWrapper = styled.View`
  margin-top: 100px;
  flex: 1;
  align-items: center;
`;

export const StyledHeading = styled.Text<StyleHeadingType>`
  font-size: ${(props: any) => (props.fontSize ? props.fontSize + 'px' : '18px')};
  font-weight: bold;
  letter-spacing: -0.82px;
  line-height: 20px;
  text-align: center;
`;

export const StyledText = styled.Text`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.82px;
  text-align: center;
`;
