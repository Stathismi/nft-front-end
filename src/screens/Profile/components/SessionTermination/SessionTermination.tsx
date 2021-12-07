import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useAuthentication } from 'src/hooks/useAuthentication';
import ProfileAction from 'src/screens/Profile/components/common/ProfileAction/ProfileAction';
import {
  closeGenericModalAction,
  GenericModalProperties,
  openGenericModalAction,
} from 'src/redux/genericModal';
import { ProfileActionType } from 'src/screens/Profile/components/common/types';

const SessionTermination: React.FC = () => {
  const { logout } = useAuthentication();
  const { t } = useTranslation('profile');
  const dispatch = useDispatch();

  const deleteAccount = () => {
    dispatch(closeGenericModalAction());
    /** add delete account logic */
    console.log('delete account');
  };

  const showDeleteAccountConfirmationModal = () => {
    const modalParams: GenericModalProperties = {
      title: t('modals.delete_account_confirmation.title'),
      message: t('modals.delete_account_confirmation.message'),
      isNotice: true,
      primaryLabel: t('modals.delete_account_confirmation.primaryLabel'),
      primaryOnPress: () => deleteAccount(),
      secondaryLabel: t('modals.delete_account_confirmation.secondaryLabel'),
      secondaryOnPress: () => dispatch(closeGenericModalAction()),
      color: 'candyRed',
    };
    dispatch(openGenericModalAction(modalParams));
  };

  const profileActions: ProfileActionType[] = [
    {
      onPress: logout,
      icon: 'logout',
      divider: true,
      actionContent: 'logout',
      margin: 10.08,
      color: 'primary',
    },
    {
      onPress: showDeleteAccountConfirmationModal,
      icon: 'delete',
      actionContent: 'deleteAccount',
      margin: 10.08,
      color: 'candyRed',
    },
  ];
  return <ProfileAction title={'sessionTermination'} profileActions={profileActions} />;
};
export default SessionTermination;
