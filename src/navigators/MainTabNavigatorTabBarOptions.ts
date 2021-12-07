import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import theme from 'src/styles/theme';

const tabBarOptions: BottomTabNavigationOptions | undefined = {
  tabBarLabelPosition: 'below-icon',
  tabBarStyle: {
    backgroundColor: theme.colors.onixDark,
    borderTopWidth: 0,
    position: 'absolute',
    height: 70,
    elevation: 0,
  },
  tabBarItemStyle: {
    marginTop: 19.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarHideOnKeyboard: true,
  headerShown: false,
};

export default tabBarOptions;
