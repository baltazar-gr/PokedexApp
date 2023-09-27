import {
  Image,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  View,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export interface AvatarProps {
  source?: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

export function Avatar({ source, style }: AvatarProps) {
  return (
    <View style={[styles.lightgrayContainer, styles.avatar, style]}>
      {source ? (
        <Image style={[styles.avatar]} source={source} />
      ) : (
        <MaterialCommunityIcons name={'account'} size={80} color={'black'} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 60,
  },
  lightgrayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
});
