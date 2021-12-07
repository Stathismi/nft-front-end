import React from 'react';
import { useTranslation } from 'react-i18next';
import { AccessToken, LoginManager } from 'react-native-fbsdk';

import { useAuthentication } from 'src/hooks/useAuthentication';
import loginAPI from 'src/providers/loginAPI';
import { SocialMediaGradientButton } from '../common.style';

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Component that renders the facebook login button in the login page {@see Login}
 * @param setLoading
 * @param language | The language that the user selected from the language picker {@see LanguagePicker}
 */
const FacebookLogin: React.FC<Props> = ({ setLoading }) => {
  const { login } = useAuthentication();
  const { i18n } = useTranslation();

  const loginWithFacebook = () => {
    console.log('login with facebook');
    setLoading(true);
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      (result) => {
        if (result.isCancelled) {
          setLoading(false);
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            const { request } = loginAPI.single.loginWithFacebook({
              access_token: data ? data.accessToken : null,
              language: i18n.language,
            });
            request()
              .then((res) => {
                login(res.token);
              })
              .catch((err) => {
                console.log(err);
              })
              .finally(() => setLoading(false));
          });
        }
      },
      (error) => {
        console.log('Login failed with error: ' + error);
        setLoading(false);
      }
    );
  };
  return (
    <SocialMediaGradientButton
      accessibilityLabel="Login with Facebook"
      linearColors={['facebookBlue', 'facebookBlue']}
      size="stretch"
      icon="facebook"
      iconOnly
      onPress={loginWithFacebook}
      borderRadius={21}
    />
  );
};

export default FacebookLogin;
