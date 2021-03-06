import { all, takeLatest, call, put } from 'redux-saga/effects';
import { parseISO, format } from 'date-fns';
import Toast from 'react-native-root-toast';
import api from '~/services/api';

import {
  addDeviceSuccess,
  getDevicesSuccess,
  getDevicesFailure,
  updateDeviceSuccess,
} from './actions';

function* updateDevice({ id, description }) {
  try {
    const { data } = yield call(api.put, `devices/associate/${id}`, {
      description,
    });

    const deviceStore = {
      id: data.device.id,
      description: data.description,
      serial: data.device.serial,
      date: format(parseISO(data.updatedAt), 'dd/MM/yyyy'),
    };

    yield put(updateDeviceSuccess(deviceStore));
  } catch (err) {
    Toast.show('Erro ao atualizar controlador.', {
      position: Toast.positions.TOP,
    });
  }
}

function* getDevices() {
  try {
    const response = yield call(api.get, 'devices/associate');

    const devices = response.data.map(device => ({
      id: device.id,
      description: device.description,
      serial: device.device.serial,
      date: format(parseISO(device.updatedAt), "HH:mm '|' dd/MM/yyyy"),
    }));

    yield put(getDevicesSuccess(devices));
  } catch (err) {
    yield put(getDevicesFailure());

    Toast.show(`Erro ao buscar controladores.`, {
      position: Toast.positions.TOP,
    });
  }
}

function* addDevice({ payload }) {
  try {
    const { data } = payload;

    const response = yield call(api.post, 'devices/associate', data);

    const { device, description, updatedAt } = response.data;

    const deviceStore = {
      id: device.id,
      serial: device.serial,
      description,
      date: format(parseISO(updatedAt), "HH:mm '|' dd/MM/yyyy"),
    };

    yield put(addDeviceSuccess(deviceStore));
  } catch (err) {
    Toast.show(
      'Erro ao cadastrar controlador, verifique os dados e tente novamente.',
      {
        position: Toast.positions.TOP,
      }
    );
  }
}

export default all([
  takeLatest('@device/ADD_DEVICE_REQUEST', addDevice),
  takeLatest('@device/UPDATE_DEVICE_REQUEST', updateDevice),
  takeLatest(['@auth/SIGNED', '@device/GET_DEVICES_REQUEST'], getDevices),
]);
