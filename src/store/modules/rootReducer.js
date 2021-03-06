import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import device from './device/reducer';
import monitoring from './monitoring/reducer';
import application from './application/reducer';

export default combineReducers({ auth, user, device, monitoring, application });
