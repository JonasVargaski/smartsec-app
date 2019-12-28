import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import { Container } from './styles';

export default function Edit({ navigation }) {
  const device = navigation.getParam('device');
  console.tron.log(device);

  return (
    <Background>
      <Container />
    </Background>
  );
}

Edit.navigationOptions = ({ navigation }) => ({
  title: 'Visualizar Controlador',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});
