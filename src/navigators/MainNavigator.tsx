import React from 'react';
import { useSelector } from 'react-redux';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

import Login from 'src/screens/Login/Login';
import Terms from 'src/screens/TermsAndPolicy/Terms';
import Policy from 'src/screens/TermsAndPolicy/Policy';
import { getUserToken } from 'src/redux/authentication';
import { BackButton, GoBackImage } from 'src/navigators/MainNavigator.style';
import { LogoWithTitle } from 'src/components/ComeTogetherLogo/LogoWithTitle.style';
import OverviewScreen from 'src/screens/Overview/OverviewScreen';
import assets from 'src/assets/images/logos';
import appConfig from 'src/config';
import theme from 'src/styles/theme';
import { MainTabNavigator } from 'src/navigators/index';

/**
 * function that returns the options object for the following screens
 * {@see Terms} {@see Policy}
 * @param navigation | The navigation object
 */
const mainNavigatorOptions = ({ navigation }: any): NativeStackNavigationOptions => ({
  headerTransparent: true,
  headerTitle: () => <LogoWithTitle source={assets.logoWithTitle.source} resizeMode="contain" />,
  headerLeft: () => (
    <BackButton
      onPress={() => {
        navigation.goBack();
      }}
    >
      <GoBackImage source={require('src/assets/images/back.png')} />
    </BackButton>
  ),
  headerTitleAlign: 'center',
  headerBackVisible: false,
  headerShadowVisible: false,
});

/**
 * Component that renders the main navigator of the app.
 * If the userToken is null then a stack navigator is rendered with the Login screen
 * as the main screen {@see Login}
 * If the userToken exists then a stack navigator is rendered along with a bottom tab navigator
 * @see {MainNavigator}
 */
const MainNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const userToken = useSelector(getUserToken);

  /**@TODO deep linking needs to be configured  */
  const config = {
    screens: {
      SignIn: {
        path: 'login/:token/:email',
        parse: {
          token: (token: string) => `${token}`,
          email: (email: string) => `${email}`,
        },
      },
    },
  };
  const linking = {
    prefixes: [appConfig.DEEP_LINKING_PREFIX],
    config,
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <NavigationContainer linking={linking} independent={true}>
        <Stack.Navigator>
          {userToken === '' ? (
            <>
              <Stack.Screen name="SignIn" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Terms" component={Terms} options={mainNavigatorOptions} />
              <Stack.Screen name="Policy" component={Policy} options={mainNavigatorOptions} />
            </>
          ) : (
            <>
              <Stack.Screen
                name={'mainTabNavigator'}
                component={MainTabNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={'Overview'}
                options={{
                  headerShown: false,
                }}
                component={OverviewScreen}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainNavigator;
