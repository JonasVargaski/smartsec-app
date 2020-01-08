import { all, take, takeLatest, call, put, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { connect } from '~/services/socket';
import { store } from '~/store';

import { setSelectedDeviceSuccess, setDeviceData } from './actions';

function* handleDeviceSelected({ payload }) {
  const { serial } = payload;
  if (typeof serial === 'string' && serial.length) {
    const socket = yield call(connect);
    socket.emit('monitoring', { action: 'change:device', serial });
  }
}

function* refreshDeviceData({ payload }) {
  const { status } = payload;
  if (status === 'active') {
    const { device } = store.getState().monitoring;
    yield call(handleDeviceSelected, { payload: { serial: device } });
  }
}

function* subscribe(socket) {
  const channel = eventChannel(emitter => {
    socket.on('monitoring:data', data => {
      emitter(setDeviceData(data));
    });

    socket.on('monitoring:changedevice', serial => {
      emitter(setSelectedDeviceSuccess(serial));
    });

    return () => {
      socket.off('monitoring:data');
      socket.off('monitoring:changedevice');
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
  takeLatest('@application/CHANGE_APP_STATE', refreshDeviceData),
]);
