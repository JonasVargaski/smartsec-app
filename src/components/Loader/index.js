import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

export default function Loader({ ...rest }) {
  return (
    <Container>
      <ActivityIndicator {...rest} color="#7560ec" />
    </Container>
  );
}
