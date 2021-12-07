import React from 'react';
import { ScrollView } from 'react-native';

import {
  TermsAndPolicyWrapper,
  StyledHeading,
  StyledText,
} from 'src/screens/TermsAndPolicy/TermsAndPolicy.style';
import { TermsAndPolicyContent } from './types';

const termsJson = {
  cometogether: require(`./terms/cometogether.json`),
};
/**
 * Component that renders the terms of use
 */
const Terms: React.FC = () => {
  const terms: TermsAndPolicyContent[] = termsJson['cometogether'];

  return (
    <TermsAndPolicyWrapper>
      <ScrollView
        style={{
          marginHorizontal: 12,
          marginVertical: 15,
        }}
      >
        {terms.map((entry, headingIndex) => {
          const subhead = entry.type === 'subheading';
          return (
            <React.Fragment key={`${headingIndex}`}>
              <StyledHeading fontSize={subhead ? 15 : undefined}>
                {headingIndex !== 0 && '\n'}
                {entry.text}
              </StyledHeading>
              {entry.content.map((text, index) => (
                <StyledText key={`${headingIndex}_${index}`}>
                  {'\n'}
                  {text}
                </StyledText>
              ))}
            </React.Fragment>
          );
        })}
        <StyledText>{'\n'}</StyledText>
      </ScrollView>
    </TermsAndPolicyWrapper>
  );
};

export default Terms;
