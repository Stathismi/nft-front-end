/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import CreateStore from 'src/redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import Reactotron from 'reactotron-react-native';

import config from 'src/config';
import App from './App';
import { name as appName } from './app.json';
import 'src/localization/index';

// Reactroton import
if (config.ENVIRONMENT === 'development') {
  import('./ReactrotonConfig').then(() => console.log('Reactroton Configured'));
}

const Main = () => {
  const { store, persistor } = CreateStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () =>
  config.ENVIRONMENT === 'development' ? Reactotron.overlay(Main) : Main
);
