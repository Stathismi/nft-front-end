import React from 'react';
import { useTranslation } from 'react-i18next';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import { useAuthentication } from 'src/hooks/useAuthentication';
import loginAPI from 'src/providers/loginAPI';
import config from 'src/config';
import { SocialMediaGradientButton } from '../common.style';

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

GoogleSignin.configure({
  webClientId: config.GOOGLE_WEB_CLENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
});

/**
 * Component that renders the google login button in Login page {@see Login}
 * @param setLoading
 * @param language | the language that the user selected from the picker menu {@see LanguagePicker}
 */
const GoogleLogin: React.FC<Props> = ({ setLoading }) => {
  const { login } = useAuthentication();
  const { i18n } = useTranslation();
  const loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      setLoading(true);
      await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
      const { request } = loginAPI.single.loginWithGoogle({
        access_token: tokens.accessToken,
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
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      setLoading(false);
    }
  };
  return (
    <SocialMediaGradientButton
      accessibilityLabel="Login with Google"
      size="stretch"
      icon="google"
      iconOnly
      onPress={loginWithGoogle}
      borderRadius={21}
      angle={0}
      linearColors={['linearGoogleRed', 'linearGoogleRed']}
      backgroundColor="googleRed"
    />
  );
};

export default GoogleLogin;
