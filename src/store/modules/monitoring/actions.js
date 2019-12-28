export function setSelectedDeviceRequest(serial) {
  return {
    type: '@monitoring/SET_SELECTED_DEVICE_REQUEST',
    payload: { serial },
  };
}

export function setSelectedDeviceSuccess(serial) {
  return {
    type: '@monitoring/SET_SELECTED_DEVICE_SUCCESS',
    payload: { serial },
  };
}

export function setDeviceData(data) {
  return {
    type: '@monitoring/SET_DEVICE_DATA',
    payload: { data },
  };
}
