import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { getDevicesRequest } from '~/store/modules/device/actions';

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
  const dispatch = useDispatch();
  const devices = useSelector(state => state.device.devices);
  const loading = useSelector(state => state.device.loading);

  function handleDevice(device = {}) {
    navigation.navigate('EditDevices', { device });
  }

  function refreshList() {
    dispatch(getDevicesRequest());
  }

  return (
    <Background>
      <Container>
        {devices.length ? (
          <ListDevices
            data={devices}
            keyExtractor={item => String(item.id)}
            onRefresh={refreshList}
            refreshing={loading}
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
