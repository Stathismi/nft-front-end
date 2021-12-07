import Config from 'react-native-config';

type EnvironmentType = {
  BACKEND_URL: string;
};
type ConfigsType = {
  [whiteLabelName: string]: {
    development: EnvironmentType;
    production: EnvironmentType;
  };
};

const defaults = {
  development: {
    BACKEND_URL: 'http://dev-nft.cometogether.network',
  },
  production: {
    BACKEND_URL: 'https://app.cometogether.live', // TODO change the url with the production server in nft
  },
};

// common variables for all environments, those are different in each .env file
const common = {
  GOOGLE_WEB_CLENT_ID: Config.REACT_NATIVE_APP_GOOGLE_ID,
  DEEP_LINKING_PREFIX: `${Config.WHITELABEL}://login`,
  ENVIRONMENT: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};

const ENVIRONMENT = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const config = { ...common, ...defaults[ENVIRONMENT] }; // combine and finally export the common and whitelabel-specific values
export default config;
