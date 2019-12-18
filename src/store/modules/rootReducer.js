import { combineReducers } from 'redux';

import auth from './auth/reducer';
import profile from './profile/reducer';

export default combineReducers({ auth, profile });
