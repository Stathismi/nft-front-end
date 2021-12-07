import { AppleRequestResponse } from '@invertase/react-native-apple-authentication';

import { METHODS, request } from '../axiosInstances';

interface SendEmailToUserParams {
  email: string;
  app: string;
}

interface VerifyLoginEmailParams {
  email: string | undefined;
  token: string | undefined;
}

interface LoginWithMediaParams {
  access_token: string | null;
  language: string;
}

interface LoginWithAppleParams {
  appleAuthRequestResponse: AppleRequestResponse;
  language: string;
}

export default {
  sendLoginEmailToUser: (params: SendEmailToUserParams) =>
    request(METHODS.POST, '/mobile/sendLoginEmail', { params }),
  resendLoginEmailToUser: (params: SendEmailToUserParams) =>
    request(METHODS.POST, '/mobile/resendEmail', { params }),
  verifyLoginEmail: (params: VerifyLoginEmailParams) =>
    request(METHODS.POST, '/mobile/verifyLoginEmail', { params }),
  loginWithFacebook: (params: LoginWithMediaParams) =>
    request(METHODS.POST, '/register/api/v1/auth/facebook', { params }),
  loginWithGoogle: (params: LoginWithMediaParams) =>
    request(METHODS.POST, '/register/api/v1/auth/google', { params }),
  loginWithApple: (params: LoginWithAppleParams) =>
    request(METHODS.POST, '/register/api/v1/auth/apple', { params }),
  logout: () => request(METHODS.POST, '/logout', {}),
};
