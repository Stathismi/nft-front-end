import React from 'react';
import { ScrollView } from 'react-native';

import { TermsAndPolicyWrapper, StyledHeading, StyledText } from './TermsAndPolicy.style';
import { TermsAndPolicyContent } from './types';

const policyJson = {
  cometogether: require(`./policies/cometogether.json`),
};

/**
 * Component that renders the policy rules
 */
const Policy: React.FC = () => {
  const policy: TermsAndPolicyContent[] = policyJson['cometogether'];

  return (
    <TermsAndPolicyWrapper>
      <ScrollView
        style={{
          marginHorizontal: 12,
          marginVertical: 15,
        }}
      >
        {policy.map((entry, headingIndex) => {
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

export default Policy;
