/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExploreMoreContainer, CheckRedeemScreenWrapper } from './ExploreMore.style';
import { H2, Link } from 'src/components';
import { useNavigation } from '@react-navigation/core';

const ExploreMore: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <ExploreMoreContainer>
      <H2 color="spacePure" style={{ maxWidth: 236, textAlign: 'center' }}>
        {t('wallet:explore_more')}
      </H2>
      <CheckRedeemScreenWrapper>
        <Link
          color={'cardinalTeal'}
          icon={'redeem'}
          width={21}
          height={21}
          margin={10}
          textSize={'large'}
          // @ts-ignore
          onPress={() => navigation.navigate('Redeem')}
        >
          {t('wallet:check_redeem')}
        </Link>
      </CheckRedeemScreenWrapper>
    </ExploreMoreContainer>
  );
};

export default ExploreMore;
