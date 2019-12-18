import axios from 'axios';
import { store } from '~/store';
import { signOut } from '~/store/modules/auth/actions';

const api = axios.create({
  baseURL: 'http://192.168.0.101:3333',
});

api.interceptors.response.use(
  response => response,
  error => {
    const err = {
      message: error.message,
      status: null,
      statusText: '',
      url: '',
      data: {},
    };

    if (error.response) {
      err.status = error.response.status;
      err.statusText = error.response.statusText;
      err.url = error.response.config.url;
      err.data = error.response.data;
      err.axios = error.toJSON();
    }

    if (err.data.error === 'Invalid token') {
      store.dispatch(signOut());
    }

    return Promise.reject(err);
  }
);

export default api;
