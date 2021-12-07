import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { APP_LANGUAGE_ASYNC_STORAGE, DEFAULT_LANGUAGE } from 'src/utils/constants';
import el from './locales/el.json';
import en from './locales/en.json';
import jwt_decode from 'jwt-decode';

export const initLanguage = async (userToken: string) => {
  const deviceLanguage = getDeviceLanguage();
  const storedInDeviceLanguage = await AsyncStorage.getItem(APP_LANGUAGE_ASYNC_STORAGE); // stored from a previous session
  if (!userToken) {
    if (storedInDeviceLanguage) {
      await i18n.changeLanguage(storedInDeviceLanguage);
    } else {
      await i18n.changeLanguage(deviceLanguage);
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { language } = jwt_decode(userToken);
    await i18n.changeLanguage(language);
  }
};

export const getDeviceLanguage = () => {
  return getLocales()[0].languageCode;
};

export const changeLanguage = async (lng: 'en' | 'el'): Promise<void> => {
  await AsyncStorage.setItem(APP_LANGUAGE_ASYNC_STORAGE, lng);
  await i18n.changeLanguage(lng);
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: { el, en },
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
