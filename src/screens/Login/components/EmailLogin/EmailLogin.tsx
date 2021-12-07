import React from 'react';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { HelperText } from 'react-native-paper';

import { useFormValidation } from 'src/hooks/useFormValidation';
import useGenericModal from 'src/hooks/useGenericModal';
import { InputWrapper, EmailInput } from './EmailLogin.style';
import { sentLoginEmailAction } from 'src/redux/authentication';
import theme from 'src/styles/theme';
import CTGradientButton from 'src/components/Buttons/GradientButton/CTGradientButton';

type LoginForm = {
  email: string;
};
interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Component that renders the email login functionality in the login page {@see Login}
 * It renders an email input field along with a login button. If the email tha the user
 * passes to the input field is invalid {@see emailValidator} the login button is inactive
 * @param setLoading
 */
const EmailLogin: React.FC<Props> = ({ setLoading }) => {
  const { t } = useTranslation('login');
  const dispatch = useDispatch();
  const { showInfoModal } = useGenericModal();
  const { emailValidation } = useFormValidation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const sendLoginEmail = async (data: LoginForm) => {
    setLoading(true);
    dispatch(
      sentLoginEmailAction(
        data.email,
        () => showInfoModal('emailSent'),
        () => setLoading(false)
      )
    );
  };

  return (
    <>
      <InputWrapper>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <EmailInput
              mode="outlined"
              placeholderTextColor={theme.colors.spaceLight}
              error={Boolean(errors.email)}
              theme={{ roundness: 38 }}
              textContentType="emailAddress"
              placeholder={t('email_placeholder')}
              value={field.value}
              onChangeText={(text: string) => field.onChange(text)}
              style={{ opacity: 0.4 }}
            />
          )}
          rules={emailValidation}
        />
        {errors.email && (
          <HelperText testID="emailValidator" type="error" visible={Boolean(errors.email)}>
            <Text>{errors.email?.message}</Text>
          </HelperText>
        )}
      </InputWrapper>
      <>
        <CTGradientButton
          title={'login:email_button_CTA'}
          size={'stretch'}
          linearColors={['cardinalTeal', 'cardinalPurple']}
          angle={91.85}
          borderRadius={21}
          onPress={handleSubmit(sendLoginEmail)}
          icon="rocket"
          outsetColorShadow="cardinalTealShadow"
          accessibilityLabel="Submit Email"
        />
      </>
    </>
  );
};

export default EmailLogin;
