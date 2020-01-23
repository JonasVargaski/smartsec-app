import { all, take, takeLatest, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import socket from '~/services/socket';
import { store } from '~/store';

import { setSelectedDeviceSuccess, setDeviceData } from './actions';

function* changeDeviceSelected({ payload }) {
  const { serial } = payload;
  if (typeof serial === 'string' && serial.length) {
    socket.publish('monitoring:changedevice', { device: { serial } });
    yield put(setSelectedDeviceSuccess(serial));
  }
}

function* refreshDeviceData({ payload }) {
  const { status } = payload;
  if (status === 'active') {
    const { device } = store.getState().monitoring;
    yield call(changeDeviceSelected, { payload: { serial: device } });
  }
}

function* subscribe() {
  const channel = eventChannel(emitter => {
    socket.subscribe('monitoring:data', data => {
      emitter(setDeviceData(data));
    });

    return () => {
      socket.unsubscribe('monitoring:data', () => {});
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

export default all([
  takeLatest('@monitoring/SET_SELECTED_DEVICE_REQUEST', changeDeviceSelected),
  takeLatest('@auth/SIGNED', subscribe),
  takeLatest('@application/CHANGE_APP_STATE', refreshDeviceData),
]);
