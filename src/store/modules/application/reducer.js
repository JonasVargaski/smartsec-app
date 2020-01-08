import produce from 'immer';

const INITIAL_STATE = {
  appState: 'active',
};

export default function device(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@application/CHANGE_APP_STATE': {
        draft.appState = action.payload.status;
        break;
      }
      default:
    }
  });
}
