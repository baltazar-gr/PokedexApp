import { useState } from 'react';
import { getData } from '../utils';
import { useFocusEffect } from '@react-navigation/native';
import { User } from '../types';

export function useUser(): { data: User; isLoading: boolean } {
  const [data, setData] = useState<User>({
    name: '',
    birthday: '',
    avatarUri: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(() => {
    const getUser = async () => {
      const userData = await getData('user');
      if (userData) {
        setData(userData);
      }
      setIsLoading(false);
    };
    getUser();
  });

  return { data, isLoading };
}
