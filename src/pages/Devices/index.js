import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

export default function Devices() {
  return <Container />;
}

Devices.navigationOptions = {
  tabBarLabel: 'Controladores',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="memory" size={20} color={tintColor} />
  ),
};
