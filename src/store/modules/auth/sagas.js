import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import NavigationService from '~/services/navigation';

import { signInSuccess, signFailure } from './actions';
import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    NavigationService.navigate('App');
  } catch (err) {
    Alert.alert('Falha na autenticação', err.response.data.error);

    yield put(signFailure());
  }
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
