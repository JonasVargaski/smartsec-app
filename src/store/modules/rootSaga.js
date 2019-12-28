import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import device from './device/sagas';
import monitoring from './monitoring/sagas';

export default function* rootSaga() {
  return yield all([auth, user, device, monitoring]);
}
