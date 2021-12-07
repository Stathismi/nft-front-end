import { ImageSourcePropType } from 'react-native';

type ImageType = {
  source: ImageSourcePropType;
  height: number;
  width: number;
};
type AssetsType = {
  [imageType: string]: ImageType | ImageSourcePropType;
};

const assets: AssetsType = {
  logoWithTitle: { source: require(`./cometogether/logoWithTitle.png`), height: 38, width: 247 },
  logo: require(`./cometogether/logo.png`),
  logoTitle: require(`src/assets/images/logos/cometogether/logoTitle.png`),
};
export default {
  logoWithTitle: {
    source: (assets.logoWithTitle as ImageType).source,
    height: (assets.logoWithTitle as ImageType).height,
    width: (assets.logoWithTitle as ImageType).width,
  },
  logo: assets.logo,
  logoTitle: assets.logoTitle,
};
