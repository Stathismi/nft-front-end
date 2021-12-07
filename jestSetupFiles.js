import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler/jestSetup';
import 'react-native/Libraries/Animated/NativeAnimatedHelper';

//mock localize
jest.mock('react-native-localize', () => {
  return {
    getLocales: jest.fn(),
  };
});

jest.mock('i18next', () => ({
  use: () => {
    return {
      init: () => {},
    };
  },
  changeLanguage: () => new Promise(() => {}),
}));
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
        language: 'en',
      },
    };
  },
})); // https://react.i18next.com/misc/testing
// TODO enable it on snackbar installation
// jest.mock('react-native-snackbar', () => {
//   return {};
// });
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('redux-persist/integration/react', () => ({
  PersistGate: (props) => props.children,
}));
jest.mock('@react-native-google-signin/google-signin', () => {
  return {
    GoogleSignin: {
      configure: jest.fn(),
    },
  };
});
// TODO enable it on bottomsheet installation
// @ts-ignore
// global.__reanimatedWorkletInit = jest.fn(); // solution from https://github.com/software-mansion/react-native-reanimated/issues/1941#issuecomment-826995101

/**TODO enable it in bottomsheet installation
 */
// jest.mock('react-native-reanimated', () => {
//   return {
//     // @ts-ignore
//     ...jest.requireActual('react-native-reanimated/mock'),
//     useSharedValue: jest.fn,
//     useAnimatedStyle: jest.fn,
//     withTiming: jest.fn,
//     withSpring: jest.fn,
//     withRepeat: jest.fn,
//     withSequence: jest.fn,
//     useAnimatedProps: jest.fn,
//     Easing: {
//       linear: jest.fn,
//       elastic: jest.fn,
//     },
//   };
// }); // solution from https://github.com/software-mansion/react-native-reanimated/issues/1941#issuecomment-826995101

// TODO enable it on bottom-sheet installation
// jest.mock('@gorhom/bottom-sheet', () => require('react-native-reanimated/mock'));
// jest.mock('react-native-reanimated', () =>
//   jest.requireActual('./node_modules/react-native-reanimated/mock')
// );
// TODO enable it on bottom-sheet installation
// jest.mock('@gorhom/bottom-sheet', () => {
//   const react = require('react-native');
//   return {
//     __esModule: true,
//     default: react.View,
//     BottomSheetScrollView: react.ScrollView,
//   };
// }); // solution from https://github.com/gorhom/react-native-bottom-sheet/issues/219#issuecomment-880521375

jest.useFakeTimers(); // solution from https://github.com/facebook/jest/issues/6434#issuecomment-525576660

jest.mock('i18next', () => ({
  use: () => {
    return {
      init: () => {},
    };
  },
}));
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
        language: 'en',
      },
    };
  },
})); // https://react.i18next.com/misc/testing
/*TODO
 * enable it when we install sentry
 */
// jest.mock('@sentry/react-native', () => ({
//   init: jest.fn(),
// }));
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
