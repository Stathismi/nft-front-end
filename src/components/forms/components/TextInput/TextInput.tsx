import * as React from 'react';
import { View, TextInput, Text, TextStyle, TextInputProps } from 'react-native';
import { FieldError } from 'react-hook-form';

interface Props extends TextInputProps {
  label?: string;
  labelStyle?: TextStyle;
  error?: FieldError | undefined;
}

const CustomTextInput: React.FC<Props> = (props) => {
  const { label, labelStyle, error, ...inputProps } = props;

  return (
    <View>
      {label && <Text style={{ color: 'black' }}>{label}</Text>}
      <TextInput autoCapitalize="none" {...inputProps} />
      <Text>{error && error.message}</Text>
    </View>
  );
};

export default CustomTextInput;
