import 'react-native';
import React from 'react';
import renderWithRedux from './testUtils/renderWithRedux';
import Policy from 'src/screens/TermsAndPolicy/Policy';
import { fireEvent, RenderAPI } from '@testing-library/react-native';
import Login from 'src/screens/Login/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Terms from 'src/screens/TermsAndPolicy/Terms';
import MockAdapter from 'axios-mock-adapter';
import { comeTogetherAxios } from 'src/providers/axiosInstances';
import { NATIVE_APP } from 'src/utils/constants';
import { ReactTestInstance } from 'react-test-renderer';

const Stack = createStackNavigator();

describe('Login Screen', () => {
  let mock: MockAdapter;
  let queries: RenderAPI;

  beforeEach(async () => {
    mock = new MockAdapter(comeTogetherAxios);
    queries = renderWithRedux(
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={Login} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Policy" component={Policy} />
      </Stack.Navigator>
    );
  });

  afterEach(() => {
    mock.restore();
  });

  it('should render Login Screen', async () => {
    queries.getByText('tagline');
    queries.getByPlaceholderText('email_placeholder');
    queries.getByA11yLabel('Submit Email');
    queries.getByA11yLabel('Login with Facebook');
    queries.getByA11yLabel('Login with Apple');
    queries.getByA11yLabel('Login with Google');
    queries.getByText('agreement.terms');
  });

  it('should navigate to Terms of Service ', async () => {
    fireEvent.press(queries.getByText('agreement.terms'));
    expect(queries.getByText('Ι. Οροι Χρήσης')).toBeTruthy();
  });

  it('should navigate to Privacy Policy', async () => {
    fireEvent.press(queries.getByText('agreement.privacy_policy'));
    expect(queries.getByText('A. PRIVACY POLICY')).toBeTruthy();
  });

  describe('Email Input', () => {
    let emailInput: ReactTestInstance;
    let submitButton: ReactTestInstance;

    beforeEach(async () => {
      emailInput = queries.getByPlaceholderText('email_placeholder');
      submitButton = queries.getByA11yLabel('Submit Email');
    });

    it('should display error on invalid email input', async () => {
      // empty input
      await fireEvent.press(submitButton);
      expect(queries.getByText('validations:email:empty')).toBeTruthy();
      // invalid input
      await fireEvent.changeText(emailInput, 'wrong email format');
      await fireEvent.press(submitButton);
      expect(queries.getByText('validations:email:invalid')).toBeTruthy();
    });

    describe('Valid submit', () => {
      const testEmail = 'email@test.com';
      beforeEach(async () => {
        mock.onPost(`/mobile/sendLoginEmail`).reply(200, { jwtToken: 'aValidToken' });
        await fireEvent.changeText(emailInput, testEmail);
        await fireEvent.press(submitButton);
      });

      it('should open info modal', async () => {
        expect(queries.getByText('login:modals.email_sent_info.title')).toBeTruthy();
        expect(queries.getByText('login:modals.email_sent_info.message')).toBeTruthy();
      });

      it('should send correct parameters', async () => {
        expect(mock.history.post[0].data).toBe(
          JSON.stringify({
            email: testEmail,
            app: NATIVE_APP,
          })
        );
      });
    });
  });
});
