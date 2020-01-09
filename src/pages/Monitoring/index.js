import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { addSeconds, isPast, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Background from '~/components/Background';
import DevicePicker from '~/components/DevicePicker';

import {
  Container,
  Loader,
  Scroll,
  Message,
  Card,
  Row,
  Col,
  Label,
  Value,
  Separator,
  Description,
  Time,
} from './styles';

export default function Monitoring() {
  const { device, loading, data } = useSelector(state => state.monitoring);
  const appState = useSelector(state => state.application.appState);

  const dateFormatted = useMemo(() => {
    if (data.date) {
      return formatDistance(data.date, new Date(), {
        addSuffix: true,
        locale: pt,
      });
    }
    return '';
  }, [data.date, appState]);

  function isConnected(date) {
    return !isPast(addSeconds(date, 60));
  }

  return (
    <Background>
      <Container>
        {loading && <Loader />}

        <Scroll>
          <DevicePicker />
          {!device ? (
            <Message>
              Por favor selecione um controlador para monitorá-lo...
            </Message>
          ) : (
            <>
              {data.date && (
                <Description>
                  Ultima Conexão:
                  <Time connected={isConnected(data.date)}>
                    {' '}
                    {dateFormatted}
                  </Time>
                </Description>
              )}

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
