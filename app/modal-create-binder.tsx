import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from '~/components/Button';
import InputBox from '~/components/form/InputBox';
import { useTheme } from '~/hooks/useTheme';

type FormData = {
  binderName: string;
};

function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      binderName: '',
    },
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputBox placeholder="Binder Name" onBlur={onBlur} onChange={onChange} value={value} />
        )}
        name="binderName"
      />
      {errors.binderName && <Text>This is required.</Text>}

      <Button style={{ marginTop: 10 }} title="Create Binder" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default function CreateBinder() {
  const [theme] = useTheme();
  return (
    <View style={{ ...styles.container, backgroundColor: theme.backgroundColor }}>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
