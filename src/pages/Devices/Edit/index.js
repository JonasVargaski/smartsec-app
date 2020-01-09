import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { removeDevice } from '~/store/modules/device/actions';
import api from '~/services/api';

import Background from '~/components/Background';
import ConfigItem from '~/components/ConfigItem';
import Loader from '~/components/Loader';

import {
  Container,
  Header,
  Actions,
  ActionButton,
  Description,
  Serial,
  Firmware,
  Title,
  Content,
} from './styles';

export default function Edit({ navigation }) {
  const { description, id, serial } = navigation.getParam('device');

  const dispatch = useDispatch();
  const [device, setDevice] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDevice() {
      try {
        setLoading(true);
        const { data } = await api.get(`device`, {
          params: {
            serial,
          },
        });

        setDevice({
          ...data,
          sensorType:
            data.sensorType === '%' ? 'Relativo (UR %)' : 'Bulbo úmido (BU)',
          timeFlapOn: `${data.timeFlapOn * 100} (ms)`,
        });

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
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

          <Description>{description}</Description>
          <Serial>{device.serial}</Serial>

          <Firmware>{`Firmware: ${device.firmwareVersion || '...'}`}</Firmware>
        </Header>

        <Title>Configuração do dispositivo</Title>
        {loading ? (
          <Loader size="large" label="Carregando..." />
        ) : (
          <Content>
            <ConfigItem label="Modo de trabalho" value={device.workMode} />

            <ConfigItem
              label="(P2) Tipo de sensor umidade"
              value={device.sensorType}
            />
            <ConfigItem
              label="(P3) Histerese do abafador"
              value={`${device.histereseDamper}°`}
            />
            <ConfigItem
              label="(P4) Histerese do flap"
              value={`${device.histereseFlap}°`}
            />
            <ConfigItem
              label="(P5) Histerese da ventoinha"
              value={`${device.histereseFan}°`}
            />
            <ConfigItem
              label="(P6) Histerese do modo de segurança"
              value={`${device.histereSafetyMode}°`}
            />
            <ConfigItem
              label="(P7) Histerese do alarme"
              value={`${device.histereAlarm}°`}
            />
            <ConfigItem
              label="(P8) Tempo de estágio flap ativo"
              value={device.timeFlapOn}
            />
            <ConfigItem
              label="(P9) Tempo de estágio flap inativo"
              value={`${device.timeFlapOff} (s)`}
            />
            <ConfigItem
              label="(P10) Tempo de religamento alarme"
              value={`${device.timeAlarmRewire} (m)`}
            />
            <ConfigItem
              label="(P11) Tempo de modo automático"
              value={`${device.timeAutoTemp} (m)`}
            />
            <ConfigItem
              label="(P12) Habilita ajuste remoto"
              value={`${device.acceptWifiParams === 1 ? 'SIM' : 'NÃO'}`}
            />
            <ConfigItem
              label="(P14) Histerese modo automático"
              value={`${device.timeAutoTemp}°`}
            />

            <ConfigItem
              label="(P15) Tempo de religamento ventoinha"
              value={`${device.timeAutoFanRewire} (m)`}
            />
          </Content>
        )}
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
