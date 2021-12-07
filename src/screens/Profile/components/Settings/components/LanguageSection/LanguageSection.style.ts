import styled from 'styled-components/native';
import { CTButton } from 'src/components';

export const LanguageSectionContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
`;

export const LanguageSectionContentWrapper = styled.View`
  justify-content: flex-start;
  margin-right: 13px;
  padding: 0px;
  max-width: 185px;
`;

export const LanguageSectionOptionsWrapper = styled.View`
  flex-direction: row;
  max-width: 128px;
  padding: 6px 16px 0px 0px;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const LanguageButton = styled(CTButton)`
  margin-right: 5px;
`;
