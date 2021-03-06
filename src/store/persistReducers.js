import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'smartsec',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'monitoring', 'device'],
    },
    reducers
  );

  return persistedReducer;
};
