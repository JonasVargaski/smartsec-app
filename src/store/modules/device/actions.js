export function getDevicesRequest(data) {
  return {
    type: '@device/GET_DEVICES_REQUEST',
    payload: { data },
  };
}

export function getDevicesSuccess(devices) {
  return {
    type: '@device/GET_DEVICES_SUCCESS',
    payload: { devices },
  };
}

export function getDevicesFailure() {
  return {
    type: '@device/GET_DEVICES_FAILURE',
  };
}

export function addDeviceRequest(data) {
  return {
    type: '@device/ADD_DEVICE_REQUEST',
    payload: data,
  };
}

export function addDeviceSuccess(device) {
  return {
    type: '@device/ADD_DEVICE_SUCCESS',
    payload: { device },
  };
}

export function updateDeviceRequest(data) {
  return {
    type: '@device/UPDATE_DEVICE_REQUEST',
    payload: data,
  };
}

export function updateDeviceSuccess(device) {
  return {
    type: '@device/UPDATE_DEVICE_SUCCESS',
    payload: { device },
  };
}

export function removeDevice(id) {
  return {
    type: '@device/REMOVE_DEVICE',
    payload: { id },
  };
}
