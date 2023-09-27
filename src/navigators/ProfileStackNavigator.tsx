import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditProfile, Profile } from '../components/pages';
import { ProfileStackParamList } from './types';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

export function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Perfil' }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: 'Editar Perfil' }}
      />
    </ProfileStack.Navigator>
  );
}
