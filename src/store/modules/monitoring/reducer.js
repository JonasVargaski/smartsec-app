import produce from 'immer';

const INITIAL_STATE = {
  device: null,
  deviceData: {},
};

export default function device(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@monitoring/SET_SELECTED_DEVICE_SUCCESS': {
        draft.device = action.payload.serial;
        break;
      }
      case '@monitoring/SET_DEVICE_DATA': {
        draft.deviceData = action.payload.data;
        break;
      }
      case '@device/GET_DEVICES_SUCCESS': {
        if (!draft.device) {
          draft.device = action.payload.devices[0]?.serial;
        }
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.device = null;
        draft.deviceData = {};
        break;
      }
      default:
    }
  });
}
