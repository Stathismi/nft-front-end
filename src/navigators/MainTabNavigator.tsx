import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';

import tabBarOptions from './MainTabNavigatorTabBarOptions';
import WalletScreen from 'src/screens/Wallet/WalletScreen';
import ProfileScreen from 'src/screens/Profile/ProfileScreen';
import SVG from 'src/components/SVG/SVG';
import { TabBarLabelText } from './MainTabNavigator.style';
import MarketPlaceScreen from 'src/screens/MarketPlace/MarketPlaceScreen';
import RedeemScreen from 'src/screens/Redeem/RedeemScreen';

const Tab = createBottomTabNavigator();

interface Props {
  initialRouteName?: 'Profile' | 'Wallet' | 'MarketPlace' | 'Redeem'; // param for testing purposes only
}

/**
 * Component that renders the main tab navigator of the app if the user token exists.
 * The main screen is MyTickets {@see MarketPlaceScreen}
 * screens {@see WalletScreen} {@see RedeemScreen} {@see ProfileScreen}
 */
const MainTabNavigator: React.FC<Props> = ({ initialRouteName = 'MarketPlace' }) => {
  const { t } = useTranslation('bottomTabNavigator');

  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName={initialRouteName} //initialRouteName is for testing purposes only. Default value is MarketPlace
    >
      <Tab.Screen
        name={'MarketPlace'}
        component={MarketPlaceScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <TabBarLabelText color={focused ? 'bidGreen' : undefined}>___</TabBarLabelText>
          ),
          tabBarIcon: ({ focused }) => (
            <SVG
              icon={focused ? 'marketPlaceShadow' : 'marketPlace'}
              color={focused ? undefined : 'spaceDark'}
            />
          ),
          ...tabBarOptions,
        }}
      />
      <Tab.Screen
        name={'Wallet'}
        component={WalletScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <TabBarLabelText color={focused ? 'buttonDelete' : undefined}>___</TabBarLabelText>
          ),
          tabBarIcon: ({ focused }) => (
            <SVG
              icon={focused ? 'walletShadow' : 'wallet'}
              color={focused ? undefined : 'spaceDark'}
            />
          ),
          ...tabBarOptions,
        }}
      />
      <Tab.Screen
        name={'Redeem'}
        component={RedeemScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <TabBarLabelText color={focused ? 'buttonAltered' : undefined}>___</TabBarLabelText>
          ),
          tabBarIcon: ({ focused }) => (
            <SVG
              icon={focused ? 'redeemShadow' : 'redeem'}
              color={focused ? undefined : 'spaceDark'}
            />
          ),
          ...tabBarOptions,
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <TabBarLabelText color={focused ? 'buttonNotice' : undefined}>___</TabBarLabelText>
          ),
          tabBarIcon: ({ focused }) => (
            <SVG
              icon={focused ? 'notificationShadow' : 'notification'}
              color={focused ? undefined : 'spaceDark'}
            />
          ),
          ...tabBarOptions,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
