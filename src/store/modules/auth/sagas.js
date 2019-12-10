import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import NavigationService from '~/services/navigation';

import { signInSuccess, signFailure } from './actions';
import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { data } = payload;

    const response = yield call(api.post, 'sessions', data);

    const student = response.data;

    NavigationService.navigate('App');

    yield put(signInSuccess(student));
  } catch (err) {
    Alert.alert('Falha na autenticação', err.response.data.error);

    yield put(signFailure());
  }
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
