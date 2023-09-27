import React, { useState } from 'react';

import { EditProfileForm } from '../organisms';
import { ProfileStackParamList } from '../../navigators/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { User } from '../../types';
import { storeData } from '../../utils';
import { Alert } from 'react-native';

type EditProfileProps = NativeStackScreenProps<
  ProfileStackParamList,
  'EditProfile'
>;

export function EditProfile({ navigation, route }: EditProfileProps) {
  const { user } = route.params;
  const [isLoading, setIsLoading] = useState(false);

  const saveUserData = async (newUserData: User) => {
    setIsLoading(true);
    await storeData('user', newUserData);
    Alert.alert('Información actualizada con exito');
    navigation.goBack();
  };

  return (
    <EditProfileForm
      defaultValues={user}
      onSubmit={saveUserData}
      isLoading={isLoading}
    />
  );
}
