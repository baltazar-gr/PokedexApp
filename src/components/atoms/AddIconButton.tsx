import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PokemonsStackParamList } from '../../navigators/types';

interface AddIconButtonProps {
  tintColor?: string;
}

export function AddIconButton({ tintColor }: AddIconButtonProps) {
  const navigation =
    useNavigation<NavigationProp<PokemonsStackParamList, 'Pokedex'>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('AddPokemon')}>
      <MaterialCommunityIcons name={'plus'} size={20} color={tintColor} />
    </TouchableOpacity>
  );
}
