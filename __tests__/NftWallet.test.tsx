import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { createStackNavigator } from '@react-navigation/stack';
import { RenderAPI } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';
import { ReactTestInstance } from 'react-test-renderer';

import { comeTogetherAxios } from 'src/providers/axiosInstances';
import { MainTabNavigator } from 'src/navigators';
import renderWithRedux from './testUtils/renderWithRedux';
import UserNftsBuilder from './builders/userNfts';
import { setUserNftsAction } from 'src/redux/nft';

// when all actions are enabled, sellable, withdraawable
const userNfts = UserNftsBuilder({ isSellable: true, isWithdrawable: true });

// when resale action is not enabled, sellable = false
const userNftsNoResale = UserNftsBuilder({ isWithdrawable: true }); // default value for resale is false in builder

// when withdraw action is not available
const userNftsNoWithdraw = UserNftsBuilder({ isSellable: true }); // default value for withdraw is false in builder

// when an nft is listed for sale
const userNftsListedForSale = UserNftsBuilder({
  isSellable: true,
  isWithdrawable: true,
  resalePrice: 100,
});

const Stack = createStackNavigator();

const componentToRender = (
  <Stack.Navigator>
    <Stack.Screen name={'mainTabNavigator'} options={{ headerShown: false }}>
      {() => MainTabNavigator({ initialRouteName: 'Wallet' })}
    </Stack.Screen>
  </Stack.Navigator>
);

describe('Wallet Screen', () => {
  let mock: MockAdapter;
  let queries: RenderAPI;
  let jwtToken: string;
  beforeEach(async () => {
    mock = new MockAdapter(comeTogetherAxios);
    queries = renderWithRedux(componentToRender);
  });

  afterEach(() => {
    mock.restore();
  });
  describe('Wallet screen renders correctly', () => {
    let cardPresentationButton: ReactTestInstance;
    beforeEach(async () => {
      cardPresentationButton = queries.getByA11yLabel('Present Nfts in card mode');
      // TODO refactor this code to mock request when endpoints for wallet app are ready
      // mock the request in here
      // @ts-ignore
      queries.store.dispatch(setUserNftsAction(userNfts));
    });
    afterEach(() => {
      // TODO clear mock of request when endpoints are ready
      // mock the request in here
      // @ts-ignore
      queries.store.dispatch(setUserNftsAction(null));
    });
    it('should render the Wallet Screen', async () => {
      queries.getByText('wallet:collection');
      queries.getByText('wallet:promo');
      queries.getByA11yLabel('Present Nfts in card mode');
      queries.getByA11yLabel('Present Nfts in grid mode');
    });

    it('shoud render the nft card', async () => {
      queries.getAllByText(userNfts[0].nftName);
    });

    it('number of cards should be the appropriate', async () => {
      expect(queries.getAllByText('wallet:sell')).toHaveLength(1); // we initiated 1 nft {@see nftNumber in Builder}
      expect(queries.getAllByText('wallet:withdraw')).toHaveLength(1);
    });
  });

  describe('When resale action is not available', () => {
    beforeEach(() => {
      // TODO refactor this code to mock request when endpoints for wallet app are ready
      // mock the request in here
      // @ts-ignore
      queries.store.dispatch(setUserNftsAction(userNftsNoResale));
    });
    afterEach(() => {
      // TODO clear mock of request when endpoints are ready
      // mock the request in here
      // @ts-ignore
      queries.store.dispatch(setUserNftsAction(null));
    });
    it('should render only withdraw button, but not resale', async () => {
      expect(queries.queryByText('wallet:sell')).toBeNull();
      queries.getAllByText('wallet:withdraw');
    });
  });
  describe('When withdraw action is not available', () => {
    beforeEach(() => {
      // TODO refactor this code to mock request when endpoints for wallet app are ready
      // mock the request in here
      // @ts-ignore
      queries.store.dispatch(setUserNftsAction(userNftsNoWithdraw));
    });
    afterEach(() => {
      // TODO clear mock of request when endpoints are ready
      // mock the request in here
      // @ts-ignore
      queries.store.dispatch(setUserNftsAction(null));
    });
    it('should render only resale button, but not withdraw', async () => {
      expect(queries.queryByText('wallet:withdraw')).toBeNull();
      queries.getAllByText('wallet:sell');
    });
  });
  describe('When an nft is listed for resale', () => {
    beforeEach(async () => {
      // TODO refactor this code to mock request when endpoints for wallet app are ready
      // mock the request in here
      // @ts-ignore
      queries.store.dispatch(setUserNftsAction(userNftsListedForSale));
    });
    afterEach(() => {
      // TODO clear mock of request when endpoints are ready
      // mock the request in here
      // @ts-ignore
      queries.store.dispatch(setUserNftsAction(null));
    });
    it('should render the sale button with the appropriate color and label', async () => {
      queries.getByText('wallet:unSell');
      expect(queries.getByText('wallet:unSell')).toHaveProp('icon', 'unsellNftSvg');
    });
  });
});
