import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { BlurView } from '@react-native-community/blur';

import theme from 'src/styles/theme';
import { BodyTextRegular } from 'src/components';
import { closeGenericModalAction, GenericModalProperties } from 'src/redux/genericModal';
import {
  ButtonsWrapper,
  PrimaryButton,
  SecondaryButton,
  Title,
  MessageWrapper,
  FormValidationWrapper,
  NoticeMessageLink,
} from './ModalContent.style';
import CTGradientButton from 'src/components/Buttons/GradientButton/CTGradientButton';

interface Props {
  params: GenericModalProperties;
}

const ModalContent: React.FC<Props> = ({ params }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeGenericModalAction());
  };

  const {
    title,
    message,
    isNotice = false,
    formComponent,
    isTransparent = false,
    blurView = true,
    color = 'candyYellow',
    primaryLabel,
    primaryOnPress,
    secondaryLabel,
    outsetColorShadow,
    secondaryOnPress = closeModal,
  } = params;
  const infoModal = primaryLabel === undefined && secondaryLabel === undefined; // info modal is the modal with no primary&secondary buttons hence a Close button is automatically displayed
  return (
    <Portal>
      {blurView && (
        <BlurView
          blurType="light"
          blurAmount={10}
          overlayColor="rgba(20, 20, 29, 0.66)"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      )}
      <Modal
        visible={true}
        onDismiss={closeModal}
        contentContainerStyle={{
          alignSelf: 'center',
          width: 333,
          backgroundColor: isTransparent ? '' : theme.colors.obsidian,
          borderRadius: 30,
          alignItems: 'center',
          paddingHorizontal: 31.5,
        }}
      >
        <Title color="metallicPearlWhite">{title}</Title>
        {message !== undefined && (
          <MessageWrapper>
            {isNotice ? (
              <NoticeMessageLink
                color={color === 'candyRed' ? color : 'primary'}
                icon="notice"
                margin={7}
              >
                {message}
              </NoticeMessageLink>
            ) : (
              <BodyTextRegular color="cardinalBlue" bold center>
                {message}
              </BodyTextRegular>
            )}
          </MessageWrapper>
        )}

        {formComponent && <FormValidationWrapper>{formComponent}</FormValidationWrapper>}
        <ButtonsWrapper>
          {infoModal ? (
            <View style={{ width: 204 }}>
              <CTGradientButton
                size="stretch"
                outsetColorShadow={outsetColorShadow}
                linearColors={['cardinalTeal', 'cardinalPurple']}
                angle={91.85}
                borderRadius={21}
                title="common:close"
                onPress={closeModal}
              />
            </View>
          ) : (
            <>
              <SecondaryButton
                size="medium"
                mode="outlined"
                backgroundColor="primary"
                color="secondary"
                onPress={secondaryOnPress}
              >
                {secondaryLabel}
              </SecondaryButton>
              <PrimaryButton
                size="medium"
                mode="contained"
                backgroundColor={color}
                color="metallicDark"
                onPress={primaryOnPress}
              >
                {primaryLabel}
              </PrimaryButton>
            </>
          )}
        </ButtonsWrapper>
      </Modal>
    </Portal>
  );
};

export default ModalContent;
