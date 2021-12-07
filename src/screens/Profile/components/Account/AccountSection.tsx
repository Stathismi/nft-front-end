import React from 'react';
import { useTranslation } from 'react-i18next';

import { AccountContainer, AccountTitle } from './AccountSection.style';
import {
  EmailSection,
  FirstNameSection,
  LastNameSection,
} from 'src/screens/Profile/components/Account/components';

const AccountSection: React.FC = () => {
  const { t } = useTranslation('profile');
  return (
    <AccountContainer>
      <AccountTitle color={'metallicDark'}>{t('account')}</AccountTitle>
      <FirstNameSection />
      <LastNameSection />
      <EmailSection />
    </AccountContainer>
  );
};

export default AccountSection;
