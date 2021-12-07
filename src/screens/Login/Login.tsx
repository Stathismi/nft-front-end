import React from 'react';
import { View, ActivityIndicator, ScrollView, Platform, Image, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { useAuthentication } from 'src/hooks/useAuthentication';
import theme from 'src/styles/theme';
import assets from 'src/assets/images/logos';
import { BodyTextSmall, Link } from 'src/components';
import {
  ScreenContainer,
  BrandContainer,
  SocialLoginWrapper,
  DividerContainer,
  DividerHalf,
  AgreementWrapper,
  TermsWrapper,
  AppTitleImage,
  TagLineTitle,
  LoginBackgroundImage,
} from './Login.style';
import { EmailLogin, AppleLogin, GoogleLogin, FacebookLogin } from './components';

import { verifyLoginEmailAction } from 'src/redux/authentication';
import { getGenericModal } from 'src/redux/genericModal';

// we need to specify the props that are passed as props to the screen via react-navigation
type SignInScreenRouteProp = RouteProp<{ SignIn: { token: string; email: string } }, 'SignIn'>;

const Login: React.FC = () => {
  const [wait, setWait] = React.useState(false);
  const { t } = useTranslation('login');
  const modal = useSelector(getGenericModal);
  const dispatch = useDispatch();
  const { login } = useAuthentication();
  const navigation = useNavigation();
  const route = useRoute<SignInScreenRouteProp>();

  React.useEffect(() => {
    if (route && route.params) {
      const { token, email } = route.params;
      const decodedToken = decodeURIComponent(token).replace('%2E', '');
      const decodedEmail = decodeURIComponent(email).replace('%2E', '');
      setWait(true);
      dispatch(verifyLoginEmailAction(decodedEmail, decodedToken, login, () => setWait(false)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  const backgroundImageResolver = {
    modal: require(`src/assets/images/blur.png`),
    login: require(`src/assets/images/loginBlur.png`),
  };

  return (
    <>
      {modal ? (
        <>
          <LoginBackgroundImage source={backgroundImageResolver['modal']} />
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
        </>
      ) : (
        <LoginBackgroundImage source={backgroundImageResolver['login']}>
          {wait ? (
            <View>
              <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
          ) : (
            <ScreenContainer>
              <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent={true}
              />
              <ScrollView style={{ paddingHorizontal: 32 }}>
                <BrandContainer>
                  <Image source={assets.logo} />
                  <AppTitleImage source={assets.logoTitle} />
                  <TagLineTitle>{t('tagline')}</TagLineTitle>
                </BrandContainer>
                <EmailLogin setLoading={setWait} />
                <DividerContainer>
                  <DividerHalf />
                  <BodyTextSmall color={'spaceDeep'}>{`   ${t('or')}   `}</BodyTextSmall>
                  <DividerHalf />
                </DividerContainer>
                <SocialLoginWrapper>
                  <FacebookLogin setLoading={setWait} />
                  {Platform.OS === 'ios' && <AppleLogin setLoading={setWait} />}
                  <GoogleLogin setLoading={setWait} />
                </SocialLoginWrapper>

                <AgreementWrapper>
                  <BodyTextSmall bold color={'spaceDark'}>
                    {t('agreement.prefix')}
                  </BodyTextSmall>
                  <TermsWrapper>
                    <Link color="facebookBlue" onPress={() => navigation.navigate('Terms')}>
                      {t('agreement.terms')}
                    </Link>
                    <BodyTextSmall bold color="primary">
                      {` · `}
                    </BodyTextSmall>
                    <Link color="facebookBlue" onPress={() => navigation.navigate('Policy')}>
                      {t('agreement.privacy_policy')}
                    </Link>
                  </TermsWrapper>
                </AgreementWrapper>
              </ScrollView>
            </ScreenContainer>
          )}
        </LoginBackgroundImage>
      )}
    </>
  );
};

export default Login;
