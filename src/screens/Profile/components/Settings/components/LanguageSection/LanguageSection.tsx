import React from 'react';
import { useTranslation } from 'react-i18next';

import { H4 } from 'src/components';
import { LANGUAGES } from 'src/utils/constants';
import { changeLanguage } from 'src/localization';
import { Divider } from 'src/components';
import {
  LanguageSectionContainer,
  LanguageSectionContentWrapper,
  LanguageSectionOptionsWrapper,
  LanguageButton,
} from './LanguageSection.style';

const LanguageSection: React.FC = () => {
  const { t, i18n } = useTranslation('profile');

  const handleLanguage = async (language: 'en' | 'el') => {
    await changeLanguage(language);
    /**@TODO add change language logic */
    console.log(`change language to ${language}`);
  };

  return (
    <>
      <LanguageSectionContainer>
        <LanguageSectionContentWrapper>
          <H4 color={'secondary'}>{t('language')}</H4>
        </LanguageSectionContentWrapper>
        <LanguageSectionOptionsWrapper>
          {Object.values(LANGUAGES).map((language, index) =>
            i18n.language === language ? (
              <LanguageButton
                key={`${language}-${index}`}
                size="stretch-small"
                mode="contained"
                backgroundColor="metallicDark"
                color="metallicPearlWhite"
                accessibilityLabel={`Selected Language is ${language}`}
                disabled={true}
              >
                {language.toUpperCase()}
              </LanguageButton>
            ) : (
              <LanguageButton
                key={`${language}-${index}`}
                size="stretch-small"
                mode="outlined"
                color="metallicDark"
                backgroundColor="metallicDark"
                onPress={() => handleLanguage(language as 'en' | 'el')}
                accessibilityLabel={`Change language to ${language}`}
              >
                {language.toUpperCase()}
              </LanguageButton>
            )
          )}
        </LanguageSectionOptionsWrapper>
      </LanguageSectionContainer>
      <Divider />
    </>
  );
};

export default LanguageSection;
