import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { useIsFocused } from '@react-navigation/native';
import { LayoutChangeEvent, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Link, TextField } from 'src/components';
import { useAuthentication } from 'src/hooks/useAuthentication';
import theme from 'src/styles/theme';
import SVG from 'src/components/SVG/SVG';
import { useFormValidation } from 'src/hooks/useFormValidation';
import { Divider } from 'src/components';
import { getUserToken } from 'src/redux/authentication';
import { closeGenericModalAction, GenericModalProperties } from 'src/redux/genericModal';
import {
  AccountOptionTitle,
  AccountOptionContainer,
  AccountButtonsWrapper,
} from '../../../common/common.style';
import VerifyEmailForm from './VerifyEmailForm/VerifyEmailForm';

export type EmailFormVerification = {
  oldEmailCode?: string;
  newEmailCode?: string;
};

export type ChangeEmailForm = {
  email?: string;
};

const EmailSection: React.FC = () => {
  const dispatch = useDispatch();
  const { email } = useAuthentication();
  const token = useSelector(getUserToken);
  const isFocused = useIsFocused();
  const { emailValidation } = useFormValidation();

  const [editEmail, setEditEmail] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    watch,
    formState: { errors },
  } = useForm<ChangeEmailForm>();

  const {
    control: controlVerifyEmail,
    handleSubmit: handleSubmitVerifyEmail,
    clearErrors: clearErrorsVerifyEmail,
    reset: resetVerifyEmail,
    formState: { errors: errorsVerifyEmail },
  } = useForm<EmailFormVerification>();

  const selectedEmail = watch('email');

  // When screen is not focused clear the email field
  React.useEffect(() => {
    if (!isFocused) {
      reset({ email: email });
      clearErrors('email');
      setEditEmail(false);
    }
  }, [isFocused, token]);

  const getContainerSize = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  const submitVerificationCodes = (data: Required<EmailFormVerification>) => {
    dispatch(closeGenericModalAction());
    /**@TODO add verify email action, removed to keep it simple until is needed */
    //dispatch(verifyEmailAction(t, selectedEmail, email, data.oldEmailCode, data.newEmailCode));
  };

  // TODO map responses & errors from backend with codes (e.g PROFERROR001)
  const submitEmail = async (data: Required<ChangeEmailForm>) => {
    const newEmail = data.email;
    const modalParams: GenericModalProperties = {
      title: t('profile:modals.verify_email.title'),
      message: t('profile:modals.verify_email.message', {
        oldEmail: email,
        newEmail: newEmail,
      }),
      formComponent: <VerifyEmailForm control={controlVerifyEmail} errors={errorsVerifyEmail} />,
      primaryLabel: t('profile:modals.verify_email.primaryLabel'),
      primaryOnPress: () => handleSubmitVerifyEmail(submitVerificationCodes)(),
      secondaryLabel: t('profile:modals.verify_email.secondaryLabel'),
      secondaryOnPress: () => dispatch(closeGenericModalAction()),
    };
    /**@TODO add update email logic, removed to keep it simple until is needed */
    //dispatch(updateEmailAction(modalParams, newEmail, t));
    clearErrorsVerifyEmail(['oldEmailCode', 'newEmailCode']);
    resetVerifyEmail({ oldEmailCode: '', newEmailCode: '' });
    reset({ email: email });
    setEditEmail(false);
  };

  const handleEditEmail = () => {
    setEditEmail(true);
  };

  const handleCancelEmailEdit = () => {
    reset({ email: email });
    clearErrors('email');
    setEditEmail(false);
  };

  return (
    <>
      <AccountOptionContainer onLayout={getContainerSize}>
        <AccountOptionTitle color={'secondary'}>{t('profile:email')}</AccountOptionTitle>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              accessibilityLabel="email input"
              textType={'regular'}
              selectionColor={'secondary'}
              maxLength={35}
              placeholderTextColor={theme.colors.irisPure}
              value={field.value}
              onChangeText={(text: string) => field.onChange(text)}
              error={errors.email?.message}
              editable={editEmail}
              defaultValue={email}
              containerWidth={containerWidth}
              rightComponent={
                editEmail ? (
                  <AccountButtonsWrapper>
                    <TouchableOpacity style={{ marginRight: 5 }} onPress={handleCancelEmailEdit}>
                      <SVG icon={'cancel'} width={20.15} height={20.15} color={'candyRed'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      accessibilityLabel="Submit Email"
                      onPress={handleSubmit(submitEmail)}
                    >
                      <SVG icon={'checkmark'} width={20.04} height={20.04} color={'irisDark'} />
                    </TouchableOpacity>
                  </AccountButtonsWrapper>
                ) : (
                  <AccountButtonsWrapper>
                    <Link
                      accessibilityLabel="Edit Email"
                      color="metallicDark"
                      icon="edit"
                      onPress={handleEditEmail}
                    />
                  </AccountButtonsWrapper>
                )
              }
            />
          )}
          rules={emailValidation}
        />
      </AccountOptionContainer>
      <Divider />
    </>
  );
};

export default EmailSection;
