import { takeLatest, call, put, all, take, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { Alert } from 'react-native';
import Toast from 'react-native-root-toast';

import {
  signInSuccess,
  signFailure,
  signUpSuccess,
  signed,
  signOut,
} from './actions';

import api from '~/services/api';
import { connect, disconnect } from '~/services/socket';
import NavigationService from '~/services/navigation';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { session, token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    api.defaults.headers.Session = session;

    yield put(signInSuccess(session, token, user));
    yield put(signed());
  } catch (err) {
    if (err.data.code === 'AUTH001') {
      Alert.alert(
        'Confirmação de e-mail, quase lá...',
        'Por favor, acesse sua Caixa de Entrada e confirme sua conta.'
      );
    } else {
      Toast.show('Falha na autenticação, Verifique seus dados', {
        position: Toast.positions.TOP,
      });
    }
    yield put(signFailure());
  }
}
function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    yield put(signUpSuccess());

    Alert.alert(
      'Conta criada com sucesso!',
      'Acesse sua Caixa de Entrada para confimar sua e-mail.'
    );

    NavigationService.navigate('SignIn');
  } catch (err) {
    Toast.show('Falha no cadastro, verifique seus dados', {
      position: Toast.positions.TOP,
    });
    yield put(signFailure());
  }
}

function* restore({ payload }) {
  if (payload?.auth?.token) {
    api.defaults.headers.Authorization = `Bearer ${payload.auth.token}`;
  }
  if (payload?.auth?.session) {
    api.defaults.headers.Session = payload.auth.session;
  }
  if (payload?.auth?.signed) {
    yield put(signed());
  }
}

function* subscribe(socket) {
  const channel = eventChannel(emitter => {
    socket.on('auth:signout', () => {
      emitter(signOut());
      disconnect();
    });

    return () => {
      socket.off('auth:signout');
    };
  });

  try {
    while (true) {
      const action = yield take(channel);
      yield put(action);
    }
  } finally {
    channel.close();
  }
}

function* listen() {
  const socket = yield call(connect);
  yield fork(subscribe, socket);
}

function unsubscribe() {
  disconnect();
}

export default all([
  takeLatest('persist/REHYDRATE', restore),
  takeLatest('@auth/SIGN_OUT', unsubscribe),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGNED', listen),
]);
