import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { removeDevice } from '~/store/modules/device/actions';
import api from '~/services/api';

import Background from '~/components/Background';
import {
  Container,
  Header,
  Actions,
  ActionButton,
  Title,
  Serial,
} from './styles';

export default function Edit({ navigation }) {
  const { description, id, serial } = navigation.getParam('device');

  const dispatch = useDispatch();
  const [device, setDevice] = useState({});

  useEffect(() => {
    async function loadDevice() {
      const { data } = await api.get(`device`, {
        params: {
          serial,
        },
      });

      setDevice(data);
    }
    loadDevice();
  }, []);

  async function handleDelete() {
    await api.put(`devices/associate/${id}`, {
      situation: 'inactive',
    });

    dispatch(removeDevice(id));
    navigation.goBack();
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#604fc2" />
      <Container>
        <Header>
          <Actions>
            <ActionButton onPress={() => {}}>
              <Icon name="mode-edit" size={27} color="#fff" />
            </ActionButton>

            <ActionButton onPress={handleDelete}>
              <Icon name="delete" size={27} color="#fff" />
            </ActionButton>
          </Actions>

          <Title>{description}</Title>
          <Serial>{device.serial}</Serial>
        </Header>
        <Serial>{JSON.stringify(device)}</Serial>
      </Container>
    </Background>
  );
}

Edit.navigationOptions = ({ navigation }) => ({
  title: 'Visualização',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={28} color="#fff" />
    </TouchableOpacity>
  ),
});
