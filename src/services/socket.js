import io from 'socket.io-client';

let socket = {};

export function connect() {
  return new Promise(resolve => {
    if (socket.connected) {
      resolve(socket);
    } else {
      socket = io('http://192.168.0.102:3333');

      socket.on('connect', () => {
        resolve(socket);
      });
    }
  });
}

export function disconnect() {
  return socket.close && socket.close();
}
