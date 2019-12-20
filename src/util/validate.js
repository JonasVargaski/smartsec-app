import * as Yup from 'yup';
import Toast from 'react-native-root-toast';

export { Yup };

export default function isValid(schema, data) {
  try {
    schema.validateSync(data, { abortEarly: false, stripUnknown: true });

    return true;
  } catch (err) {
    if (!err.inner) {
      throw err;
    }
    const errors = {};

    err.inner.forEach(e => {
      errors[e.path] = e.message;
    });

    const message = Object.values(errors).join('\n\n');

    Toast.show(message, {
      position: Toast.positions.TOP,
      duration: Toast.durations.LONG,
      shadow: true,
      containerStyle: { padding: 14 },
      backgroundColor: '#f00',
    });

    return false;
  }
}
