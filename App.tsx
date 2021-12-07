import React from 'react';

import { Provider as PaperProvider } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

import { MainNavigator } from 'src/navigators';
import theme from 'src/styles/theme';
import { GenericModal } from 'src/components';
import config from 'src/config';

// performance imporovement for navigator
enableScreens();

// Reactroton import
if (config.ENVIRONMENT === 'development') {
  import('./ReactrotonConfig').then(() => console.log('Reactroton Configured'));
}

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainNavigator />
        <GenericModal />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
