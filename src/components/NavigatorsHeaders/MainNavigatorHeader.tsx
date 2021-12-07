import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import SVG from 'src/components/SVG/SVG';
import { HelperText } from 'src/components';
import {
  NavigatorHeaderContainer,
  GoBackContainerView,
  FakeView,
} from './MainNavigatorHeader.style';

/**
 * Component that renders a custom navigation header
 */
const MainNavigatorHeader: React.FC = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <NavigatorHeaderContainer>
      <GoBackContainerView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SVG icon={'goBack'} color={'irisPure'} />
          <HelperText color="irisLight" bold>
            {t('common:back')}
          </HelperText>
        </TouchableOpacity>
      </GoBackContainerView>

      <SVG icon="logo" height={92} />

      <FakeView />
    </NavigatorHeaderContainer>
  );
};

export default MainNavigatorHeader;
