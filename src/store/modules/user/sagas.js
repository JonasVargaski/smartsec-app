/* eslint-disable camelcase */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import Toast from 'react-native-root-toast';

import api from '~/services/api';

import {
  updateProfileSuccess,
  updateProfileFailure,
  updateAvatarSuccess,
} from './actions';

function* updateProfile({ payload }) {
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

function* updateAvatar({ payload }) {
  try {
    const { name, uri } = payload;
    // eslint-disable-next-line no-undef
    const data = new FormData();

    data.append('file', {
      type: 'image/jpeg',
      name,
      uri,
    });

    const response = yield call(api.post, 'files', data);

    const { id, url } = response.data;

    yield put(updateAvatarSuccess(id, url));
  } catch (err) {
    Toast.show('Erro ao carregar imagem, tente novamente!', {
      position: Toast.positions.TOP,
    });
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_AVATAR_REQUEST', updateAvatar),
]);
