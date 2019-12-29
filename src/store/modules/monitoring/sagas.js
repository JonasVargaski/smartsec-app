import { all, take, takeLatest, call, put, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { connect } from '~/services/socket';

import { setSelectedDeviceSuccess, setDeviceData } from './actions';

function* handleDeviceSelected({ payload }) {
  const { serial } = payload;
  const socket = yield call(connect);

  socket.emit('monitoring', { action: 'selectedDevice', serial });
}

function* subscribe(socket) {
  const channel = eventChannel(emitter => {
    socket.on('monitoring:device.data', data => {
      emitter(setDeviceData(data));
    });

    socket.on('monitoring:changeDevice', ({ serial }) => {
      emitter(setSelectedDeviceSuccess(serial));
    });

    return () => {
      socket.off('monitoring:device.data');
      socket.off('monitoring:changeDevice');
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

export default all([
  takeLatest('@monitoring/SET_SELECTED_DEVICE_REQUEST', handleDeviceSelected),
  takeLatest('@auth/SIGNED', listen),
]);
