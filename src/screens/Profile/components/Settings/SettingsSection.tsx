import React from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageSection } from 'src/screens/Profile/components/Settings/components';
import { SettingsContainer } from './SettingsSection.style';
import { H3 } from 'src/components';

const SettingsSection: React.FC = () => {
  const { t } = useTranslation('profile');
  return (
    <SettingsContainer>
      <H3 color={'metallicDark'}>{t('settings')}</H3>
      <LanguageSection />
    </SettingsContainer>
  );
};

export default SettingsSection;
