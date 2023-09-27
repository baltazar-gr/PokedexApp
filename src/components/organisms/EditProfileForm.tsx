import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Button, TextInput } from '../atoms';
import { User } from '../../types';
import { EditableAvatar } from './EditableAvatar';

interface EditProfileFormProps {
  defaultValues: User;
  onSubmit: (newUser: User) => void;
  isLoading: boolean;
}

export function EditProfileForm({
  defaultValues,
  onSubmit,
  isLoading,
}: EditProfileFormProps) {
  const [name, setName] = useState(defaultValues.name);
  const [birthday, setBirthdate] = useState(defaultValues.birthday);
  const [avatarUri, setAvatarUri] = useState(defaultValues.avatarUri);

  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5,
    });

    if (!result.didCancel) {
      const uri = result.assets?.[0].uri;
      if (uri) {
        setAvatarUri(uri);
      }
    }
  };

  const takePhoto = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.5,
    });

    if (!result.didCancel) {
      const uri = result.assets?.[0].uri;
      if (uri) {
        setAvatarUri(uri);
      }
    }
  };

  const handleOnSubmit = () => {
    if (
      defaultValues.name !== name ||
      defaultValues.birthday !== birthday ||
      defaultValues.avatarUri !== avatarUri
    ) {
      onSubmit({
        name,
        birthday,
        avatarUri,
      });
    } else {
      Alert.alert('No se han decteado cambios');
    }
  };

  return (
    <View style={styles.container}>
      <EditableAvatar
        style={styles.avatar}
        source={avatarUri ? { uri: avatarUri } : undefined}
        onImageLibrarPress={pickImage}
        onCameraPress={takePhoto}
      />
      <TextInput
        placeholder="Nombre completo"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        onChangeText={setBirthdate}
        value={birthday}
        placeholder="Fecha de nacimiento"
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Guadar" onPress={handleOnSubmit} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 8,
  },
});
