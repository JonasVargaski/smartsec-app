import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import Background from '~/components/Background';
import {
  Container,
  ListDevices,
  Device,
  Row,
  Name,
  Info,
  Center,
  Message,
  AddButton,
} from './styles';

export default function List({ navigation }) {
  const devices = useSelector(state => state.device.devices);

  function handleDevice(device = {}) {
    navigation.navigate('EditDevices', { device });
  }

  return (
    <Background>
      <Container>
        {devices.length ? (
          <ListDevices
            data={devices}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Device
                onPress={() => {
                  handleDevice(item);
                }}
              >
                <Name>{item.description}</Name>
                <Row>
                  <Info>ns: {item.serial}</Info>
                  <Info>{item.date}</Info>
                </Row>
              </Device>
            )}
          />
        ) : (
          <Center>
            <Message>Adicione novos Controladores para monitorá-los...</Message>
          </Center>
        )}
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
