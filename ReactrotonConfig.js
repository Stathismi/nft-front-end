import Reactotron, { overlay } from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

/**
 * .setAsyncStorage |  AsyncStorage
 * .configure       |  controls connection & communication settings
 * .useReactNative  |  Add all built-in react native plugins
 * .connect         |  let's connect
 */

const reactroton = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({ name: 'Cometogether nft app' })
  .useReactNative()
  .use(reactotronRedux())
  .use(overlay())
  .connect();

export default reactroton;
