import React from 'react';
import { ProfileStackParamList } from '../../navigators/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useUser } from '../../hooks/useUser';
import { ProfileContent } from '../templates';

type ProfileProps = NativeStackScreenProps<ProfileStackParamList, 'Profile'>;

export function Profile({ navigation }: ProfileProps) {
  const { data, isLoading } = useUser();
  const goToEditProfile = () => {
    navigation.push('EditProfile', { user: data });
  };

  return (
    <ProfileContent
      isLoading={isLoading}
      user={data}
      onEditProfilePress={goToEditProfile}
    />
  );
}
