import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthentication } from 'src/hooks/useAuthentication';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutChangeEvent, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { Divider, Link, TextField } from 'src/components';
import theme from 'src/styles/theme';
import SVG from 'src/components/SVG/SVG';
import { useFormValidation } from 'src/hooks/useFormValidation';
import {
  closeGenericModalAction,
  GenericModalProperties,
  openGenericModalAction,
} from 'src/redux/genericModal';
import { getUserToken } from 'src/redux/authentication';
import {
  AccountButtonsWrapper,
  AccountOptionContainer,
  AccountOptionTitle,
} from '../../../common/common.style';

export type ChangeFirstNameForm = {
  firstName?: string;
};

const FirstNameSection: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);
  const { t } = useTranslation();
  const { firstName } = useAuthentication();
  const isFocused = useIsFocused();
  const { nameValidation } = useFormValidation();
  const [editFirstName, setEditFirstName] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<ChangeFirstNameForm>();

  // When screen is not focused clear the email field
  React.useEffect(() => {
    if (!isFocused) {
      reset({ firstName: firstName });
      clearErrors('firstName');
      setEditFirstName(false);
    }
  }, [isFocused, token]);

  const getContainerSize = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  const updateFirstName = (firstName: string) => {
    dispatch(closeGenericModalAction());
    /**@TODO add update logic */
    console.log('send request to update first name');
    setEditFirstName(false);
  };

  const handleSubmitFirstName = async (data: Required<ChangeFirstNameForm>) => {
    const modalParams: GenericModalProperties = {
      title: t('profile:modals:change_name_confirmation:title', { option: t('profile:firstName') }),
      primaryLabel: t('profile:modals:change_name_confirmation:primaryLabel'),
      primaryOnPress: () => updateFirstName(data.firstName),
      secondaryLabel: t('profile:modals:change_name_confirmation:secondaryLabel'),
      secondaryOnPress: () => dispatch(closeGenericModalAction()),
      color: 'candyRed',
    };
    dispatch(openGenericModalAction(modalParams));
  };

  const handleCancelFirstNameEdit = () => {
    reset({ firstName: firstName });
    clearErrors('firstName');
    setEditFirstName(false);
  };

  const handleEditFirstName = () => {
    setEditFirstName(true);
  };

  return (
    <>
      <AccountOptionContainer onLayout={getContainerSize}>
        <AccountOptionTitle color={'secondary'}>{t('profile:firstName')}</AccountOptionTitle>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              accessibilityLabel="First Name Input"
              textType={'regular'}
              selectionColor={'secondary'}
              maxLength={20}
              placeholderTextColor={theme.colors.irisPure}
              value={field.value}
              onChangeText={(text: string) => field.onChange(text)}
              error={errors.firstName?.message}
              editable={editFirstName}
              defaultValue={firstName}
              containerWidth={containerWidth}
              rightComponent={
                editFirstName ? (
                  <AccountButtonsWrapper>
                    <TouchableOpacity
                      style={{ marginRight: 5 }}
                      onPress={handleCancelFirstNameEdit}
                    >
                      <SVG icon={'cancel'} color={'candyRed'} width={20.15} height={20.15} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      accessibilityLabel="Submit First Name"
                      onPress={handleSubmit(handleSubmitFirstName)}
                    >
                      <SVG icon={'checkmark'} color={'irisDark'} width={20.04} height={20.04} />
                    </TouchableOpacity>
                  </AccountButtonsWrapper>
                ) : (
                  <AccountButtonsWrapper>
                    <Link
                      accessibilityLabel="Edit First Name"
                      color="metallicDark"
                      icon="edit"
                      onPress={handleEditFirstName}
                    />
                  </AccountButtonsWrapper>
                )
              }
            />
          )}
          rules={nameValidation}
        />
      </AccountOptionContainer>
      <Divider />
    </>
  );
};

export default FirstNameSection;
