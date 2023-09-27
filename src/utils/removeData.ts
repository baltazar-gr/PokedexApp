import AsyncStorage from '@react-native-async-storage/async-storage';

export async function removeData(key: string) {
  return await AsyncStorage.removeItem(key);
}
