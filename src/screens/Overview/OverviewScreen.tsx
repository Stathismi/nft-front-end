import React from 'react';
import { StatusBar, ScrollView, View, Text } from 'react-native';

import MainNavigatorHeader from 'src/components/NavigatorsHeaders/MainNavigatorHeader';
import theme from 'src/styles/theme';

/**
 * Component that renders the regular ticket screen
 * @TODO update seats price and zone fields when endpoints are ready
 * @TODO include seats, zone and price in inScroll change to update the values dynamically
 */
const OverviewScreen: React.FC = () => {
  return (
    <View style={{ backgroundColor: theme.colors.metallicDark }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      <ScrollView accessibilityLabel="NFT Overview Page">
        <MainNavigatorHeader />
        <Text>Overview</Text>
      </ScrollView>
    </View>
  );
};

export default OverviewScreen;
