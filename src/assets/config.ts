import { LANGUAGES } from 'src/utils/constants';

export default {
  loginWithFacebook: (language: string) =>
    language === LANGUAGES.EN
      ? require('src/assets/images/social/LoginWithFacebookEN2x.png')
      : require('src/assets/images/social/LoginWithFacebookGR2x.png'),
  loginWithGoogle: (language: string) =>
    language === LANGUAGES.EN
      ? require('src/assets/images/social/LoginWithGoogleEN2x.png')
      : require('src/assets/images/social/LoginWithGoogleGR2x.png'),
};
