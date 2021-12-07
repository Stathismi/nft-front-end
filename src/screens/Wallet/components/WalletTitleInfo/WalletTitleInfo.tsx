import React from 'react';
import { useTranslation } from 'react-i18next';
import { WalletTitleInfoContainer } from './WalletTitleInfo.style';
import { H1, BodyTextRegular } from 'src/components';

const WalletTitleInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <WalletTitleInfoContainer style={{ paddingHorizontal: 25 }}>
      <H1 color="spaceShade">{t('wallet:collection')}</H1>
      <BodyTextRegular color={'spacePure'}>{t('wallet:promo')}</BodyTextRegular>
    </WalletTitleInfoContainer>
  );
};

export default WalletTitleInfo;
