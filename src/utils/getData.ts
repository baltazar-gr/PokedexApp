import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key: string) => {
  const value = await AsyncStorage.getItem(key);
  return value != null ? JSON.parse(value) : null;
};
