import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Loader({ style, ...rest }) {
  return (
    <Container style={style}>
      <ActivityIndicator {...rest} color="#7560ec" />
    </Container>
  );
}

Loader.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Loader.defaultProps = {
  style: {},
};
