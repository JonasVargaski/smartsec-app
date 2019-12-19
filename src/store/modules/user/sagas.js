/* eslint-disable camelcase */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import Toast from 'react-native-root-toast';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));
    Toast.show('Perfil atualizado com sucesso!', {
      position: Toast.positions.TOP,
    });
  } catch (err) {
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
