import React from 'react';

import { openMailApp } from 'src/utils/common';
import ProfileAction from 'src/screens/Profile/components/common/ProfileAction/ProfileAction';
import { ProfileActionType } from 'src/screens/Profile/components/Common/types';

const SupportAndFAQ: React.FC = () => {
  const profileActions: ProfileActionType[] = [
    {
      onPress: () => openMailApp('support@cometogether.network'),
      margin: 8.98,
      icon: 'notice',
      color: 'primary',
      divider: true,
      actionContent: 'reportBug',
    },
  ];
  return <ProfileAction title="supportAndFAQ" profileActions={profileActions} />;
};

export default SupportAndFAQ;
