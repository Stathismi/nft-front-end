import React from 'react';
import { useTranslation } from 'react-i18next';

import { useAuthentication } from 'src/hooks/useAuthentication';
import { LogoutText } from './LogoutButton.style';

const LogoutButton: React.FC = () => {
  const { logout } = useAuthentication();
  const { t } = useTranslation();

  return <LogoutText onPress={logout}>{t('login:logout')}</LogoutText>;
};

export default LogoutButton;
