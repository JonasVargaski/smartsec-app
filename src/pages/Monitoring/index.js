import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { setSelectedDeviceRequest } from '~/store/modules/monitoring/actions';
import Background from '~/components/Background';

import {
  Container,
  Scroll,
  Message,
  PickerLabel,
  Picker,
  Card,
  Row,
  Col,
  Label,
  Value,
  Separator,
  Description,
} from './styles';

export default function Monitoring() {
  const dispatch = useDispatch();
  const devices = useSelector(state => state.device.devices);
  const selectedDevice = useSelector(state => state.monitoring.device?.serial);
  const data = useSelector(state => state.monitoring.deviceData);

  function handleDevice(serial) {
    dispatch(setSelectedDeviceRequest(serial));
  }

  return (
    <Background>
      <Container>
        <Scroll>
          <PickerLabel>Controlador</PickerLabel>
          <Picker
            items={devices}
            selectedValue={selectedDevice}
            onValueChange={handleDevice}
            mode="dropdown"
            itemText="description"
            itemValue="serial"
          />

          {selectedDevice ? (
            <Message>
              Por favor selecione um controlador para monitorá-lo...
            </Message>
          ) : (
            <>
              <Card>
                <Row>
                  <IconFa name="thermometer-half" size={68} color="#E53935" />
                  <Col>
                    <Label>Temperatura</Label>
                    <Value>{data.temp} °F</Value>
                  </Col>
                  <Col>
                    <Label>Ajuste</Label>
                    <Value>{data.tempAdj} °F</Value>
                  </Col>
                </Row>
                <Separator />
                <Description>Indicador de Temperatura</Description>
              </Card>

              <Card>
                <Row>
                  <IconFa name="cloud-sun" size={52} color="#9fdff7" />
                  <Col>
                    <Label>Umidade</Label>
                    <Value>
                      {data.umid} {data.sensorType}
                    </Value>
                  </Col>
                  <Col>
                    <Label>Ajuste</Label>
                    <Value>
                      {data.umidAdj} {data.sensorType}
                    </Value>
                  </Col>
                </Row>
                <Separator />
                <Description>Indicador de Umidade</Description>
              </Card>

              <Card>
                <Row>
                  <IconFa name="volume-up" size={50} color="#ff9537" />
                  <Col>
                    <Label>Alarme</Label>
                    <Value>{data.alarm}</Value>
                  </Col>
                </Row>
                <Separator />
                <Description>Indicador do Status de Alarme</Description>
              </Card>

              <Card>
                <Row>
                  <IconFa name="wind" size={50} color="#f8b900" />
                  <Col>
                    <Label>Ventoinha</Label>
                    <Value>{data.fan}</Value>
                  </Col>
                </Row>
                <Separator />
                <Description>Indicador do Status da Ventoinha</Description>
              </Card>

              <Card>
                <Row>
                  <IconFa name="clock" size={50} color="#8980c0" />
                  <Col>
                    <Label>Fase</Label>
                    <Value>{data.phase}</Value>
                  </Col>
                </Row>
                <Separator />
                <Description>Indicador de Fase</Description>
              </Card>

              <Card>
                <Row>
                  <IconFa name="cloud" size={50} color="#2596eb" />
                  <Col>
                    <Label>Clima</Label>
                    <Value>{data.climate}</Value>
                  </Col>
                </Row>
                <Separator />
                <Description>Indicador de Clima</Description>
              </Card>

              <Card>
                <Row>
                  <IconFa name="unlock-alt" size={50} color="#589167" />
                  <Col>
                    <Label>Trava de fase</Label>
                    <Value>{data.lock}</Value>
                  </Col>
                </Row>
                <Separator />
                <Description>Indicador do Status da Trava de Fase</Description>
              </Card>
            </>
          )}
        </Scroll>
      </Container>
    </Background>
  );
}

Monitoring.navigationOptions = {
  tabBarLabel: 'Monitoramento',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="dashboard" size={22} color={tintColor} />
  ),
};
