import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Card } from '../atoms';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

interface ImagePickerModaProps {
  visible?: boolean | undefined;
  onRequestClose: () => void;
  onImageLibrarPress: () => void;
  onCameraPress: () => void;
}

export function ImagePickerModal({
  visible,
  onRequestClose,
  onImageLibrarPress,
  onCameraPress,
}: ImagePickerModaProps) {
  const insets = useSafeAreaInsets();

  const handleCameraPress = () => {
    onRequestClose();
    onCameraPress();
  };

  const handleImageLibrarPress = () => {
    onRequestClose();
    onImageLibrarPress();
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      animationType="slide"
      transparent={true}>
      <View style={styles.container}>
        <SafeAreaView>
          <Card style={{ marginBottom: insets.bottom }}>
            <MaterialCommunityIcons.Button
              name={'camera'}
              size={32}
              color={'white'}
              backgroundColor={'rgb(0, 122, 255)'}
              onPress={handleCameraPress}>
              Tomar fotografía
            </MaterialCommunityIcons.Button>
            <View style={styles.separator} />
            <MaterialCommunityIcons.Button
              name={'camera-burst'}
              size={32}
              color={'white'}
              backgroundColor={'rgb(0, 122, 255)'}
              onPress={handleImageLibrarPress}>
              Escoger imagen de la galería
            </MaterialCommunityIcons.Button>
            <View style={styles.separator} />
            <MaterialCommunityIcons.Button
              name={'close'}
              size={32}
              color={'white'}
              backgroundColor={'rgb(0, 122, 255)'}
              onPress={onRequestClose}>
              Cancelar
            </MaterialCommunityIcons.Button>
          </Card>
        </SafeAreaView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(10,10,10, 0.2)',
    justifyContent: 'flex-end',
  },
  separator: { height: 16 },
});
