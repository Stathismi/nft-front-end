import React from 'react';
import { StatusBar } from 'react-native';

import theme from 'src/styles/theme';

import { ScreenContainer } from './MarketPlaceScreen.style';

/**
 * MarketPlace Screen
 */
const MarketPlaceScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <StatusBar backgroundColor={theme.colors.onixDeep} barStyle="light-content" />
    </ScreenContainer>
  );
};

export default MarketPlaceScreen;
