import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  device: null,
  data: {},
};

export default function device(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@monitoring/SET_SELECTED_DEVICE_SUCCESS': {
        draft.device = action.payload.serial;
        draft.loading = false;
        break;
      }
      case '@monitoring/SET_SELECTED_DEVICE_REQUEST': {
        draft.data = {};
        draft.loading = true;
        break;
      }
      case '@monitoring/SET_DEVICE_DATA': {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case '@auth/SIGNED': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft = INITIAL_STATE;
        break;
      }
      default:
    }
  });
}
