import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { TextField } from 'src/components';
import { Control, Controller, DeepMap, FieldError } from 'react-hook-form';
import { EmailFormVerification } from 'src/screens/Profile/components/Account/components/EmailSection/EmailSection';
import theme from 'src/styles/theme';
import { useFormValidation } from 'src/hooks/useFormValidation';
import { VerificationCodeTitle } from './VerifyEmailForm.style';

type Props = {
  control?: Control<EmailFormVerification>;
  errors?: DeepMap<EmailFormVerification, FieldError>;
};

const VerifyEmailForm: React.FC<Props> = ({ control, errors }) => {
  const { emailCodesValidation } = useFormValidation();
  const { t } = useTranslation('profile');
  return (
    <View>
      <VerificationCodeTitle color={'secondary'}>{t('oldEmailCode')}</VerificationCodeTitle>
      <Controller
        name={'oldEmailCode'}
        control={control}
        render={({ field }) => (
          <TextField
            accessibilityLabel="old email code"
            textType={'large'}
            keyboardType="number-pad"
            selectionColor="secondary"
            maxLength={4}
            placeholder={t('code')}
            placeholderTextColor={theme.colors.metallicDark}
            value={field.value}
            onChangeText={(text: string) => field.onChange(text)}
            error={errors?.oldEmailCode?.message}
          />
        )}
        rules={emailCodesValidation}
      />
      <VerificationCodeTitle color={'secondary'}>{t('newEmailCode')}</VerificationCodeTitle>
      <Controller
        name={'newEmailCode'}
        control={control}
        render={({ field }) => (
          <TextField
            accessibilityLabel="new email code"
            textType={'large'}
            keyboardType="number-pad"
            selectionColor="secondary"
            maxLength={4}
            placeholder={t('code')}
            placeholderTextColor={theme.colors.metallicDark}
            value={field.value}
            onChangeText={(text: string) => field.onChange(text)}
            error={errors?.newEmailCode?.message}
          />
        )}
        rules={emailCodesValidation}
      />
    </View>
  );
};

export default VerifyEmailForm;
