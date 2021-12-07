import React from 'react';
import { useTranslation } from 'react-i18next';
// import { appleAuth } from '@invertase/react-native-apple-authentication';

import { useAuthentication } from 'src/hooks/useAuthentication';
import { SocialMediaGradientButton } from '../common.style';

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Component that renders the facebook login button in the login page {@see Login}
 * @param setLoading
 * @param language | The language that the user selected from the language picker {@see LanguagePicker}
 */
const AppleLogin: React.FC<Props> = ({ setLoading }) => {
  const { login } = useAuthentication();
  const { i18n } = useTranslation();

  /**@TODO enable when login logic is added */
  const loginWithApple = async () => {
    console.log('login with facebook');
    login('fake-token');
    // setLoading(true);
    // try {
    //   // sign in request
    //   const appleAuthRequestResponse = await appleAuth.performRequest({
    //     requestedOperation: appleAuth.Operation.LOGIN,
    //     requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    //   });
    //   const credentialState = await appleAuth.getCredentialStateForUser(
    //     appleAuthRequestResponse.user
    //   );
    //   if (credentialState === appleAuth.State.AUTHORIZED) {
    //     // user is authenticated
    //     const { request } = loginAPI.single.loginWithApple({
    //       appleAuthRequestResponse,
    //       language: i18n.language,
    //     });
    //     request()
    //       .then((res) => {
    //         login(res.token);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       })
    //       .finally(() => setLoading(false));
    //   }
    // } catch (error) {
    //   if (error.code === appleAuth.Error.CANCELED) {
    //     // user cancelled Apple Sign-in
    //   } else {
    //     // other unknown error
    //   }
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <SocialMediaGradientButton
      accessibilityLabel="Login with Apple"
      size="stretch"
      icon="apple"
      iconOnly
      onPress={loginWithApple}
      borderRadius={21}
      angle={0}
      linearColors={['metallicPearlWhite', 'metallicPearlWhite']}
      backgroundColor="metallicPearlWhite"
    />
  );
};

export default AppleLogin;
