import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { getDevicesRequest } from '~/store/modules/device/actions';

import Background from '~/components/Background';

import {
  Container,
  ListDevices,
  Device,
  Column,
  Avatar,
  Name,
  Serial,
  Date,
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
                <Avatar>
                  <Icon name="important-devices" size={28} color="#fff" />
                </Avatar>

                <Column>
                  <Name>{item.description}</Name>
                  <Serial>{item.serial}</Serial>
                  <Date>{item.date}</Date>
                </Column>
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
