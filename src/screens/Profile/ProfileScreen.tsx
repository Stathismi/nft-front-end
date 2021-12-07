import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  UserNameTitle,
  SupportAndFAQ,
  SessionTermination,
  SettingsSection,
  AccountSection,
} from 'src/screens/Profile/components';
import { ProfileScreenContainer, ProfileScreenContent } from './Profile.style';

/**
 * Component that renders the Profile page of the user
 * Bottom Tab navigator screen
 */
const ProfileScreen: React.FC = () => {
  return (
    <ScrollView>
      <ProfileScreenContainer>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
        <LinearGradient
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.15, y: 0.28 }}
          colors={['#14141D', 'rgba(20, 20, 29, 0)']}
          locations={[0.24, 1]}
        />
        <UserNameTitle />
        <ProfileScreenContent style={{ paddingBottom: 119 }}>
          <SettingsSection />
          <AccountSection />
          <SupportAndFAQ />
          <SessionTermination />
        </ProfileScreenContent>
      </ProfileScreenContainer>
    </ScrollView>
  );
};

export default ProfileScreen;
