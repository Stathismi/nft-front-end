import React from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileActionType } from '../types';
import { Link } from 'src/components';
import { Divider } from 'src/components';
import { ProfileActionContainer, ProfileActionTitle } from './ProfileAction.style';

interface Props {
  title: string;
  profileActions: ProfileActionType[];
}

/**
 * Component that renders profile actions
 * {@see SessionTermination} {@see SupportAndFAQ}
 */
const ProfileAction: React.FC<Props> = ({ title, profileActions }) => {
  const { t } = useTranslation('profile');
  return (
    <ProfileActionContainer>
      <ProfileActionTitle color={'metallicDark'}>{t(`${title}`)}</ProfileActionTitle>
      {profileActions.map((action, index) => (
        <React.Fragment key={`${action.actionContent}-${index}`}>
          <Link
            color={action.color}
            icon={action.icon}
            margin={action.margin}
            onPress={action.onPress}
          >
            {t(`${action.actionContent}`)}
          </Link>
          {action.divider && <Divider />}
        </React.Fragment>
      ))}
    </ProfileActionContainer>
  );
};

export default ProfileAction;
