import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useIsFocused } from '@react-navigation/native';
import { LayoutChangeEvent, TouchableOpacity } from 'react-native';

import { useAuthentication } from 'src/hooks/useAuthentication';
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
import useGenericModal from 'src/hooks/useGenericModal';

export type ChangeLastNameForm = {
  lastName?: string;
};

const LastNameSection: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);
  const { showInfoModal } = useGenericModal();
  const { t } = useTranslation();
  const { lastName } = useAuthentication();
  const isFocused = useIsFocused();
  const { nameValidation } = useFormValidation();
  const [editLastName, setEditLastName] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<ChangeLastNameForm>();

  // When screen is not focused clear the email field
  React.useEffect(() => {
    if (!isFocused) {
      reset({ lastName: lastName });
      clearErrors('lastName');
      setEditLastName(false);
    }
  }, [isFocused, token]);

  const getContainerSize = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  const updateLastName = (lastName: string) => {
    dispatch(closeGenericModalAction());
    /**@TODO add update logic */
    console.log('update last name');
    setEditLastName(false);
  };

  const handleSubmitLastName = async (data: Required<ChangeLastNameForm>) => {
    const modalParams: GenericModalProperties = {
      title: t('profile:modals:change_name_confirmation:title', { option: t('profile:lastName') }),
      primaryLabel: t('profile:modals:change_name_confirmation:primaryLabel'),
      primaryOnPress: () => updateLastName(data.lastName),
      secondaryLabel: t('profile:modals:change_name_confirmation:secondaryLabel'),
      secondaryOnPress: () => dispatch(closeGenericModalAction()),
      color: 'candyRed',
    };
    dispatch(openGenericModalAction(modalParams));
  };

  const handleCancelLastNameEdit = () => {
    reset({ lastName: lastName });
    clearErrors('lastName');
    setEditLastName(false);
  };

  const handleEditLastName = () => {
    setEditLastName(true);
  };

  return (
    <>
      <AccountOptionContainer onLayout={getContainerSize}>
        <AccountOptionTitle color={'secondary'}>{t('profile:lastName')}</AccountOptionTitle>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField
              accessibilityLabel="Last Name Input"
              textType={'regular'}
              selectionColor={'secondary'}
              maxLength={30}
              placeholderTextColor={theme.colors.irisPure}
              value={field.value}
              onChangeText={(text: string) => field.onChange(text)}
              error={errors.lastName?.message}
              editable={editLastName}
              containerWidth={containerWidth}
              defaultValue={lastName}
              rightComponent={
                editLastName ? (
                  <AccountButtonsWrapper>
                    <TouchableOpacity style={{ marginRight: 5 }} onPress={handleCancelLastNameEdit}>
                      <SVG icon={'cancel'} color={'candyRed'} width={20.15} height={20.15} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      accessibilityLabel="Submit last name"
                      onPress={handleSubmit(handleSubmitLastName)}
                    >
                      <SVG icon={'checkmark'} color={'irisDark'} width={20.04} height={20.04} />
                    </TouchableOpacity>
                  </AccountButtonsWrapper>
                ) : (
                  <AccountButtonsWrapper>
                    <Link
                      accessibilityLabel="Edit Last Name"
                      color="metallicDark"
                      icon="edit"
                      onPress={handleEditLastName}
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

export default LastNameSection;
