import io from 'socket.io-client';
import { store } from '~/store';

let socket = {};

export function connect() {
  const { token } = store.getState().auth;

  return new Promise(resolve => {
    if (socket.connected) {
      resolve(socket);
    } else {
      socket = io('http://192.168.0.102:3333', {
        autoConnect: false,
        query: { token },
      });

      socket.connect();

      socket.on('connect', () => {
        resolve(socket);
      });
    }
  });
}

export function disconnect() {
  return socket.disconnect();
}
