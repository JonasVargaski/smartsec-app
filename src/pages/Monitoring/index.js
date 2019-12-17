import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

export default function Monitoring() {
  return <Container />;
}

Monitoring.navigationOptions = {
  tabBarLabel: 'Monitoramento',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
