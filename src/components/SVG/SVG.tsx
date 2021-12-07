import React, { useMemo } from 'react';
import { SvgProps } from 'react-native-svg';

import LOGOSvg from 'src/assets/svg/logo.svg';
import DollarSvg from 'src/assets/svg/dollar.svg';
import TicketSvg from 'src/assets/svg/ticket.svg';
import TicketUnsellSvg from 'src/assets/svg/ticketUnsell.svg';
import NoticeSvg from 'src/assets/svg/notice.svg';
import ExploreSvg from 'src/assets/svg/explore.svg';
import MagicSvg from 'src/assets/svg/magic.svg';
import EmailSvg from 'src/assets/svg/email.svg';
import CheckmarkSvg from 'src/assets/svg/checkmark.svg';
import ShareSvg from 'src/assets/svg/share.svg';
import UnshareSvg from 'src/assets/svg/unshare.svg';
import DirectionSvg from 'src/assets/svg/direction.svg';
import GoBackSvg from 'src/assets/svg/goBack.svg';
import TimerSvg from 'src/assets/svg/timer.svg';
import LeftArrowSvg from 'src/assets/svg/leftArrow.svg';
import RightArrowSvg from 'src/assets/svg/rightArrow.svg';
import NeedHelpSvg from 'src/assets/svg/needHelp.svg';
import LogoutSvg from 'src/assets/svg/logout.svg';
import DeleteSvg from 'src/assets/svg/delete.svg';
import UserSvg from 'src/assets/svg/user.svg';
import EditSvg from 'src/assets/svg/edit.svg';
import CancelSvg from 'src/assets/svg/cancel.svg';
import GoogleSvg from 'src/assets/svg/social/google.svg';
import AppleSvg from 'src/assets/svg/social/apple.svg';
import FacebookSvg from 'src/assets/svg/social/facebook.svg';
import RocketSvg from 'src/assets/svg/rocket.svg';
import MarketPlaceShadow from 'src/assets/svg/marketplaceShadow.svg';
import WalletShadow from 'src/assets/svg/walletShadow.svg';
import RedeemShadow from 'src/assets/svg/redeemShadow.svg';
import NotificationShadow from 'src/assets/svg/notificationShadow.svg';
import MarketPlace from 'src/assets/svg/marketPlace.svg';
import Wallet from 'src/assets/svg/wallet.svg';
import Redeem from 'src/assets/svg/redeem.svg';
import Notification from 'src/assets/svg/notification.svg';
import Withdraw from 'src/assets/svg/withdraw.svg';
import SellNFT from 'src/assets/svg/sellNFT.svg';
import AudioNftTypeSvg from 'src/assets/svg/audio.svg';
import VideoNFtTypeSvg from 'src/assets/svg/video.svg';
import GifNftTypeSvg from 'src/assets/svg/gif.svg';
import UnsellNftSvg from 'src/assets/svg/unsellNFT.svg';
import GridNftPresentation from 'src/assets/svg/gridNftPresentation.svg';
import CardNftPresentation from 'src/assets/svg/rectangleNftPresentation.svg';
import { ColorsType } from 'src/styles/types';
import theme from 'src/styles/theme';

const svgMap = {
  ['logo']: LOGOSvg,
  ['dollar']: DollarSvg,
  ['euro']: DollarSvg, // TODO Add Euro SVG
  ['ticket']: TicketSvg,
  ['ticketUnsell']: TicketUnsellSvg,
  ['notice']: NoticeSvg,
  ['share']: ShareSvg,
  ['unshare']: UnshareSvg,
  ['email']: EmailSvg,
  ['checkmark']: CheckmarkSvg,
  ['explore']: ExploreSvg,
  ['magic']: MagicSvg,
  ['direction']: DirectionSvg,
  ['goBack']: GoBackSvg,
  ['timer']: TimerSvg,
  ['leftArrow']: LeftArrowSvg,
  ['rightArrow']: RightArrowSvg,
  ['needHelp']: NeedHelpSvg,
  ['logout']: LogoutSvg,
  ['user']: UserSvg,
  ['delete']: DeleteSvg,
  ['edit']: EditSvg,
  ['cancel']: CancelSvg,
  ['google']: GoogleSvg,
  ['apple']: AppleSvg,
  ['facebook']: FacebookSvg,
  ['marketPlaceShadow']: MarketPlaceShadow,
  ['walletShadow']: WalletShadow,
  ['redeemShadow']: RedeemShadow,
  ['notificationShadow']: NotificationShadow,
  ['marketPlace']: MarketPlace,
  ['wallet']: Wallet,
  ['redeem']: Redeem,
  ['notification']: Notification,
  ['rocket']: RocketSvg,
  ['withdraw']: Withdraw,
  ['sellNFT']: SellNFT,
  ['audioNftTypeSvg']: AudioNftTypeSvg,
  ['videoNFtTypeSvg']: VideoNFtTypeSvg,
  ['gifNftTypeSvg']: GifNftTypeSvg,
  ['unsellNftSvg']: UnsellNftSvg,
  ['gridNftPresentation']: GridNftPresentation,
  ['cardNftPresentation']: CardNftPresentation,
};

export type SVGType = keyof typeof svgMap;
type SVGResolverType = {
  [svgName: string]: JSX.Element;
};

/**
 * Component that renders an SVG resolved by name
 * @param icon | The SVG name
 */
interface Props {
  icon: SVGType;
  color?: ColorsType;
  width?: number;
  height?: number;
}

const SVG: React.FC<Props> = ({ icon, color, width, height }) => {
  const svgColor = color ? theme.colors[color] : undefined;

  const SVGResolver = useMemo(() => {
    const svgProperties: SvgProps = { color: svgColor };
    // if width&height are undefined we need the svg to get it's original dimensions but if
    // they are added as undefined the icon is not shown, that's why they are added conditionally
    if (width) {
      svgProperties['width'] = width;
    }
    if (height) {
      svgProperties['height'] = height;
    }
    const resolver: SVGResolverType = {};
    for (const [key, value] of Object.entries(svgMap)) {
      const SVG = value as React.FunctionComponent<SvgProps>;
      resolver[key] = <SVG {...svgProperties} />;
    }
    return resolver;
  }, [height, svgColor, width]);

  return <>{SVGResolver[icon]}</>;
};
export default SVG;
