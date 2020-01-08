import { AppState } from 'react-native';
import { all, take, put, spawn } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { changeAppState } from './actions';

function* monitorAppState() {
  const channel = eventChannel(emitter => {
    AppState.addEventListener('change', emitter);
    return () => AppState.removeEventListener('change', emitter);
  });

  try {
    while (true) {
      const status = yield take(channel);
      yield put(changeAppState(status));
    }
  } finally {
    channel.close();
  }
}

export default all([spawn(monitorAppState)]);
