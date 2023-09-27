import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Avatar, Button, Card } from '../atoms';
import { User } from '../../types';

interface ProfileContenProps {
  isLoading: boolean;
  user: User;
  onEditProfilePress: () => void;
}

export function ProfileContent({
  isLoading,
  user,
  onEditProfilePress,
}: ProfileContenProps) {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Card style={styles.card}>
          <Avatar
            source={user.avatarUri ? { uri: user.avatarUri } : undefined}
            style={styles.marginBottom}
          />
          <Text style={styles.marginBottom}>Nombre: {user?.name}</Text>
          <Text>Fecha de nacimiento: {user?.birthday}</Text>
        </Card>
      )}
      <Button title="Editar Perfil" onPress={onEditProfilePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: { alignItems: 'center', marginBottom: 16 },
  marginBottom: {
    marginBottom: 8,
  },
});
