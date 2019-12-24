import React from 'react';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import {
  Container,
  Scroll,
  Title,
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
  const devices = [
    {
      label: 'Estufa 01',
      value: '001',
    },
    {
      label: 'Estufa 02',
      value: '002',
    },
  ];

  return (
    <Background>
      <Container>
        <Scroll>
          <Title>Monitoramento</Title>

          <PickerLabel>Controlador</PickerLabel>
          <Picker
            selectedValue="estufa01"
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) => {}}
            items={devices}
          />

          <Card>
            <Row>
              <IconFa name="thermometer-half" size={68} color="#E53935" />
              <Col>
                <Label>Temperatura</Label>
                <Value>118 °F</Value>
              </Col>
              <Col>
                <Label>Ajuste</Label>
                <Value>121 °F</Value>
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
                <Value>85 %</Value>
              </Col>
              <Col>
                <Label>Ajuste</Label>
                <Value>84 %</Value>
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
                <Value>Ligado</Value>
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
                <Value>Ligado</Value>
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
                <Value>Amarelação</Value>
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
                <Value>Úmido</Value>
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
                <Value>Destravado</Value>
              </Col>
            </Row>
            <Separator />
            <Description>Indicador do Status da Trava de Fase</Description>
          </Card>
        </Scroll>
      </Container>
    </Background>
  );
}

Monitoring.navigationOptions = {
  tabBarLabel: 'Monitoramento',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={22} color={tintColor} />
  ),
};
