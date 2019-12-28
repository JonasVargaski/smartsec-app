import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import {
  Container,
  ListDevices,
  Device,
  Row,
  Name,
  Info,
  AddButton,
} from './styles';

export default function List({ navigation }) {
  const devices = [
    {
      id: 1,
      desc: 'Estufa 01 1f5d1dfs51df51fds5f d15 5df15df s15dfs15d1df5 1df5',
      serial: 'd5s8sdc85vcas18dfsa8',
      data: '28/12/2019',
      status: 'Conectado',
    },
    {
      id: 2,
      desc: 'Estufa 02',
      serial: 'd5s8sdc85vcas18dfsa8',
      data: '28/12/2019',
      status: 'Desconectado',
    },
    {
      id: 3,
      desc: 'Estufa 03',
      serial: 'd5s8sdc85vcas18dfsa8',
      data: '28/12/2019',
      status: 'Conectado',
    },
  ];

  function handleDevice(device = {}) {
    navigation.navigate('EditDevices', { device });
  }

  return (
    <Background>
      <Container>
        <ListDevices
          data={devices}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Device
              onPress={() => {
                handleDevice(item);
              }}
            >
              <Name>{item.desc}</Name>
              <Row>
                <Info>{item.serial}</Info>
                <Info>{item.data}</Info>
              </Row>
            </Device>
          )}
        />
        <AddButton onPress={handleDevice}>
          <Icon name="add" size={35} color="#fff" />
        </AddButton>
      </Container>
    </Background>
  );
}

List.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
