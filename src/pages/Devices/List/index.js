import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import { Container } from './styles';

export default function List() {
  return (
    <Background>
      <Container />
    </Background>
  );
}

List.navigationOptions = ({ navigation }) => ({
  title: 'Controladores',
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
