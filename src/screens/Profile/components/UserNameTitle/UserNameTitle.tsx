import React from 'react';
import { useTranslation } from 'react-i18next';

import { H4, H1 } from 'src/components';
import { UserNameTitleContainer } from './UserNameTitle.style';
import { useAuthentication } from 'src/hooks/useAuthentication';

const UserNameTitle: React.FC = () => {
  const { firstName } = useAuthentication();
  const { t } = useTranslation('profile');
  return (
    <UserNameTitleContainer>
      <H4 color={'secondary'}>{t('hello')}</H4>
      <H1 color={'irisPure'}>{firstName}</H1>
    </UserNameTitleContainer>
  );
};

export default UserNameTitle;
