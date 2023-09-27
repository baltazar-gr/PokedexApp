import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, AvatarProps } from '../atoms';
import { ImagePickerModal } from '../molecules/ImagePickerModal';

interface EditableAvatarProps extends AvatarProps {
  onImageLibrarPress: () => void;
  onCameraPress: () => void;
}

export function EditableAvatar({
  source,
  style,
  onImageLibrarPress,
  onCameraPress,
}: EditableAvatarProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity onPress={showModal}>
        <Avatar source={source} style={style} />
      </TouchableOpacity>
      <ImagePickerModal
        visible={modalVisible}
        onRequestClose={hideModal}
        onImageLibrarPress={onImageLibrarPress}
        onCameraPress={onCameraPress}
      />
    </>
  );
}
