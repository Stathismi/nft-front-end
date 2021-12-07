import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';

import GenericModal from 'src/components/Modals/GenericModal/GenericModal';
import CreateStore from 'src/redux';
import theme from 'src/styles/theme';

const renderWithRedux = (component) => {
  const { store, persistor } = CreateStore(true);
  const queries = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer independent={true}>
            <GenericModal />
            {component}
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
  return {
    ...queries,
    store,
    persistor,
  };
};

export default renderWithRedux;
